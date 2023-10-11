let version = "3.50.8", x = 0, y = 0, x2 = 450, y2 = 450, life = 10, life2 = 10, booster = 10, booster2 = 10, boosterLock = 1, score = 0, score2 = 0, lock = -1, mode = 0, size = 200, keyLockA = 0, keyLockW = 0, keyLockD = 0, keyLockS = 0, keyLockAL = 0, keyLockAU = 0, keyLockAR = 0, keyLockAD = 0, keyLockSP = 0, keyLockP = 0, keyLockE = 0, sound = 0, onBlur = 0, onBlur2 = 0, timeout, timeout2, timeout3, timeout4, timeout5, timeout6, timeout7, softkey = 0, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, w2, z, z2, z3, z4, destroyMode = 0;
window.addEventListener("keydown", move);
window.addEventListener("keyup", boost);


function boost(event){
    if(godMode == 0){
    if((event.code == "KeyA") && (keyLockA == 1)){
        keyLockA = 0;
    }
    else if((event.code == "KeyW") && (keyLockW == 1)){
        keyLockW = 0;
    }
    else if((event.code == "KeyD") && (keyLockD == 1)){
        keyLockD = 0;
    }
    else if((event.code == "KeyS") && (keyLockS == 1)){
        keyLockS = 0;
    }
    else if((event.code == "KeyK") && (keyLockAL == 1)){
        keyLockAL = 0;
    }
    else if((event.code == "KeyO") && (keyLockAU == 1)){
        keyLockAU = 0;
    }
    else if((event.code == "Semicolon") && (keyLockAR == 1)){
        keyLockAR = 0;
    }
    else if((event.code == "KeyL") && (keyLockAD == 1)){
        keyLockAD = 0;
    }
    else if((event.code == "Space") && (keyLockSP == 1)){
        keyLockSP = 0;
    }
    else if((event.code == "KeyP") && (keyLockP == 1)){
        keyLockP = 0;
    }
    else if((event.code == "KeyQ") && (keyLockE == 1)){
        keyLockE = 0;
    }
    else{}
}
}


function move(e){
    if(godMode == 0){
    if(e.code == "Space"){
        keyLockSP = 1;
    }
    else if((e.code == "KeyA") && (life > 0) && (keyLockA == 0) && (softkey == 0)){
        keyLockA = 1;
        if((keyLockSP == 1) && (booster > 0) && (mode == 1)){
            if(sound == 0){
                document.getElementById("a2").pause();
                document.getElementById("a2").currentTime = 0;
                document.getElementById("a2").play();
            }
            x = 0;
            if(boosterLock == 0){
                booster --;
                document.getElementById("box").textContent = booster;
            }
        }
        else if((keyLockE == 1) && (booster > 0) && (mode == 2)){
            if(sound == 0){
                document.getElementById("a2").pause();
                document.getElementById("a2").currentTime = 0;
                document.getElementById("a2").play();
            }
            x = 0;
            if(boosterLock == 0){
                booster --;
                document.getElementById("box").textContent = booster;
            }
        }
        else{
            if(x == 0){
                if(sound == 0){
                    document.getElementById("a9").pause();
                    document.getElementById("a9").currentTime = 0;
                    document.getElementById("a9").play();
                }
            }
            else{
                if(sound == 0){
                    document.getElementById("a1").pause();
                    document.getElementById("a1").currentTime = 0;
                    document.getElementById("a1").play();
                }
            }
            x -= 30;
        }
        document.getElementById("box3").style.zIndex = "0";
        document.getElementById("box").style.zIndex = "1";
        document.getElementById("box5").style.zIndex = "4";
        document.getElementById("box6").style.zIndex = "3";
    }
    else if((e.code == "KeyW") && (life > 0) && (keyLockW == 0) && (softkey == 0)){
        keyLockW = 1;
        if((keyLockSP == 1) && (booster > 0) && (mode == 1)){
            if(sound == 0){
                document.getElementById("a2").pause();
                document.getElementById("a2").currentTime = 0;
                document.getElementById("a2").play();
            }
            y = 0;
            if(boosterLock == 0){
                booster --;
                document.getElementById("box").textContent = booster;
            }
        }
        else if((keyLockE == 1) && (booster > 0) && (mode == 2)){
            if(sound == 0){
                document.getElementById("a2").pause();
                document.getElementById("a2").currentTime = 0;
                document.getElementById("a2").play();
            }
            y = 0;
            if(boosterLock == 0){
                booster --;
                document.getElementById("box").textContent = booster;
            }
        }
        else{
            if(y == 0){
                if(sound == 0){
                    document.getElementById("a9").pause();
                    document.getElementById("a9").currentTime = 0;
                    document.getElementById("a9").play();
                }
            }
            else{
                if(sound == 0){
                    document.getElementById("a1").pause();
                    document.getElementById("a1").currentTime = 0;
                    document.getElementById("a1").play();
                }
            }
            y -= 30;
        }
        document.getElementById("box3").style.zIndex = "0";
        document.getElementById("box").style.zIndex = "1";
        document.getElementById("box5").style.zIndex = "4";
        document.getElementById("box6").style.zIndex = "3";
    }
    else if((e.code == "KeyD") && (life > 0) && (keyLockD == 0) && (softkey == 0)){
        keyLockD = 1;
        if((keyLockSP == 1) && (booster > 0) && (mode == 1)){
            if(sound == 0){
                document.getElementById("a2").pause();
                document.getElementById("a2").currentTime = 0;
                document.getElementById("a2").play();
            }
            x = 420;
            if(boosterLock == 0){
                booster --;
                document.getElementById("box").textContent = booster;
            }
        }
        else if((keyLockE == 1) && (booster > 0) && (mode == 2)){
            if(sound == 0){
                document.getElementById("a2").pause();
                document.getElementById("a2").currentTime = 0;
                document.getElementById("a2").play();
            }
            x = 420;
            if(boosterLock == 0){
                booster --;
                document.getElementById("box").textContent = booster;
            }
        }
        else{
            if(x == 420){
                if(sound == 0){
                    document.getElementById("a9").pause();
                    document.getElementById("a9").currentTime = 0;
                    document.getElementById("a9").play();
                }
            }
            else{
                if(sound == 0){
                    document.getElementById("a1").pause();
                    document.getElementById("a1").currentTime = 0;
                    document.getElementById("a1").play();
                }
            }
            x += 30;
        }
        document.getElementById("box3").style.zIndex = "0";
        document.getElementById("box").style.zIndex = "1";
        document.getElementById("box5").style.zIndex = "4";
        document.getElementById("box6").style.zIndex = "3";
    }
    else if((e.code == "KeyS") && (life > 0) && (keyLockS == 0) && (softkey == 0)){
    keyLockS = 1;
        if((keyLockSP == 1) && (booster > 0) && (mode == 1)){
            if(sound == 0){
                document.getElementById("a2").pause();
                document.getElementById("a2").currentTime = 0;
                document.getElementById("a2").play();
            }
            y = 420;
            if(boosterLock == 0){
                booster --;
                document.getElementById("box").textContent = booster;
            }
        }
        else if((keyLockE == 1) && (booster > 0) && (mode == 2)){
            if(sound == 0){
                document.getElementById("a2").pause();
                document.getElementById("a2").currentTime = 0;
                document.getElementById("a2").play();
            }
            y = 420;
            if(boosterLock == 0){
                booster --;
                document.getElementById("box").textContent = booster;
            }
        }
        else{
            if(y == 420){
                if(sound == 0){
                    document.getElementById("a9").pause();
                    document.getElementById("a9").currentTime = 0;
                    document.getElementById("a9").play();
                }
            }
            else{
                if(sound == 0){
                    document.getElementById("a1").pause();
                    document.getElementById("a1").currentTime = 0;
                    document.getElementById("a1").play();
                }
            }
            y += 30;
        }
        document.getElementById("box3").style.zIndex = "0";
        document.getElementById("box").style.zIndex = "1";
        document.getElementById("box5").style.zIndex = "4";
        document.getElementById("box6").style.zIndex = "3";
    }
    
    else if((e.code == "KeyK") && (life > 0) && (keyLockAL == 0) && (softkey == 0)){
        keyLockAL = 1;
        if(mode == 1){
            if((keyLockSP == 1) && (booster > 0)){
                if(sound == 0){
                    document.getElementById("a2").pause();
                    document.getElementById("a2").currentTime = 0;
                    document.getElementById("a2").play();
                }
                x = 0;
                if(boosterLock == 0){
                    booster --;
                    document.getElementById("box").textContent = booster;
                }
            }
            else{
                if(x == 0){
                    if(sound == 0){
                        document.getElementById("a9").pause();
                        document.getElementById("a9").currentTime = 0;
                        document.getElementById("a9").play();
                    }
                }
                else{
                    if(sound == 0){
                        document.getElementById("a1").pause();
                        document.getElementById("a1").currentTime = 0;
                        document.getElementById("a1").play();
                    }
                }
                x -= 30;
            }
        }
        else{
            if((keyLockP == 1) && (booster2 > 0)){
                if(sound == 0){
                    document.getElementById("a2").pause();
                    document.getElementById("a2").currentTime = 0;
                    document.getElementById("a2").play();
                }
                x2 = 0;
                if(boosterLock == 0){
                    booster2 --;
                    document.getElementById("box3").textContent = booster2;
                }
            }
            else{
                if(x2 == 0){
                    if(sound == 0){
                        document.getElementById("a9").pause();
                        document.getElementById("a9").currentTime = 0;
                        document.getElementById("a9").play();
                    }
                }
                else{
                    if(sound == 0){
                        document.getElementById("a1").pause();
                        document.getElementById("a1").currentTime = 0;
                        document.getElementById("a1").play();
                    }
                }
                x2 -= 30;
            }
        }
        document.getElementById("box").style.zIndex = "0";
        document.getElementById("box3").style.zIndex = "1";
        document.getElementById("box5").style.zIndex = "3";
        document.getElementById("box6").style.zIndex = "4";
    }
    else if((e.code == "KeyO") && (life > 0) && (keyLockAU == 0) && (softkey == 0)){
        keyLockAU = 1;
        if(mode == 1){
            if((keyLockSP == 1) && (booster > 0)){
                if(sound == 0){
                    document.getElementById("a2").pause();
                    document.getElementById("a2").currentTime = 0;
                    document.getElementById("a2").play();
                }
                y = 0;
                if(boosterLock == 0){
                    booster --;
                    document.getElementById("box").textContent = booster;
                }
            }
            else{
                if(y == 0){
                    if(sound == 0){
                        document.getElementById("a9").pause();
                        document.getElementById("a9").currentTime = 0;
                        document.getElementById("a9").play();
                    }
                }
                else{
                    if(sound == 0){
                        document.getElementById("a1").pause();
                        document.getElementById("a1").currentTime = 0;
                        document.getElementById("a1").play();
                    }
                }
                y -= 30;
            }
        }
        else{
            if((keyLockP == 1) && (booster2 > 0)){
                if(sound == 0){
                    document.getElementById("a2").pause();
                    document.getElementById("a2").currentTime = 0;
                    document.getElementById("a2").play();
                }
                y2 = 0;
                if(boosterLock == 0){
                    booster2 --;
                    document.getElementById("box3").textContent = booster2;
                }
            }
            else{
                if(y2 == 0){
                    if(sound == 0){
                        document.getElementById("a9").pause();
                        document.getElementById("a9").currentTime = 0;
                        document.getElementById("a9").play();
                    }
                }
                else{
                    if(sound == 0){
                        document.getElementById("a1").pause();
                        document.getElementById("a1").currentTime = 0;
                        document.getElementById("a1").play();
                    }
                }
                y2 -= 30;
            }
        }
        document.getElementById("box").style.zIndex = "0";
        document.getElementById("box3").style.zIndex = "1";
        document.getElementById("box5").style.zIndex = "3";
        document.getElementById("box6").style.zIndex = "4";
    }
    else if((e.code == "Semicolon") && (life > 0) && (keyLockAR == 0) && (softkey == 0)){
        keyLockAR = 1;
        if(mode == 1){
            if((keyLockSP == 1) && (booster > 0)){
                if(sound == 0){
                    document.getElementById("a2").pause();
                    document.getElementById("a2").currentTime = 0;
                    document.getElementById("a2").play();
                }
                x = 420;
                if(boosterLock == 0){
                    booster --;
                    document.getElementById("box").textContent = booster;
                }
            }
            else{
                if(x == 420){
                    if(sound == 0){
                        document.getElementById("a9").pause();
                        document.getElementById("a9").currentTime = 0;
                        document.getElementById("a9").play();
                    }
                }
                else{
                    if(sound == 0){
                        document.getElementById("a1").pause();
                        document.getElementById("a1").currentTime = 0;
                        document.getElementById("a1").play();
                    }
                }
                x += 30;
            }
        }
        else{
            if((keyLockP == 1) && (booster2 > 0)){
                if(sound == 0){
                    document.getElementById("a2").pause();
                    document.getElementById("a2").currentTime = 0;
                    document.getElementById("a2").play();
                }
                x2 = 420;
                if(boosterLock == 0){
                    booster2 --;
                    document.getElementById("box3").textContent = booster2;
                }
            }
            else{
                if(x2 == 420){
                    if(sound == 0){
                        document.getElementById("a9").pause();
                        document.getElementById("a9").currentTime = 0;
                        document.getElementById("a9").play();
                    }
                }
                else{
                    if(sound == 0){
                        document.getElementById("a1").pause();
                        document.getElementById("a1").currentTime = 0;
                        document.getElementById("a1").play();
                    }
                }
                x2 += 30;
            }
        }
        document.getElementById("box").style.zIndex = "0";
        document.getElementById("box3").style.zIndex = "1";
        document.getElementById("box5").style.zIndex = "3";
        document.getElementById("box6").style.zIndex = "4";
    }
    else if((e.code == "KeyL") && (life > 0) && (keyLockAD == 0) && (softkey == 0)){
        keyLockAD = 1;
        if(mode == 1){
            if((keyLockSP == 1) && (booster > 0)){
                if(sound == 0){
                    document.getElementById("a2").pause();
                    document.getElementById("a2").currentTime = 0;
                    document.getElementById("a2").play();
                }
                y = 420;
                if(boosterLock == 0){
                    booster --;
                    document.getElementById("box").textContent = booster;
                }
            }
            else{
                if(y == 420){
                    if(sound == 0){
                        document.getElementById("a9").pause();
                        document.getElementById("a9").currentTime = 0;
                        document.getElementById("a9").play();
                    }
                }
                else{
                    if(sound == 0){
                        document.getElementById("a1").pause();
                        document.getElementById("a1").currentTime = 0;
                        document.getElementById("a1").play();
                    }
                }
                y += 30;
            }
        }
        else{
            if((keyLockP == 1) && (booster2 > 0)){
                if(sound == 0){
                    document.getElementById("a2").pause();
                    document.getElementById("a2").currentTime = 0;
                    document.getElementById("a2").play();
                }
                y2 = 420;
                if(boosterLock == 0){
                    booster2 --;
                    document.getElementById("box3").textContent = booster2;
                }
            }
            else{
                if(y2 == 420){
                    if(sound == 0){
                        document.getElementById("a9").pause();
                        document.getElementById("a9").currentTime = 0;
                        document.getElementById("a9").play();
                    }
                }
                else{
                    if(sound == 0){
                        document.getElementById("a1").pause();
                        document.getElementById("a1").currentTime = 0;
                        document.getElementById("a1").play();
                    }
                }
                y2 += 30;
            }
        }
        document.getElementById("box").style.zIndex = "0";
        document.getElementById("box3").style.zIndex = "1";
        document.getElementById("box5").style.zIndex = "3";
        document.getElementById("box6").style.zIndex = "4";
    }
    
    else if((e.code == "KeyP")){
        keyLockP = 1;
    }
    else if((e.code == "KeyQ")){
        keyLockE = 1;
    }
    else if((e.code == "Enter") && (softkey == 0)){
        if(lock == 0){
            lock = 1;
            start();
        }
        else if(lock == 4){
            lock = 5;
            document.getElementById("a7").play();
            document.getElementById("status").innerHTML = "♪ Fatal Destination ♪<br>----------------------------<br>一時停止 / Enter<br>10秒戻る / X<br>10秒送る / C<br>終了 / Z";
        }
        else if(lock == 5){
            lock = 4;
            document.getElementById("a7").pause();
            document.getElementById("status").innerHTML = "♪ Fatal Destination ♪<br>----------------------------<br>再生 / Enter<br>10秒戻る / X<br>10秒送る / C<br>終了 / Z";
        }
        else{}
    }
    else if((e.code == "Escape") && (softkey == 0)){
        if((lock == -1) || (lock == 0) || (lock == 2)){
            window.location.reload();
        }
    }
    else if((e.code == "KeyZ") && (softkey == 0)){
        if(lock == 0){
            lock = 3;
            document.getElementById("status").innerHTML = "* 音声オプション *<br>----------------------------<br>全ての音声をオン / Z（負荷：高）<br>一部音声のみオン / X（負荷：中）<br>全ての音声をオフ / C（負荷：低）<br>音楽を聴く / Space ＋ Z";
        }
        else if(lock == 3){
            if(keyLockSP == 1){
                lock = 4;
                document.getElementById("status").innerHTML = "♪ Fatal Destination ♪<br>----------------------------<br>再生 / Enter<br>10秒戻る / X<br>10秒送る / C<br>終了 / Z";
            }
            else{
                lock = 0;
                sound = 0;
                if(mode == 1){
                    document.getElementById("status").innerHTML = "* 操作方法（1人） *<br>----------------------------<br>ゲームを始める / Enter<br>移動 / WASD & OKL;<br>ワープ / Space + 移動<br>音声オプション / Z<br>（現在：全ての音声をオン）<br>戻る / Escape";
                }
                else{
                    document.getElementById("status").innerHTML = "* 操作方法（2人） *<br>----------------------------<br>ゲームを始める / Enter<br>1P移動 / WASD<br>2P移動 / OKL;<br>1Pワープ / Q + 移動<br>2Pワープ / P + 移動<br>音声オプション / Z<br>（現在：全ての音声をオン）<br>戻る / Escape";
                }
            }
        }
        else if((lock == 4) || (lock == 5)){
            lock = 3;
            document.getElementById("a7").pause();
            document.getElementById("a7").currentTime = 0;
            document.getElementById("status").innerHTML = "* 音声オプション *<br>----------------------------<br>全ての音声をオン / Z（負荷：高）<br>一部音声のみオン / X（負荷：中）<br>全ての音声をオフ / C（負荷：低）<br>音楽を聴く / Space ＋ Z";
        }
        else if(lock == -1){
            lock = 0;
            mode = 1;
            document.getElementById("box").style.display = "block";
            document.getElementById("box").style.display = "grid";
            x = 0, y = 420;
            document.getElementById("status").innerHTML = "* 操作方法（1人） *<br>----------------------------<br>ゲームを始める / Enter<br>移動 / WASD & OKL;<br>ワープ / Space + 移動<br>音声オプション / Z<br>（現在：全ての音声をオン）<br>戻る / Escape";
        }
        else{}
    }
    else if((e.code == "KeyX") && (softkey == 0)){
        if(lock == 3){
            lock = 0;
            sound = 1;
            if(mode == 1){
                document.getElementById("status").innerHTML = "* 操作方法（1人） *<br>----------------------------<br>ゲームを始める / Enter<br>移動 / WASD & OKL;<br>ワープ / Space + 移動<br>音声オプション / Z<br>（現在：一部音声のみオン）<br>戻る / Escape";
            }
            else{
                document.getElementById("status").innerHTML = "* 操作方法（2人） *<br>----------------------------<br>ゲームを始める / Enter<br>1P移動 / WASD<br>2P移動 / OKL;<br>1Pワープ / Q + 移動<br>2Pワープ / P + 移動<br>音声オプション / Z<br>（現在：一部音声のみオン）<br>戻る / Escape";
            }
        }
        else if((lock == 4) || (lock == 5)){
            document.getElementById("a7").currentTime -= 10;
        }
        else if(lock == -1){
            lock = 0;
            mode = 2;
            document.getElementById("box").style.display = "block";
            document.getElementById("box").style.display = "grid";
            document.getElementById("box3").style.display = "block";
            document.getElementById("box3").style.display = "grid";
            x = 0, y = 420, x2 = 420, y2 = 420;
            document.getElementById("box5").style.display = "block";
            document.getElementById("box5").style.display = "grid";
            document.getElementById("box5").style.top = (y - 44) + "px";
            document.getElementById("box5").style.left = (x - 10) + "px";
            document.getElementById("box6").style.display = "block";
            document.getElementById("box6").style.display = "grid";
            document.getElementById("box6").style.top = (y2 - 44) + "px";
            document.getElementById("box6").style.left = (x2 - 10) + "px";
            document.getElementById("status").innerHTML = "* 操作方法（2人） *<br>----------------------------<br>ゲームを始める / Enter<br>1P移動 / WASD<br>2P移動 / OKL;<br>1Pワープ / Q + 移動<br>2Pワープ / P + 移動<br>音声オプション / Z<br>（現在：全ての音声をオン）<br>戻る / Escape";
        }
        else{}
    }
    else if((e.code == "KeyC") && (softkey == 0)){
        if(lock == 3){
            lock = 0;
            sound = 2;
            if(mode == 1){
                document.getElementById("status").innerHTML = "* 操作方法（1人） *<br>----------------------------<br>ゲームを始める / Enter<br>移動 / WASD & OKL;<br>ワープ / Space + 移動<br>音声オプション / Z<br>（現在：全ての音声をオフ）<br>戻る / Escape";
            }
            else{
                document.getElementById("status").innerHTML = "* 操作方法（2人） *<br>----------------------------<br>ゲームを始める / Enter<br>1P移動 / WASD<br>2P移動 / OKL;<br>1Pワープ / Q + 移動<br>2Pワープ / P + 移動<br>音声オプション / Z<br>（現在：全ての音声をオフ）<br>戻る / Escape";
            }
        }
        else if((lock == 4) || (lock == 5)){
            document.getElementById("a7").currentTime += 10;
        }
        else if(lock == -1){
            document.getElementById("status").innerHTML = "* 『SQUARE BOMB!!』説明書 *<br>----------------------------<br>＜ゲームの説明＞<br>『SQUARE BOMB!!』は、15×15の正方形のフィールド上でランダムに炸裂する様々な爆発を避けるゲームです。あなたの連打力と判断力が試されます。さあ、一体どれだけ生き延びることができるのか...<br>-<br>＜1人でプレイ＞<br>両手をフルに使って素早く移動でき、爆発の出現間隔も短めです。1人でとことん極めたい人向け。<br>-<br>＜2人でプレイ＞<br>キーボードを分け合ってどちらが長く生き延びれるか競うモードです。1人向けよりも爆発の出現間隔と速度は長めです。<br>-<br>＜推奨環境＞<br>CPU：Intel core i3 第六世代以上<br>ブラウザ：Firefox, Safari, 各種Chromiumベースブラウザ<br>キーボード操作に対応したモバイル端末でもプレイ可能です（ただしios端末では処理が著しく重くなることがあります）。<br>10インチ以上のモニターを推奨しています。<br>-<br>＜その他の情報＞<br>製作者：Haruto Fukutome<br>X：<a href=''>@rawmeat_mazui</a> <a href=''>@hal_03_</a><br>バージョン：Duet3.0, v" + version + "<br>----------------------------<br>戻る / Escape";
        }
        else{}
    }
    else{}
    if(x < 0){
        x = 0;
    }
    if(x > 420){
        x = 420;
    }
    if(y < 0){
        y = 0;
    }
    if(y > 420){
        y = 420;
    }
    if(mode == 2){
        if(x2 < 0){
            x2 = 0;
        }
        if(x2 > 420){
            x2 = 420;
        }
        if(y2 < 0){
            y2 = 0;
        }
        if(y2 > 420){
            y2 = 420;
        }
    }
    document.getElementById("box").style.top = y + "px";
    document.getElementById("box").style.left = x + "px";
    document.getElementById("box3").style.top = y2 + "px";
    document.getElementById("box3").style.left = x2 + "px";
    document.getElementById("box5").style.top = (y - 44) + "px";
    document.getElementById("box5").style.left = (x - 10) + "px";
    document.getElementById("box6").style.top = (y2 - 44) + "px";
    document.getElementById("box6").style.left = (x2 - 10) + "px";
}
}


