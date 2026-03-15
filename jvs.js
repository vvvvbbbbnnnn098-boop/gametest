<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Игровой мир - Главная</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%);
            color: white;
            font-family: 'Arial', sans-serif;
            min-height: 100vh;
            padding: 20px;
            overflow-x: hidden;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            animation: fadeIn 0.5s ease-out;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .header {
            text-align: center;
            margin-bottom: 40px;
            padding: 20px;
            background: rgba(20, 20, 40, 0.7);
            border-radius: 20px;
            border: 2px solid #ffcc00;
            box-shadow: 0 10px 30px rgba(255, 204, 0, 0.1);
            position: relative;
        }
        
        .logout-btn {
            position: absolute;
            top: 15px;
            left: 15px;
            background: rgba(255, 255, 255, 0.1);
            color: white;
            padding: 5px 15px;
            border-radius: 20px;
            font-size: 0.9em;
            cursor: pointer;
            transition: all 0.3s;
            border: 2px solid rgba(255, 255, 255, 0.2);
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .logout-btn:hover {
            background: rgba(255, 51, 51, 0.2);
            border-color: #ff3333;
        }
        
        .header h1 {
            color: #ffcc00;
            font-size: 2.5em;
            margin-bottom: 10px;
            text-shadow: 0 2px 10px rgba(255, 204, 0, 0.3);
        }
        
        .header p {
            color: #aaa;
            font-size: 1.1em;
        }
        
        .character-section {
            background: rgba(30, 30, 50, 0.9);
            border-radius: 20px;
            padding: 25px;
            margin-bottom: 40px;
            border: 2px solid #ffcc00;
            backdrop-filter: blur(10px);
            animation: slideUp 0.5s ease-out;
        }
        
        @keyframes slideUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .character-info {
            display: flex;
            align-items: center;
            gap: 25px;
            margin-bottom: 20px;
        }
        
        .character-avatar {
            width: 120px;
            height: 140px;
            background: linear-gradient(135deg, #ffcc00, #ff9900);
            border-radius: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 3.5em;
            border: 3px solid #ffcc00;
            box-shadow: 0 5px 15px rgba(255, 204, 0, 0.3);
            animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
        
        .character-details {
            flex: 1;
        }
        
        .character-name {
            font-size: 1.8em;
            color: #ffcc00;
            margin-bottom: 10px;
            text-shadow: 0 2px 5px rgba(255, 204, 0, 0.3);
        }
        
        .character-class {
            color: #aaa;
            font-size: 1.1em;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .character-stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
        }
        
        .stat {
            background: rgba(0, 0, 0, 0.4);
            padding: 15px;
            border-radius: 12px;
            border: 1px solid rgba(255, 204, 0, 0.2);
            transition: all 0.3s;
        }
        
        .stat:hover {
            transform: translateY(-5px);
            border-color: #ffcc00;
            box-shadow: 0 5px 15px rgba(255, 204, 0, 0.2);
        }
        
        .stat-label {
            font-size: 0.9em;
            color: #aaa;
            margin-bottom: 8px;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .stat-value {
            font-size: 1.4em;
            font-weight: bold;
            color: #ffcc00;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        
        .stat-progress {
            margin-top: 10px;
        }
        
        .progress-bar {
            width: 100%;
            height: 10px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 5px;
            overflow: hidden;
        }
        
        .progress-fill {
            height: 100%;
            background: linear-gradient(90deg, #ffcc00, #ff9900);
            border-radius: 5px;
            transition: width 0.5s ease-out;
            position: relative;
            overflow: hidden;
        }
        
        .progress-fill::after {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
            animation: shimmer 2s infinite;
        }
        
        @keyframes shimmer {
            0% { left: -100%; }
            100% { left: 100%; }
        }
        
        /* Основные действия */
        .main-actions {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 25px;
            margin-bottom: 40px;
        }
        
        .action-card {
            background: rgba(40, 40, 60, 0.9);
            border-radius: 20px;
            padding: 25px;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s;
            border: 2px solid transparent;
            position: relative;
            overflow: hidden;
            backdrop-filter: blur(10px);
        }
        
        .action-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #ffcc00, #ff9900);
            transform: scaleX(0);
            transition: transform 0.3s;
        }
        
        .action-card:hover {
            transform: translateY(-10px);
            border-color: #ffcc00;
            box-shadow: 0 15px 30px rgba(255, 204, 0, 0.2);
        }
        
        .action-card:hover::before {
            transform: scaleX(1);
        }
        
        .action-icon {
            font-size: 3em;
            margin-bottom: 20px;
            filter: drop-shadow(0 5px 10px rgba(255, 204, 0, 0.3));
        }
        
        .action-title {
            font-size: 1.4em;
            color: #ffcc00;
            margin-bottom: 15px;
            text-shadow: 0 2px 5px rgba(255, 204, 0, 0.3);
        }
        
        .action-description {
            font-size: 0.95em;
            color: #ccc;
            margin-bottom: 20px;
            line-height: 1.5;
        }
        
        .action-details {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 20px;
            padding-top: 15px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .action-cost {
            font-size: 0.9em;
            color: #ff6666;
            display: flex;
            align-items: center;
            gap: 5px;
        }
        
        .action-reward {
            font-size: 0.9em;
            color: #4CAF50;
            display: flex;
            align-items: center;
            gap: 5px;
        }
        
        .action-btn {
            background: linear-gradient(135deg, #ffcc00, #ff9900);
            color: black;
            border: none;
            border-radius: 10px;
            padding: 12px 25px;
            font-size: 1em;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s;
            width: 100%;
            margin-top: 15px;
        }
        
        .action-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(255, 204, 0, 0.4);
        }
        
        .action-btn:disabled {
            opacity: 0.5;
            cursor: not-allowed;
            transform: none;
            box-shadow: none;
        }
        
        /* Стили для Спорт зала */
        .gym-card {
            border-color: #FF3D00;
            background: linear-gradient(135deg, rgba(255, 61, 0, 0.1), rgba(255, 61, 0, 0.05));
        }
        
        .gym-card .action-icon {
            color: #FF3D00;
        }
        
        .gym-card .action-title {
            color: #FF3D00;
            text-shadow: 0 2px 5px rgba(255, 61, 0, 0.3);
        }
        
        .gym-card:hover {
            border-color: #FF3D00;
            box-shadow: 0 15px 30px rgba(255, 61, 0, 0.2);
        }
        
        .gym-card::before {
            background: linear-gradient(90deg, #FF3D00, #FF6E40);
        }
        
        /* Стили для Ресторана */
        .restaurant-card {
            border-color: #FF5722;
            background: linear-gradient(135deg, rgba(255, 87, 34, 0.1), rgba(255, 87, 34, 0.05));
        }
        
        .restaurant-card .action-icon {
            color: #FF5722;
        }
        
        .restaurant-card .action-title {
            color: #FF5722;
            text-shadow: 0 2px 5px rgba(255, 87, 34, 0.3);
        }
        
        .restaurant-card:hover {
            border-color: #FF5722;
            box-shadow: 0 15px 30px rgba(255, 87, 34, 0.2);
        }
        
        .restaurant-card::before {
            background: linear-gradient(90deg, #FF5722, #FF8A65);
        }
        
        /* Стили для Бизнес Империи */
        .business-card {
            border-color: #2196F3;
            background: linear-gradient(135deg, rgba(33, 150, 243, 0.1), rgba(33, 150, 243, 0.05));
        }
        
        .business-card .action-icon {
            color: #2196F3;
        }
        
        .business-card .action-title {
            color: #2196F3;
            text-shadow: 0 2px 5px rgba(33, 150, 243, 0.3);
        }
        
        .business-card:hover {
            border-color: #2196F3;
            box-shadow: 0 15px 30px rgba(33, 150, 243, 0.2);
        }
        
        .business-card::before {
            background: linear-gradient(90deg, #2196F3, #64B5F6);
        }
        
        /* Остальные стили карточек */
        .work-card {
            border-color: #4CAF50;
            background: linear-gradient(135deg, rgba(76, 175, 80, 0.1), rgba(76, 175, 80, 0.05));
        }
        
        .work-card .action-icon {
            color: #4CAF50;
        }
        
        .work-card .action-title {
            color: #4CAF50;
            text-shadow: 0 2px 5px rgba(76, 175, 80, 0.3);
        }
        
        .work-card:hover {
            border-color: #4CAF50;
            box-shadow: 0 15px 30px rgba(76, 175, 80, 0.2);
        }
        
        .work-card::before {
            background: linear-gradient(90deg, #4CAF50, #81C784);
        }
        
        .travel-card {
            border-color: #FF9800;
            background: linear-gradient(135deg, rgba(255, 152, 0, 0.1), rgba(255, 152, 0, 0.05));
        }
        
        .travel-card .action-icon {
            color: #FF9800;
        }
        
        .travel-card .action-title {
            color: #FF9800;
            text-shadow: 0 2px 5px rgba(255, 152, 0, 0.3);
        }
        
        .travel-card:hover {
            border-color: #FF9800;
            box-shadow: 0 15px 30px rgba(255, 152, 0, 0.2);
        }
        
        .travel-card::before {
            background: linear-gradient(90deg, #FF9800, #FFB74D);
        }
        
        .map-card {
            border-color: #00BCD4;
            background: linear-gradient(135deg, rgba(0, 188, 212, 0.1), rgba(0, 188, 212, 0.05));
        }
        
        .map-card .action-icon {
            color: #00BCD4;
        }
        
        .map-card .action-title {
            color: #00BCD4;
            text-shadow: 0 2px 5px rgba(0, 188, 212, 0.3);
        }
        
        .map-card:hover {
            border-color: #00BCD4;
            box-shadow: 0 15px 30px rgba(0, 188, 212, 0.2);
        }
        
        .map-card::before {
            background: linear-gradient(90deg, #00BCD4, #80DEEA);
        }
        
        /* Дополнительный блок персонажа */
        .character-quick-info {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 15px;
        }
        
        .quick-avatar {
            font-size: 2em;
        }
        
        .quick-details {
            flex: 1;
        }
        
        .quick-name {
            font-size: 1.3em;
            color: #ffcc00;
        }
        
        .quick-class {
            color: #aaa;
            font-size: 0.9em;
        }
        
        .change-character-btn {
            background: rgba(255, 255, 255, 0.1);
            color: white;
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 10px;
            padding: 8px 15px;
            font-size: 0.9em;
            cursor: pointer;
            transition: all 0.3s;
        }
        
        .change-character-btn:hover {
            background: rgba(255, 204, 0, 0.2);
            border-color: #ffcc00;
        }
        
        /* Секция с дополнительными возможностями */
        .extras-section {
            margin-top: 40px;
            padding: 25px;
            background: rgba(30, 30, 50, 0.7);
            border-radius: 20px;
            border: 2px solid #ffcc00;
        }
        
        .extras-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }
        
        .extra-card {
            background: rgba(50, 50, 70, 0.8);
            border-radius: 15px;
            padding: 20px;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s;
            border: 1px solid transparent;
        }
        
        .extra-card:hover {
            transform: translateY(-5px);
            border-color: #ffcc00;
            box-shadow: 0 10px 20px rgba(255, 204, 0, 0.2);
        }
        
        .extra-icon {
            font-size: 2em;
            margin-bottom: 10px;
        }
        
        .extra-title {
            color: #ffcc00;
            margin-bottom: 10px;
            font-size: 1.1em;
        }
        
        /* Адаптивность */
        @media (max-width: 768px) {
            .character-info {
                flex-direction: column;
                text-align: center;
            }
            
            .character-stats {
                grid-template-columns: 1fr;
            }
            
            .main-actions {
                grid-template-columns: 1fr;
            }
            
            .logout-btn {
                position: static;
                margin: 10px 0;
                display: inline-block;
            }
        }
        
        /* Модальные окна (упрощенные стили) */
        .modal {
            display: none;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
            border-radius: 25px;
            padding: 30px;
            width: 90%;
            max-width: 500px;
            max-height: 80vh;
            overflow-y: auto;
            z-index: 1001;
            border: 3px solid #ffcc00;
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
        }
        
        .modal.show {
            display: block;
        }
        
        .overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.8);
            z-index: 1000;
            backdrop-filter: blur(5px);
        }
        
        .overlay.show {
            display: block;
        }
        
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(30, 30, 50, 0.95);
            border-left: 4px solid #ffcc00;
            border-radius: 10px;
            padding: 20px;
            max-width: 300px;
            transform: translateX(100%);
            transition: transform 0.3s;
            z-index: 1100;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        }
        
        .notification.show {
            transform: translateX(0);
        }
        
        .notification-title {
            color: #ffcc00;
            font-size: 1.1em;
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .notification-message {
            color: #ccc;
            font-size: 0.95em;
            line-height: 1.4;
        }
    </style>
</head>
<body>
    <!-- Оверлей для модальных окон -->
    <div class="overlay" id="overlay"></div>
    
    <!-- Уведомления -->
    <div class="notification" id="notification">
        <div class="notification-title">
            <span id="notificationIcon">📢</span>
            <span id="notificationTitle">Уведомление</span>
        </div>
        <div class="notification-message" id="notificationMessage"></div>
    </div>
    
    <div class="container">
        <!-- Заголовок -->
        <div class="header">
            <a href="index.html" class="logout-btn">
                🔄 Сменить персонажа
            </a>
            <h1>🎮 Игровой мир</h1>
            <p>Приключения продолжаются...</p>
        </div>
        
        <!-- Информация о персонаже -->
        <div class="character-section">
            <div class="character-quick-info">
                <div class="quick-avatar" id="quickAvatar">👤</div>
                <div class="quick-details">
                    <div class="quick-name" id="quickName">Загрузка...</div>
                    <div class="quick-class" id="quickClass">...</div>
                </div>
                <button class="change-character-btn" onclick="changeCharacter()">
                    🔄 Сменить
                </button>
            </div>
            
            <div class="character-info">
                <div class="character-avatar" id="characterAvatar">👤</div>
                <div class="character-details">
                    <div class="character-name" id="characterName">Персонаж</div>
                    <div class="character-class" id="characterClass">Класс: <span id="classValue">...</span></div>
                    <div class="character-stats">
                        <div class="stat">
                            <div class="stat-label">💰 Деньги</div>
                            <div class="stat-value">
                                <span id="moneyValue">0</span> ₽
                            </div>
                        </div>
                        <div class="stat">
                            <div class="stat-label">⚡ Энергия</div>
                            <div class="stat-value">
                                <span id="energyValue">0</span>/<span id="maxEnergy">0</span>
                            </div>
                            <div class="stat-progress">
                                <div class="progress-bar">
                                    <div class="progress-fill" id="energyBar" style="width: 0%"></div>
                                </div>
                            </div>
                        </div>
                        <div class="stat">
                            <div class="stat-label">💪 Сила</div>
                            <div class="stat-value">
                                <span id="strengthValue">0</span>
                                <button onclick="showStatInfo('strength')" style="background: none; border: none; color: #ffcc00; cursor: help;">ℹ️</button>
                            </div>
                        </div>
                        <div class="stat">
                            <div class="stat-label">🎯 Удача</div>
                            <div class="stat-value">
                                <span id="luckValue">0</span>
                                <button onclick="showStatInfo('luck')" style="background: none; border: none; color: #ffcc00; cursor: help;">ℹ️</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Основные действия (Сетка 3x2) -->
        <div class="main-actions">
            <!-- Работа -->
            <div class="action-card work-card" onclick="openWorkModal()">
                <div class="action-icon">💼</div>
                <div class="action-title">Работа</div>
                <div class="action-description">
                    Зарабатывайте деньги, работая на разных работах. Каждая работа требует определённых навыков и даёт разную оплату.
                </div>
                <div class="action-details">
                    <div class="action-cost">
                        ⚡ 40 энергии
                    </div>
                    <div class="action-reward">
                        💰 200-500 ₽
                    </div>
                </div>
                <button class="action-btn" onclick="openWorkModal()">Выбрать работу</button>
            </div>
            
            <!-- Путешествие -->
            <div class="action-card travel-card" onclick="goTravel()">
                <div class="action-icon">✈️</div>
                <div class="action-title">Путешествие</div>
                <div class="action-description">
                    Отправляйтесь в путешествия по миру, находите сокровища, встречайте новых персонажей и получайте уникальные награды.
                </div>
                <div class="action-details">
                    <div class="action-cost">
                        ⚡ 30 энергии + 💰 200 ₽
                    </div>
                    <div class="action-reward">
                        💰 50-300 ₽ + опыт
                    </div>
                </div>
                <button class="action-btn" onclick="goTravel()">Выбрать маршрут</button>
            </div>
            
            <!-- Ресторан - ВОССТАНОВЛЕНИЕ ЭНЕРГИИ -->
            <div class="action-card restaurant-card" onclick="goRestaurant()">
                <div class="action-icon">🍽️</div>
                <div class="action-title">Ресторан</div>
                <div class="action-description">
                    Посетите элитный ресторан. Изысканные блюда восстановят ваши силы и подарят заряд бодрости.
                </div>
                <div class="action-details">
                    <div class="action-cost">
                        💰 2500 ₽
                    </div>
                    <div class="action-reward">
                        ⚡ +45 энергии
                    </div>
                </div>
                <button class="action-btn" onclick="goRestaurant()">Посетить ресторан</button>
            </div>
            
            <!-- Спорт зал - ССЫЛКА НА ДРУГУЮ СТРАНИЦУ -->
            <a href="gym.html" style="text-decoration: none;">
                <div class="action-card gym-card">
                    <div class="action-icon">🏋️</div>
                    <div class="action-title">Спорт зал</div>
                    <div class="action-description">
                        Тренируйте своё тело! Повышайте силу, выносливость и другие характеристики в нашем современном спортзале.
                    </div>
                    <div class="action-details">
                        <div class="action-cost">
                            ⚡ 20-50 энергии
                        </div>
                        <div class="action-reward">
                            💪 +1-5 к силе
                        </div>
                    </div>
                    <button class="action-btn">Посетить спортзал</button>
                </div>
            </a>
            
            <!-- Карта -->
            <div class="action-card map-card" onclick="exploreMap()">
                <div class="action-icon">🗺️</div>
                <div class="action-title">Карта</div>
                <div class="action-description">
                    Исследуйте мир, открывайте новые локации, находите скрытые сокровища и тайные места.
                </div>
                <div class="action-details">
                    <div class="action-cost">
                        ⚡ 25 энергии + 💰 100 ₽
                    </div>
                    <div class="action-reward">
                        💰 0-200 ₽ + навыки
                    </div>
                </div>
                <button class="action-btn" onclick="exploreMap()">Исследовать мир</button>
            </div>
            
            <!-- Бизнес Империя -->
            <a href="business-management.html" style="text-decoration: none;">
                <div class="action-card business-card">
                    <div class="action-icon">🏢</div>
                    <div class="action-title">Бизнес Империя</div>
                    <div class="action-description">
                        Создайте бизнес-империю! Управляйте компаниями, покупайте материалы, производите товары и получайте пассивный доход.
                    </div>
                    <div class="action-details">
                        <div class="action-cost">
                            💰 Минимум 5000 ₽
                        </div>
                        <div class="action-reward">
                            💰 Пассивный доход
                        </div>
                    </div>
                    <button class="action-btn">Управлять бизнесом</button>
                </div>
            </a>
            
            <!-- Казино -->
            <a href="casino.html" style="text-decoration: none;">
                <div class="action-card" style="border-color: #E91E63; background: linear-gradient(135deg, rgba(233, 30, 99, 0.1), rgba(233, 30, 99, 0.05));">
                    <div class="action-icon" style="color: #E91E63;">🎰</div>
                    <div class="action-title" style="color: #E91E63; text-shadow: 0 2px 5px rgba(233, 30, 99, 0.3);">Казино</div>
                    <div class="action-description">
                        Испытайте удачу в азартных играх! Слоты, Блэкджек и Покер ждут вас.
                    </div>
                    <div class="action-details">
                        <div class="action-cost">
                            ⚡ 10 энергии
                        </div>
                        <div class="action-reward">
                            💰 x2-x36 ставки
                        </div>
                    </div>
                    <button class="action-btn">Играть в казино</button>
                </div>
            </a>
        </div>
        
        <!-- Дополнительные возможности -->
        <div class="extras-section">
            <h2 style="color: #ffcc00; margin-bottom: 20px; text-align: center;">Дополнительные возможности</h2>
            <div class="extras-grid">
                <div class="extra-card" onclick="showNotification('🏦 Банк', 'Функция банка будет доступна в следующем обновлении!')">
                    <div class="extra-icon">🏦</div>
                    <div class="extra-title">Банк</div>
                </div>
                <div class="extra-card" onclick="showNotification('🛒 Магазин', 'Магазин предметов откроется скоро!')">
                    <div class="extra-icon">🛒</div>
                    <div class="extra-title">Магазин</div>
                </div>
                <div class="extra-card" onclick="showNotification('🎭 Социальное', 'Общение с другими игроками появится позже!')">
                    <div class="extra-icon">🎭</div>
                    <div class="extra-title">Социальное</div>
                </div>
                <div class="extra-card" onclick="showNotification('🏆 Достижения', 'Система достижений в разработке!')">
                    <div class="extra-icon">🏆</div>
                    <div class="extra-title">Достижения</div>
                </div>
            </div>
        </div>
    </div>

    <script>
        // ========== ОСНОВНЫЕ ДАННЫЕ ==========
        let activeCharacter = null;
        let characterStats = {};
        
        // ========== ПРОСТЕЙШИЕ КУЛДАУНЫ ==========
        const CD = {
            work: 30,
            travel: 600,
            restaurant: 300 // 5 минут кулдаун на ресторан
        };
        
        function onCD(action) {
            let last = localStorage.getItem('cd_' + action);
            if (!last) return false;
            let now = Math.floor(Date.now() / 1000);
            return (now - parseInt(last)) < CD[action];
        }
        
        function timeLeft(action) {
            let last = localStorage.getItem('cd_' + action);
            if (!last) return 0;
            let now = Math.floor(Date.now() / 1000);
            let left = CD[action] - (now - parseInt(last));
            return left > 0 ? left : 0;
        }
        
        function setCD(action) {
            let now = Math.floor(Date.now() / 1000);
            localStorage.setItem('cd_' + action, now);
        }
        
        function fmtTime(sec) {
            if (sec >= 60) return Math.floor(sec/60) + 'м ' + (sec%60) + 'с';
            return sec + 'с';
        }
        
        // ========== АВТОМАТИЧЕСКОЕ ВОССТАНОВЛЕНИЕ ЭНЕРГИИ ==========
        // КАЖДЫЕ 3 МИНУТЫ - ПОЛНОЕ ВОССТАНОВЛЕНИЕ ДО МАКСИМУМА
        function restoreEnergy() {
            let lastRestore = localStorage.getItem('last_energy_restore');
            let now = Math.floor(Date.now() / 1000);
            let restoreTime = 180; // 3 минуты = 180 секунд
            
            if (!lastRestore) {
                localStorage.setItem('last_energy_restore', now);
                return;
            }
            
            lastRestore = parseInt(lastRestore);
            let timePassed = now - lastRestore;
            
            // Сколько раз прошло по 3 минуты
            let restoreCount = Math.floor(timePassed / restoreTime);
            
            if (restoreCount > 0) {
                // ПОЛНОЕ ВОССТАНОВЛЕНИЕ ДО МАКСИМУМА
                let oldEnergy = characterStats.energy;
                characterStats.energy = characterStats.maxEnergy;
                let recovered = characterStats.energy - oldEnergy;
                
                // Обновляем время последнего восстановления
                localStorage.setItem('last_energy_restore', lastRestore + (restoreCount * restoreTime));
                
                saveCharacterStats();
                updateCharacterUI();
                
                if (recovered > 0) {
                    showNotification('⚡ Энергия', 'Энергия полностью восстановлена! +' + recovered + ' ⚡', '✨');
                }
            }
        }
        
        // ========== НОВАЯ ФУНКЦИЯ: РЕСТОРАН ==========
        function goRestaurant() {
            if (!activeCharacter) {
                showNotification('Ошибка', 'Персонаж не загружен', '❌');
                return;
            }
            
            // Проверка кулдауна
            if (onCD('restaurant')) {
                showNotification('⏳ Вы сыты', 'Вы недавно посещали ресторан. Осталось: ' + fmtTime(timeLeft('restaurant')), '⌛');
                return;
            }
            
            const cost = 2500;
            
            // Проверка наличия денег
            if (characterStats.money < cost) {
                showNotification('❌ Недостаточно денег', `Для посещения ресторана нужно ${cost} ₽`, '💰');
                return;
            }
            
            // Проверка, что энергия не полная
            if (characterStats.energy >= characterStats.maxEnergy) {
                showNotification('⚡ Энергия полная', 'У вас уже максимальный запас энергии!', '⚡');
                return;
            }
            
            // Списание денег
            characterStats.money -= cost;
            
            // Восстановление энергии (но не выше максимума)
            const oldEnergy = characterStats.energy;
            characterStats.energy = Math.min(characterStats.energy + 45, characterStats.maxEnergy);
            const recovered = characterStats.energy - oldEnergy;
            
            // Установка кулдауна
            setCD('restaurant');
            
            // Сохранение и обновление
            saveCharacterStats();
            updateCharacterUI();
            
            showNotification(
                '🍽️ Ресторан',
                `Вы отлично пообедали! +${recovered} ⚡ энергии`,
                '✨'
            );
            
            // Небольшой шанс на удачу
            if (Math.random() < 0.1) {
                characterStats.luck = (characterStats.luck || 5) + 1;
                showNotification(
                    '🍀 Вам повезло!',
                    'Шеф-повар угостил вас особым блюдом! +1 к удаче',
                    '🎯'
                );
                saveCharacterStats();
                updateCharacterUI();
            }
        }
        
        // ========== ФУНКЦИЯ ДЛЯ СПОРТ ЗАЛА ==========
        function goGym() {
            // Эта функция будет вызвана, если пользователь нажмет на карточку
            // Перенаправляем на страницу спортзала
            window.location.href = 'gym.html';
        }
        
        // ========== ЗАГРУЗКА ПЕРСОНАЖА ==========
        function loadActiveCharacter() {
            const savedCharacter = localStorage.getItem('activeCharacter');
            if (savedCharacter) {
                try {
                    activeCharacter = JSON.parse(savedCharacter);
                    console.log('✅ Персонаж загружен:', activeCharacter.name);
                } catch (e) {
                    console.error('❌ Ошибка загрузки персонажа:', e);
                    setTimeout(() => window.location.href = 'index.html', 2000);
                }
            } else {
                showNotification('Персонаж не найден', 'Пожалуйста, выберите персонажа', '❌');
                setTimeout(() => window.location.href = 'index.html', 3000);
            }
        }
        
        // ========== ЗАГРУЗКА СТАТИСТИКИ ПЕРСОНАЖА ==========
        function loadCharacterStats() {
            if (!activeCharacter || !activeCharacter.id) {
                console.error('Нет активного персонажа');
                return;
            }
            
            // 1. Пробуем загрузить из УНИКАЛЬНОГО ключа
            const statsKey = `characterStats_${activeCharacter.id}`;
            const savedStats = localStorage.getItem(statsKey);
            
            if (savedStats) {
                try {
                    characterStats = JSON.parse(savedStats);
                    console.log(`✅ Статистика загружена для персонажа ID: ${activeCharacter.id}`, characterStats);
                    
                    // Проверяем и инициализируем поля
                    if (!characterStats.maxEnergy) characterStats.maxEnergy = 100;
                    if (!characterStats.energy) characterStats.energy = 100;
                    if (!characterStats.money) characterStats.money = 1000;
                    if (!characterStats.strength) characterStats.strength = 10;
                    if (!characterStats.luck) characterStats.luck = 5;
                    if (!characterStats.experience) characterStats.experience = 0;
                    if (!characterStats.level) characterStats.level = 1;
                    if (!characterStats.homeLevel) characterStats.homeLevel = 1;
                    if (!characterStats.discoveredLocations) characterStats.discoveredLocations = ['Старт'];
                    if (!characterStats.business) {
                        characterStats.business = {
                            unlocked: false,
                            level: 0,
                            income: 0,
                            lastCollection: Date.now(),
                            businesses: []
                        };
                    }
                    
                    return;
                } catch (e) {
                    console.error('Ошибка загрузки уникальной статистики:', e);
                }
            }
            
            // 2. Если нет, пробуем загрузить из СТАРОГО ключа
            const oldStats = localStorage.getItem('characterStats');
            if (oldStats) {
                try {
                    characterStats = JSON.parse(oldStats);
                    
                    // НЕ сохраняем автоматически! Просто используем старую статистику
                    // saveCharacterStats(); <- УДАЛИТЕ ЭТУ СТРОКУ
                    
                    console.log(`✅ Статистика загружена из старого формата`, characterStats);
                    return;
                } catch (e) {
                    console.error('Ошибка загрузки старой статистики:', e);
                }
            }
            
            // 3. Если ничего нет, создаем новую
            createDefaultStats();
        }

        // ========== СОХРАНЕНИЕ СТАТИСТИКИ ==========
        function saveCharacterStats() {
            if (!activeCharacter || !activeCharacter.id) return;
            
            // 1. Сохраняем в УНИКАЛЬНЫЙ ключ
            const statsKey = `characterStats_${activeCharacter.id}`;
            localStorage.setItem(statsKey, JSON.stringify(characterStats));
            
            // 2. ДЛЯ СОВМЕСТИМОСТИ: также сохраняем в старый ключ
            localStorage.setItem('characterStats', JSON.stringify(characterStats));
            
            console.log(`✅ Статистика сохранена для персонажа ID: ${activeCharacter.id}`);
        }
        
        function createDefaultStats() {
            characterStats = {
                money: 1000,
                energy: 100,
                maxEnergy: 100,
                strength: 10,
                luck: 5,
                intelligence: 8,
                agility: 7,
                homeLevel: 1,
                discoveredLocations: ['Старт'],
                experience: 0,
                level: 1,
                business: {
                    unlocked: false,
                    level: 0,
                    income: 0,
                    lastCollection: Date.now(),
                    businesses: []
                }
            };
            saveCharacterStats();
            console.log('✅ Создана новая статистика');
        }
        
        // ========== ОБНОВЛЕНИЕ ИНТЕРФЕЙСА ==========
        function updateCharacterUI() {
            if (!activeCharacter) return;
            
            document.getElementById('characterAvatar').textContent = activeCharacter.avatar || '👤';
            document.getElementById('characterName').textContent = activeCharacter.name || 'Персонаж';
            document.getElementById('classValue').textContent = activeCharacter.class || 'Искатель';
            document.getElementById('quickAvatar').textContent = activeCharacter.avatar || '👤';
            document.getElementById('quickName').textContent = activeCharacter.name || 'Персонаж';
            document.getElementById('quickClass').textContent = activeCharacter.class || 'Искатель';
            
            document.getElementById('moneyValue').textContent = (characterStats.money || 0).toLocaleString();
            document.getElementById('energyValue').textContent = characterStats.energy || 0;
            document.getElementById('maxEnergy').textContent = characterStats.maxEnergy || 100;
            document.getElementById('strengthValue').textContent = characterStats.strength || 10;
            document.getElementById('luckValue').textContent = characterStats.luck || 5;
            document.getElementById('characterClass').innerHTML = `Класс: <span id="classValue">${activeCharacter.class || 'Искатель'}</span>`;
            
            const energyPercent = (characterStats.energy / characterStats.maxEnergy) * 100;
            document.getElementById('energyBar').style.width = energyPercent + '%';
            
            updateBusinessAccess();
            updateButtons();
        }
        
        // ========== ОБНОВЛЕНИЕ КНОПОК ==========
        function updateButtons() {
            // Работа
            let workBtn = document.querySelector('.work-card .action-btn');
            if (workBtn) {
                let t = timeLeft('work');
                workBtn.disabled = t > 0;
                workBtn.textContent = t > 0 ? '⏳ ' + fmtTime(t) : 'Выбрать работу';
            }
            
            // Путешествие
            let travelBtn = document.querySelector('.travel-card .action-btn');
            if (travelBtn) {
                let t = timeLeft('travel');
                travelBtn.disabled = t > 0;
                travelBtn.textContent = t > 0 ? '⏳ ' + fmtTime(t) : 'Выбрать маршрут';
            }
            
            // Ресторан
            let restaurantBtn = document.querySelector('.restaurant-card .action-btn');
            if (restaurantBtn) {
                let t = timeLeft('restaurant');
                restaurantBtn.disabled = t > 0;
                restaurantBtn.textContent = t > 0 ? '⏳ ' + fmtTime(t) : 'Посетить ресторан';
            }
            
            // Спорт зал (без кулдауна, просто ссылка)
            let gymBtn = document.querySelector('.gym-card .action-btn');
            if (gymBtn) {
                gymBtn.disabled = false;
                gymBtn.textContent = 'Посетить спортзал';
            }
        }
        
        // ========== БИЗНЕС ==========
        function checkBusinessUnlock() {
            if (!characterStats.business) {
                characterStats.business = {
                    unlocked: false,
                    level: 0,
                    income: 0,
                    lastCollection: Date.now(),
                    businesses: []
                };
            }
            
            if (characterStats.money >= 5000 && !characterStats.business.unlocked) {
                characterStats.business.unlocked = true;
                saveCharacterStats();
                
                showNotification(
                    '🎉 Бизнес разблокирован!',
                    'Вы накопили 5000 ₽ и теперь можете создать бизнес-империю!',
                    '🏢'
                );
            }
        }
        
        function updateBusinessAccess() {
            if (!characterStats.business) {
                characterStats.business = {
                    unlocked: false,
                    level: 0,
                    income: 0,
                    lastCollection: Date.now(),
                    businesses: []
                };
            }
            
            const businessLink = document.querySelector('a[href="business-management.html"]');
            if (!businessLink) return;
            
            const businessCard = businessLink.querySelector('.action-card');
            const businessBtn = businessLink.querySelector('.action-btn');
            
            if (!businessCard || !businessBtn) return;
            
            if (characterStats.business.unlocked) {
                businessCard.style.opacity = '1';
                businessBtn.disabled = false;
                businessBtn.textContent = 'Управлять бизнесом';
            } else {
                businessCard.style.opacity = '0.7';
                businessBtn.disabled = true;
                businessBtn.textContent = `Нужно 5000 ₽ (${characterStats.money || 0}/5000)`;
                
                businessCard.onclick = function(e) {
                    e.preventDefault();
                    showBusinessUnlockInfo();
                };
                businessBtn.onclick = function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    showBusinessUnlockInfo();
                };
            }
        }
        
        function showBusinessUnlockInfo() {
            const needed = 5000 - (characterStats.money || 0);
            const message = needed > 0 
                ? `Вам нужно ещё ${needed} ₽, чтобы разблокировать Бизнес Империю`
                : 'У вас достаточно денег! Бизнес будет разблокирован автоматически.';
            
            showNotification(
                '🏢 Бизнес Империя',
                `Для открытия бизнеса нужно накопить 5000 ₽.\n${message}`,
                '🔒'
            );
        }
        
        // ========== ИГРОВЫЕ ДЕЙСТВИЯ ==========
        function goTravel() {
            if (!activeCharacter) {
                showNotification('Ошибка', 'Персонаж не загружен', '❌');
                return;
            }
            
            if (onCD('travel')) {
                showNotification('⏳ Подождите', 'Осталось: ' + fmtTime(timeLeft('travel')), '⌛');
                return;
            }
            
            const cost = 200;
            const energyCost = 30;
            
            if (characterStats.money < cost) {
                showNotification('❌ Недостаточно денег', `Для путешествия нужно ${cost} ₽`, '💰');
                return;
            }
            
            if (characterStats.energy < energyCost) {
                showNotification('❌ Недостаточно энергии', `Нужно ${energyCost} ⚡`, '⚡');
                return;
            }
            
            characterStats.money -= cost;
            characterStats.energy -= energyCost;
            
            const success = Math.random() < 0.8;
            
            if (success) {
                const reward = Math.floor(Math.random() * 251) + 50;
                characterStats.money += reward;
                
                if (Math.random() < 0.3) {
                    characterStats.strength += 1;
                    showNotification(
                        '✈️ Путешествие успешно!',
                        `Вы нашли сокровище стоимостью ${reward} ₽ и стали сильнее! 💪 +1`,
                        '🎉'
                    );
                } else {
                    showNotification(
                        '✈️ Путешествие успешно!',
                        `Вы нашли сокровище стоимостью ${reward} ₽!`,
                        '💰'
                    );
                }
                
                characterStats.experience = (characterStats.experience || 0) + 10;
                checkLevelUp();
                
            } else {
                showNotification(
                    '😔 Путешествие провалено',
                    'Вы ничего не нашли, но получили опыт.',
                    '✈️'
                );
                characterStats.experience = (characterStats.experience || 0) + 5;
            }
            
            setCD('travel');
            saveCharacterStats();
            updateCharacterUI();
        }
        
        function goWork() {
            if (!activeCharacter) {
                showNotification('Ошибка', 'Персонаж не загружен', '❌');
                return;
            }
            
            if (onCD('work')) {
                showNotification('⏳ Подождите', 'Осталось: ' + fmtTime(timeLeft('work')), '⌛');
                return;
            }
            
            const energyCost = 40;
            
            if (characterStats.energy < energyCost) {
                showNotification('❌ Недостаточно энергии', `Нужно ${energyCost} ⚡`, '⚡');
                return;
            }
            
            characterStats.energy -= energyCost;
            
            const baseEarnings = 200;
            const strengthBonus = Math.floor(characterStats.strength * 5);
            const earnings = Math.floor(Math.random() * 301) + baseEarnings + strengthBonus;
            
            characterStats.money += earnings;
            
            if (Math.random() < 0.2) {
                characterStats.strength += 1;
                showNotification(
                    '💼 Работа',
                    `Вы заработали ${earnings} ₽ и стали сильнее! 💪 +1`,
                    '✅'
                );
            } else {
                showNotification(
                    '💼 Работа',
                    `Вы заработали ${earnings} ₽`,
                    '💰'
                );
            }
            
            characterStats.experience = (characterStats.experience || 0) + 8;
            checkLevelUp();
            
            setCD('work');
            saveCharacterStats();
            updateCharacterUI();
        }
        
        function exploreMap() {
            if (!activeCharacter) {
                showNotification('Ошибка', 'Персонаж не загружен', '❌');
                return;
            }
            
            const cost = 100;
            const energyCost = 25;
            
            if (characterStats.money < cost) {
                showNotification('❌ Недостаточно денег', `Для исследования нужно ${cost} ₽`, '💰');
                return;
            }
            
            if (characterStats.energy < energyCost) {
                showNotification('❌ Недостаточно энергии', `Нужно ${energyCost} ⚡`, '⚡');
                return;
            }
            
            characterStats.money -= cost;
            characterStats.energy -= energyCost;
            
            const success = Math.random() < 0.7;
            
            if (success) {
                const locations = ['🌳 Лес', '⛰️ Горы', '🏜️ Пустыня', '🌊 Море', '🕳️ Пещера', '🏰 Замок', '🏮 Деревня', '🏛️ Руины'];
                const newLocation = locations[Math.floor(Math.random() * locations.length)];
                
                if (!characterStats.discoveredLocations) {
                    characterStats.discoveredLocations = ['🏁 Старт'];
                }
                
                if (!characterStats.discoveredLocations.includes(newLocation)) {
                    characterStats.discoveredLocations.push(newLocation);
                }
                
                const reward = Math.floor(Math.random() * 201);
                
                if (reward > 0) {
                    characterStats.money += reward;
                }
                
                if (Math.random() < 0.25) {
                    characterStats.luck += 1;
                    showNotification(
                        '🗺️ Открытие!',
                        `Вы нашли ${newLocation} и стали удачливее! 🎯 +1 к удаче, найдено ${reward} ₽`,
                        '🎉'
                    );
                } else {
                    showNotification(
                        '🗺️ Исследование',
                        `Вы открыли новую локацию: ${newLocation} и нашли ${reward} ₽`,
                        '🗺️'
                    );
                }
                
                characterStats.experience = (characterStats.experience || 0) + 15;
                
            } else {
                showNotification(
                    '🧭 Заблудились',
                    'Вы заблудились и ничего не нашли.',
                    '😔'
                );
                characterStats.experience = (characterStats.experience || 0) + 5;
            }
            
            checkLevelUp();
            saveCharacterStats();
            updateCharacterUI();
        }
        
        function checkLevelUp() {
            if (!characterStats.experience) characterStats.experience = 0;
            if (!characterStats.level) characterStats.level = 1;
            
            const expNeeded = characterStats.level * 100;
            
            if (characterStats.experience >= expNeeded) {
                characterStats.experience -= expNeeded;
                characterStats.level += 1;
                characterStats.maxEnergy += 10;
                characterStats.energy = characterStats.maxEnergy;
                
                showNotification(
                    '🎉 УРОВЕНЬ ПОВЫШЕН!',
                    `Поздравляем! Вы достигли ${characterStats.level} уровня! ⚡ Макс. энергия +10`,
                    '⭐'
                );
                
                return true;
            }
            
            return false;
        }
        
        // ========== ВСПОМОГАТЕЛЬНЫЕ ==========
        function changeCharacter() {
            if (confirm('Вы уверены, что хотите сменить персонажа? Ваш прогресс будет сохранен.')) {
                window.location.href = 'index.html';
            }
        }
        
        function showNotification(title, message, icon = '📢') {
            let notification = document.getElementById('notification');
            
            document.getElementById('notificationIcon').textContent = icon;
            document.getElementById('notificationTitle').textContent = title;
            document.getElementById('notificationMessage').textContent = message;
            
            notification.classList.add('show');
            
            setTimeout(() => {
                notification.classList.remove('show');
            }, 3000);
        }
        
        function openWorkModal() { goWork(); }
        function openTravelModal() { goTravel(); }
        function openHomeModal() { 
            showNotification('🏠 Дом', 'Кнопка дома временно отключена. Энергия восстанавливается автоматически!', '🏠');
        }
        function openMapModal() { exploreMap(); }
        function openCasinoModal() { window.location.href = 'casino.html'; }
        
        function showStatInfo(stat) {
            const statInfo = {
                strength: '💪 Сила - больше денег с работы',
                luck: '🎯 Удача - чаще выигрыш в путешествиях'
            };
            
            if (stat === 'strength') {
                showNotification('💪 Сила', 'Влияет на заработок с работы', 'ℹ️');
            } else if (stat === 'luck') {
                showNotification('🎯 Удача', 'Увеличивает шанс найти сокровища', 'ℹ️');
            }
        }
        
        function simulateBusinessIncome() {
            if (!characterStats.business) return;
            
            if (characterStats.business.unlocked && characterStats.business.income > 0) {
                const now = Date.now();
                const lastCollection = characterStats.business.lastCollection || now;
                const hoursPassed = Math.floor((now - lastCollection) / (1000 * 60 * 60));
                
                if (hoursPassed > 0) {
                    const income = hoursPassed * characterStats.business.income;
                    characterStats.money += income;
                    characterStats.business.lastCollection = now;
                    saveCharacterStats();
                    updateCharacterUI();
                    
                    if (income > 0) {
                        showNotification(
                            '🏢 Пассивный доход',
                            `Ваш бизнес принёс ${income} ₽ за ${hoursPassed} час(ов)`,
                            '💰'
                        );
                    }
                }
            }
        }
        
        // ========== ЗАПУСК ==========
        document.addEventListener('DOMContentLoaded', function() {
            loadActiveCharacter();
            loadCharacterStats();
            
            // Восстанавливаем энергию при загрузке
            restoreEnergy();
            
            updateCharacterUI();
            checkBusinessUnlock();
            
            // Обновление кулдаунов каждую секунду
            setInterval(updateButtons, 1000);
            
            // ПРОВЕРКА ВОССТАНОВЛЕНИЯ ЭНЕРГИИ КАЖДУЮ МИНУТУ
            setInterval(restoreEnergy, 60000);
            
            // Пассивный доход раз в минуту
            setInterval(simulateBusinessIncome, 60000);
            setTimeout(simulateBusinessIncome, 1000);
        });
        
        window.addEventListener('beforeunload', function() {
            if (activeCharacter) {
                localStorage.setItem('activeCharacter', JSON.stringify(activeCharacter));
            }
            saveCharacterStats();
        });
    </script>
</body>
</html>