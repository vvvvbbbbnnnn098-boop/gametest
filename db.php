<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type');

$dbFile = 'characters.json';

// Получить всех персонажей
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (file_exists($dbFile)) {
        $data = file_get_contents($dbFile);
        echo $data;
    } else {
        echo json_encode(['characters' => []]);
    }
}

// Сохранить персонажа
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    
    if (isset($input['action']) && $input['action'] === 'save') {
        $character = $input['character'];
        
        // Загружаем существующих персонажей
        $characters = [];
        if (file_exists($dbFile)) {
            $characters = json_decode(file_get_contents($dbFile), true);
            if (!isset($characters['characters'])) {
                $characters = ['characters' => []];
            }
        } else {
            $characters = ['characters' => []];
        }
        
        // Генерируем ID если его нет
        if (!isset($character['id'])) {
            $character['id'] = 'char_' . time() . '_' . rand(1000, 9999);
        }
        
        // Проверяем, существует ли уже такой персонаж
        $found = false;
        foreach ($characters['characters'] as &$existingChar) {
            if ($existingChar['id'] === $character['id']) {
                $existingChar = $character;
                $found = true;
                break;
            }
        }
        
        if (!$found) {
            $characters['characters'][] = $character;
        }
        
        // Сохраняем обратно в файл
        file_put_contents($dbFile, json_encode($characters, JSON_PRETTY_PRINT));
        
        echo json_encode(['success' => true, 'id' => $character['id']]);
    }
    
    // Получить персонажа по ID
    if (isset($input['action']) && $input['action'] === 'get') {
        $characterId = $input['characterId'];
        
        if (file_exists($dbFile)) {
            $characters = json_decode(file_get_contents($dbFile), true);
            if (isset($characters['characters'])) {
                foreach ($characters['characters'] as $char) {
                    if ($char['id'] === $characterId) {
                        echo json_encode($char);
                        exit;
                    }
                }
            }
        }
        echo json_encode(null);
    }
    
    // Обновить статистику персонажа
    if (isset($input['action']) && $input['action'] === 'updateStats') {
        $characterId = $input['characterId'];
        $stats = $input['stats'];
        
        if (file_exists($dbFile)) {
            $data = json_decode(file_get_contents($dbFile), true);
            if (isset($data['characters'])) {
                foreach ($data['characters'] as &$char) {
                    if ($char['id'] === $characterId) {
                        // Сохраняем статистику в отдельном ключе
                        if (!isset($char['stats'])) {
                            $char['stats'] = [];
                        }
                        $char['stats'] = $stats;
                        break;
                    }
                }
                file_put_contents($dbFile, json_encode($data, JSON_PRETTY_PRINT));
                echo json_encode(['success' => true]);
                exit;
            }
        }
        echo json_encode(['success' => false]);
    }
}
?>