function start(){
    document.getElementById("rights").style.display = "none";
    document.getElementById("space").style.display = "none";
    if(sound != 2){
        document.getElementById("a10").pause();
        document.getElementById("a10").currentTime = 0;
        document.getElementById("a10").play();
    }
    document.getElementById("display").style.animation = "count1 1s";
    document.getElementById("status").textContent = "READY...";
    document.getElementById("display").style.color = "#222222";
    document.getElementById("display").textContent = "3";
    setTimeout(function(){
        if(sound != 2){
            document.getElementById("a10").pause();
            document.getElementById("a10").currentTime = 0;
            document.getElementById("a10").play();
        }
        document.getElementById("display").style.animation = "count2 1s";
        document.getElementById("status").textContent = "READY..";
        document.getElementById("display").textContent = "2";
        setTimeout(function(){
            if(sound != 2){
                document.getElementById("a10").pause();
                document.getElementById("a10").currentTime = 0;
                document.getElementById("a10").play();
            }
            document.getElementById("display").style.animation = "count3 1s";
            document.getElementById("status").textContent = "READY.";
            document.getElementById("display").textContent = "1";
            setTimeout(function(){
                document.getElementById("display").style.animation = "";
                if(sound != 2){
                    document.getElementById("a6").pause();
                    document.getElementById("a6").currentTime = 0;
                    document.getElementById("a6").play();
                }
                document.getElementById("display").style.animation = "count4 1s";
                document.getElementById("status").textContent = "避けろ!!";
                document.getElementById("display").textContent = "START";
                setTimeout(function(){
                    lock = 2;
                    if(sound != 2){
                        document.getElementById("a7").play();
                    }
                    boosterLock = 0;
                    let timer = Math.round(Math.random()*300) + 200;
                    let timer2 = Math.round(Math.random()*7000);
                    let timer3 = Math.round(Math.random()*7000) + 3000;
                    if(mode == 1){
                        document.getElementById("box").textContent = booster;
                        document.getElementById("status").innerHTML = "HP：" + life + " / 回避できた数：0<br>リセット / Escape";
                        document.getElementById("display").textContent = "HP：" + life;
                        document.getElementById("display").style.animation = "fadeIn2 1s";
                        setTimeout(attack, timer);
                        setTimeout(attack2, timer2);
                        setTimeout(attack3, timer3);
                        setTimeout(heal, 1500);
                        setTimeout(heal2, 1500);
                        setTimeout(killer, 1500);
                        setTimeout(blur, 1500);
                        setTimeout(killer2, 15000);
                    }
                    else if(godMode == 1){
                        document.getElementById("display").textContent = "OBSERVER";
                        document.getElementById("display").style.animation = "fadeIn2 1s";
                        setTimeout(attack, timer);
                        setTimeout(attack2, timer2);
                        setTimeout(attack3, timer3);
                        setTimeout(heal, 1500);
                        setTimeout(heal2, 1500);
                        setTimeout(killer, 1500);
                        setTimeout(blur, 1500);
                        setTimeout(killer2, 15000);
                    }
                    else{
                        document.getElementById("box").textContent = booster;
                        document.getElementById("box3").textContent = booster2;
                        document.getElementById("display").innerHTML = "<span><div id='hp1'>1P：" + life + "</div><div id='hp2'>2P：" + life2 + "</div></span>";
                        document.getElementById("display").style.animation = "fadeIn2 1s";
                        document.getElementById("status").innerHTML = "（1P）HP：" + life + " / 回避できた数：" + score + "<br>（2P）HP：" + life2 + " / 回避できた数：" + score2 + "<br>リセット / Escape";
                        setTimeout(attack_2, timer);
                        setTimeout(attack2_2, timer2);
                        setTimeout(heal_2, 1500);
                        setTimeout(heal2_2, 1500);
                        setTimeout(killer_2, 1500);
                        setTimeout(blur_2, 1500);
                    }
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}


function attack(){
    if((life > 0) && (destroyMode != 1)){
        document.getElementById("attack").style.backgroundColor = "#00000000";
        let timing = Math.round(Math.random()*135) + 100;
        e = Math.round(Math.random()*60);
        a = Math.round(Math.random()*150) + 240;
        b = Math.round(Math.random()*150) + 240;
        if(e < 10){
            c = 10;
            d = 10;
        }
        else if(e < 20){
            c = 10;
            d = 440 - b;
        }
        else if(e < 30){
            c = 440 - a;
            d = 10;
        }
        else if(e < 40){
            c = 440 - a;
            d = 440 - b;
        }
        else{
            c = Math.round(Math.random()*(440 - a));
            d = Math.round(Math.random()*(440 - b));
        }
        document.getElementById("attack").style.height = a + "px";
        document.getElementById("attack").style.width = b + "px";
        document.getElementById("attack").style.top = c + "px";
        document.getElementById("attack").style.left = d + "px";
        if(sound == 0){
            document.getElementById("a3").pause();
            document.getElementById("a3").currentTime = 0;
            document.getElementById("a3").play();
        }
        document.getElementById("attack").style.display = "block";
        document.getElementById("attack").style.display = "grid";
        document.getElementById("attack").textContent = "3";
        setTimeout(function(){
            document.getElementById("attack").style.display = "none";
            setTimeout(function(){
                if(sound == 0){
                    document.getElementById("a3").pause();
                    document.getElementById("a3").currentTime = 0;
                    document.getElementById("a3").play();
                }
                document.getElementById("attack").style.display = "block";
                document.getElementById("attack").style.display = "grid";
                document.getElementById("attack").textContent = "2";
                setTimeout(function(){
                    document.getElementById("attack").style.display = "none";
                    setTimeout(function(){
                        if(sound == 0){
                            document.getElementById("a3").pause();
                            document.getElementById("a3").currentTime = 0;
                            document.getElementById("a3").play();
                        }
                        document.getElementById("attack").style.display = "block";
                        document.getElementById("attack").style.display = "grid";
                        document.getElementById("attack").textContent = "1";
                        setTimeout(function(){
                            document.getElementById("attack").style.display = "none";
                            setTimeout(function(){
                                if(sound == 0){
                                    document.getElementById("a4").pause();
                                    document.getElementById("a4").currentTime = 0;
                                    document.getElementById("a4").play();
                                }
                                document.getElementById("attack").style.backgroundColor = "#ff0000";
                                document.getElementById("attack").style.display = "block";
                                document.getElementById("attack").style.display = "grid";
                                document.getElementById("attack").textContent = "BOMB!";
                                if(((x + 30) >= d) && ((y + 30) >= c) && (x <= (b + d)) && (y <= (a + c))){
                                    life --;
                                    if(life > 0){
                                        if(sound != 2){
                                            document.getElementById("a8").pause();
                                            document.getElementById("a8").currentTime = 0;
                                            document.getElementById("a8").play();
                                        }
                                        document.getElementById("status").innerHTML = "HP：" + life + " / 回避できた数：" + score + "<br>リセット / Escape";
                                        clearTimeout(timeout);
                                        if(destroyMode ==  0){
                                            document.getElementById("display").style.animation = "damege .9s";
                                            animationReset();
                                        }
                                        document.getElementById("display").textContent = "HP：" + life;
                                    }
                                    if(life == 0){
                                        if(sound != 2){
                                            document.getElementById("a11").pause();
                                            document.getElementById("a11").currentTime = 0;
                                            document.getElementById("a11").play();
                                            document.getElementById("a7").pause();
                                            document.getElementById("a7").currentTime = 0;
                                            document.getElementById("a5").pause();
                                            document.getElementById("a5").currentTime = 0;
                                            document.getElementById("a5").play();
                                        }
                                        boosterLock = 1;
                                        clearTimeout(timeout);
                                        let comment = Math.round(Math.random()*1000);
                                        if(comment < 10){
                                            comment = "実はこれ 当たっても特にいいことないよ（レア度：超激レア）";
                                        }
                                        else if(comment < 20){
                                            comment = "逃げちゃダメだ 逃げちゃダメだ 逃げty...（レア度：超激レア）";
                                        }
                                        else if(comment < 50){
                                            comment = "......（ネタ切れ）（レア度：激レア）";
                                        }
                                        else if(comment < 80){
                                            comment = "ちなみにこのコメントが出る確率は3%です（レア度：激レア）";
                                        }
                                        else if(comment < 110){
                                            comment = "トマト嫌いな人とは分かりあえる気がしない（レア度：激レア）";
                                        }
                                        else if(comment < 260){
                                            comment = "遊ぶときはJavaScriptを有効にしてね！（遅い）（レア度：レア）";
                                        }
                                        else if(comment < 310){
                                            comment = "あしぃーたがあぁーるぅーさあぁー ♪（レア度：レア）";
                                        }
                                        else if(comment < 360){
                                            comment = "正直このコメントいらないよな（レア度：レア）";
                                        }
                                        else if(comment < 410){
                                            comment = "赤い爆発が高確率で四隅に出現するの あなたの運が悪いだけです（レア度：レア）";
                                        }
                                        else if(comment < 510){
                                            comment = "中央付近で立ち回るといいかも！（レア度：コモン）";
                                        }
                                        else if(comment < 610){
                                            comment = "さあ もう一回どうだい？（レア度：コモン）";
                                        }
                                        else if(comment < 710){
                                            comment = "瞬間移動を使いこなすことが大切！（レア度：コモン）";
                                        }
                                        else if(comment < 810){
                                            comment = "ピンクの爆発に当たると一発アウト！（レア度：コモン）";
                                        }
                                        else if(comment < 910){
                                            comment = "ありゃ... そういう日もある（レア度：コモン）";
                                        }
                                        else{
                                            comment = "諦めたらそこで試合終了ですよ？（レア度：顧問）";
                                        }
                                        document.getElementById("status").innerHTML = comment + "<br>回避できた数：" + score + "<br>リセット / Escape";
                                        document.getElementById("display").style.animation = "red 1.8s infinite";
                                        document.getElementById("display").textContent = "CRASHED";
                                        setTimeout(function(){
                                            document.getElementById("box").style.display = "none";
                                            setTimeout(function(){
                                                document.getElementById("box").style.display = "block";
                                                document.getElementById("box").style.display = "grid";
                                                setTimeout(function(){
                                                    document.getElementById("box").style.display = "none";
                                                    setTimeout(function(){
                                                        document.getElementById("box").style.display = "block";
                                                        document.getElementById("box").style.display = "grid";
                                                        setTimeout(function(){
                                                            document.getElementById("box").style.display = "none";
                                                            setTimeout(function(){
                                                                document.getElementById("box").style.display = "block";
                                                                document.getElementById("box").style.display = "grid";
                                                                setTimeout(function(){
                                                                    document.getElementById("box").style.display = "none";
                                                                    setTimeout(function(){
                                                                        document.getElementById("box").style.display = "block";
                                                                        document.getElementById("box").style.display = "grid";
                                                                        setTimeout(function(){
                                                                            document.getElementById("box").style.display = "none";
                                                                        }, 100);
                                                                    }, 100);
                                                                }, 100);
                                                            }, 100);
                                                        }, 100);
                                                    }, 100);
                                                }, 100);
                                            }, 100);
                                        }, 100);
                                    }
                                }
                                else if(life > 0){
                                    score ++;
                                    if((score % 5) == 0){
                                        document.getElementById("counter").style.display = "block";
                                        document.getElementById("counter").style.display = "grid";
                                        document.getElementById("counter").textContent = score;
                                    erase();
                                    }
                                    document.getElementById("status").innerHTML = "HP：" + life + " / 回避できた数：" + score + "<br>リセット / Escape";
                                }
                                setTimeout(function(){
                                    document.getElementById("attack").style.display = "none";
                                    setTimeout(function(){
                                        if((life > 0) && (destroyMode != 1)){
                                            let time = Math.round(Math.random()*1000);
                                            setTimeout(attack, time);
                                        }
                                    }, timing);
                                }, timing);
                            }, timing);
                        }, timing);
                    }, timing);
                }, timing);
            }, timing);
        }, timing);
    }else{}
}


function attack2(){
    if((life > 0) && (destroyMode != 1)){
        document.getElementById("attack2").style.backgroundColor = "#00000000";
        let timing = Math.round(Math.random()*120) + 135;
        l = Math.round(Math.random()*40);
        if(l < 10){
            m = 215;
            n = 430;
            o = 10;
            p = 10;
        }
        else if(l < 20){
            m = 430;
            n = 215;
            o = 225;
            p = 10;
        }
        else if(l < 30){
            m = 215;
            n = 430;
            o = 10;
            p = 225;
        }
        else{
            m = 430;
            n = 215;
            o = 10;
            p = 10;
        }
        document.getElementById("attack2").style.height = n + "px";
        document.getElementById("attack2").style.width = m + "px";
        document.getElementById("attack2").style.top = o + "px";
        document.getElementById("attack2").style.left = p + "px";
        if(sound == 0){
            document.getElementById("a23").pause();
            document.getElementById("a23").currentTime = 0;
            document.getElementById("a23").play();
        }
        document.getElementById("attack2").style.display = "block";
        document.getElementById("attack2").style.display = "grid";
        document.getElementById("attack2").textContent = "3";
        setTimeout(function(){
            document.getElementById("attack2").style.display = "none";
            setTimeout(function(){
                if(sound == 0){
                    document.getElementById("a23").pause();
                    document.getElementById("a23").currentTime = 0;
                    document.getElementById("a23").play();
                }
                document.getElementById("attack2").style.display = "block";
                document.getElementById("attack2").style.display = "grid";
                document.getElementById("attack2").textContent = "2";
                setTimeout(function(){
                    document.getElementById("attack2").style.display = "none";
                    setTimeout(function(){
                        if(sound == 0){
                            document.getElementById("a23").pause();
                            document.getElementById("a23").currentTime = 0;
                            document.getElementById("a23").play();
                        }
                        document.getElementById("attack2").style.display = "block";
                        document.getElementById("attack2").style.display = "grid";
                        document.getElementById("attack2").textContent = "1";
                        setTimeout(function(){
                            document.getElementById("attack2").style.display = "none";
                            setTimeout(function(){
                                if(sound == 0){
                                    document.getElementById("a24").pause();
                                    document.getElementById("a24").currentTime = 0;
                                    document.getElementById("a24").play();
                                }
                                document.getElementById("attack2").style.backgroundColor = "#ff0000";
                                document.getElementById("attack2").style.display = "block";
                                document.getElementById("attack2").style.display = "grid";
                                document.getElementById("attack2").textContent = "BOMB!";
                                if(((x + 30) >= p) && ((y + 30) >= o) && (x <= (p + m)) && (y <= (o + n))){
                                    life --;
                                    if(life > 0){
                                        if(sound != 2){
                                            document.getElementById("a8").pause();
                                            document.getElementById("a8").currentTime = 0;
                                            document.getElementById("a8").play();
                                        }
                                        document.getElementById("status").innerHTML = "HP：" + life + " / 回避できた数：" + score + "<br>リセット / Escape";
                                        clearTimeout(timeout);
                                        if(destroyMode == 0){
                                            document.getElementById("display").style.animation = "damege .9s";
                                            animationReset();
                                        }
                                        document.getElementById("display").textContent = "HP：" + life;
                                    }
                                    if(life == 0){
                                        if(sound != 2){
                                            document.getElementById("a11").pause();
                                            document.getElementById("a11").currentTime = 0;
                                            document.getElementById("a11").play();
                                            document.getElementById("a7").pause();
                                            document.getElementById("a7").currentTime = 0;
                                            document.getElementById("a5").pause();
                                            document.getElementById("a5").currentTime = 0;
                                            document.getElementById("a5").play();
                                        }
                                        boosterLock = 1;
                                        clearTimeout(timeout);
                                        let comment = Math.round(Math.random()*1000);
                                        if(comment < 10){
                                            comment = "実はこれ 当たっても特にいいことないよ（レア度：超激レア）";
                                        }
                                        else if(comment < 20){
                                            comment = "逃げちゃダメだ 逃げちゃダメだ 逃げty...（レア度：超激レア）";
                                        }
                                        else if(comment < 50){
                                            comment = "......（ネタ切れ）（レア度：激レア）";
                                        }
                                        else if(comment < 80){
                                            comment = "ちなみにこのコメントが出る確率は3%です（レア度：激レア）";
                                        }
                                        else if(comment < 110){
                                            comment = "トマト嫌いな人とは分かりあえる気がしない（レア度：激レア）";
                                        }
                                        else if(comment < 260){
                                            comment = "遊ぶときはJavaScriptを有効にしてね！（遅い）（レア度：レア）";
                                        }
                                        else if(comment < 310){
                                            comment = "あしぃーたがあぁーるぅーさあぁー ♪（レア度：レア）";
                                        }
                                        else if(comment < 360){
                                            comment = "正直このコメントいらないよな（レア度：レア）";
                                        }
                                        else if(comment < 410){
                                            comment = "赤い爆発が高確率で四隅に出現するの あなたの運が悪いだけです（レア度：レア）";
                                        }
                                        else if(comment < 510){
                                            comment = "中央付近で立ち回るといいかも！（レア度：コモン）";
                                        }
                                        else if(comment < 610){
                                            comment = "さあ もう一回どうだい？（レア度：コモン）";
                                        }
                                        else if(comment < 710){
                                            comment = "瞬間移動を使いこなすことが大切！（レア度：コモン）";
                                        }
                                        else if(comment < 810){
                                            comment = "ピンクの爆発に当たると一発アウト！（レア度：コモン）";
                                        }
                                        else if(comment < 910){
                                            comment = "ありゃ... そういう日もある（レア度：コモン）";
                                        }
                                        else{
                                            comment = "諦めたらそこで試合終了ですよ？（レア度：顧問）";
                                        }
                                        document.getElementById("status").innerHTML = comment + "<br>回避できた数：" + score + "<br>リセット / Escape";
                                        document.getElementById("display").style.animation = "red 1.8s infinite";
                                        document.getElementById("display").textContent = "CRASHED";
                                        setTimeout(function(){
                                            document.getElementById("box").style.display = "none";
                                            setTimeout(function(){
                                                document.getElementById("box").style.display = "block";
                                                document.getElementById("box").style.display = "grid";
                                                setTimeout(function(){
                                                    document.getElementById("box").style.display = "none";
                                                    setTimeout(function(){
                                                        document.getElementById("box").style.display = "block";
                                                        document.getElementById("box").style.display = "grid";
                                                        setTimeout(function(){
                                                            document.getElementById("box").style.display = "none";
                                                            setTimeout(function(){
                                                                document.getElementById("box").style.display = "block";
                                                                document.getElementById("box").style.display = "grid";
                                                                setTimeout(function(){
                                                                    document.getElementById("box").style.display = "none";
                                                                    setTimeout(function(){
                                                                        document.getElementById("box").style.display = "block";
                                                                        document.getElementById("box").style.display = "grid";
                                                                        setTimeout(function(){
                                                                            document.getElementById("box").style.display = "none";
                                                                        }, 100);
                                                                    }, 100);
                                                                }, 100);
                                                            }, 100);
                                                        }, 100);
                                                    }, 100);
                                                }, 100);
                                            }, 100);
                                        }, 100);
                                    }
                                }
                                else if(life > 0){
                                    score ++;
                                    if((score % 5) == 0){
                                        document.getElementById("counter").style.display = "block";
                                        document.getElementById("counter").style.display = "grid";
                                        document.getElementById("counter").textContent = score;
                                        erase();
                                    }
                                    document.getElementById("status").innerHTML = "HP：" + life + " / 回避できた数：" + score + "<br>リセット / Escape";
                                }
                                setTimeout(function(){
                                    document.getElementById("attack2").style.display = "none";
                                    setTimeout(function(){
                                        if((life > 0) && (destroyMode != 1)){
                                            let time = Math.round(Math.random()*3000) + 1000;
                                            setTimeout(attack2, time);
                                        }
                                    }, timing);
                                }, timing);
                            }, timing);
                        }, timing);
                    }, timing);
                }, timing);
            }, timing);
        }, timing);
    }else{}
}


let x3, y3;
function attack3(){
    if((life > 0) && (destroyMode != 1)){
        document.getElementById("attack3").style.backgroundColor = "#00000000";
        let timing = Math.round(Math.random()*50) + 70;
        x3 = x - 35;
        y3 = y - 35;
        document.getElementById("attack3").style.top = y3 + "px";
        document.getElementById("attack3").style.left = x3 + "px";
        if(sound == 0){
            document.getElementById("a23").pause();
            document.getElementById("a23").currentTime = 0;
            document.getElementById("a23").play();
        }
        document.getElementById("attack3").textContent = "3";
        document.getElementById("attack3").style.display = "block";
        document.getElementById("attack3").style.display = "grid";
        setTimeout(function(){
            document.getElementById("attack3").style.display = "none";
            setTimeout(function(){
                if(sound == 0){
                    document.getElementById("a23").pause();
                    document.getElementById("a23").currentTime = 0;
                    document.getElementById("a23").play();
                }
                document.getElementById("attack3").textContent = "2";
                document.getElementById("attack3").style.display = "block";
                document.getElementById("attack3").style.display = "grid";
                setTimeout(function(){
                    document.getElementById("attack3").style.display = "none";
                    setTimeout(function(){
                        if(sound == 0){
                            document.getElementById("a23").pause();
                            document.getElementById("a23").currentTime = 0;
                            document.getElementById("a23").play();
                        }
                        document.getElementById("attack3").textContent = "1";
                        document.getElementById("attack3").style.display = "block";
                        document.getElementById("attack3").style.display = "grid";
                        setTimeout(function(){
                            document.getElementById("attack3").style.display = "none";
                            setTimeout(function(){
                                if(sound == 0){
                                    document.getElementById("a24").pause();
                                    document.getElementById("a24").currentTime = 0;
                                    document.getElementById("a24").play();
                                }
                                document.getElementById("attack3").style.backgroundColor = "#ff0000";
                                document.getElementById("attack3").style.display = "block";
                                document.getElementById("attack3").style.display = "grid";
                                document.getElementById("attack3").textContent = "!";
                                if(((x + 30) >= x3) && ((y + 30) >= y3) && (x <= (x3 + 100)) && (y <= (y3 + 100)) && (godMode == 0)){
                                    life --;
                                    if(life > 0){
                                        if(sound != 2){
                                            document.getElementById("a8").pause();
                                            document.getElementById("a8").currentTime = 0;
                                            document.getElementById("a8").play();
                                        }
                                        document.getElementById("status").innerHTML = "HP：" + life + " / 回避できた数：" + score + "<br>リセット / Escape";
                                        clearTimeout(timeout);
                                        if(destroyMode == 0){
                                            document.getElementById("display").style.animation = "damege .9s";
                                            animationReset();
                                        }
                                        document.getElementById("display").textContent = "HP：" + life;
                                    }
                                    if(life == 0){
                                        if(sound != 2){
                                            document.getElementById("a11").pause();
                                            document.getElementById("a11").currentTime = 0;
                                            document.getElementById("a11").play();
                                            document.getElementById("a7").pause();
                                            document.getElementById("a7").currentTime = 0;
                                            document.getElementById("a5").pause();
                                            document.getElementById("a5").currentTime = 0;
                                            document.getElementById("a5").play();
                                        }
                                        boosterLock = 1;
                                        clearTimeout(timeout);
                                        let comment = Math.round(Math.random()*1000);
                                        if(comment < 10){
                                            comment = "実はこれ 当たっても特にいいことないよ（レア度：超激レア）";
                                        }
                                        else if(comment < 20){
                                            comment = "逃げちゃダメだ 逃げちゃダメだ 逃げty...（レア度：超激レア）";
                                        }
                                        else if(comment < 50){
                                            comment = "......（ネタ切れ）（レア度：激レア）";
                                        }
                                        else if(comment < 80){
                                            comment = "ちなみにこのコメントが出る確率は3%です（レア度：激レア）";
                                        }
                                        else if(comment < 110){
                                            comment = "トマト嫌いな人とは分かりあえる気がしない（レア度：激レア）";
                                        }
                                        else if(comment < 260){
                                            comment = "遊ぶときはJavaScriptを有効にしてね！（遅い）（レア度：レア）";
                                        }
                                        else if(comment < 310){
                                            comment = "あしぃーたがあぁーるぅーさあぁー ♪（レア度：レア）";
                                        }
                                        else if(comment < 360){
                                            comment = "正直このコメントいらないよな（レア度：レア）";
                                        }
                                        else if(comment < 410){
                                            comment = "赤い爆発が高確率で四隅に出現するの あなたの運が悪いだけです（レア度：レア）";
                                        }
                                        else if(comment < 510){
                                            comment = "中央付近で立ち回るといいかも！（レア度：コモン）";
                                        }
                                        else if(comment < 610){
                                            comment = "さあ もう一回どうだい？（レア度：コモン）";
                                        }
                                        else if(comment < 710){
                                            comment = "瞬間移動を使いこなすことが大切！（レア度：コモン）";
                                        }
                                        else if(comment < 810){
                                            comment = "ピンクの爆発に当たると一発アウト！（レア度：コモン）";
                                        }
                                        else if(comment < 910){
                                            comment = "ありゃ... そういう日もある（レア度：コモン）";
                                        }
                                        else{
                                            comment = "諦めたらそこで試合終了ですよ？（レア度：顧問）";
                                        }
                                        document.getElementById("status").innerHTML = comment + "<br>回避できた数：" + score + "<br>リセット / Escape";
                                        document.getElementById("display").style.animation = "red 1.8s infinite";
                                        document.getElementById("display").textContent = "CRASHED";
                                        setTimeout(function(){
                                            document.getElementById("box").style.display = "none";
                                            setTimeout(function(){
                                                document.getElementById("box").style.display = "block";
                                                document.getElementById("box").style.display = "grid";
                                                setTimeout(function(){
                                                    document.getElementById("box").style.display = "none";
                                                    setTimeout(function(){
                                                        document.getElementById("box").style.display = "block";
                                                        document.getElementById("box").style.display = "grid";
                                                        setTimeout(function(){
                                                            document.getElementById("box").style.display = "none";
                                                            setTimeout(function(){
                                                                document.getElementById("box").style.display = "block";
                                                                document.getElementById("box").style.display = "grid";
                                                                setTimeout(function(){
                                                                    document.getElementById("box").style.display = "none";
                                                                    setTimeout(function(){
                                                                        document.getElementById("box").style.display = "block";
                                                                        document.getElementById("box").style.display = "grid";
                                                                        setTimeout(function(){
                                                                            document.getElementById("box").style.display = "none";
                                                                        }, 100);
                                                                    }, 100);
                                                                }, 100);
                                                            }, 100);
                                                        }, 100);
                                                    }, 100);
                                                }, 100);
                                            }, 100);
                                        }, 100);
                                    }
                                }
                                else if(life > 0){
                                    score ++;
                                    if((score % 5) == 0){
                                        document.getElementById("counter").style.display = "block";
                                        document.getElementById("counter").style.display = "grid";
                                        document.getElementById("counter").textContent = score;
                                        erase();
                                    }
                                    document.getElementById("status").innerHTML = "HP：" + life + " / 回避できた数：" + score + "<br>リセット / Escape";
                                }
                                setTimeout(function(){
                                    document.getElementById("attack3").style.display = "none";
                                    setTimeout(function(){
                                        if((life > 0) && (destroyMode != 1)){
                                            let time = Math.round(Math.random()*10000);
                                            setTimeout(attack3, time);
                                        }
                                    }, timing);
                                }, timing);
                            }, timing);
                        }, timing);
                    }, timing);
                }, timing);
            }, timing);
        }, timing);
    }else{}
}


function heal(){
    document.getElementById("heal").style.backgroundColor = "#00000000";
    let timing = Math.round(Math.random()*75) + 150;
    let random = Math.round(Math.random()*100);
    if((random < 30) && (life > 0) && (destroyMode != 1)){
        f = Math.round(Math.random()*230) + 10;
        g = Math.round(Math.random()*230) + 10;
        document.getElementById("heal").style.top = f + "px";
        document.getElementById("heal").style.left = g + "px";
        if(sound == 0){
            document.getElementById("a13").pause();
            document.getElementById("a13").currentTime = 0;
            document.getElementById("a13").play();
        }
        document.getElementById("heal").style.display = "block";
        document.getElementById("heal").style.display = "grid";
        document.getElementById("heal").textContent = "3";
        setTimeout(function(){
            document.getElementById("heal").style.display = "none";
            setTimeout(function(){
                if(sound == 0){
                    document.getElementById("a13").pause();
                    document.getElementById("a13").currentTime = 0;
                    document.getElementById("a13").play();
                }
                document.getElementById("heal").style.display = "block";
                document.getElementById("heal").style.display = "grid";
                document.getElementById("heal").textContent = "2";
                setTimeout(function(){
                    document.getElementById("heal").style.display = "none";
                    setTimeout(function(){
                        if(sound == 0){
                            document.getElementById("a13").pause();
                            document.getElementById("a13").currentTime = 0;
                            document.getElementById("a13").play();
                        }
                        document.getElementById("heal").style.display = "block";
                        document.getElementById("heal").style.display = "grid";
                        document.getElementById("heal").textContent = "1";
                        setTimeout(function(){
                            document.getElementById("heal").style.display = "none";
                            setTimeout(function(){
                                if(sound == 0){
                                    document.getElementById("a12").pause();
                                    document.getElementById("a12").currentTime = 0;
                                    document.getElementById("a12").play();
                                }
                                document.getElementById("heal").style.backgroundColor = "lime";
                                document.getElementById("heal").style.display = "block";
                                document.getElementById("heal").style.display = "grid";
                                document.getElementById("heal").textContent = "HEAL!";
                                if((((x + 30) >= g) && ((y + 30) >= f) && (x <= (200 + g)) && (y <= (200 + f))) && (life > 0)){
                                    life ++;
                                    if(sound != 2){
                                        document.getElementById("a14").pause();
                                        document.getElementById("a14").currentTime = 0;
                                        document.getElementById("a14").play();
                                    }
                                    document.getElementById("status").innerHTML = "HP：" + life + " / 回避できた数：" + score + "<br>リセット / Escape";
                                    clearTimeout(timeout);
                                    if(destroyMode == 0){
                                        document.getElementById("display").style.animation = "heal .9s";
                                        animationReset();
                                    }
                                    document.getElementById("display").textContent = "HP：" + life;
                                }
                                setTimeout(function(){
                                    document.getElementById("heal").style.display = "none";
                                    setTimeout(function(){
                                        if((life > 0) && (destroyMode != 1)){
                                            heal();
                                        }
                                    }, timing);
                                }, timing);
                            },timing);
                        }, timing);
                    }, timing);
                }, timing);
            }, timing);
        }, timing);
    }
    else{
        if(destroyMode != 1){
            setTimeout( heal, 1500);
        }
    }
}


function heal2(){
    document.getElementById("heal2").style.backgroundColor = "#00000000";
    let timing = Math.round(Math.random()*75) + 150;
    let random = Math.round(Math.random()*100);
    if((random < 40) && (life > 0) && (destroyMode != 1)){
        q = Math.round(Math.random()*230) + 10;
        r = Math.round(Math.random()*230) + 10;
        document.getElementById("heal2").style.top = q + "px";
        document.getElementById("heal2").style.left = r + "px";
        if(sound == 0){
            document.getElementById("a25").pause();
            document.getElementById("a25").currentTime = 0;
            document.getElementById("a25").play();
        }
        document.getElementById("heal2").style.display = "block";
        document.getElementById("heal2").style.display = "grid";
        document.getElementById("heal2").textContent = "3";
        setTimeout(function(){
            document.getElementById("heal2").style.display = "none";
            setTimeout(function(){
                if(sound == 0){
                    document.getElementById("a25").pause();
                    document.getElementById("a25").currentTime = 0;
                    document.getElementById("a25").play();
                }
                document.getElementById("heal2").style.display = "block";
                document.getElementById("heal2").style.display = "grid";
                document.getElementById("heal2").textContent = "2";
                setTimeout(function(){
                    document.getElementById("heal2").style.display = "none";
                    setTimeout(function(){
                        if(sound == 0){
                            document.getElementById("a25").pause();
                            document.getElementById("a25").currentTime = 0;
                            document.getElementById("a25").play();
                        }
                        document.getElementById("heal2").style.display = "block";
                        document.getElementById("heal2").style.display = "grid";
                        document.getElementById("heal2").textContent = "1";
                        setTimeout(function(){
                            document.getElementById("heal2").style.display = "none";
                            setTimeout(function(){
                                if(sound == 0){
                                    document.getElementById("a26").pause();
                                    document.getElementById("a26").currentTime = 0;
                                    document.getElementById("a26").play();
                                }
                                document.getElementById("heal2").style.backgroundColor = "#0099ff";
                                document.getElementById("heal2").style.display = "block";
                                document.getElementById("heal2").style.display = "grid";
                                document.getElementById("heal2").textContent = "BOOST!";
                                if((((x + 30) >= r) && ((y + 30) >= q) && (x <= (200 + r)) && (y <= (200 + q))) && (life > 0)){
                                    booster ++;
                                    if(sound != 2){
                                        document.getElementById("a27").pause();
                                        document.getElementById("a27").currentTime = 0;
                                        document.getElementById("a27").play();
                                    }
                                    document.getElementById("status").innerHTML = "HP：" + life + " / 回避できた数：" + score + "<br>リセット / Escape";
                                    clearTimeout(timeout3);
                                    document.getElementById("box2").style.display = "none";
                                    document.getElementById("box2").textContent = "+1";
                                    document.getElementById("box2").style.top = (y + 35) + "px";
                                    document.getElementById("box2").style.left = (x - 10) + "px";
                                    requestAnimationFrame(boosterAnime);
                                    animationReset2();
                                    if(onBlur == 0){
                                        document.getElementById("box").textContent = booster;
                                    }
                                }
                                setTimeout(function(){
                                    document.getElementById("heal2").style.display = "none";
                                    setTimeout(function(){
                                        if((life > 0) && (destroyMode == 0)){
                                            heal2();
                                        }
                                    }, timing);
                                }, timing);
                            },timing);
                        }, timing);
                    }, timing);
                }, timing);
            }, timing);
        }, timing);
    }
    else{
        if(destroyMode != 1){
            setTimeout( heal2, 1500);
        }
    }
}
function boosterAnime(){
    document.getElementById("box2").style.animation = "slideDown 1.5s";
    document.getElementById("box2").style.display = "block";
    document.getElementById("box2").style.display = "grid";
}


function killer(){
    document.getElementById("killer").style.backgroundColor = "#00000000";
    let timing = Math.round(Math.random()*75) + 200;
    let random = Math.round(Math.random()*100);
    if((random < 25) && (life > 0) && (destroyMode == 0)){
        let rdm = Math.round(Math.random()*80);
        if(rdm < 40){
            h = Math.round(Math.random()*180) + 10;
            i = Math.round(Math.random()*180) + 10;
        }
        else if(rdm < 50){
            h = 10;
            i = 10;
        }
        else if(rdm < 60){
            h = 190;
            i = 10;
        }
        else if(rdm < 70){
            h = 10;
            i = 190;
        }
        else{
            h = 190;
            i = 190;
        }
        document.getElementById("killer").style.top = h + "px";
        document.getElementById("killer").style.left = i + "px";
        if(sound != 2){
            document.getElementById("a18").play();
        }
        if(sound == 0){
            document.getElementById("a19").pause();
            document.getElementById("a19").currentTime = 0;
            document.getElementById("a19").play();
        }
        document.getElementById("killer").style.display = "block";
        document.getElementById("killer").style.display = "grid";
        document.getElementById("killer").textContent = "3";
        setTimeout(function(){
            document.getElementById("killer").style.display = "none";
            setTimeout(function(){
                if(sound == 0){
                    document.getElementById("a19").pause();
                    document.getElementById("a19").currentTime = 0;
                    document.getElementById("a19").play();
                }
                document.getElementById("killer").style.display = "block";
                document.getElementById("killer").style.display = "grid";
                document.getElementById("killer").textContent = "2";
                setTimeout(function(){
                    document.getElementById("killer").style.display = "none";
                    setTimeout(function(){
                        if(sound == 0){
                            document.getElementById("a19").pause();
                            document.getElementById("a19").currentTime = 0;
                            document.getElementById("a19").play();
                        }
                        document.getElementById("killer").style.display = "block";
                        document.getElementById("killer").style.display = "grid";
                        document.getElementById("killer").textContent = "1";
                        document.getElementById("status").style.animation = "";
                        document.getElementById("display2").style.animation = "";
                        setTimeout(function(){
                            document.getElementById("body").style.animation = "none";
                            document.getElementById("status").style.animation = "none";
                            document.getElementById("rights").style.animation = "none";
                            document.getElementById("display2").style.animation = "none";
                            document.getElementById("killer").style.display = "none";
                            setTimeout(function(){
                                if(sound != 2){
                                    document.getElementById("a18").pause();
                                    document.getElementById("a18").currentTime = 0;
                                }
                                if(sound == 0){
                                    document.getElementById("a15").pause();
                                    document.getElementById("a15").currentTime = 0;
                                    document.getElementById("a15").play();
                                    document.getElementById("a16").pause();
                                    document.getElementById("a16").currentTime = 0;
                                    document.getElementById("a16").play();
                                    document.getElementById("a17").pause();
                                    document.getElementById("a17").currentTime = 0;
                                    document.getElementById("a17").play();
                                }
                                document.getElementById("killer").style.backgroundColor = "#ff00dd";
                                document.getElementById("killer").style.display = "block";
                                document.getElementById("killer").style.display = "grid";
                                document.getElementById("killer").textContent = "KILL!";
                                document.getElementById("body").style.animation = "whiteOut 2s";
                                if(destroyMode == 0){
                                    document.getElementById("display2").style.animation = "whiteOut2 2s";
                                    document.getElementById("status").style.animation = "whiteOut3 2s, whiteOut2 2s";
                                }
                                if((((x + 30) >= i) && ((y + 30) >= h) && (x <= (250 + i)) && (y <= (250 + h))) && (life > 0)){
                                    life = 0;
                                    if(sound != 2){
                                        document.getElementById("a11").pause();
                                        document.getElementById("a11").currentTime = 0;
                                        document.getElementById("a11").play();
                                        document.getElementById("a7").pause();
                                        document.getElementById("a7").currentTime = 0;
                                        document.getElementById("a5").pause();
                                        document.getElementById("a5").currentTime = 0;
                                        document.getElementById("a5").play();
                                    }
                                    boosterLock = 1;
                                    clearTimeout(timeout);
                                    let comment = Math.round(Math.random()*1000);
                                    if(comment < 10){
                                        comment = "実はこれ 当たっても特にいいことないよ（レア度：超激レア）";
                                    }
                                    else if(comment < 20){
                                        comment = "逃げちゃダメだ 逃げちゃダメだ 逃げty...（レア度：超激レア）";
                                    }
                                    else if(comment < 50){
                                        comment = "......（ネタ切れ）（レア度：激レア）";
                                    }
                                    else if(comment < 80){
                                        comment = "ちなみにこのコメントが出る確率は3%です（レア度：激レア）";
                                    }
                                    else if(comment < 110){
                                        comment = "トマト嫌いな人とは分かりあえる気がしない（レア度：激レア）";
                                    }
                                    else if(comment < 260){
                                        comment = "遊ぶときはJavaScriptを有効にしてね！（遅い）（レア度：レア）";
                                    }
                                    else if(comment < 310){
                                        comment = "あしぃーたがあぁーるぅーさあぁー ♪（レア度：レア）";
                                    }
                                    else if(comment < 360){
                                        comment = "正直このコメントいらないよな（レア度：レア）";
                                    }
                                    else if(comment < 410){
                                        comment = "赤い爆発が高確率で四隅に出現するの あなたの運が悪いだけです（レア度：レア）";
                                    }
                                    else if(comment < 510){
                                        comment = "中央付近で立ち回るといいかも！（レア度：コモン）";
                                    }
                                    else if(comment < 610){
                                        comment = "さあ もう一回どうだい？（レア度：コモン）";
                                    }
                                    else if(comment < 710){
                                        comment = "瞬間移動を使いこなすことが大切！（レア度：コモン）";
                                    }
                                    else if(comment < 810){
                                        comment = "ピンクの爆発に当たると一発アウト！（レア度：コモン）";
                                    }
                                    else if(comment < 910){
                                        comment = "ありゃ... そういう日もある（レア度：コモン）";
                                    }
                                    else{
                                        comment = "諦めたらそこで試合終了ですよ？（レア度：顧問）";
                                    }
                                    document.getElementById("status").innerHTML = comment + "<br>回避できた数：" + score + "<br>リセット / Escape";
                                    document.getElementById("display").style.animation = "red 1.8s infinite";
                                    document.getElementById("display").textContent = "CRASHED";
                                    setTimeout(function(){
                                        document.getElementById("box").style.display = "none";
                                        setTimeout(function(){
                                            document.getElementById("box").style.display = "block";
                                            document.getElementById("box").style.display = "grid";
                                            setTimeout(function(){
                                                document.getElementById("box").style.display = "none";
                                                setTimeout(function(){
                                                    document.getElementById("box").style.display = "block";
                                                    document.getElementById("box").style.display = "grid";
                                                    setTimeout(function(){
                                                        document.getElementById("box").style.display = "none";
                                                        setTimeout(function(){
                                                            document.getElementById("box").style.display = "block";
                                                            document.getElementById("box").style.display = "grid";
                                                            setTimeout(function(){
                                                                document.getElementById("box").style.display = "none";
                                                                setTimeout(function(){
                                                                    document.getElementById("box").style.display = "block";
                                                                    document.getElementById("box").style.display = "grid";
                                                                    setTimeout(function(){
                                                                        document.getElementById("box").style.display = "none";
                                                                    }, 100);
                                                                }, 100);
                                                            }, 100);
                                                        }, 100);
                                                    }, 100);
                                                }, 100);
                                            }, 100);
                                        }, 100);
                                    }, 100);
                                }
                                else if(life > 0){
                                    score ++;
                                    if((score % 5) == 0){
                                        document.getElementById("counter").style.animation = "whiteOut3 2s, fadeOut 2s";
                                        document.getElementById("counter").style.display = "block";
                                        document.getElementById("counter").style.display = "grid";
                                        document.getElementById("counter").textContent = score;
                                        erase();
                                    }
                                    document.getElementById("status").innerHTML = "HP：" + life + " / 回避できた数：" + score + "<br>リセット / Escape";
                                }
                                setTimeout(function(){
                                    document.getElementById("killer").style.display = "none";
                                    setTimeout(function(){
                                        if((life > 0) && (destroyMode == 0)){
                                            setTimeout(killer, 1500);
                                        }
                                    }, timing);
                                }, timing);
                            },timing);
                        }, timing);
                    }, timing);
                }, timing);
            }, timing);
        }, timing);
    }
    else{
        if(destroyMode == 0){
            setTimeout(killer, 1000);
        }
    }
}


function killer2(){
    document.getElementById("killer").style.backgroundColor = "#00000000";
    let random = Math.round(Math.random()*1000);
    if((random < 70) && (life > 0)){
        destroyMode = 2;
        setTimeout(killer3, 5000);
    }
    else{
        setTimeout(killer2, 1500);
    }
}


function killer3(){
    destroyMode = 1;
        clearTimeout(timeout);
        document.getElementById("counter2").style.animation = "fadeOut 2s";
        document.getElementById("counter2").style.display = "block";
        document.getElementById("counter2").style.display = "grid";
        document.getElementById("display").style.animation = "fadeOut 1.6s";
        document.getElementById("display2").style.animation = "redOut 4s";
        document.getElementById("status").style.animation = "redOut 4s, redOut2 4s";
        document.getElementById("display2").style.border = "solid 3px #ff0000";
        document.getElementById("status").style.border = "solid 3px #ff0000";
        document.getElementById("status").style.color = "#ff0000";
        erase2();
        if(sound != 2){
            document.getElementById("a37").currentTime = 0;
            document.getElementById("a37").play();
        }
        fadeOut();
        if(sound != 2){
            document.getElementById("a29").pause();
            document.getElementById("a29").currentTime = 0;
            document.getElementById("a29").volume = 0;
            document.getElementById("a29").play();
            document.getElementById("a30").pause();
            document.getElementById("a30").currentTime = 0;
            document.getElementById("a30").volume = 0;
            document.getElementById("a30").play();
        }
        fadeIn2();
        /*
        setTimeout(function(){
            booster += 1;
            if(sound != 2){
                document.getElementById("a27").pause();
                document.getElementById("a27").currentTime = 0;
                document.getElementById("a27").play();
            }
            document.getElementById("status").innerHTML = "HP：" + life + " / 回避できた数：" + score + "<br>リセット / Escape";
            clearTimeout(timeout3);
            document.getElementById("box2").style.display = "none";
            document.getElementById("box2").textContent = "+1";
            document.getElementById("box2").style.top = (y + 35) + "px";
            document.getElementById("box2").style.left = (x - 10) + "px";
            requestAnimationFrame(boosterAnime);
            animationReset2();
            if(onBlur == 0){
                document.getElementById("box").textContent = booster;
            }
        }, 1300);
        */
        let rdm1 = Math.round(Math.random()*400);
        let rdm2 = Math.round(Math.random()*500);
        let rdm3 = Math.round(Math.random()*400);
        let rdm4 = Math.round(Math.random()*240);
        if(rdm4 < 10){
            setTimeout(thunder1, 2000);
            setTimeout(thunder2, 2600 + rdm1);
            setTimeout(thunder3, 3200 + rdm2);
            setTimeout(thunder4, 4000 + rdm3);
        }
        else if(rdm4 < 20){
            setTimeout(thunder1, 2000);
            setTimeout(thunder2, 2600 + rdm1);
            setTimeout(thunder4, 3200 + rdm2);
            setTimeout(thunder3, 4000 + rdm3);
        }
        else if(rdm4 < 30){
            setTimeout(thunder1, 2000);
            setTimeout(thunder3, 2600 + rdm1);
            setTimeout(thunder2, 3200 + rdm2);
            setTimeout(thunder4, 4000 + rdm3);
        }
        else if(rdm4 < 40){
            setTimeout(thunder1, 2000);
            setTimeout(thunder3, 2600 + rdm1);
            setTimeout(thunder4, 3200 + rdm2);
            setTimeout(thunder2, 4000 + rdm3);
        }
        else if(rdm4 < 50){
            setTimeout(thunder1, 2000);
            setTimeout(thunder4, 2600 + rdm1);
            setTimeout(thunder2, 3200 + rdm2);
            setTimeout(thunder3, 4000 + rdm3);
        }
        else if(rdm4 < 60){
            setTimeout(thunder1, 2000);
            setTimeout(thunder4, 2600 + rdm1);
            setTimeout(thunder3, 3200 + rdm2);
            setTimeout(thunder2, 4000 + rdm3);
        }
        else if(rdm4 < 70){
            setTimeout(thunder2, 2000);
            setTimeout(thunder1, 2600 + rdm1);
            setTimeout(thunder3, 3200 + rdm2);
            setTimeout(thunder4, 4000 + rdm3);
        }
        else if(rdm4 < 80){
            setTimeout(thunder2, 2000);
            setTimeout(thunder1, 2600 + rdm1);
            setTimeout(thunder4, 3200 + rdm2);
            setTimeout(thunder3, 4000 + rdm3);
        }
        else if(rdm4 < 90){
            setTimeout(thunder2, 2000);
            setTimeout(thunder3, 2600 + rdm1);
            setTimeout(thunder1, 3200 + rdm2);
            setTimeout(thunder4, 4000 + rdm3);
        }
        else if(rdm4 < 100){
            setTimeout(thunder2, 2000);
            setTimeout(thunder3, 2600 + rdm1);
            setTimeout(thunder4, 3200 + rdm2);
            setTimeout(thunder1, 4000 + rdm3);
        }
        else if(rdm4 < 110){
            setTimeout(thunder2, 2000);
            setTimeout(thunder4, 2600 + rdm1);
            setTimeout(thunder1, 3200 + rdm2);
            setTimeout(thunder3, 4000 + rdm3);
        }
        else if(rdm4 < 120){
            setTimeout(thunder2, 2000);
            setTimeout(thunder4, 2600 + rdm1);
            setTimeout(thunder3, 3200 + rdm2);
            setTimeout(thunder1, 4000 + rdm3);
        }
        else if(rdm4 < 130){
            setTimeout(thunder3, 2000);
            setTimeout(thunder1, 2600 + rdm1);
            setTimeout(thunder2, 3200 + rdm2);
            setTimeout(thunder4, 4000 + rdm3);
        }
        else if(rdm4 < 140){
            setTimeout(thunder3, 2000);
            setTimeout(thunder1, 2600 + rdm1);
            setTimeout(thunder4, 3200 + rdm2);
            setTimeout(thunder2, 4000 + rdm3);
        }
        else if(rdm4 < 150){
            setTimeout(thunder3, 2000);
            setTimeout(thunder2, 2600 + rdm1);
            setTimeout(thunder1, 3200 + rdm2);
            setTimeout(thunder4, 4000 + rdm3);
        }
        else if(rdm4 < 160){
            setTimeout(thunder3, 2000);
            setTimeout(thunder2, 2600 + rdm1);
            setTimeout(thunder4, 3200 + rdm2);
            setTimeout(thunder1, 4000 + rdm3);
        }
        else if(rdm4 < 170){
            setTimeout(thunder3, 2000);
            setTimeout(thunder4, 2600 + rdm1);
            setTimeout(thunder1, 3200 + rdm2);
            setTimeout(thunder2, 4000 + rdm3);
        }
        else if(rdm4 < 180){
            setTimeout(thunder3, 2000);
            setTimeout(thunder4, 2600 + rdm1);
            setTimeout(thunder2, 3200 + rdm2);
            setTimeout(thunder1, 4000 + rdm3);
        }
        else if(rdm4 < 190){
            setTimeout(thunder4, 2000);
            setTimeout(thunder1, 2600 + rdm1);
            setTimeout(thunder2, 3200 + rdm2);
            setTimeout(thunder3, 4000 + rdm3);
        }
        else if(rdm4 < 200){
            setTimeout(thunder4, 2000);
            setTimeout(thunder1, 2600 + rdm1);
            setTimeout(thunder3, 3200 + rdm2);
            setTimeout(thunder2, 4000 + rdm3);
        }
        else if(rdm4 < 210){
            setTimeout(thunder4, 2000);
            setTimeout(thunder2, 2600 + rdm1);
            setTimeout(thunder1, 3200 + rdm2);
            setTimeout(thunder3, 4000 + rdm3);
        }
        else if(rdm4 < 220){
            setTimeout(thunder4, 2000);
            setTimeout(thunder2, 2600 + rdm1);
            setTimeout(thunder3, 3200 + rdm2);
            setTimeout(thunder1, 4000 + rdm3);
        }
        else if(rdm4 < 230){
            setTimeout(thunder4, 2000);
            setTimeout(thunder3, 2600 + rdm1);
            setTimeout(thunder1, 3200 + rdm2);
            setTimeout(thunder2, 4000 + rdm3);
        }
        else{
            setTimeout(thunder4, 2000);
            setTimeout(thunder3, 2600 + rdm1);
            setTimeout(thunder2, 3200 + rdm2);
            setTimeout(thunder1, 4000 + rdm3);
        }
        setTimeout(function(){
            if(sound != 2){
                document.getElementById("a38").currentTime = 0;
                document.getElementById("a38").play();
            }
            document.getElementById("display").style.animation = "none";
            document.getElementById("display").innerHTML = "<span id='fadeIn' style='color: #7a0000;'><span class='error'>666</span><span class='info'>Destroy process</span></span>";
        }, 1500);
        setTimeout(destroy, 5200);
}


function destroy(){
    document.getElementById("killer2").style.backgroundColor = "#00000000";
    let timing = 500;
    if(life > 0){
        s = Math.round(Math.random()*310) + 30;
        t = Math.round(Math.random()*310) + 30;
        document.getElementById("shield").style.top = s + "px";
        document.getElementById("shield").style.left = t + "px";
        if(sound != 2){
            /*document.getElementById("a18").play();*/
        }
        if(sound == 0){
            document.getElementById("a19").pause();
            document.getElementById("a19").currentTime = 0;
            document.getElementById("a19").play();
        }
        document.getElementById("killer2").style.display = "block";
        document.getElementById("killer2").style.display = "grid";
        document.getElementById("killer2").textContent = "3";
        if(sound != 2){
            document.getElementById("a31").currentTime = 0;
            document.getElementById("a31").play();
        }
        setTimeout(function(){
            document.getElementById("killer2").style.display = "none";
            document.getElementById("a28").pause();
            document.getElementById("a28").currentTime = 0;
            document.getElementById("a28").play();
            let timer = Math.round(Math.random()*1000) + 500
            setTimeout(function(){
                document.getElementById("shield_obj").style.display = "block";
                if(sound != 2){
                    document.getElementById("a36").currentTime = 0;
                    document.getElementById("a36").play();
                }
            }, 700);
            setTimeout(function(){
                if(sound == 0){
                    document.getElementById("a19").currentTime = 0;
                    document.getElementById("a19").play();
                }
                document.getElementById("killer2").style.display = "block";
                document.getElementById("killer2").style.display = "grid";
                document.getElementById("killer2").textContent = "2";
                setTimeout(function(){
                    if(sound != 2){
                        document.getElementById("a35").currentTime = 0;
                        document.getElementById("a35").play();
                    }
                    document.getElementById("killer2").style.display = "none";
                    setTimeout(function(){
                        if(sound == 0){
                            document.getElementById("a19").pause();
                            document.getElementById("a19").currentTime = 0;
                            document.getElementById("a19").play();
                        }
                        document.getElementById("killer2").style.display = "block";
                        document.getElementById("killer2").style.display = "grid";
                        document.getElementById("killer2").textContent = "1";
                        document.getElementById("display2").style.animation = "none";
                        setTimeout(function(){
                            document.getElementById("body").style.animation = "none";
                            document.getElementById("status").style.animation = "none";
                            document.getElementById("rights").style.animation = "none";
                            document.getElementById("display2").style.animation = "none";
                            document.getElementById("killer2").style.display = "none";
                            document.getElementById("killer2").style.animation = "fadeOut2 1.05s";
                            setTimeout(function(){
                                erase3();
                                if(sound != 2){
                                    document.getElementById("a18").pause();
                                    document.getElementById("a18").currentTime = 0;
                                    document.getElementById("a29").pause();
                                    document.getElementById("a29").currentTime = 0;
                                    document.getElementById("a30").pause();
                                    document.getElementById("a30").currentTime = 0;
                                    document.getElementById("a35").pause();
                                    document.getElementById("a35").currentTime = 0;
                                    document.getElementById("a38").pause();
                                    document.getElementById("a38").currentTime = 0;
                                }
                                if(sound == 0){
                                    document.getElementById("a15").pause();
                                    document.getElementById("a15").currentTime = 0;
                                    document.getElementById("a15").play();
                                    document.getElementById("a16").pause();
                                    document.getElementById("a16").currentTime = 0;
                                    document.getElementById("a16").play();
                                    document.getElementById("a17").pause();
                                    document.getElementById("a17").currentTime = 0;
                                    document.getElementById("a17").play();
                                    document.getElementById("a32").pause();
                                    document.getElementById("a32").currentTime = 0;
                                    document.getElementById("a32").play();
                                    document.getElementById("a33").pause();
                                    document.getElementById("a33").currentTime = 0;
                                    document.getElementById("a33").play();
                                    document.getElementById("a28").pause();
                                    document.getElementById("a28").currentTime = 0;
                                }
                                document.getElementById("killer2").style.backgroundColor = "#ff00dd";
                                document.getElementById("killer2").style.display = "block";
                                document.getElementById("killer2").style.display = "grid";
                                document.getElementById("killer2").textContent = "DESTROY!";
                                document.getElementById("display2").style.border = "solid 3px #ffffff";
                                document.getElementById("status").style.border = "solid 3px #ffffff";
                                document.getElementById("status").style.color = "#ffffff";
                                document.getElementById("body").style.animation = "whiteOut 2s";
                                document.getElementById("display2").style.animation = "whiteOut2 2s";
                                document.getElementById("status").style.animation = "whiteOut3 2s, whiteOut2 2s";
                                setTimeout(function(){
                                    document.getElementById("shield_obj").style.animation = "smallOut 1s, b_rainbow .75s infinite";
                                    setTimeout(function(){
                                        document.getElementById("shield_obj").style.display = "none";
                                        document.getElementById("shield_obj").style.animation = "bigIn .5s, b_rainbow .75s infinite";
                                        fadeIn();
                                    }, 510);
                                }, 350);
                                if(((((x + 30) <= (t + 80)) && ((y + 30) <= (s + 80)) && (x >= t) && (y >= s)) && (life > 0)) || (godMode == 1)){
                                    score ++;
                                    document.getElementById("display").style.color = "#222222";
                                    document.getElementById("display").style.animation = "fadeIn2 2.5s";
                                    if(godMode == 1){
                                        document.getElementById("display").textContent = "OBSERVER";
                                    }
                                    else{
                                        document.getElementById("display").textContent = "HP：" + life;
                                    }
                                    if((score % 5) == 0){
                                        document.getElementById("counter").style.animation = "whiteOut3 2s, fadeOut 2s";
                                        document.getElementById("counter").style.display = "block";
                                        document.getElementById("counter").style.display = "grid";
                                        document.getElementById("counter").textContent = score;
                                        erase();
                                    }
                                    if(sound == 0){
                                        document.getElementById("a34").pause();
                                        document.getElementById("a34").currentTime = 0;
                                        document.getElementById("a34").play();
                                    }
                                    document.getElementById("status").innerHTML = "HP：" + life + " / 回避できた数：" + score + "<br>リセット / Escape";
                                    destroyMode = 0;
                                    let timer = Math.round(Math.random()*750);
                                    let timer2 = Math.round(Math.random()*1750);
                                    setTimeout(attack, timer + 750);
                                    setTimeout(attack2, timer2 + 750);
                                    let timer3 = Math.round(Math.random()*7000) + 3000;
                                    setTimeout(attack3, timer3);
                                    setTimeout(heal, 1500);
                                    setTimeout(heal2, 1500);
                                    setTimeout(killer, 1500);
                                    setTimeout(blur, 1500);
                                }
                                else{
                                    life = 0;
                                    if(sound != 2){
                                        document.getElementById("a11").pause();
                                        document.getElementById("a11").currentTime = 0;
                                        document.getElementById("a11").play();
                                        document.getElementById("a7").pause();
                                        document.getElementById("a7").currentTime = 0;
                                        document.getElementById("a5").pause();
                                        document.getElementById("a5").currentTime = 0;
                                        document.getElementById("a5").play();
                                    }
                                    boosterLock = 1;
                                    clearTimeout(timeout);
                                    let comment = Math.round(Math.random()*1000);
                                    if(comment < 10){
                                        comment = "実はこれ 当たっても特にいいことないよ（レア度：超激レア）";
                                    }
                                    else if(comment < 20){
                                        comment = "逃げちゃダメだ 逃げちゃダメだ 逃げty...（レア度：超激レア）";
                                    }
                                    else if(comment < 50){
                                        comment = "......（ネタ切れ）（レア度：激レア）";
                                    }
                                    else if(comment < 80){
                                        comment = "ちなみにこのコメントが出る確率は3%です（レア度：激レア）";
                                    }
                                    else if(comment < 110){
                                        comment = "トマト嫌いな人とは分かりあえる気がしない（レア度：激レア）";
                                    }
                                    else if(comment < 260){
                                        comment = "遊ぶときはJavaScriptを有効にしてね！（遅い）（レア度：レア）";
                                    }
                                    else if(comment < 310){
                                        comment = "あしぃーたがあぁーるぅーさあぁー ♪（レア度：レア）";
                                    }
                                    else if(comment < 360){
                                        comment = "正直このコメントいらないよな（レア度：レア）";
                                    }
                                    else if(comment < 410){
                                        comment = "赤い爆発が高確率で四隅に出現するの あなたの運が悪いだけです（レア度：レア）";
                                    }
                                    else if(comment < 510){
                                        comment = "中央付近で立ち回るといいかも！（レア度：コモン）";
                                    }
                                    else if(comment < 610){
                                        comment = "さあ もう一回どうだい？（レア度：コモン）";
                                    }
                                    else if(comment < 710){
                                        comment = "瞬間移動を使いこなすことが大切！（レア度：コモン）";
                                    }
                                    else if(comment < 810){
                                        comment = "ピンクの爆発に当たると一発アウト！（レア度：コモン）";
                                    }
                                    else if(comment < 910){
                                        comment = "ありゃ... そういう日もある（レア度：コモン）";
                                    }
                                    else{
                                        comment = "諦めたらそこで試合終了ですよ？（レア度：顧問）";
                                    }
                                    document.getElementById("status").innerHTML = comment + "<br>回避できた数：" + score + "<br>リセット / Escape";
                                    document.getElementById("display").style.animation = "red 1.8s infinite";
                                    document.getElementById("display").textContent = "CRASHED";
                                    setTimeout(function(){
                                        document.getElementById("box").style.display = "none";
                                        setTimeout(function(){
                                            document.getElementById("box").style.display = "block";
                                            document.getElementById("box").style.display = "grid";
                                            setTimeout(function(){
                                                document.getElementById("box").style.display = "none";
                                                setTimeout(function(){
                                                    document.getElementById("box").style.display = "block";
                                                    document.getElementById("box").style.display = "grid";
                                                    setTimeout(function(){
                                                        document.getElementById("box").style.display = "none";
                                                        setTimeout(function(){
                                                            document.getElementById("box").style.display = "block";
                                                            document.getElementById("box").style.display = "grid";
                                                            setTimeout(function(){
                                                                document.getElementById("box").style.display = "none";
                                                                setTimeout(function(){
                                                                    document.getElementById("box").style.display = "block";
                                                                    document.getElementById("box").style.display = "grid";
                                                                    setTimeout(function(){
                                                                        document.getElementById("box").style.display = "none";
                                                                    }, 100);
                                                                }, 100);
                                                            }, 100);
                                                        }, 100);
                                                    }, 100);
                                                }, 100);
                                            }, 100);
                                        }, 100);
                                    }, 100);
                                }
                                destroyMode = 0;
                                setTimeout(function(){
                                    setTimeout(function(){
                                        document.getElementById("killer2").style.display = "none";
                                        document.getElementById("killer2").style.animation = "none";
                                        if(life > 0){
                                            setTimeout(killer2, 15000);
                                        }
                                    }, timing);
                                }, timing);
                            },timing);
                        }, timing);
                    }, timing);
                }, timing);
            }, timing);
        }, timing);
    }
}


function thunder1(){
    if(life > 0){
        document.getElementById("thunder1").style.backgroundColor = "#00000000";
        let timing = Math.round(Math.random()*100) + 120;
        let rdm = Math.round(Math.random()*80);
        if(rdm < 50){
            u = 10;
            v = 10;
        }
        else{
            u = Math.round(Math.random()*130) + 10;
            v = Math.round(Math.random()*130) + 10;
        }
        document.getElementById("thunder1").style.top = u + "px";
        document.getElementById("thunder1").style.left = v + "px";
        if(sound == 0){
            document.getElementById("a20").pause();
            document.getElementById("a20").currentTime = 0;
            document.getElementById("a20").play();
        }
        document.getElementById("thunder1").style.display = "block";
        document.getElementById("thunder1").style.display = "grid";
        document.getElementById("thunder1").textContent = "3";
        setTimeout(function(){
            document.getElementById("thunder1").style.display = "none";
            setTimeout(function(){
                if(sound == 0){
                    document.getElementById("a20").pause();
                    document.getElementById("a20").currentTime = 0;
                    document.getElementById("a20").play();
                }
                document.getElementById("thunder1").style.display = "block";
                document.getElementById("thunder1").style.display = "grid";
                document.getElementById("thunder1").textContent = "2";
                setTimeout(function(){
                    document.getElementById("thunder1").style.display = "none";
                    setTimeout(function(){
                        if(sound == 0){
                            document.getElementById("a20").pause();
                            document.getElementById("a20").currentTime = 0;
                            document.getElementById("a20").play();
                        }
                        document.getElementById("thunder1").style.display = "block";
                        document.getElementById("thunder1").style.display = "grid";
                        document.getElementById("thunder1").textContent = "1";
                        setTimeout(function(){
                            document.getElementById("thunder1").style.display = "none";
                            setTimeout(function(){
                                if(sound == 0){
                                    document.getElementById("a21").pause();
                                    document.getElementById("a21").currentTime = 0;
                                    document.getElementById("a21").play();
                                }
                                document.getElementById("thunder1").style.backgroundColor = "#ff9100";
                                document.getElementById("thunder1").style.display = "block";
                                document.getElementById("thunder1").style.display = "grid";
                                document.getElementById("thunder1").textContent = "STOP!";
                                if((((x + 30) > v) && ((y + 30) >= u) && (x <= (300 + v)) && (y <= (300 + u))) && (life > 0)){
                                    clearTimeout(timeout2);
                                    keyLockA = 2;
                                    keyLockW = 2;
                                    keyLockD = 2;
                                    keyLockS = 2;
                                    keyLockAL = 2;
                                    keyLockAU = 2;
                                    keyLockAR = 2;
                                    keyLockAD = 2;
                                    onBlur = 1;
                                    if(sound != 2){
                                        document.getElementById("a22").pause();
                                        document.getElementById("a22").currentTime = 0;
                                        document.getElementById("a22").play();
                                    }
                                    document.getElementById("box").style.backgroundColor = "#ff9100";
                                    document.getElementById("box").style.animation = "vibration .1s infinite";
                                    document.getElementById("box").textContent = "5";
                                    timeout2 = setTimeout(function(){
                                    document.getElementById("box").textContent = "4";
                                    timeout2 = setTimeout(function(){
                                        document.getElementById("box").textContent = "3";
                                            timeout2 = setTimeout(function(){
                                                document.getElementById("box").textContent = "2";
                                                timeout2 = setTimeout(function(){
                                                    document.getElementById("box").textContent = "1";
                                                    timeout2 = setTimeout(function(){
                                                        keyLockA = 0;
                                                        keyLockW = 0;
                                                        keyLockD = 0;
                                                        keyLockS = 0;
                                                        keyLockAL = 0;
                                                        keyLockAU = 0;
                                                        keyLockAR = 0;
                                                        keyLockAD = 0;
                                                        onBlur = 0;
                                                        document.getElementById("box").style.backgroundColor = "#0000ff";
                                                        document.getElementById("box").style.animation = "none";
                                                        document.getElementById("box").textContent = booster;
                                                    }, 1000);
                                                }, 1000);
                                            }, 1000);
                                        }, 1000);
                                    }, 1000);
                                }
                                else if(life > 0){
                                    score ++;
                                    if((score % 5) == 0){
                                        document.getElementById("counter").style.display = "block";
                                        document.getElementById("counter").style.display = "grid";
                                        document.getElementById("counter").textContent = score;
                                        erase();
                                    }
                                    document.getElementById("status").innerHTML = "HP：" + life + " / 回避できた数：" + score + "<br>リセット / Escape";
                                }
                                setTimeout(function(){
                                    document.getElementById("thunder1").style.display = "none";
                                    setTimeout(function(){
                                    }, timing);
                                }, timing);
                            },timing);
                        }, timing);
                    }, timing);
                }, timing);
            }, timing);
        }, timing);
    }
}


function thunder2(){
    if(life > 0){
        document.getElementById("thunder2").style.backgroundColor = "#00000000";
        let timing = Math.round(Math.random()*100) + 120;
        let rdm = Math.round(Math.random()*80);
        if(rdm < 50){
            w = 140;
            w2 = 10;
        }
        else{
            w = Math.round(Math.random()*130) + 10;
            w2 = Math.round(Math.random()*130) + 10;
        }
        document.getElementById("thunder2").style.top = w + "px";
        document.getElementById("thunder2").style.left = w2 + "px";
        if(sound == 0){
            document.getElementById("a20").pause();
            document.getElementById("a20").currentTime = 0;
            document.getElementById("a20").play();
        }
        document.getElementById("thunder2").style.display = "block";
        document.getElementById("thunder2").style.display = "grid";
        document.getElementById("thunder2").textContent = "3";
        setTimeout(function(){
            document.getElementById("thunder2").style.display = "none";
            setTimeout(function(){
                if(sound == 0){
                    document.getElementById("a20").pause();
                    document.getElementById("a20").currentTime = 0;
                    document.getElementById("a20").play();
                }
                document.getElementById("thunder2").style.display = "block";
                document.getElementById("thunder2").style.display = "grid";
                document.getElementById("thunder2").textContent = "2";
                setTimeout(function(){
                    document.getElementById("thunder2").style.display = "none";
                    setTimeout(function(){
                        if(sound == 0){
                            document.getElementById("a20").pause();
                            document.getElementById("a20").currentTime = 0;
                            document.getElementById("a20").play();
                        }
                        document.getElementById("thunder2").style.display = "block";
                        document.getElementById("thunder2").style.display = "grid";
                        document.getElementById("thunder2").textContent = "1";
                        setTimeout(function(){
                            document.getElementById("thunder2").style.display = "none";
                            setTimeout(function(){
                                if(sound == 0){
                                    document.getElementById("a21").pause();
                                    document.getElementById("a21").currentTime = 0;
                                    document.getElementById("a21").play();
                                }
                                document.getElementById("thunder2").style.backgroundColor = "#ff9100";
                                document.getElementById("thunder2").style.display = "block";
                                document.getElementById("thunder2").style.display = "grid";
                                document.getElementById("thunder2").textContent = "STOP!";
                                if((((x + 30) > w2) && ((y + 30) >= w) && (x <= (300 + w2)) && (y <= (300 + w))) && (life > 0)){
                                    clearTimeout(timeout2);
                                    keyLockA = 2;
                                    keyLockW = 2;
                                    keyLockD = 2;
                                    keyLockS = 2;
                                    keyLockAL = 2;
                                    keyLockAU = 2;
                                    keyLockAR = 2;
                                    keyLockAD = 2;
                                    onBlur = 1;
                                    if(sound != 2){
                                        document.getElementById("a22").pause();
                                        document.getElementById("a22").currentTime = 0;
                                        document.getElementById("a22").play();
                                    }
                                    document.getElementById("box").style.backgroundColor = "#ff9100";
                                    document.getElementById("box").style.animation = "vibration .1s infinite";
                                    document.getElementById("box").textContent = "5";
                                    timeout2 = setTimeout(function(){
                                    document.getElementById("box").textContent = "4";
                                    timeout2 = setTimeout(function(){
                                        document.getElementById("box").textContent = "3";
                                            timeout2 = setTimeout(function(){
                                                document.getElementById("box").textContent = "2";
                                                timeout2 = setTimeout(function(){
                                                    document.getElementById("box").textContent = "1";
                                                    timeout2 = setTimeout(function(){
                                                        keyLockA = 0;
                                                        keyLockW = 0;
                                                        keyLockD = 0;
                                                        keyLockS = 0;
                                                        keyLockAL = 0;
                                                        keyLockAU = 0;
                                                        keyLockAR = 0;
                                                        keyLockAD = 0;
                                                        onBlur = 0;
                                                        document.getElementById("box").style.backgroundColor = "#0000ff";
                                                        document.getElementById("box").style.animation = "none";
                                                        document.getElementById("box").textContent = booster;
                                                    }, 1000);
                                                }, 1000);
                                            }, 1000);
                                        }, 1000);
                                    }, 1000);
                                }
                                else if(life > 0){
                                    score ++;
                                    if((score % 5) == 0){
                                        document.getElementById("counter").style.display = "block";
                                        document.getElementById("counter").style.display = "grid";
                                        document.getElementById("counter").textContent = score;
                                        erase();
                                    }
                                    document.getElementById("status").innerHTML = "HP：" + life + " / 回避できた数：" + score + "<br>リセット / Escape";
                                }
                                setTimeout(function(){
                                    document.getElementById("thunder2").style.display = "none";
                                    setTimeout(function(){
                                    }, timing);
                                }, timing);
                            },timing);
                        }, timing);
                    }, timing);
                }, timing);
            }, timing);
        }, timing);
    }
}


function thunder3(){
    if(life > 0){
        document.getElementById("thunder3").style.backgroundColor = "#00000000";
        let timing = Math.round(Math.random()*100) + 120;
        let rdm = Math.round(Math.random()*80);
        if(rdm < 50){
            z = 140;
            z2 = 140;
        }
        else{
            z = Math.round(Math.random()*130) + 10;
            z2 = Math.round(Math.random()*130) + 10;
        }
        document.getElementById("thunder3").style.top = z + "px";
        document.getElementById("thunder3").style.left = z2 + "px";
        if(sound == 0){
            document.getElementById("a20").pause();
            document.getElementById("a20").currentTime = 0;
            document.getElementById("a20").play();
        }
        document.getElementById("thunder3").style.display = "block";
        document.getElementById("thunder3").style.display = "grid";
        document.getElementById("thunder3").textContent = "3";
        setTimeout(function(){
            document.getElementById("thunder3").style.display = "none";
            setTimeout(function(){
                if(sound == 0){
                    document.getElementById("a20").pause();
                    document.getElementById("a20").currentTime = 0;
                    document.getElementById("a20").play();
                }
                document.getElementById("thunder3").style.display = "block";
                document.getElementById("thunder3").style.display = "grid";
                document.getElementById("thunder3").textContent = "2";
                setTimeout(function(){
                    document.getElementById("thunder3").style.display = "none";
                    setTimeout(function(){
                        if(sound == 0){
                            document.getElementById("a20").pause();
                            document.getElementById("a20").currentTime = 0;
                            document.getElementById("a20").play();
                        }
                        document.getElementById("thunder3").style.display = "block";
                        document.getElementById("thunder3").style.display = "grid";
                        document.getElementById("thunder3").textContent = "1";
                        setTimeout(function(){
                            document.getElementById("thunder3").style.display = "none";
                            setTimeout(function(){
                                if(sound == 0){
                                    document.getElementById("a21").pause();
                                    document.getElementById("a21").currentTime = 0;
                                    document.getElementById("a21").play();
                                }
                                document.getElementById("thunder3").style.backgroundColor = "#ff9100";
                                document.getElementById("thunder3").style.display = "block";
                                document.getElementById("thunder3").style.display = "grid";
                                document.getElementById("thunder3").textContent = "STOP!";
                                if((((x + 30) > z2) && ((y + 30) >= z) && (x <= (300 + z2)) && (y <= (300 + z))) && (life > 0)){
                                    clearTimeout(timeout2);
                                    keyLockA = 2;
                                    keyLockW = 2;
                                    keyLockD = 2;
                                    keyLockS = 2;
                                    keyLockAL = 2;
                                    keyLockAU = 2;
                                    keyLockAR = 2;
                                    keyLockAD = 2;
                                    onBlur = 1;
                                    if(sound != 2){
                                        document.getElementById("a22").pause();
                                        document.getElementById("a22").currentTime = 0;
                                        document.getElementById("a22").play();
                                    }
                                    document.getElementById("box").style.backgroundColor = "#ff9100";
                                    document.getElementById("box").style.animation = "vibration .1s infinite";
                                    document.getElementById("box").textContent = "5";
                                    timeout2 = setTimeout(function(){
                                    document.getElementById("box").textContent = "4";
                                    timeout2 = setTimeout(function(){
                                        document.getElementById("box").textContent = "3";
                                            timeout2 = setTimeout(function(){
                                                document.getElementById("box").textContent = "2";
                                                timeout2 = setTimeout(function(){
                                                    document.getElementById("box").textContent = "1";
                                                    timeout2 = setTimeout(function(){
                                                        keyLockA = 0;
                                                        keyLockW = 0;
                                                        keyLockD = 0;
                                                        keyLockS = 0;
                                                        keyLockAL = 0;
                                                        keyLockAU = 0;
                                                        keyLockAR = 0;
                                                        keyLockAD = 0;
                                                        onBlur = 0;
                                                        document.getElementById("box").style.backgroundColor = "#0000ff";
                                                        document.getElementById("box").style.animation = "none";
                                                        document.getElementById("box").textContent = booster;
                                                    }, 1000);
                                                }, 1000);
                                            }, 1000);
                                        }, 1000);
                                    }, 1000);
                                }
                                else if(life > 0){
                                    score ++;
                                    if((score % 5) == 0){
                                        document.getElementById("counter").style.display = "block";
                                        document.getElementById("counter").style.display = "grid";
                                        document.getElementById("counter").textContent = score;
                                        erase();
                                    }
                                    document.getElementById("status").innerHTML = "HP：" + life + " / 回避できた数：" + score + "<br>リセット / Escape";
                                }
                                setTimeout(function(){
                                    document.getElementById("thunder3").style.display = "none";
                                    setTimeout(function(){
                                    }, timing);
                                }, timing);
                            },timing);
                        }, timing);
                    }, timing);
                }, timing);
            }, timing);
        }, timing);
    }
}


function thunder4(){
    if(life > 0){
        document.getElementById("thunder4").style.backgroundColor = "#00000000";
        let timing = Math.round(Math.random()*100) + 120;
        let rdm = Math.round(Math.random()*80);
        if(rdm < 50){
            z3 = 10;
            z4 = 140;
        }
        else{
            z3 = Math.round(Math.random()*130) + 10;
            z4 = Math.round(Math.random()*130) + 10;
        }
        document.getElementById("thunder4").style.top = z3 + "px";
        document.getElementById("thunder4").style.left = z4 + "px";
        if(sound == 0){
            document.getElementById("a20").pause();
            document.getElementById("a20").currentTime = 0;
            document.getElementById("a20").play();
        }
        document.getElementById("thunder4").style.display = "block";
        document.getElementById("thunder4").style.display = "grid";
        document.getElementById("thunder4").textContent = "3";
        setTimeout(function(){
            document.getElementById("thunder4").style.display = "none";
            setTimeout(function(){
                if(sound == 0){
                    document.getElementById("a20").pause();
                    document.getElementById("a20").currentTime = 0;
                    document.getElementById("a20").play();
                }
                document.getElementById("thunder4").style.display = "block";
                document.getElementById("thunder4").style.display = "grid";
                document.getElementById("thunder4").textContent = "2";
                setTimeout(function(){
                    document.getElementById("thunder4").style.display = "none";
                    setTimeout(function(){
                        if(sound == 0){
                            document.getElementById("a20").pause();
                            document.getElementById("a20").currentTime = 0;
                            document.getElementById("a20").play();
                        }
                        document.getElementById("thunder4").style.display = "block";
                        document.getElementById("thunder4").style.display = "grid";
                        document.getElementById("thunder4").textContent = "1";
                        setTimeout(function(){
                            document.getElementById("thunder4").style.display = "none";
                            setTimeout(function(){
                                if(sound == 0){
                                    document.getElementById("a21").pause();
                                    document.getElementById("a21").currentTime = 0;
                                    document.getElementById("a21").play();
                                }
                                document.getElementById("thunder4").style.backgroundColor = "#ff9100";
                                document.getElementById("thunder4").style.display = "block";
                                document.getElementById("thunder4").style.display = "grid";
                                document.getElementById("thunder4").textContent = "STOP!";
                                if((((x + 30) > z4) && ((y + 30) >= z3) && (x <= (300 + z4)) && (y <= (300 + z3))) && (life > 0)){
                                    clearTimeout(timeout2);
                                    keyLockA = 2;
                                    keyLockW = 2;
                                    keyLockD = 2;
                                    keyLockS = 2;
                                    keyLockAL = 2;
                                    keyLockAU = 2;
                                    keyLockAR = 2;
                                    keyLockAD = 2;
                                    onBlur = 1;
                                    if(sound != 2){
                                        document.getElementById("a22").pause();
                                        document.getElementById("a22").currentTime = 0;
                                        document.getElementById("a22").play();
                                    }
                                    document.getElementById("box").style.backgroundColor = "#ff9100";
                                    document.getElementById("box").style.animation = "vibration .1s infinite";
                                    document.getElementById("box").textContent = "5";
                                    timeout2 = setTimeout(function(){
                                    document.getElementById("box").textContent = "4";
                                    timeout2 = setTimeout(function(){
                                        document.getElementById("box").textContent = "3";
                                            timeout2 = setTimeout(function(){
                                                document.getElementById("box").textContent = "2";
                                                timeout2 = setTimeout(function(){
                                                    document.getElementById("box").textContent = "1";
                                                    timeout2 = setTimeout(function(){
                                                        keyLockA = 0;
                                                        keyLockW = 0;
                                                        keyLockD = 0;
                                                        keyLockS = 0;
                                                        keyLockAL = 0;
                                                        keyLockAU = 0;
                                                        keyLockAR = 0;
                                                        keyLockAD = 0;
                                                        onBlur = 0;
                                                        document.getElementById("box").style.backgroundColor = "#0000ff";
                                                        document.getElementById("box").style.animation = "none";
                                                        document.getElementById("box").textContent = booster;
                                                    }, 1000);
                                                }, 1000);
                                            }, 1000);
                                        }, 1000);
                                    }, 1000);
                                }
                                else if(life > 0){
                                    score ++;
                                    if((score % 5) == 0){
                                        document.getElementById("counter").style.display = "block";
                                        document.getElementById("counter").style.display = "grid";
                                        document.getElementById("counter").textContent = score;
                                        erase();
                                    }
                                    document.getElementById("status").innerHTML = "HP：" + life + " / 回避できた数：" + score + "<br>リセット / Escape";
                                }
                                setTimeout(function(){
                                    document.getElementById("thunder4").style.display = "none";
                                    setTimeout(function(){
                                    }, timing);
                                }, timing);
                            },timing);
                        }, timing);
                    }, timing);
                }, timing);
            }, timing);
        }, timing);
    }
}


function blur(){
    document.getElementById("blur").style.backgroundColor = "#00000000";
    let timing = Math.round(Math.random()*75) + 150;
    let random = Math.round(Math.random()*100);
    if((random < 50) && (life > 0) && (destroyMode == 0)){
        j = Math.round(Math.random()*180) + 10;
        k = Math.round(Math.random()*180) + 10;
        document.getElementById("blur").style.top = j + "px";
        document.getElementById("blur").style.left = k + "px";
        if(sound == 0){
            document.getElementById("a20").pause();
            document.getElementById("a20").currentTime = 0;
            document.getElementById("a20").play();
        }
        document.getElementById("blur").style.display = "block";
        document.getElementById("blur").style.display = "grid";
        document.getElementById("blur").textContent = "3";
        setTimeout(function(){
            document.getElementById("blur").style.display = "none";
            setTimeout(function(){
                if(sound == 0){
                    document.getElementById("a20").pause();
                    document.getElementById("a20").currentTime = 0;
                    document.getElementById("a20").play();
                }
                document.getElementById("blur").style.display = "block";
                document.getElementById("blur").style.display = "grid";
                document.getElementById("blur").textContent = "2";
                setTimeout(function(){
                    document.getElementById("blur").style.display = "none";
                    setTimeout(function(){
                        if(sound == 0){
                            document.getElementById("a20").pause();
                            document.getElementById("a20").currentTime = 0;
                            document.getElementById("a20").play();
                        }
                        document.getElementById("blur").style.display = "block";
                        document.getElementById("blur").style.display = "grid";
                        document.getElementById("blur").textContent = "1";
                        setTimeout(function(){
                            document.getElementById("blur").style.display = "none";
                            setTimeout(function(){
                                if(sound == 0){
                                    document.getElementById("a21").pause();
                                    document.getElementById("a21").currentTime = 0;
                                    document.getElementById("a21").play();
                                }
                                document.getElementById("blur").style.backgroundColor = "#ff9100";
                                document.getElementById("blur").style.display = "block";
                                document.getElementById("blur").style.display = "grid";
                                document.getElementById("blur").textContent = "STOP!";
                                if((((x + 30) > k) && ((y + 30) >= j) && (x <= (250 + k)) && (y <= (250 + j))) && (life > 0)){
                                    clearTimeout(timeout2);
                                    keyLockA = 2;
                                    keyLockW = 2;
                                    keyLockD = 2;
                                    keyLockS = 2;
                                    keyLockAL = 2;
                                    keyLockAU = 2;
                                    keyLockAR = 2;
                                    keyLockAD = 2;
                                    onBlur = 1;
                                    if(sound != 2){
                                        document.getElementById("a22").pause();
                                        document.getElementById("a22").currentTime = 0;
                                        document.getElementById("a22").play();
                                    }
                                    document.getElementById("box").style.backgroundColor = "#ff9100";
                                    document.getElementById("box").style.animation = "vibration .1s infinite";
                                    document.getElementById("box").textContent = "5";
                                    timeout2 = setTimeout(function(){
                                    document.getElementById("box").textContent = "4";
                                    timeout2 = setTimeout(function(){
                                        document.getElementById("box").textContent = "3";
                                            timeout2 = setTimeout(function(){
                                                document.getElementById("box").textContent = "2";
                                                timeout2 = setTimeout(function(){
                                                    document.getElementById("box").textContent = "1";
                                                    timeout2 = setTimeout(function(){
                                                        keyLockA = 0;
                                                        keyLockW = 0;
                                                        keyLockD = 0;
                                                        keyLockS = 0;
                                                        keyLockAL = 0;
                                                        keyLockAU = 0;
                                                        keyLockAR = 0;
                                                        keyLockAD = 0;
                                                        onBlur = 0;
                                                        document.getElementById("box").style.backgroundColor = "#0000ff";
                                                        document.getElementById("box").style.animation = "none";
                                                        document.getElementById("box").textContent = booster;
                                                    }, 1000);
                                                }, 1000);
                                            }, 1000);
                                        }, 1000);
                                    }, 1000);
                                }
                                else if(life > 0){
                                    score ++;
                                    if((score % 5) == 0){
                                        document.getElementById("counter").style.display = "block";
                                        document.getElementById("counter").style.display = "grid";
                                        document.getElementById("counter").textContent = score;
                                        erase();
                                    }
                                    document.getElementById("status").innerHTML = "HP：" + life + " / 回避できた数：" + score + "<br>リセット / Escape";
                                }
                                setTimeout(function(){
                                    document.getElementById("blur").style.display = "none";
                                    setTimeout(function(){
                                        if((life > 0) && (destroyMode == 0)){
                                            setTimeout(blur, 500);
                                        }
                                    }, timing);
                                }, timing);
                            },timing);
                        }, timing);
                    }, timing);
                }, timing);
            }, timing);
        }, timing);
    }
    else{
        if(destroyMode == 0){
            setTimeout(blur, 2000);
        }
    }
}



function attack_2(){
    if((life > 0) && (life2 > 0)){
        document.getElementById("attack").style.backgroundColor = "#00000000";
        let timing = Math.round(Math.random()*125) + 125;
        e = Math.round(Math.random()*60);
        a = Math.round(Math.random()*150) + 240;
        b = Math.round(Math.random()*150) + 240;
        if(e < 10){
            c = 10;
            d = 10;
        }
        else if(e < 20){
            c = 10;
            d = 440 - b;
        }
        else if(e < 30){
            c = 440 - a;
            d = 10;
        }
        else if(e < 40){
            c = 440 - a;
            d = 440 - b;
        }
        else{
            c = Math.round(Math.random()*(440 - a));
            d = Math.round(Math.random()*(440 - b));
        }
        document.getElementById("attack").style.height = a + "px";
        document.getElementById("attack").style.width = b + "px";
        document.getElementById("attack").style.top = c + "px";
        document.getElementById("attack").style.left = d + "px";
        if(sound == 0){
            document.getElementById("a3").pause();
            document.getElementById("a3").currentTime = 0;
            document.getElementById("a3").play();
        }
        document.getElementById("attack").style.display = "block";
        document.getElementById("attack").style.display = "grid";
        document.getElementById("attack").textContent = "3";
        setTimeout(function(){
            document.getElementById("attack").style.display = "none";
            setTimeout(function(){
                if(sound == 0){
                    document.getElementById("a3").pause();
                    document.getElementById("a3").currentTime = 0;
                    document.getElementById("a3").play();
                }
                document.getElementById("attack").style.display = "block";
                document.getElementById("attack").style.display = "grid";
                document.getElementById("attack").textContent = "2";
                setTimeout(function(){
                    document.getElementById("attack").style.display = "none";
                    setTimeout(function(){
                        if(sound == 0){
                            document.getElementById("a3").pause();
                            document.getElementById("a3").currentTime = 0;
                            document.getElementById("a3").play();
                        }
                        document.getElementById("attack").style.display = "block";
                        document.getElementById("attack").style.display = "grid";
                        document.getElementById("attack").textContent = "1";
                        setTimeout(function(){
                            document.getElementById("attack").style.display = "none";
                            setTimeout(function(){
                                if(sound == 0){
                                    document.getElementById("a4").pause();
                                    document.getElementById("a4").currentTime = 0;
                                    document.getElementById("a4").play();
                                }
                                document.getElementById("attack").style.backgroundColor = "#ff0000";
                                document.getElementById("attack").style.display = "block";
                                document.getElementById("attack").style.display = "grid";
                                document.getElementById("attack").textContent = "BOMB!";
                                if(((x + 30) >= d) && ((y + 30) >= c) && (x <= (b + d)) && (y <= (a + c)) && ((x2 + 30) >= d) && ((y2 + 30) >= c) && (x2 <= (b + d)) && (y2 <= (a + c)) && (life > 0) && (life2 > 0)){
                                    life --;
                                    life2 --;
                                    if((life > 0) && (life2 > 0)){
                                        if(sound != 2){
                                            document.getElementById("a8").pause();
                                            document.getElementById("a8").currentTime = 0;
                                            document.getElementById("a8").play();
                                        }
                                        document.getElementById("status").innerHTML = "（1P）HP：" + life + " / 回避できた数：" + score + "<br>（2P）HP：" + life2 + " / 回避できた数：" + score2 + "<br>リセット / Escape";
                                        clearTimeout(timeout6);
                                        document.getElementById("hp1").style.animation = "damege .9s";
                                        animationReset4();
                                        document.getElementById("hp1").textContent = "1P：" + life;
                                        clearTimeout(timeout7);
                                        document.getElementById("hp2").style.animation = "damege .9s";
                                        animationReset5();
                                        document.getElementById("hp2").textContent = "2P：" + life2;
                                    }
                                    if((life == 0) || (life2 == 0)){
                                        if(sound != 2){
                                            document.getElementById("a11").pause();
                                            document.getElementById("a11").currentTime = 0;
                                            document.getElementById("a11").play();
                                            document.getElementById("a7").pause();
                                            document.getElementById("a7").currentTime = 0;
                                            document.getElementById("a5").pause();
                                            document.getElementById("a5").currentTime = 0;
                                            document.getElementById("a5").play();
                                        }
                                        boosterLock = 1;
                                        clearTimeout(timeout);
                                        if((life == 0) && (life2 == 0)){
                                            let comment = "引き分けだ...";
                                        document.getElementById("status").innerHTML = comment + "<br>（1P）回避できた数：" + score + "<br>（2P）回避できた数：" + score2 + "<br>リセット / Escape";
                                        document.getElementById("display").style.animation = "blue 1.8s infinite";
                                        document.getElementById("display").textContent = "DRAW...";
                                        setTimeout(function(){
                                            document.getElementById("box").style.display = "none";
                                            document.getElementById("box3").style.display = "none";
                                            document.getElementById("box5").style.display = "none";
                                            document.getElementById("box6").style.display = "none";
                                            document.getElementById("box5").style.animation = "none";
                                            document.getElementById("box6").style.animation = "none";
                                            setTimeout(function(){
                                                document.getElementById("box").style.display = "block";
                                                document.getElementById("box").style.display = "grid";
                                                document.getElementById("box3").style.display = "block";
                                                document.getElementById("box3").style.display = "grid";
                                                document.getElementById("box5").style.display = "block";
                                                document.getElementById("box5").style.display = "grid";
                                                document.getElementById("box6").style.display = "block";
                                                document.getElementById("box6").style.display = "grid";
                                                setTimeout(function(){
                                                    document.getElementById("box").style.display = "none";
                                                    document.getElementById("box3").style.display = "none";
                                                    document.getElementById("box5").style.display = "none";
                                                    document.getElementById("box6").style.display = "none";
                                                    setTimeout(function(){
                                                        document.getElementById("box").style.display = "block";
                                                        document.getElementById("box").style.display = "grid";
                                                        document.getElementById("box3").style.display = "block";
                                                        document.getElementById("box3").style.display = "grid";
                                                        document.getElementById("box5").style.display = "block";
                                                        document.getElementById("box5").style.display = "grid";
                                                        document.getElementById("box6").style.display = "block";
                                                        document.getElementById("box6").style.display = "grid";
                                                        setTimeout(function(){
                                                            document.getElementById("box").style.display = "none";
                                                            document.getElementById("box3").style.display = "none";
                                                            document.getElementById("box5").style.display = "none";
                                                            document.getElementById("box6").style.display = "none";
                                                            setTimeout(function(){
                                                                document.getElementById("box").style.display = "block";
                                                                document.getElementById("box").style.display = "grid";
                                                                document.getElementById("box3").style.display = "block";
                                                                document.getElementById("box3").style.display = "grid";
                                                                document.getElementById("box5").style.display = "block";
                                                                document.getElementById("box5").style.display = "grid";
                                                                document.getElementById("box6").style.display = "block";
                                                                document.getElementById("box6").style.display = "grid";
                                                                setTimeout(function(){
                                                                    document.getElementById("box").style.display = "none";
                                                                    document.getElementById("box3").style.display = "none";
                                                                    document.getElementById("box5").style.display = "none";
                                                                    document.getElementById("box6").style.display = "none";
                                                                    setTimeout(function(){
                                                                        document.getElementById("box").style.display = "block";
                                                                        document.getElementById("box").style.display = "grid";
                                                                        document.getElementById("box3").style.display = "block";
                                                                        document.getElementById("box3").style.display = "grid";
                                                                        document.getElementById("box5").style.display = "block";
                                                                        document.getElementById("box5").style.display = "grid";
                                                                        document.getElementById("box6").style.display = "block";
                                                                        document.getElementById("box6").style.display = "grid";
                                                                        setTimeout(function(){
                                                                            document.getElementById("box").style.display = "none";
                                                                            document.getElementById("box3").style.display = "none";
                                                                            document.getElementById("box5").style.display = "none";
                                                                            document.getElementById("box6").style.display = "none";
                                                                        }, 100);
                                                                    }, 100);
                                                                }, 100);
                                                            }, 100);
                                                        }, 100);
                                                    }, 100);
                                                }, 100);
                                            }, 100);
                                        }, 100);
                                        }
                                        else if(life == 0){
                                            let comment = "2Pの勝利!!";
                                        document.getElementById("status").innerHTML = comment + "<br>（1P）回避できた数：" + score + "<br>（2P）回避できた数：" + score2 + "<br>リセット / Escape";
                                        document.getElementById("display").style.animation = "win2 .2s infinite, fadeIn 1s";
                                        document.getElementById("display").textContent = "2P WIN!";
                                        setTimeout(function(){
                                            document.getElementById("box").style.display = "none";
                                            document.getElementById("box5").style.display = "none";
                                            document.getElementById("box5").style.animation = "none";
                                            setTimeout(function(){
                                                document.getElementById("box").style.display = "block";
                                                document.getElementById("box").style.display = "grid";
                                                document.getElementById("box5").style.display = "block";
                                                document.getElementById("box5").style.display = "grid";
                                                setTimeout(function(){
                                                    document.getElementById("box").style.display = "none";
                                                    document.getElementById("box5").style.display = "none";
                                                    setTimeout(function(){
                                                        document.getElementById("box").style.display = "block";
                                                        document.getElementById("box").style.display = "grid";
                                                        document.getElementById("box5").style.display = "block";
                                                        document.getElementById("box5").style.display = "grid";
                                                        setTimeout(function(){
                                                            document.getElementById("box").style.display = "none";
                                                            document.getElementById("box5").style.display = "none";
                                                            setTimeout(function(){
                                                                document.getElementById("box").style.display = "block";
                                                                document.getElementById("box").style.display = "grid";
                                                                document.getElementById("box5").style.display = "block";
                                                                document.getElementById("box5").style.display = "grid";
                                                                setTimeout(function(){
                                                                    document.getElementById("box").style.display = "none";
                                                                    document.getElementById("box5").style.display = "none";
                                                                    setTimeout(function(){
                                                                        document.getElementById("box").style.display = "block";
                                                                        document.getElementById("box").style.display = "grid";
                                                                        document.getElementById("box5").style.display = "block";
                                                                        document.getElementById("box5").style.display = "grid";
                                                                        setTimeout(function(){
                                                                            document.getElementById("box").style.display = "none";
                                                                            document.getElementById("box5").style.display = "none";
                                                                        }, 100);
                                                                    }, 100);
                                                                }, 100);
                                                            }, 100);
                                                        }, 100);
                                                    }, 100);
                                                }, 100);
                                            }, 100);
                                        }, 100);
                                        }
                                        else if(life2 == 0){
                                            let comment = "1Pの勝利!!";
                                        document.getElementById("status").innerHTML = comment + "<br>（1P）回避できた数：" + score + "<br>（2P）回避できた数：" + score2 + "<br>リセット / Escape";
                                        document.getElementById("display").style.animation = "win1 .2s infinite, fadeIn 1s";
                                        document.getElementById("display").textContent = "1P WIN!";
                                        setTimeout(function(){
                                            document.getElementById("box3").style.display = "none";
                                            document.getElementById("box6").style.display = "none";
                                            document.getElementById("box6").style.animation = "none";
                                            setTimeout(function(){
                                                document.getElementById("box3").style.display = "block";
                                                document.getElementById("box3").style.display = "grid";
                                                document.getElementById("box6").style.display = "block";
                                                document.getElementById("box6").style.display = "grid";
                                                setTimeout(function(){
                                                    document.getElementById("box3").style.display = "none";
                                                    document.getElementById("box6").style.display = "none";
                                                    setTimeout(function(){
                                                        document.getElementById("box3").style.display = "block";
                                                        document.getElementById("box3").style.display = "grid";
                                                        document.getElementById("box6").style.display = "block";
                                                        document.getElementById("box6").style.display = "grid";
                                                        setTimeout(function(){
                                                            document.getElementById("box3").style.display = "none";
                                                            document.getElementById("box6").style.display = "none";
                                                            setTimeout(function(){
                                                                document.getElementById("box3").style.display = "block";
                                                                document.getElementById("box3").style.display = "grid";
                                                                document.getElementById("box6").style.display = "block";
                                                                document.getElementById("box6").style.display = "grid";
                                                                setTimeout(function(){
                                                                    document.getElementById("box3").style.display = "none";
                                                                    document.getElementById("box6").style.display = "none";
                                                                    setTimeout(function(){
                                                                        document.getElementById("box3").style.display = "block";
                                                                        document.getElementById("box3").style.display = "grid";
                                                                        document.getElementById("box6").style.display = "block";
                                                                        document.getElementById("box6").style.display = "grid";
                                                                        setTimeout(function(){
                                                                            document.getElementById("box3").style.display = "none";
                                                                            document.getElementById("box6").style.display = "none";
                                                                        }, 100);
                                                                    }, 100);
                                                                }, 100);
                                                            }, 100);
                                                        }, 100);
                                                    }, 100);
                                                }, 100);
                                            }, 100);
                                        }, 100);
                                        }
                                        else{}
                                    }
                                }
                                else if(((x + 30) >= d) && ((y + 30) >= c) && (x <= (b + d)) && (y <= (a + c)) && (life > 0) && (life2 > 0)){
                                    life --;
                                    score2 ++;
                                    if(life > 0){
                                        if(sound != 2){
                                            document.getElementById("a8").pause();
                                            document.getElementById("a8").currentTime = 0;
                                            document.getElementById("a8").play();
                                        }
                                        document.getElementById("status").innerHTML = "（1P）HP：" + life + " / 回避できた数：" + score + "<br>（2P）HP：" + life2 + " / 回避できた数：" + score2 + "<br>リセット / Escape";
                                        clearTimeout(timeout6);
                                        document.getElementById("hp1").style.animation = "damege .9s";
                                        animationReset4();
                                        document.getElementById("hp1").textContent = "1P：" + life;
                                    }
                                    if(life == 0){
                                        if(sound != 2){
                                            document.getElementById("a11").pause();
                                            document.getElementById("a11").currentTime = 0;
                                            document.getElementById("a11").play();
                                            document.getElementById("a7").pause();
                                            document.getElementById("a7").currentTime = 0;
                                            document.getElementById("a5").pause();
                                            document.getElementById("a5").currentTime = 0;
                                            document.getElementById("a5").play();
                                        }
                                        boosterLock = 1;
                                        clearTimeout(timeout);
                                        let comment = "2Pの勝利!!";
                                        document.getElementById("status").innerHTML = comment + "<br>（1P）回避できた数：" + score + "<br>（2P）回避できた数：" + score2 + "<br>リセット / Escape";
                                        document.getElementById("display").style.animation = "win2 .2s infinite, fadeIn 1s";
                                        document.getElementById("display").textContent = "2P WIN!";
                                        setTimeout(function(){
                                            document.getElementById("box").style.display = "none";
                                            document.getElementById("box5").style.display = "none";
                                            document.getElementById("box5").style.animation = "none";
                                            setTimeout(function(){
                                                document.getElementById("box").style.display = "block";
                                                document.getElementById("box").style.display = "grid";
                                                document.getElementById("box5").style.display = "block";
                                                document.getElementById("box5").style.display = "grid";
                                                setTimeout(function(){
                                                    document.getElementById("box").style.display = "none";
                                                    document.getElementById("box5").style.display = "none";
                                                    setTimeout(function(){
                                                        document.getElementById("box").style.display = "block";
                                                        document.getElementById("box").style.display = "grid";
                                                        document.getElementById("box5").style.display = "block";
                                                        document.getElementById("box5").style.display = "grid";
                                                        setTimeout(function(){
                                                            document.getElementById("box").style.display = "none";
                                                            document.getElementById("box5").style.display = "none";
                                                            setTimeout(function(){
                                                                document.getElementById("box").style.display = "block";
                                                                document.getElementById("box").style.display = "grid";
                                                                document.getElementById("box5").style.display = "block";
                                                                document.getElementById("box5").style.display = "grid";
                                                                setTimeout(function(){
                                                                    document.getElementById("box").style.display = "none";
                                                                    document.getElementById("box5").style.display = "none";
                                                                    setTimeout(function(){
                                                                        document.getElementById("box").style.display = "block";
                                                                        document.getElementById("box").style.display = "grid";
                                                                        document.getElementById("box5").style.display = "block";
                                                                        document.getElementById("box5").style.display = "grid";
                                                                        setTimeout(function(){
                                                                            document.getElementById("box").style.display = "none";
                                                                            document.getElementById("box5").style.display = "none";
                                                                        }, 100);
                                                                    }, 100);
                                                                }, 100);
                                                            }, 100);
                                                        }, 100);
                                                    }, 100);
                                                }, 100);
                                            }, 100);
                                        }, 100);
                                    }
                                }
                                else if(((x2 + 30) >= d) && ((y2 + 30) >= c) && (x2 <= (b + d)) && (y2 <= (a + c)) && (life > 0) && (life2 > 0)){
                                    life2 --;
                                    score ++;
                                    if(life2 > 0){
                                        if(sound != 2){
                                            document.getElementById("a8").pause();
                                            document.getElementById("a8").currentTime = 0;
                                            document.getElementById("a8").play();
                                        }
                                        document.getElementById("status").innerHTML = "（1P）HP：" + life + " / 回避できた数：" + score + "<br>（2P）HP：" + life2 + " / 回避できた数：" + score2 + "<br>リセット / Escape";
                                        clearTimeout(timeout7);
                                        document.getElementById("hp2").style.animation = "damege .9s";
                                        animationReset5();
                                        document.getElementById("hp2").textContent = "2P：" + life2;
                                    }
                                    if(life2 == 0){
                                        if(sound != 2){
                                            document.getElementById("a11").pause();
                                            document.getElementById("a11").currentTime = 0;
                                            document.getElementById("a11").play();
                                            document.getElementById("a7").pause();
                                            document.getElementById("a7").currentTime = 0;
                                            document.getElementById("a5").pause();
                                            document.getElementById("a5").currentTime = 0;
                                            document.getElementById("a5").play();
                                        }
                                        boosterLock = 1;
                                        clearTimeout(timeout);
                                        let comment = "1Pの勝利!!";
                                        document.getElementById("status").innerHTML = comment + "<br>（1P）回避できた数：" + score + "<br>（2P）回避できた数：" + score2 + "<br>リセット / Escape";
                                        document.getElementById("display").style.animation = "win1 .2s infinite, fadeIn 1s";
                                        document.getElementById("display").textContent = "1P WIN!";
                                        setTimeout(function(){
                                            document.getElementById("box3").style.display = "none";
                                            document.getElementById("box6").style.display = "none";
                                            document.getElementById("box6").style.animation = "none";
                                            setTimeout(function(){
                                                document.getElementById("box3").style.display = "block";
                                                document.getElementById("box3").style.display = "grid";
                                                document.getElementById("box6").style.display = "block";
                                                document.getElementById("box6").style.display = "grid";
                                                setTimeout(function(){
                                                    document.getElementById("box3").style.display = "none";
                                                    document.getElementById("box6").style.display = "none";
                                                    setTimeout(function(){
                                                        document.getElementById("box3").style.display = "block";
                                                        document.getElementById("box3").style.display = "grid";
                                                        document.getElementById("box6").style.display = "block";
                                                        document.getElementById("box6").style.display = "grid";
                                                        setTimeout(function(){
                                                            document.getElementById("box3").style.display = "none";
                                                            document.getElementById("box6").style.display = "none";
                                                            setTimeout(function(){
                                                                document.getElementById("box3").style.display = "block";
                                                                document.getElementById("box3").style.display = "grid";
                                                                document.getElementById("box6").style.display = "block";
                                                                document.getElementById("box6").style.display = "grid";
                                                                setTimeout(function(){
                                                                    document.getElementById("box3").style.display = "none";
                                                                    document.getElementById("box6").style.display = "none";
                                                                    setTimeout(function(){
                                                                        document.getElementById("box3").style.display = "block";
                                                                        document.getElementById("box3").style.display = "grid";
                                                                        document.getElementById("box6").style.display = "block";
                                                                        document.getElementById("box6").style.display = "grid";
                                                                        setTimeout(function(){
                                                                            document.getElementById("box3").style.display = "none";
                                                                            document.getElementById("box6").style.display = "none";
                                                                        }, 100);
                                                                    }, 100);
                                                                }, 100);
                                                            }, 100);
                                                        }, 100);
                                                    }, 100);
                                                }, 100);
                                            }, 100);
                                        }, 100);
                                    }
                                }
                                else{
                                    score ++;
                                    score2 ++;
                                    if((life > 0) && (life2 > 0)){
                                        document.getElementById("status").innerHTML = "（1P）HP：" + life + " / 回避できた数：" + score + "<br>（2P）HP：" + life2 + " / 回避できた数：" + score2 + "<br>リセット / Escape";
                                    }
                                }
                                setTimeout(function(){
                                    document.getElementById("attack").style.display = "none";
                                    setTimeout(function(){
                                        if((life > 0) && (life2 > 0)){
                                            let time = Math.round(Math.random()*1500) + 200;
                                            setTimeout(attack_2, time);
                                        }
                                    }, timing);
                                }, timing);
                            }, timing);
                        }, timing);
                    }, timing);
                }, timing);
            }, timing);
        }, timing);
    }else{}
}


function attack2_2(){
    if((life > 0) && (life2 > 0)){
        document.getElementById("attack2").style.backgroundColor = "#00000000";
        let timing = Math.round(Math.random()*75) + 150;
        l = Math.round(Math.random()*40);
        if(l < 10){
            m = 215;
            n = 430;
            o = 10;
            p = 10;
        }
        else if(l < 20){
            m = 430;
            n = 215;
            o = 225;
            p = 10;
        }
        else if(l < 30){
            m = 215;
            n = 430;
            o = 10;
            p = 225;
        }
        else{
            m = 430;
            n = 215;
            o = 10;
            p = 10;
        }
        document.getElementById("attack2").style.height = n + "px";
        document.getElementById("attack2").style.width = m + "px";
        document.getElementById("attack2").style.top = o + "px";
        document.getElementById("attack2").style.left = p + "px";
        if(sound == 0){
            document.getElementById("a23").pause();
            document.getElementById("a23").currentTime = 0;
            document.getElementById("a23").play();
        }
        document.getElementById("attack2").style.display = "block";
        document.getElementById("attack2").style.display = "grid";
        document.getElementById("attack2").textContent = "3";
        setTimeout(function(){
            document.getElementById("attack2").style.display = "none";
            setTimeout(function(){
                if(sound == 0){
                    document.getElementById("a23").pause();
                    document.getElementById("a23").currentTime = 0;
                    document.getElementById("a23").play();
                }
                document.getElementById("attack2").style.display = "block";
                document.getElementById("attack2").style.display = "grid";
                document.getElementById("attack2").textContent = "2";
                setTimeout(function(){
                    document.getElementById("attack2").style.display = "none";
                    setTimeout(function(){
                        if(sound == 0){
                            document.getElementById("a23").pause();
                            document.getElementById("a23").currentTime = 0;
                            document.getElementById("a23").play();
                        }
                        document.getElementById("attack2").style.display = "block";
                        document.getElementById("attack2").style.display = "grid";
                        document.getElementById("attack2").textContent = "1";
                        setTimeout(function(){
                            document.getElementById("attack2").style.display = "none";
                            setTimeout(function(){
                                if(sound == 0){
                                    document.getElementById("a24").pause();
                                    document.getElementById("a24").currentTime = 0;
                                    document.getElementById("a24").play();
                                }
                                document.getElementById("attack2").style.backgroundColor = "#ff0000";
                                document.getElementById("attack2").style.display = "block";
                                document.getElementById("attack2").style.display = "grid";
                                document.getElementById("attack2").textContent = "BOMB!";
                                if(((x + 30) >= p) && ((y + 30) >= o) && (x <= (p + m)) && (y <= (o + n)) && ((x2 + 30) >= p) && ((y2 + 30) >= o) && (x2 <= (p + m)) && (y2 <= (o + n)) && (life > 0) && (life2 > 0)){
                                    life --;
                                    life2 --;
                                    if((life > 0) && (life2 > 0)){
                                        if(sound != 2){
                                            document.getElementById("a8").pause();
                                            document.getElementById("a8").currentTime = 0;
                                            document.getElementById("a8").play();
                                        }
                                        document.getElementById("status").innerHTML = "（1P）HP：" + life + " / 回避できた数：" + score + "<br>（2P）HP：" + life2 + " / 回避できた数：" + score2 + "<br>リセット / Escape";
                                        clearTimeout(timeout6);
                                        document.getElementById("hp1").style.animation = "damege .9s";
                                        animationReset4();
                                        document.getElementById("hp1").textContent = "1P：" + life;
                                        clearTimeout(timeout7);
                                        document.getElementById("hp2").style.animation = "damege .9s";
                                        animationReset5();
                                        document.getElementById("hp2").textContent = "2P：" + life2;
                                    }
                                    if((life == 0) || (life2 == 0)){
                                        if(sound != 2){
                                            document.getElementById("a11").pause();
                                            document.getElementById("a11").currentTime = 0;
                                            document.getElementById("a11").play();
                                            document.getElementById("a7").pause();
                                            document.getElementById("a7").currentTime = 0;
                                            document.getElementById("a5").pause();
                                            document.getElementById("a5").currentTime = 0;
                                            document.getElementById("a5").play();
                                        }
                                        boosterLock = 1;
                                        clearTimeout(timeout);
                                        if((life == 0) && (life2 == 0)){
                                            let comment = "引き分けだ...";
                                        document.getElementById("status").innerHTML = comment + "<br>（1P）回避できた数：" + score + "<br>（2P）回避できた数：" + score2 + "<br>リセット / Escape";
                                        document.getElementById("display").style.animation = "blue 1.8s infinite";
                                        document.getElementById("display").textContent = "DRAW...";
                                        setTimeout(function(){
                                            document.getElementById("box").style.display = "none";
                                            document.getElementById("box3").style.display = "none";
                                            document.getElementById("box5").style.display = "none";
                                            document.getElementById("box6").style.display = "none";
                                            document.getElementById("box5").style.animation = "none";
                                            document.getElementById("box6").style.animation = "none";
                                            setTimeout(function(){
                                                document.getElementById("box").style.display = "block";
                                                document.getElementById("box").style.display = "grid";
                                                document.getElementById("box3").style.display = "block";
                                                document.getElementById("box3").style.display = "grid";
                                                document.getElementById("box5").style.display = "block";
                                                document.getElementById("box5").style.display = "grid";
                                                document.getElementById("box6").style.display = "block";
                                                document.getElementById("box6").style.display = "grid";
                                                setTimeout(function(){
                                                    document.getElementById("box").style.display = "none";
                                                    document.getElementById("box3").style.display = "none";
                                                    document.getElementById("box5").style.display = "none";
                                                    document.getElementById("box6").style.display = "none";
                                                    setTimeout(function(){
                                                        document.getElementById("box").style.display = "block";
                                                        document.getElementById("box").style.display = "grid";
                                                        document.getElementById("box3").style.display = "block";
                                                        document.getElementById("box3").style.display = "grid";
                                                        document.getElementById("box5").style.display = "block";
                                                        document.getElementById("box5").style.display = "grid";
                                                        document.getElementById("box6").style.display = "block";
                                                        document.getElementById("box6").style.display = "grid";
                                                        setTimeout(function(){
                                                            document.getElementById("box").style.display = "none";
                                                            document.getElementById("box3").style.display = "none";
                                                            document.getElementById("box5").style.display = "none";
                                                            document.getElementById("box6").style.display = "none";
                                                            setTimeout(function(){
                                                                document.getElementById("box").style.display = "block";
                                                                document.getElementById("box").style.display = "grid";
                                                                document.getElementById("box3").style.display = "block";
                                                                document.getElementById("box3").style.display = "grid";
                                                                document.getElementById("box5").style.display = "block";
                                                                document.getElementById("box5").style.display = "grid";
                                                                document.getElementById("box6").style.display = "block";
                                                                document.getElementById("box6").style.display = "grid";
                                                                setTimeout(function(){
                                                                    document.getElementById("box").style.display = "none";
                                                                    document.getElementById("box3").style.display = "none";
                                                                    document.getElementById("box5").style.display = "none";
                                                                    document.getElementById("box6").style.display = "none";
                                                                    setTimeout(function(){
                                                                        document.getElementById("box").style.display = "block";
                                                                        document.getElementById("box").style.display = "grid";
                                                                        document.getElementById("box3").style.display = "block";
                                                                        document.getElementById("box3").style.display = "grid";
                                                                        document.getElementById("box5").style.display = "block";
                                                                        document.getElementById("box5").style.display = "grid";
                                                                        document.getElementById("box6").style.display = "block";
                                                                        document.getElementById("box6").style.display = "grid";
                                                                        setTimeout(function(){
                                                                            document.getElementById("box").style.display = "none";
                                                                            document.getElementById("box3").style.display = "none";
                                                                            document.getElementById("box5").style.display = "none";
                                                                            document.getElementById("box6").style.display = "none";
                                                                        }, 100);
                                                                    }, 100);
                                                                }, 100);
                                                            }, 100);
                                                        }, 100);
                                                    }, 100);
                                                }, 100);
                                            }, 100);
                                        }, 100);
                                        }
                                        else if(life == 0){
                                            let comment = "2Pの勝利!!";
                                        document.getElementById("status").innerHTML = comment + "<br>（1P）回避できた数：" + score + "<br>（2P）回避できた数：" + score2 + "<br>リセット / Escape";
                                        document.getElementById("display").style.animation = "win2 .2s infinite, fadeIn 1s";
                                        document.getElementById("display").textContent = "2P WIN!";
                                        setTimeout(function(){
                                            document.getElementById("box").style.display = "none";
                                            document.getElementById("box5").style.display = "none";
                                            document.getElementById("box5").style.animation = "none";
                                            setTimeout(function(){
                                                document.getElementById("box").style.display = "block";
                                                document.getElementById("box").style.display = "grid";
                                                document.getElementById("box5").style.display = "block";
                                                document.getElementById("box5").style.display = "grid";
                                                setTimeout(function(){
                                                    document.getElementById("box").style.display = "none";
                                                    document.getElementById("box5").style.display = "none";
                                                    setTimeout(function(){
                                                        document.getElementById("box").style.display = "block";
                                                        document.getElementById("box").style.display = "grid";
                                                        document.getElementById("box5").style.display = "block";
                                                        document.getElementById("box5").style.display = "grid";
                                                        setTimeout(function(){
                                                            document.getElementById("box").style.display = "none";
                                                            document.getElementById("box5").style.display = "none";
                                                            setTimeout(function(){
                                                                document.getElementById("box").style.display = "block";
                                                                document.getElementById("box").style.display = "grid";
                                                                document.getElementById("box5").style.display = "block";
                                                                document.getElementById("box5").style.display = "grid";
                                                                setTimeout(function(){
                                                                    document.getElementById("box").style.display = "none";
                                                                    document.getElementById("box5").style.display = "none";
                                                                    setTimeout(function(){
                                                                        document.getElementById("box").style.display = "block";
                                                                        document.getElementById("box").style.display = "grid";
                                                                        document.getElementById("box5").style.display = "block";
                                                                        document.getElementById("box5").style.display = "grid";
                                                                        setTimeout(function(){
                                                                            document.getElementById("box").style.display = "none";
                                                                            document.getElementById("box5").style.display = "none";
                                                                        }, 100);
                                                                    }, 100);
                                                                }, 100);
                                                            }, 100);
                                                        }, 100);
                                                    }, 100);
                                                }, 100);
                                            }, 100);
                                        }, 100);
                                        }
                                        else if(life2 == 0){
                                            let comment = "1Pの勝利!!";
                                        document.getElementById("status").innerHTML = comment + "<br>（1P）回避できた数：" + score + "<br>（2P）回避できた数：" + score2 + "<br>リセット / Escape";
                                        document.getElementById("display").style.animation = "win1 .2s infinite, fadeIn 1s";
                                        document.getElementById("display").textContent = "1P WIN!";
                                        setTimeout(function(){
                                            document.getElementById("box3").style.display = "none";
                                            document.getElementById("box6").style.display = "none";
                                            document.getElementById("box6").style.animation = "none";
                                            setTimeout(function(){
                                                document.getElementById("box3").style.display = "block";
                                                document.getElementById("box3").style.display = "grid";
                                                document.getElementById("box6").style.display = "block";
                                                document.getElementById("box6").style.display = "grid";
                                                setTimeout(function(){
                                                    document.getElementById("box3").style.display = "none";
                                                    document.getElementById("box6").style.display = "none";
                                                    setTimeout(function(){
                                                        document.getElementById("box3").style.display = "block";
                                                        document.getElementById("box3").style.display = "grid";
                                                        document.getElementById("box6").style.display = "block";
                                                        document.getElementById("box6").style.display = "grid";
                                                        setTimeout(function(){
                                                            document.getElementById("box3").style.display = "none";
                                                            document.getElementById("box6").style.display = "none";
                                                            setTimeout(function(){
                                                                document.getElementById("box3").style.display = "block";
                                                                document.getElementById("box3").style.display = "grid";
                                                                document.getElementById("box6").style.display = "block";
                                                                document.getElementById("box6").style.display = "grid";
                                                                setTimeout(function(){
                                                                    document.getElementById("box3").style.display = "none";
                                                                    document.getElementById("box6").style.display = "none";
                                                                    setTimeout(function(){
                                                                        document.getElementById("box3").style.display = "block";
                                                                        document.getElementById("box3").style.display = "grid";
                                                                        document.getElementById("box6").style.display = "block";
                                                                        document.getElementById("box6").style.display = "grid";
                                                                        setTimeout(function(){
                                                                            document.getElementById("box3").style.display = "none";
                                                                            document.getElementById("box6").style.display = "none";
                                                                        }, 100);
                                                                    }, 100);
                                                                }, 100);
                                                            }, 100);
                                                        }, 100);
                                                    }, 100);
                                                }, 100);
                                            }, 100);
                                        }, 100);
                                        }
                                        else{}
                                    }
                                }
                                else if(((x + 30) >= p) && ((y + 30) >= o) && (x <= (p + m)) && (y <= (o + n)) && (life > 0) && (life2 > 0)){
                                    life --;
                                    score2 ++;
                                    if(life > 0){
                                        if(sound != 2){
                                            document.getElementById("a8").pause();
                                            document.getElementById("a8").currentTime = 0;
                                            document.getElementById("a8").play();
                                        }
                                        document.getElementById("status").innerHTML = "（1P）HP：" + life + " / 回避できた数：" + score + "<br>（2P）HP：" + life2 + " / 回避できた数：" + score2 + "<br>リセット / Escape";
                                        clearTimeout(timeout6);
                                        document.getElementById("hp1").style.animation = "damege .9s";
                                        animationReset4();
                                        document.getElementById("hp1").textContent = "1P：" + life;
                                    }
                                    if(life == 0){
                                        if(sound != 2){
                                            document.getElementById("a11").pause();
                                            document.getElementById("a11").currentTime = 0;
                                            document.getElementById("a11").play();
                                            document.getElementById("a7").pause();
                                            document.getElementById("a7").currentTime = 0;
                                            document.getElementById("a5").pause();
                                            document.getElementById("a5").currentTime = 0;
                                            document.getElementById("a5").play();
                                        }
                                        boosterLock = 1;
                                        clearTimeout(timeout);
                                        let comment = "2Pの勝利!!";
                                        document.getElementById("status").innerHTML = comment + "<br>（1P）回避できた数：" + score + "<br>（2P）回避できた数：" + score2 + "<br>リセット / Escape";
                                        document.getElementById("display").style.animation = "win2 .2s infinite, fadeIn 1s";
                                        document.getElementById("display").textContent = "2P WIN!";
                                        setTimeout(function(){
                                            document.getElementById("box").style.display = "none";
                                            document.getElementById("box5").style.display = "none";
                                            document.getElementById("box5").style.animation = "none";
                                            setTimeout(function(){
                                                document.getElementById("box").style.display = "block";
                                                document.getElementById("box").style.display = "grid";
                                                document.getElementById("box5").style.display = "block";
                                                document.getElementById("box5").style.display = "grid";
                                                setTimeout(function(){
                                                    document.getElementById("box").style.display = "none";
                                                    document.getElementById("box5").style.display = "none";
                                                    setTimeout(function(){
                                                        document.getElementById("box").style.display = "block";
                                                        document.getElementById("box").style.display = "grid";
                                                        document.getElementById("box5").style.display = "block";
                                                        document.getElementById("box5").style.display = "grid";
                                                        setTimeout(function(){
                                                            document.getElementById("box").style.display = "none";
                                                            document.getElementById("box5").style.display = "none";
                                                            setTimeout(function(){
                                                                document.getElementById("box").style.display = "block";
                                                                document.getElementById("box").style.display = "grid";
                                                                document.getElementById("box5").style.display = "block";
                                                                document.getElementById("box5").style.display = "grid";
                                                                setTimeout(function(){
                                                                    document.getElementById("box").style.display = "none";
                                                                    document.getElementById("box5").style.display = "none";
                                                                    setTimeout(function(){
                                                                        document.getElementById("box").style.display = "block";
                                                                        document.getElementById("box").style.display = "grid";
                                                                        document.getElementById("box5").style.display = "block";
                                                                        document.getElementById("box5").style.display = "grid";
                                                                        setTimeout(function(){
                                                                            document.getElementById("box").style.display = "none";
                                                                            document.getElementById("box5").style.display = "none";
                                                                        }, 100);
                                                                    }, 100);
                                                                }, 100);
                                                            }, 100);
                                                        }, 100);
                                                    }, 100);
                                                }, 100);
                                            }, 100);
                                        }, 100);
                                    }
                                }
                                else if(((x2 + 30) >= p) && ((y2 + 30) >= o) && (x2 <= (p + m)) && (y2 <= (o + n)) && (life > 0) && (life2 > 0)){
                                    life2 --;
                                    score ++;
                                    if(life2 > 0){
                                        if(sound != 2){
                                            document.getElementById("a8").pause();
                                            document.getElementById("a8").currentTime = 0;
                                            document.getElementById("a8").play();
                                        }
                                        document.getElementById("status").innerHTML = "（1P）HP：" + life + " / 回避できた数：" + score + "<br>（2P）HP：" + life2 + " / 回避できた数：" + score2 + "<br>リセット / Escape";
                                        clearTimeout(timeout7);
                                        document.getElementById("hp2").style.animation = "damege .9s";
                                        animationReset5();
                                        document.getElementById("hp2").textContent = "2P：" + life2;
                                    }
                                    if(life2 == 0){
                                        if(sound != 2){
                                            document.getElementById("a11").pause();
                                            document.getElementById("a11").currentTime = 0;
                                            document.getElementById("a11").play();
                                            document.getElementById("a7").pause();
                                            document.getElementById("a7").currentTime = 0;
                                            document.getElementById("a5").pause();
                                            document.getElementById("a5").currentTime = 0;
                                            document.getElementById("a5").play();
                                        }
                                        boosterLock = 1;
                                        clearTimeout(timeout);
                                        let comment = "1Pの勝利!!";
                                        document.getElementById("status").innerHTML = comment + "<br>（1P）回避できた数：" + score + "<br>（2P）回避できた数：" + score2 + "<br>リセット / Escape";
                                        document.getElementById("display").style.animation = "win1 .2s infinite, fadeIn 1s";
                                        document.getElementById("display").textContent = "1P WIN!";
                                        setTimeout(function(){
                                            document.getElementById("box3").style.display = "none";
                                            document.getElementById("box6").style.display = "none";
                                            document.getElementById("box6").style.animation = "none";
                                            setTimeout(function(){
                                                document.getElementById("box3").style.display = "block";
                                                document.getElementById("box3").style.display = "grid";
                                                document.getElementById("box6").style.display = "block";
                                                document.getElementById("box6").style.display = "grid";
                                                setTimeout(function(){
                                                    document.getElementById("box3").style.display = "none";
                                                    document.getElementById("box6").style.display = "none";
                                                    setTimeout(function(){
                                                        document.getElementById("box3").style.display = "block";
                                                        document.getElementById("box3").style.display = "grid";
                                                        document.getElementById("box6").style.display = "block";
                                                        document.getElementById("box6").style.display = "grid";
                                                        setTimeout(function(){
                                                            document.getElementById("box3").style.display = "none";
                                                            document.getElementById("box6").style.display = "none";
                                                            setTimeout(function(){
                                                                document.getElementById("box3").style.display = "block";
                                                                document.getElementById("box3").style.display = "grid";
                                                                document.getElementById("box6").style.display = "block";
                                                                document.getElementById("box6").style.display = "grid";
                                                                setTimeout(function(){
                                                                    document.getElementById("box3").style.display = "none";
                                                                    document.getElementById("box6").style.display = "none";
                                                                    setTimeout(function(){
                                                                        document.getElementById("box3").style.display = "block";
                                                                        document.getElementById("box3").style.display = "grid";
                                                                        document.getElementById("box6").style.display = "block";
                                                                        document.getElementById("box6").style.display = "grid";
                                                                        setTimeout(function(){
                                                                            document.getElementById("box3").style.display = "none";
                                                                            document.getElementById("box6").style.display = "none";
                                                                        }, 100);
                                                                    }, 100);
                                                                }, 100);
                                                            }, 100);
                                                        }, 100);
                                                    }, 100);
                                                }, 100);
                                            }, 100);
                                        }, 100);
                                    }
                                }
                                else{
                                    score ++;
                                    score2 ++;
                                    if((life > 0) && (life2 > 0)){
                                        document.getElementById("status").innerHTML = "（1P）HP：" + life + " / 回避できた数：" + score + "<br>（2P）HP：" + life2 + " / 回避できた数：" + score2 + "<br>リセット / Escape";
                                    }
                                }
                                setTimeout(function(){
                                    document.getElementById("attack2").style.display = "none";
                                    setTimeout(function(){
                                        if((life > 0) && (life2 > 0)){
                                            let time = Math.round(Math.random()*5000) + 5000;
                                            setTimeout(attack2_2, time);
                                        }
                                    }, timing);
                                }, timing);
                            }, timing);
                        }, timing);
                    }, timing);
                }, timing);
            }, timing);
        }, timing);
    }else{}
}


function heal_2(){
    document.getElementById("heal").style.backgroundColor = "#00000000";
    let timing = Math.round(Math.random()*100) + 150;
    let random = Math.round(Math.random()*100);
    if((random < 30) && (life > 0) && (life2 > 0)){
        f = Math.round(Math.random()*230) + 10;
        g = Math.round(Math.random()*230) + 10;
        document.getElementById("heal").style.top = f + "px";
        document.getElementById("heal").style.left = g + "px";
        if(sound == 0){
            document.getElementById("a13").pause();
            document.getElementById("a13").currentTime = 0;
            document.getElementById("a13").play();
        }
        document.getElementById("heal").style.display = "block";
        document.getElementById("heal").style.display = "grid";
        document.getElementById("heal").textContent = "3";
        setTimeout(function(){
            document.getElementById("heal").style.display = "none";
            setTimeout(function(){
                if(sound == 0){
                    document.getElementById("a13").pause();
                    document.getElementById("a13").currentTime = 0;
                    document.getElementById("a13").play();
                }
                document.getElementById("heal").style.display = "block";
                document.getElementById("heal").style.display = "grid";
                document.getElementById("heal").textContent = "2";
                setTimeout(function(){
                    document.getElementById("heal").style.display = "none";
                    setTimeout(function(){
                        if(sound == 0){
                            document.getElementById("a13").pause();
                            document.getElementById("a13").currentTime = 0;
                            document.getElementById("a13").play();
                        }
                        document.getElementById("heal").style.display = "block";
                        document.getElementById("heal").style.display = "grid";
                        document.getElementById("heal").textContent = "1";
                        setTimeout(function(){
                            document.getElementById("heal").style.display = "none";
                            setTimeout(function(){
                                if(sound == 0){
                                    document.getElementById("a12").pause();
                                    document.getElementById("a12").currentTime = 0;
                                    document.getElementById("a12").play();
                                }
                                document.getElementById("heal").style.backgroundColor = "lime";
                                document.getElementById("heal").style.display = "block";
                                document.getElementById("heal").style.display = "grid";
                                document.getElementById("heal").textContent = "HEAL!";
                                if((((x + 30) >= g) && ((y + 30) >= f) && (x <= (200 + g)) && (y <= (200 + f))) && (life > 0) && (life2 > 0)){
                                    life ++;
                                    if(sound != 2){
                                        document.getElementById("a14").pause();
                                        document.getElementById("a14").currentTime = 0;
                                        document.getElementById("a14").play();
                                    }
                                    document.getElementById("status").innerHTML = "（1P）HP：" + life + " / 回避できた数：" + score + "<br>（2P）HP：" + life2 + " / 回避できた数：" + score2 + "<br>リセット / Escape";
                                    clearTimeout(timeout6);
                                    document.getElementById("hp1").style.animation = "heal .9s";
                                    animationReset4();
                                    document.getElementById("hp1").textContent = "1P：" + life;
                                }
                                if((((x2 + 30) >= g) && ((y2 + 30) >= f) && (x2 <= (200 + g)) && (y2 <= (200 + f))) && (life > 0) && (life2 > 0)){
                                    life2 ++;
                                    if(sound != 2){
                                        document.getElementById("a14").pause();
                                        document.getElementById("a14").currentTime = 0;
                                        document.getElementById("a14").play();
                                    }
                                    document.getElementById("status").innerHTML = "（1P）HP：" + life + " / 回避できた数：" + score + "<br>（2P）HP：" + life2 + " / 回避できた数：" + score2 + "<br>リセット / Escape";
                                    clearTimeout(timeout7);
                                    document.getElementById("hp2").style.animation = "heal .9s";
                                    animationReset5();
                                    document.getElementById("hp2").textContent = "2P：" + life2;
                                }
                                setTimeout(function(){
                                    document.getElementById("heal").style.display = "none";
                                    setTimeout(function(){
                                        if((life > 0) && (life2 > 0)){
                                            heal_2();
                                        }
                                    }, timing);
                                }, timing);
                            },timing);
                        }, timing);
                    }, timing);
                }, timing);
            }, timing);
        }, timing);
    }
    else{
        setTimeout( heal_2, 1500);
    }
}


function heal2_2(){
    document.getElementById("heal2").style.backgroundColor = "#00000000";
    let timing = Math.round(Math.random()*100) + 150;
    let random = Math.round(Math.random()*100);
    if((random < 70) && (life > 0) && (life2 > 0)){
        q = Math.round(Math.random()*230) + 10;
        r = Math.round(Math.random()*230) + 10;
        document.getElementById("heal2").style.top = q + "px";
        document.getElementById("heal2").style.left = r + "px";
        if(sound == 0){
            document.getElementById("a25").pause();
            document.getElementById("a25").currentTime = 0;
            document.getElementById("a25").play();
        }
        document.getElementById("heal2").style.display = "block";
        document.getElementById("heal2").style.display = "grid";
        document.getElementById("heal2").textContent = "3";
        setTimeout(function(){
            document.getElementById("heal2").style.display = "none";
            setTimeout(function(){
                if(sound == 0){
                    document.getElementById("a25").pause();
                    document.getElementById("a25").currentTime = 0;
                    document.getElementById("a25").play();
                }
                document.getElementById("heal2").style.display = "block";
                document.getElementById("heal2").style.display = "grid";
                document.getElementById("heal2").textContent = "2";
                setTimeout(function(){
                    document.getElementById("heal2").style.display = "none";
                    setTimeout(function(){
                        if(sound == 0){
                            document.getElementById("a25").pause();
                            document.getElementById("a25").currentTime = 0;
                            document.getElementById("a25").play();
                        }
                        document.getElementById("heal2").style.display = "block";
                        document.getElementById("heal2").style.display = "grid";
                        document.getElementById("heal2").textContent = "1";
                        setTimeout(function(){
                            document.getElementById("heal2").style.display = "none";
                            setTimeout(function(){
                                if(sound == 0){
                                    document.getElementById("a26").pause();
                                    document.getElementById("a26").currentTime = 0;
                                    document.getElementById("a26").play();
                                }
                                document.getElementById("heal2").style.backgroundColor = "#0099ff";
                                document.getElementById("heal2").style.display = "block";
                                document.getElementById("heal2").style.display = "grid";
                                document.getElementById("heal2").textContent = "BOOST!";
                                if((((x + 30) >= r) && ((y + 30) >= q) && (x <= (200 + r)) && (y <= (200 + q))) && (life > 0) && (life2 > 0)){
                                    booster ++;
                                    if(sound != 2){
                                        document.getElementById("a27").pause();
                                        document.getElementById("a27").currentTime = 0;
                                        document.getElementById("a27").play();
                                    }
                                    document.getElementById("status").innerHTML = "（1P）HP：" + life + " / 回避できた数：" + score + "<br>（2P）HP：" + life2 + " / 回避できた数：" + score2 + "<br>リセット / Escape";
                                    clearTimeout(timeout3);
                                    document.getElementById("box2").style.display = "none";
                                    document.getElementById("box2").style.top = (y + 35) + "px";
                                    document.getElementById("box2").style.left = (x - 10) + "px";
                                    setTimeout(function(){
                                        document.getElementById("box2").style.animation = "slideDown 1.5s";
                                        document.getElementById("box2").style.display = "block";
                                        document.getElementById("box2").style.display = "grid";
                                    }, 1);
                                    animationReset2();
                                    if(onBlur == 0){
                                        document.getElementById("box").textContent = booster;
                                    }
                                }
                                if(sound == 0){
                                    document.getElementById("a26").pause();
                                    document.getElementById("a26").currentTime = 0;
                                    document.getElementById("a26").play();
                                }
                                if((((x2 + 30) >= r) && ((y2 + 30) >= q) && (x2 <= (200 + r)) && (y2 <= (200 + q))) && (life > 0) && (life2 > 0)){
                                    booster2 ++;
                                    if(sound != 2){
                                        document.getElementById("a27").pause();
                                        document.getElementById("a27").currentTime = 0;
                                        document.getElementById("a27").play();
                                    }
                                    document.getElementById("status").innerHTML = "（1P）HP：" + life + " / 回避できた数：" + score + "<br>（2P）HP：" + life2 + " / 回避できた数：" + score2 + "<br>リセット / Escape";
                                    clearTimeout(timeout5);
                                    document.getElementById("box4").style.display = "none";
                                    document.getElementById("box4").style.top = (y2 + 35) + "px";
                                    document.getElementById("box4").style.left = (x2 - 10) + "px";
                                    setTimeout(function(){
                                        document.getElementById("box4").style.animation = "slideDown 1.5s";
                                        document.getElementById("box4").style.display = "block";
                                        document.getElementById("box4").style.display = "grid";
                                    }, 1);
                                    animationReset3();
                                    if(onBlur2 == 0){
                                        document.getElementById("box3").textContent = booster2;
                                    }
                                }
                                setTimeout(function(){
                                    document.getElementById("heal2").style.display = "none";
                                    setTimeout(function(){
                                        if((life > 0) && (life2 > 0)){
                                            heal2_2();
                                        }
                                    }, timing);
                                }, timing);
                            },timing);
                        }, timing);
                    }, timing);
                }, timing);
            }, timing);
        }, timing);
    }
    else{
        setTimeout( heal2_2, 1500);
    }
}


function killer_2(){
    document.getElementById("killer").style.backgroundColor = "#00000000";
    let timing = Math.round(Math.random()*150) + 200;
    let random = Math.round(Math.random()*100);
    if((random < 10) && (life > 0) && (life2 > 0)){
        h = Math.round(Math.random()*180) + 10;
        i = Math.round(Math.random()*180) + 10;
        document.getElementById("killer").style.top = h + "px";
        document.getElementById("killer").style.left = i + "px";
        if(sound != 2){
            document.getElementById("a18").play();
        }
        if(sound == 0){
            document.getElementById("a19").pause();
            document.getElementById("a19").currentTime = 0;
            document.getElementById("a19").play();
        }
        document.getElementById("killer").style.display = "block";
        document.getElementById("killer").style.display = "grid";
        document.getElementById("killer").textContent = "3";
        setTimeout(function(){
            document.getElementById("killer").style.display = "none";
            setTimeout(function(){
                if(sound == 0){
                    document.getElementById("a19").pause();
                    document.getElementById("a19").currentTime = 0;
                    document.getElementById("a19").play();
                }
                document.getElementById("killer").style.display = "block";
                document.getElementById("killer").style.display = "grid";
                document.getElementById("killer").textContent = "2";
                setTimeout(function(){
                    document.getElementById("killer").style.display = "none";
                    setTimeout(function(){
                        if(sound == 0){
                            document.getElementById("a19").pause();
                            document.getElementById("a19").currentTime = 0;
                            document.getElementById("a19").play();
                        }
                        document.getElementById("killer").style.display = "block";
                        document.getElementById("killer").style.display = "grid";
                        document.getElementById("killer").textContent = "1";
                        setTimeout(function(){
                            document.getElementById("body").style.animation = "none";
                            document.getElementById("status").style.animation = "none";
                            document.getElementById("rights").style.animation = "none";
                            document.getElementById("display2").style.animation = "none";
                            document.getElementById("killer").style.display = "none";
                            setTimeout(function(){
                                if(sound != 2){
                                    document.getElementById("a18").pause();
                                    document.getElementById("a18").currentTime = 0;
                                }
                                if(sound == 0){
                                    document.getElementById("a15").pause();
                                    document.getElementById("a15").currentTime = 0;
                                    document.getElementById("a15").play();
                                    document.getElementById("a16").pause();
                                    document.getElementById("a16").currentTime = 0;
                                    document.getElementById("a16").play();
                                    document.getElementById("a17").pause();
                                    document.getElementById("a17").currentTime = 0;
                                    document.getElementById("a17").play();
                                }
                                document.getElementById("killer").style.backgroundColor = "#ff00dd";
                                document.getElementById("killer").style.display = "block";
                                document.getElementById("killer").style.display = "grid";
                                document.getElementById("killer").textContent = "KILL!";
                                document.getElementById("body").style.animation = "whiteOut 2s";
                                document.getElementById("display2").style.animation = "whiteOut2 2s";
                                document.getElementById("status").style.animation = "whiteOut3 2s, whiteOut2 2s";
                                if(((x + 30) >= i) && ((y + 30) >= h) && (x <= (250 + i)) && (y <= (250 + h)) && ((x2 + 30) >= i) && ((y2 + 30) >= h) && (x2 <= (250 + i)) && (y2 <= (250 + h)) && (life > 0) && (life2 > 0)){
                                    life = 0;
                                    life2 = 0;
                                        if(sound != 2){
                                            document.getElementById("a11").pause();
                                            document.getElementById("a11").currentTime = 0;
                                            document.getElementById("a11").play();
                                            document.getElementById("a7").pause();
                                            document.getElementById("a7").currentTime = 0;
                                            document.getElementById("a5").pause();
                                            document.getElementById("a5").currentTime = 0;
                                            document.getElementById("a5").play();
                                        }
                                        boosterLock = 1;
                                        clearTimeout(timeout);
                                        let comment = "引き分けだ...";
                                        document.getElementById("status").innerHTML = comment + "<br>（1P）回避できた数：" + score + "<br>（2P）回避できた数：" + score2 + "<br>リセット / Escape";
                                        document.getElementById("display").style.animation = "blue 1.8s infinite";
                                        document.getElementById("display").textContent = "DRAW...";
                                        setTimeout(function(){
                                            document.getElementById("box").style.display = "none";
                                            document.getElementById("box3").style.display = "none";
                                            document.getElementById("box5").style.display = "none";
                                            document.getElementById("box6").style.display = "none";
                                            document.getElementById("box5").style.animation = "none";
                                            document.getElementById("box6").style.animation = "none";
                                            setTimeout(function(){
                                                document.getElementById("box").style.display = "block";
                                                document.getElementById("box").style.display = "grid";
                                                document.getElementById("box3").style.display = "block";
                                                document.getElementById("box3").style.display = "grid";
                                                document.getElementById("box5").style.display = "block";
                                                document.getElementById("box5").style.display = "grid";
                                                document.getElementById("box6").style.display = "block";
                                                document.getElementById("box6").style.display = "grid";
                                                setTimeout(function(){
                                                    document.getElementById("box").style.display = "none";
                                                    document.getElementById("box3").style.display = "none";
                                                    document.getElementById("box5").style.display = "none";
                                                    document.getElementById("box6").style.display = "none";
                                                    setTimeout(function(){
                                                        document.getElementById("box").style.display = "block";
                                                        document.getElementById("box").style.display = "grid";
                                                        document.getElementById("box3").style.display = "block";
                                                        document.getElementById("box3").style.display = "grid";
                                                        document.getElementById("box5").style.display = "block";
                                                        document.getElementById("box5").style.display = "grid";
                                                        document.getElementById("box6").style.display = "block";
                                                        document.getElementById("box6").style.display = "grid";
                                                        setTimeout(function(){
                                                            document.getElementById("box").style.display = "none";
                                                            document.getElementById("box3").style.display = "none";
                                                            document.getElementById("box5").style.display = "none";
                                                            document.getElementById("box6").style.display = "none";
                                                            setTimeout(function(){
                                                                document.getElementById("box").style.display = "block";
                                                                document.getElementById("box").style.display = "grid";
                                                                document.getElementById("box3").style.display = "block";
                                                                document.getElementById("box3").style.display = "grid";
                                                                document.getElementById("box5").style.display = "block";
                                                                document.getElementById("box5").style.display = "grid";
                                                                document.getElementById("box6").style.display = "block";
                                                                document.getElementById("box6").style.display = "grid";
                                                                setTimeout(function(){
                                                                    document.getElementById("box").style.display = "none";
                                                                    document.getElementById("box3").style.display = "none";
                                                                    document.getElementById("box5").style.display = "none";
                                                                    document.getElementById("box6").style.display = "none";
                                                                    setTimeout(function(){
                                                                        document.getElementById("box").style.display = "block";
                                                                        document.getElementById("box").style.display = "grid";
                                                                        document.getElementById("box3").style.display = "block";
                                                                        document.getElementById("box3").style.display = "grid";
                                                                        document.getElementById("box5").style.display = "block";
                                                                        document.getElementById("box5").style.display = "grid";
                                                                        document.getElementById("box6").style.display = "block";
                                                                        document.getElementById("box6").style.display = "grid";
                                                                        setTimeout(function(){
                                                                            document.getElementById("box").style.display = "none";
                                                                            document.getElementById("box3").style.display = "none";
                                                                            document.getElementById("box5").style.display = "none";
                                                                            document.getElementById("box6").style.display = "none";
                                                                        }, 100);
                                                                    }, 100);
                                                                }, 100);
                                                            }, 100);
                                                        }, 100);
                                                    }, 100);
                                                }, 100);
                                            }, 100);
                                        }, 100);
                                }
                                else if(((x + 30) >= i) && ((y + 30) >= h) && (x <= (250 + i)) && (y <= (250 + h)) && (life > 0) && (life2 > 0)){
                                    life = 0;
                                    score2 ++;
                                        if(sound != 2){
                                            document.getElementById("a11").pause();
                                            document.getElementById("a11").currentTime = 0;
                                            document.getElementById("a11").play();
                                            document.getElementById("a7").pause();
                                            document.getElementById("a7").currentTime = 0;
                                            document.getElementById("a5").pause();
                                            document.getElementById("a5").currentTime = 0;
                                            document.getElementById("a5").play();
                                        }
                                        boosterLock = 1;
                                        clearTimeout(timeout);
                                        let comment = "2Pの勝利!!";
                                        document.getElementById("status").innerHTML = comment + "<br>（1P）回避できた数：" + score + "<br>（2P）回避できた数：" + score2 + "<br>リセット / Escape";
                                        document.getElementById("display").style.animation = "win2 .2s infinite, fadeIn 1s";
                                        document.getElementById("display").textContent = "2P WIN!";
                                        setTimeout(function(){
                                            document.getElementById("box").style.display = "none";
                                            document.getElementById("box5").style.display = "none";
                                            document.getElementById("box5").style.animation = "none";
                                            setTimeout(function(){
                                                document.getElementById("box").style.display = "block";
                                                document.getElementById("box").style.display = "grid";
                                                document.getElementById("box5").style.display = "block";
                                                document.getElementById("box5").style.display = "grid";
                                                setTimeout(function(){
                                                    document.getElementById("box").style.display = "none";
                                                    document.getElementById("box5").style.display = "none";
                                                    setTimeout(function(){
                                                        document.getElementById("box").style.display = "block";
                                                        document.getElementById("box").style.display = "grid";
                                                        document.getElementById("box5").style.display = "block";
                                                        document.getElementById("box5").style.display = "grid";
                                                        setTimeout(function(){
                                                            document.getElementById("box").style.display = "none";
                                                            document.getElementById("box5").style.display = "none";
                                                            setTimeout(function(){
                                                                document.getElementById("box").style.display = "block";
                                                                document.getElementById("box").style.display = "grid";
                                                                document.getElementById("box5").style.display = "block";
                                                                document.getElementById("box5").style.display = "grid";
                                                                setTimeout(function(){
                                                                    document.getElementById("box").style.display = "none";
                                                                    document.getElementById("box5").style.display = "none";
                                                                    setTimeout(function(){
                                                                        document.getElementById("box").style.display = "block";
                                                                        document.getElementById("box").style.display = "grid";
                                                                        document.getElementById("box5").style.display = "block";
                                                                        document.getElementById("box5").style.display = "grid";
                                                                        setTimeout(function(){
                                                                            document.getElementById("box").style.display = "none";
                                                                            document.getElementById("box5").style.display = "none";
                                                                        }, 100);
                                                                    }, 100);
                                                                }, 100);
                                                            }, 100);
                                                        }, 100);
                                                    }, 100);
                                                }, 100);
                                            }, 100);
                                        }, 100);
                                }
                                else if(((x2 + 30) >= i) && ((y2 + 30) >= h) && (x2 <= (250 + i)) && (y2 <= (250 + h)) && (life > 0) && (life2 > 0)){
                                    life2 = 0;
                                    score ++;
                                        if(sound != 2){
                                            document.getElementById("a11").pause();
                                            document.getElementById("a11").currentTime = 0;
                                            document.getElementById("a11").play();
                                            document.getElementById("a7").pause();
                                            document.getElementById("a7").currentTime = 0;
                                            document.getElementById("a5").pause();
                                            document.getElementById("a5").currentTime = 0;
                                            document.getElementById("a5").play();
                                        }
                                        boosterLock = 1;
                                        clearTimeout(timeout);
                                        let comment = "1Pの勝利!!";
                                        document.getElementById("status").innerHTML = comment + "<br>（1P）回避できた数：" + score + "<br>（2P）回避できた数：" + score2 + "<br>リセット / Escape";
                                        document.getElementById("display").style.animation = "win1 .2s infinite, fadeIn 1s";
                                        document.getElementById("display").textContent = "1P WIN!";
                                        setTimeout(function(){
                                            document.getElementById("box3").style.display = "none";
                                            document.getElementById("box6").style.display = "none";
                                            document.getElementById("box6").style.animation = "none";
                                            setTimeout(function(){
                                                document.getElementById("box3").style.display = "block";
                                                document.getElementById("box3").style.display = "grid";
                                                document.getElementById("box6").style.display = "block";
                                                document.getElementById("box6").style.display = "grid";
                                                setTimeout(function(){
                                                    document.getElementById("box3").style.display = "none";
                                                    document.getElementById("box6").style.display = "none";
                                                    setTimeout(function(){
                                                        document.getElementById("box3").style.display = "block";
                                                        document.getElementById("box3").style.display = "grid";
                                                        document.getElementById("box6").style.display = "block";
                                                        document.getElementById("box6").style.display = "grid";
                                                        setTimeout(function(){
                                                            document.getElementById("box3").style.display = "none";
                                                            document.getElementById("box6").style.display = "none";
                                                            setTimeout(function(){
                                                                document.getElementById("box3").style.display = "block";
                                                                document.getElementById("box3").style.display = "grid";
                                                                document.getElementById("box6").style.display = "block";
                                                                document.getElementById("box6").style.display = "grid";
                                                                setTimeout(function(){
                                                                    document.getElementById("box3").style.display = "none";
                                                                    document.getElementById("box6").style.display = "none";
                                                                    setTimeout(function(){
                                                                        document.getElementById("box3").style.display = "block";
                                                                        document.getElementById("box3").style.display = "grid";
                                                                        document.getElementById("box6").style.display = "block";
                                                                        document.getElementById("box6").style.display = "grid";
                                                                        setTimeout(function(){
                                                                            document.getElementById("box3").style.display = "none";
                                                                            document.getElementById("box6").style.display = "none";
                                                                        }, 100);
                                                                    }, 100);
                                                                }, 100);
                                                            }, 100);
                                                        }, 100);
                                                    }, 100);
                                                }, 100);
                                            }, 100);
                                        }, 100);
                                }
                                else{
                                    score ++;
                                    score2 ++;
                                    if((life > 0) && (life2 > 0)){
                                        document.getElementById("status").innerHTML = "（1P）HP：" + life + " / 回避できた数：" + score + "<br>（2P）HP：" + life2 + " / 回避できた数：" + score2 + "<br>リセット / Escape";
                                    }
                                }
                                setTimeout(function(){
                                    document.getElementById("killer").style.display = "none";
                                    setTimeout(function(){
                                        if((life > 0) && (life2 > 0)){
                                            killer_2();
                                        }
                                    }, timing);
                                }, timing);
                            },timing);
                        }, timing);
                    }, timing);
                }, timing);
            }, timing);
        }, timing);
    }
    else{
        setTimeout(killer_2, 1500);
    }
}


function blur_2(){
    document.getElementById("blur").style.backgroundColor = "#00000000";
    let timing = Math.round(Math.random()*100) + 150;
    let random = Math.round(Math.random()*100);
    if((random < 25) && (life > 0) && (life2 > 0)){
        j = Math.round(Math.random()*180) + 10;
        k = Math.round(Math.random()*180) + 10;
        document.getElementById("blur").style.top = j + "px";
        document.getElementById("blur").style.left = k + "px";
        if(sound == 0){
            document.getElementById("a20").pause();
            document.getElementById("a20").currentTime = 0;
            document.getElementById("a20").play();
        }
        document.getElementById("blur").style.display = "block";
        document.getElementById("blur").style.display = "grid";
        document.getElementById("blur").textContent = "3";
        setTimeout(function(){
            document.getElementById("blur").style.display = "none";
            setTimeout(function(){
                if(sound == 0){
                    document.getElementById("a20").pause();
                    document.getElementById("a20").currentTime = 0;
                    document.getElementById("a20").play();
                }
                document.getElementById("blur").style.display = "block";
                document.getElementById("blur").style.display = "grid";
                document.getElementById("blur").textContent = "2";
                setTimeout(function(){
                    document.getElementById("blur").style.display = "none";
                    setTimeout(function(){
                        if(sound == 0){
                            document.getElementById("a20").pause();
                            document.getElementById("a20").currentTime = 0;
                            document.getElementById("a20").play();
                        }
                        document.getElementById("blur").style.display = "block";
                        document.getElementById("blur").style.display = "grid";
                        document.getElementById("blur").textContent = "1";
                        setTimeout(function(){
                            document.getElementById("blur").style.display = "none";
                            setTimeout(function(){
                                if(sound == 0){
                                    document.getElementById("a21").pause();
                                    document.getElementById("a21").currentTime = 0;
                                    document.getElementById("a21").play();
                                }
                                document.getElementById("blur").style.backgroundColor = "#ff9100";
                                document.getElementById("blur").style.display = "block";
                                document.getElementById("blur").style.display = "grid";
                                document.getElementById("blur").textContent = "STOP!";
                                if((((x + 30) > k) && ((y + 30) >= j) && (x <= (250 + k)) && (y <= (250 + j))) && (((x2 + 30) > k) && ((y2 + 30) >= j) && (x2 <= (250 + k)) && (y2 <= (250 + j))) && (life > 0) && (life2 > 0)){
                                    clearTimeout(timeout2);
                                    keyLockA = 2;
                                    keyLockW = 2;
                                    keyLockD = 2;
                                    keyLockS = 2;
                                    keyLockAL = 2;
                                    keyLockAU = 2;
                                    keyLockAR = 2;
                                    keyLockAD = 2;
                                    onBlur = 1;
                                    onBlur2 = 1;
                                    if(sound != 2){
                                        document.getElementById("a22").pause();
                                        document.getElementById("a22").currentTime = 0;
                                        document.getElementById("a22").play();
                                    }
                                    document.getElementById("box").style.backgroundColor = "#ff9100";
                                    document.getElementById("box").style.animation = "vibration .1s infinite";
                                    document.getElementById("box").textContent = "5";
                                    document.getElementById("box3").style.backgroundColor = "#ff9100";
                                    document.getElementById("box3").style.animation = "vibration .1s infinite";
                                    document.getElementById("box3").textContent = "5";
                                    timeout2 = setTimeout(function(){
                                    document.getElementById("box").textContent = "4";
                                    document.getElementById("box3").textContent = "4";
                                    timeout2 = setTimeout(function(){
                                        document.getElementById("box").textContent = "3";
                                        document.getElementById("box3").textContent = "3";
                                            timeout2 = setTimeout(function(){
                                                document.getElementById("box").textContent = "2";
                                                document.getElementById("box3").textContent = "2";
                                                timeout2 = setTimeout(function(){
                                                    document.getElementById("box").textContent = "1";
                                                    document.getElementById("box3").textContent = "1";
                                                    timeout2 = setTimeout(function(){
                                                        keyLockA = 0;
                                                        keyLockW = 0;
                                                        keyLockD = 0;
                                                        keyLockS = 0;
                                                        keyLockAL = 0;
                                                        keyLockAU = 0;
                                                        keyLockAR = 0;
                                                        keyLockAD = 0;
                                                        onBlur = 0;
                                                        onBlur2 = 0;
                                                        document.getElementById("box").style.backgroundColor = "#0000ff";
                                                        document.getElementById("box").style.animation = "none";
                                                        document.getElementById("box").textContent = booster;
                                                        document.getElementById("box3").style.backgroundColor = "#ff0055";
                                                        document.getElementById("box3").style.animation = "none";
                                                        document.getElementById("box3").textContent = booster2;
                                                    }, 1000);
                                                }, 1000);
                                            }, 1000);
                                        }, 1000);
                                    }, 1000);
                                }
                                else if((((x + 30) > k) && ((y + 30) >= j) && (x <= (250 + k)) && (y <= (250 + j))) && (life > 0) && (life2 > 0)){
                                    score2 ++;
                                    clearTimeout(timeout2);
                                    keyLockA = 2;
                                    keyLockW = 2;
                                    keyLockD = 2;
                                    keyLockS = 2;
                                    onBlur = 1;
                                    if(sound != 2){
                                        document.getElementById("a22").pause();
                                        document.getElementById("a22").currentTime = 0;
                                        document.getElementById("a22").play();
                                    }
                                    document.getElementById("box").style.backgroundColor = "#ff9100";
                                    document.getElementById("box").style.animation = "vibration .1s infinite";
                                    document.getElementById("box").textContent = "5";
                                    timeout2 = setTimeout(function(){
                                    document.getElementById("box").textContent = "4";
                                    timeout2 = setTimeout(function(){
                                        document.getElementById("box").textContent = "3";
                                            timeout2 = setTimeout(function(){
                                                document.getElementById("box").textContent = "2";
                                                timeout2 = setTimeout(function(){
                                                    document.getElementById("box").textContent = "1";
                                                    timeout2 = setTimeout(function(){
                                                        keyLockA = 0;
                                                        keyLockW = 0;
                                                        keyLockD = 0;
                                                        keyLockS = 0;
                                                        onBlur = 0;
                                                        document.getElementById("box").style.backgroundColor = "#0000ff";
                                                        document.getElementById("box").style.animation = "none";
                                                        document.getElementById("box").textContent = booster;
                                                    }, 1000);
                                                }, 1000);
                                            }, 1000);
                                        }, 1000);
                                    }, 1000);
                                }
                                else if((((x2 + 30) > k) && ((y2 + 30) >= j) && (x2 <= (250 + k)) && (y2 <= (250 + j))) && (life > 0) && (life2 > 0)){
                                    score ++;
                                    clearTimeout(timeout2);
                                    keyLockAL = 2;
                                    keyLockAU = 2;
                                    keyLockAR = 2;
                                    keyLockAD = 2;
                                    onBlur2 = 1;
                                    if(sound != 2){
                                        document.getElementById("a22").pause();
                                        document.getElementById("a22").currentTime = 0;
                                        document.getElementById("a22").play();
                                    }
                                    document.getElementById("box3").style.backgroundColor = "#ff9100";
                                    document.getElementById("box3").style.animation = "vibration .1s infinite";
                                    document.getElementById("box3").textContent = "5";
                                    timeout2 = setTimeout(function(){
                                    document.getElementById("box3").textContent = "4";
                                    timeout2 = setTimeout(function(){
                                        document.getElementById("box3").textContent = "3";
                                            timeout2 = setTimeout(function(){
                                                document.getElementById("box3").textContent = "2";
                                                timeout2 = setTimeout(function(){
                                                    document.getElementById("box3").textContent = "1";
                                                    timeout2 = setTimeout(function(){
                                                        keyLockAL = 0;
                                                        keyLockAU = 0;
                                                        keyLockAR = 0;
                                                        keyLockAD = 0;
                                                        onBlur2 = 0;
                                                        document.getElementById("box3").style.backgroundColor = "#ff0055";
                                                        document.getElementById("box3").style.animation = "none";
                                                        document.getElementById("box3").textContent = booster2;
                                                    }, 1000);
                                                }, 1000);
                                            }, 1000);
                                        }, 1000);
                                    }, 1000);
                                }
                                else if((life > 0) && (life2 > 0)){
                                    score ++;
                                    score2 ++;
                                    document.getElementById("status").innerHTML = "（1P）HP：" + life + " / 回避できた数：" + score + "<br>（2P）HP：" + life2 + " / 回避できた数：" + score2 + "<br>リセット / Escape";
                                }
                                setTimeout(function(){
                                    document.getElementById("blur").style.display = "none";
                                    setTimeout(function(){
                                        if((life > 0) && (life2 > 0)){
                                            setTimeout(blur_2, 500);
                                        }
                                    }, timing);
                                }, timing);
                            },timing);
                        }, timing);
                    }, timing);
                }, timing);
            }, timing);
        }, timing);
    }
    else{
        setTimeout(blur_2, 2000);
    }
}


function animationReset(){
    timeout = setTimeout(function(){
         document.getElementById("display").style.animation = "stop 1s infinite";
    }, 1000);
}


function animationReset4(){
    timeout6 = setTimeout(function(){
         document.getElementById("hp1").style.animation = "stop 1s infinite";
    }, 1000);
}


function animationReset5(){
    timeout7 = setTimeout(function(){
         document.getElementById("hp2").style.animation = "stop 1s infinite";
    }, 1000);
}


function animationReset2(){
    timeout3 = setTimeout(function(){
        document.getElementById("box2").style.animation = "none";
        document.getElementById("box2").style.display = "none";
    }, 1400);
}


function animationReset3(){
    timeout5 = setTimeout(function(){
        document.getElementById("box4").style.animation = "none";
        document.getElementById("box4").style.display = "none";
    }, 1400);
}


function erase(){
    setTimeout(function(){
        document.getElementById("counter").style.display = "none";
        document.getElementById("counter").style.animation = "fadeOut 2s";
    }, 1900);
}


function erase2(){
    setTimeout(function(){
        document.getElementById("counter2").style.display = "none";
        document.getElementById("counter2").style.animation = "fadeOut 2s";
    }, 1980);
}


function erase3(){
    document.getElementById("display2").style.animation = "none";
    document.getElementById("status").style.animation = "none";
}


let check = 0;
function fadeIn(){
    if((check == 0) && (life > 0) && (sound != 2)){
        check = 1;
        document.getElementById("a7").play();
    }
    let vl = document.getElementById("a7").volume;
    if (vl < 1.0){
        document.getElementById("a7").volume = vl + 0.1;
        if(vl >= 1.0){
            document.getElementById("a7").volume = 1.0;
        }
        setTimeout(fadeIn, 100);
    }
}


function fadeIn2(){
    let vl = document.getElementById("a29").volume;
    let vl2 = document.getElementById("a30").volume;
    if (vl < 1.0){
        document.getElementById("a29").volume = vl + 0.1;
        document.getElementById("a30").volume = vl2 + 0.1;
        if(vl >= 1.0){
            document.getElementById("a29").volume = 1.0;
            document.getElementById("a30").volume = 1.0;
        }
        setTimeout(fadeIn2, 200);
    }
}


function fadeOut(){
    let vl = document.getElementById("a7").volume;
    if (vl > 0){
        document.getElementById("a7").volume = vl - 0.1;
        if(vl <= 0){
            check = 0;
            document.getElementById("a7").volume = 0;
            document.getElementById("a7").pause();
        }
        setTimeout(fadeOut, 100);
    }
}


window.onload = function(){
    let random = Math.round(Math.random()*100);
    if(random < 10){
        document.getElementById("subtitle").textContent = "Hello, Duet3.0!!";
    }
    else if(random < 20){
        document.getElementById("subtitle").textContent = "Have a nice play!";
    }
    else if(random < 30){
        document.getElementById("subtitle").textContent = "function bomb();";
    }
    else if(random < 40){
        document.getElementById("subtitle").textContent = "I'm lovein' it!!";
    }
    else if(random < 50){
        document.getElementById("subtitle").textContent = "Good night, IE...";
    }
    else if(random < 60){
        document.getElementById("subtitle").textContent = "Duet3.0 released!!";
    }
    else if(random < 70){
        document.getElementById("subtitle").textContent = "Yes, I like sushi!";
    }
    else if(random < 80){
        document.getElementById("subtitle").textContent = "Konnitiwa minasan.";
    }
    else if(random < 90){
        document.getElementById("subtitle").textContent = "Do you like this?";
    }
    else{
        document.getElementById("subtitle").textContent = "Bye, Trill2.0...";
    }
    document.getElementById("version").textContent = version;
}


const el = document.getElementById("display3");
el.addEventListener('click', god);
let gmdCnt = 0, godMode = 0;
function god(){
    if(mode == 0){
        gmdCnt ++;
        if(gmdCnt == 10){
            godMode = 1;
            console.log("Success! God mode enabled.");
            document.getElementById("subtitle").style.color = "#0066ff";
            document.getElementById("subtitle").textContent = "Ovserver mode enabled";
            document.getElementById("status").innerHTML = "オブザーバーモード（開発者ツール）が有効化されています。開始するには画面をクリックしてください。";
            x = -30, y = -30;
        }
        else if(gmdCnt > 10){}
        else{
            console.log("I want your " + (10 - gmdCnt) + " clicks!");
        }
    }
}
const el2 = document.getElementById("body");
el2.addEventListener('click', observe);
let gModeStartCnt = 0;
function observe(){
    if((godMode == 1) && (gModeStartCnt == 0)){
        gModeStartCnt ++;
        document.getElementById("confirm").style.display = "block";
    }
}
const el3 = document.getElementById("gModeStart");
el3.addEventListener('click', gModeStart);
function gModeStart(){
    if(gModeStartCnt == 1){
        gModeStartCnt ++;
        document.getElementById("confirm").style.display = "none";
        start();
        godModeUpdater();
    }
}
function godModeUpdater(){
    document.getElementById("status").innerHTML = "オブザーバーモード（開発者ツール）を使用中です。終了するにはページを更新してください。";
    requestAnimationFrame(godModeUpdater);
}
