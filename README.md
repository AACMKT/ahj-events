# Event Handling

[![Build status](https://ci.appveyor.com/api/projects/status/6cledgq30otrm4fu?svg=true)](https://ci.appveyor.com/project/AACMKT/ahj-events)


[Ссылка на публикацию приложения на GitHub Pages](https://aacmkt.github.io/ahj-events/
)
---

## Описание

- Приложение представляет собой простейшую игру по типу "успей кликнуть по объекту"
- Игра ведется до получения 5 очков или до 5 проигрышей
- Для набора очков нужно успевать нажимать ЛКМ в момент, когда курсор находится напротив изображения "Гоблина"
- Штрафные очки (потеря ❤) начисляются, если игрок не успел нажать ЛКМ напротив изображения "Гоблина" до того, как тот исчез из клетки игрового поля.

## Реализация

- Реализовано игровое поле 4x4 в котором каждые 1 секунды в случайной ячейке поля появляется изображение персонажа, в виде картинки `img`
- Картинка появляется в случайной ячейке поля
- Над игровым полем расположены строки `Score` и `Lifes`, отображающие, соответственно, текущий счет и текущее количество жизней.
- Логика построения игрового поля и появления картинки реализована в классе [Playboard](./src/js/playboard.js).
- Обеспечена проверка, предотвращающая появление картинки два раза подряд в одной и той же ячейке поля.
- Логика, связанная с откликом на действия игрока, представлена в классе [GamePlay](./src/js/gamePlay.js)
- Инициализация и функционал, связанный со сменой изображений (с использованием `setInterval`) реализованы в [app.js](./src/js/app.js)
- В случае победы / проигрыша вызывается модальное окно с уведомлением об окончании игры и кнопкой `New Game`


Для персонажа использована картинка:

![](./src/img/goblin.png)

---

Обеспечено покрытие тестами класса Playboard.