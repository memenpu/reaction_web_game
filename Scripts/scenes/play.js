var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var PlayScene = /** @class */ (function (_super) {
        __extends(PlayScene, _super);
        // Constructor
        function PlayScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.start = 0;
            _this.pause = false;
            _this.shapeProperties = [['lavender', 'mediumvioletred'], ['lavender', 'dodgerblue'], ['lavender', 'crimson'], ['lavender', 'darkslategray'], ['pink', 'mediumvioletred'], ['pink', 'dodgerblue'], ['pink', 'crimson'], ['pink', 'darkslategray'], ['ivory', 'mediumvioletred'], ['ivory', 'dodgerblue'], ['ivory', 'crimson'], ['ivory', 'darkslategray'], ['powderblue', 'mediumvioletred'], ['powderblue', 'dodgerblue'], ['powderblue', 'crimson'], ['powderblue', 'darkslategray']];
            _this.shape = new createjs.Shape();
            _this.background = new objects.Background(_this.assetManager);
            _this.addChild(_this.background);
            setTimeout(function () { return _this.Start(); }, 1000);
            return _this;
        }
        PlayScene.prototype.Start = function () {
            console.log("Play scene start");
            // Inintialize our variables
            this.start = Date.now();
            this.timeOutText = new createjs.Text("reaction time " + this.start.toString() + " milliseconds", "40px Arial");
            this.timeOutText.x = 0;
            this.timeOutText.y = 0;
            this.shuffle(this.shapeProperties);
            var num = Math.floor(Math.random() * 3);
            if (num == 0) {
                this.shape.graphics.beginFill(this.shapeProperties[0][1])
                    .drawRoundRect(Math.random() * (600 - 60) + 60, Math.random() * (350 - 60) + 50, 80, 80, 15);
            }
            else if (num == 1) {
                this.shape.graphics.beginFill(this.shapeProperties[0][1])
                    .drawCircle(Math.random() * (600 - 70) + 60, Math.random() * (350 - 70) + 50, 40);
            }
            else if (num == 2) {
                this.shape.graphics.beginFill(this.shapeProperties[0][1])
                    .drawPolyStar(Math.random() * (600 - 70) + 60, Math.random() * (350 - 70) + 50, 40, 5, 5, 5);
            }
            this.Main();
        };
        PlayScene.prototype.Update = function () {
            // this.background.Update();
            // this.player.Update();
            // // this.enemy.Update();
            // this.enemies.forEach(e => {
            //     e.Update();
            // })
            if (!this.pause && this.timeOutText != null) {
                this.reactionTime = Date.now() - this.start;
                this.timeOutText.text = "reaction time " + this.reactionTime.toString() + " milliseconds";
            }
        };
        PlayScene.prototype.Main = function () {
            var _this = this;
            this.addChild(this.timeOutText);
            this.addChild(this.shape);
            this.shape.addEventListener("click", function () {
                _this.pause = true;
                setTimeout(function () {
                    objects.Game.reactionTime = _this.reactionTime;
                    objects.Game.currentScene = config.Scene.OVER;
                    console.log(config.Scene.OVER);
                    console.log(objects.Game.currentScene);
                }, 1000);
            });
        };
        PlayScene.prototype.shuffle = function (array) {
            array.sort(function () { return Math.random() - 0.5; });
        };
        return PlayScene;
    }(objects.Scene));
    scenes.PlayScene = PlayScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map