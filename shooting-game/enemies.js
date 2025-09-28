class Enemies{
    constructor(game){
        this.DIRECTIONS = {
            LEFT: false,
            RIGHT: true
        }
        this.game = game;
        this.frameTimer = 0;
        this.frameInterval = 1000/this.game.fps * 2;
        this.frameX = 0;
        this.maxFrameX = 7;
        this.frameAccelerator = 1;  //  multiply and accelerate frames
        this.x = Math.random() * this.game.canvasWidth + 1;
        this.y = Math.random() * this.game.canvasHeight + 1;
        this.moveRandUpdateInterval = 4;
        this.moveRandUpdateCounter = 0;
        this.movementRand = Math.random();
        this.walkLength = 2.5; //px
        this.facing = this.#getRandomObjectValue(this.DIRECTIONS);

        this.hitbox = {
            x: this.x + 70,
            y: this.y + 35,
            w: this.spriteWidth * 2 - 150,
            h: this.spriteHeight * 2 - 35
        }
        this.hitboxExpansion = 0;

        this.attackAnimationRunning = false;

        this.markedForDeletion = false;
        this.dead = false;
        this.deathFrameOffset = 2;

        this.audio = this.game.audio.enemies;
        this.audioCooldown = 0;
        this.audioPause = 3000;
        this.currentEnemySounds = 0;
        this.maxEnemySounds = 6;
    }
    update(dt){
        this.hitbox = {
            x: this.x + 70,
            y: this.y + 35,
            w: this.spriteWidth * 2 - 150,
            h: this.spriteHeight * 2 - 35
        }
    
        if(this.frameTimer < this.frameInterval){
            this.frameTimer += dt * this.frameAccelerator;
        }else{
            this.frameX += 1;
            if(this.frameX > this.maxFrameX){
                if(this.dead === false){
                    this.frameX = 0;
                }
            }
            this.frameTimer = 0;
            if(this.dead === false){
                let tempMoveRandUpdateInterval = 0;
                if(Math.random() < 0.50){
                    tempMoveRandUpdateInterval = this.moveRandUpdateInterval;
                }else{
                    tempMoveRandUpdateInterval = this.moveRandUpdateCounter / 2;
                }

                if(this.moveRandUpdateCounter >= tempMoveRandUpdateInterval){
                    this.movementRand = Math.random();
                    this.moveRandUpdateCounter = 0;
                }else{
                    this.moveRandUpdateCounter++;
                }
            }else{
                this.movementRand = 1;
            }
        }

        if(this.dead === true){
            this.image = this.deathAnimationSprites;
        }

        this.#moveEnemy(dt);

        if(this.attackAnimationRunning === true &&
            this.frameX === this.maxFrameX &&
            this.hitbox.x < this.game.Player.hitbox.x + this.game.Player.hitbox.w &&
            this.hitbox.x + this.hitbox.w > this.game.Player.hitbox.x &&
            this.hitbox.y < this.game.Player.hitbox.y + this.game.Player.hitbox.h &&
            this.hitbox.y + this.hitbox.h > this.game.Player.hitbox.y
        ){
            this.game.hurtPlayer(this.attackDmg);
            this.#playRandomAudio(this.audio.attacking);
        }

        if(this.hitbox.x < 0){
            this.x = -70;
        }
        if(this.hitbox.y < 0){
            this.y = -35;
        }
        if((this.hitbox.x) + (this.hitbox.w) > this.game.canvasWidth){
            this.x = this.game.canvasWidth - this.hitbox.w - 70;        }
        if(this.hitbox.y + this.hitbox.h > this.game.canvasHeight){
            this.y = this.game.canvasHeight - this.hitbox.h - 35;        
        }
    }
    updateDeadSkeleton(){
        if(this.frameX + this.deathFrameOffset > this.maxFrameX){
            this.game.incrementScore(this.scoreValue);
            this.markedForDeletion = true;
        }
    }
    draw(ctx){
        ctx.save();
        ctx.filter = "brightness(0.92) contrast(1.1) saturate(0.8)";
        if(this.facing === this.DIRECTIONS.LEFT){
            ctx.save();
            ctx.translate(this.game.canvasWidth, 0);
            ctx.scale(-1, 1);
            ctx.drawImage(
                this.image,
                this.frameX * this.spriteWidth,
                0,
                this.spriteWidth,
                this.spriteHeight,
                this.game.canvasWidth - this.x - this.spriteWidth * 2,
                this.y,
                this.spriteWidth * 2,
                this.spriteHeight * 2
            );
            ctx.restore();
        }else if(this.facing === this.DIRECTIONS.RIGHT){
            ctx.drawImage(
                        this.image, 
                        this.frameX * this.spriteWidth,
                        0,
                        this.spriteWidth, 
                        this.spriteHeight, 
                        this.x, 
                        this.y, 
                        this.spriteWidth * 2,
                        this.spriteHeight * 2
            );
        }
        ctx.restore();

        if(this.game.debugMode === true){
            ctx.strokeRect(this.hitbox.x, this.hitbox.y, this.hitbox.w, this.hitbox.h);
            ctx.save();
            ctx.strokeStyle = 'red';
            ctx.strokeRect(this.hitbox.x - this.hitboxExpansion, this.hitbox.y - this.hitboxExpansion, this.hitbox.w + this.hitboxExpansion + this.hitboxExpansion, this.hitbox.h + this.hitboxExpansion + this.hitboxExpansion);
            ctx.restore();
        }
    }
    #moveEnemy(dt){
        if(this.attackAnimationRunning === false) {
            switch(true) {
                case(this.movementRand <= 0.20):
                    this.x -= this.walkLength;
                    this.facing = this.DIRECTIONS.LEFT;
                    // left
                    break;
                case(this.movementRand <= 0.40 && this.movementRand > 0.20):
                    this.x += this.walkLength;
                    this.facing = this.DIRECTIONS.RIGHT;
                    // right
                    break;
                case(this.movementRand <= 0.60 && this.movementRand > 0.40):
                    this.y += this.walkLength;
                    // down
                    break;
                case(this.movementRand <= 0.80 && this.movementRand > 0.60):
                    this.y -= this.walkLength;
                    // up
                    break;
                default:
                    // idle
                    break;
            }
            if(this.movementRand <= 0.80){
                if(this.movementRand > 0.40){
                    if(this.audioCooldown <= 0){
                        this.game.currentEnemySounds += 1;
                        this.#playAudio(this.audio.rattle.id1);
                        this.audioCooldown = this.audioPause;
                    }else{
                        this.audioCooldown = this.audioCooldown - dt;
                        setTimeout(() => {
                            this.game.currentEnemySounds -= 1;
                        }, (500/16) * dt);
                    }
                }else if(this.movementRand < 0.20){
                    if(this.audioCooldown <= 0){
                        this.game.currentEnemySounds += 1;
                        this.#playRandomSequence(this.audio.rattle.id2);
                        this.audioCooldown = this.audioPause + 1000;
                    }else{
                        this.audioCooldown = this.audioCooldown - dt;
                        setTimeout(() => {
                            this.game.currentEnemySounds -= 1;
                        }, (500/16) * dt);
                    }
                }
            }
        }
    }
    #playAudio(audio){
        if(this.currentEnemySounds >= this.maxEnemySounds){
            return;
        }
        this.game.playAudio(audio);
    }
    #getRandomObjectValue(object){
        return this.game.getRandomObjectValue(object);
    }
    #playRandomAudio(audio){
        if(this.currentEnemySounds >= this.maxEnemySounds){
            return;
        }
        this.game.playRandomAudio(audio);
    }
    #playRandomSequence(audioObjs){
        if(this.currentEnemySounds >= this.maxEnemySounds){
            return;
        }
        this.game.playRandomSequence(audioObjs);
    }
}

