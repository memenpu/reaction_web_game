module objects {
    export class Background extends createjs.Bitmap {
        // Variables
        private speedY:number = 0.5;
        // Constructor
        constructor(assetManager:createjs.LoadQueue)
        {
            super(assetManager.getResult("background"));
            console.log("Creating the background");

            this.Start();
        }
        // Functions
        public Start():void {
            this.Reset();
        }
        public Update():void {
            this.Move();
            this.CheckBound();
        }
        public Reset():void {
            // Reset my background y position.
            console.log("RESET!");
        }
        public Move():void{
            this.x += this.speedY;
        }

        // Collision Detection
        public CheckBound():void {
            if(this.y >= 0) {
                this.Reset();
            }
        }
    }
}