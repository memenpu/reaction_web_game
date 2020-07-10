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
var objects;
(function (objects) {
    var Background = /** @class */ (function (_super) {
        __extends(Background, _super);
        // Constructor
        function Background(assetManager) {
            var _this = _super.call(this, assetManager.getResult("background")) || this;
            // Variables
            _this.speedY = 0.5;
            console.log("Creating the background");
            _this.Start();
            return _this;
        }
        // Functions
        Background.prototype.Start = function () {
            this.Reset();
        };
        Background.prototype.Update = function () {
            this.Move();
            this.CheckBound();
        };
        Background.prototype.Reset = function () {
            // Reset my background y position.
            console.log("RESET!");
        };
        Background.prototype.Move = function () {
            this.x += this.speedY;
        };
        // Collision Detection
        Background.prototype.CheckBound = function () {
            if (this.y >= 0) {
                this.Reset();
            }
        };
        return Background;
    }(createjs.Bitmap));
    objects.Background = Background;
})(objects || (objects = {}));
//# sourceMappingURL=background.js.map