export class WhiteSkeleton extends Enemies{
    constructor(game){
        super(game);
        this.image = document.getElementById("WhiteSkeletonIdle");
        this.spriteWidth = 96;
        this.spriteHeight = 64;
        this.attackDmg = 6;
        this.scoreValue = 10;
        
        this.deathAnimationSpriteID = "WhiteSkeletonDie";
        this.deathAnimationSprites = document.getElementById(this.deathAnimationSpriteID);
    }
    update(dt){
        super.update(dt);
        if(this.dead === false){
            this.updateSkeleton();
        }else{
            super.updateDeadSkeleton();
        }
    }
    updateSkeleton(){
        if(this.movementRand <= 0.80 &&
            !this.attackAnimationRunning
        ){
            this.image = document.getElementById("WhiteSkeletonWalk");
        }else if(this.movementRand > 0.80 &&
                !this.attackAnimationRunning
        ){
            this.image = document.getElementById("WhiteSkeletonIdle");
        }

        if(this.attackAnimationRunning === true){
            this.image = document.getElementById("WhiteSkeletonAttack");
        }
    }
    draw(ctx){
        super.draw(ctx);
    }
}

export class YellowSkeleton extends Enemies{
    constructor(game){
        super(game);
        this.image = document.getElementById("YellowSkeletonIdle");
        this.spriteWidth = 96;
        this.spriteHeight = 64;
        this.attackDmg = 10;
        this.scoreValue = 20;

        this.deathAnimationSpriteID = "YellowSkeletonDie";
        this.deathAnimationSprites = document.getElementById(this.deathAnimationSpriteID);
    }
    update(dt){
        super.update(dt);
        if(this.dead === false){
            this.updateSkeleton();
        }else{
            super.updateDeadSkeleton();
        }
    }
    updateSkeleton(){
        if(this.movementRand <= 0.80 && 
            !this.attackAnimationRunning
        ){
            this.image = document.getElementById("YellowSkeletonWalk");
        }else if(this.movementRand > 0.80 &&
            !this.attackAnimationRunning
        ){
            this.image = document.getElementById("YellowSkeletonIdle");
        }

        if(this.attackAnimationRunning === true){
            this.image = document.getElementById("YellowSkeletonAttack");
        }
    }
    draw(ctx){
        super.draw(ctx);
    }
}