<script setup>

</script>

<template>
    <main class="pt-[5rem]">
        <div class="Main">
            <div class="Title">STARTER</div>
            <div class="esimene-aasta">esimene aasta</div>
            <div class="Hind">3,67</div>
            <div class="hindJaKaive">€+KM/kuu</div>
            <div class="vanaHind">
                <span><span class="vanaHind-span">norm. </span><span class="vanaHind-span2">7,34 €+KM</span></span>
            </div>
            <div class="Description">
                See pakett sobib hästi kui alustad oma esimese kodulege tegemist ning soovid
                ennast Internetis nähtavaks teha.
            </div>
            <div class="Valik1">16 GB</div>
            <div class="Valik2">Privaatne postkast</div>
            <div class="Valik3">Oma IP aadress</div>
            <div class="button1">
                <div class="telli1">Telli</div>
            </div>
            <div class="Allahindlus">
                <div class="allahindlusTekst">-50%</div>
            </div>
            <div class="Valik1Punkt"></div>
            <div class="Valik2Punkt"></div>
            <div class="Valik3Punkt"></div>
        </div>
        <div class="Main">
            <div class="Title">BUSINESS</div>
            <div class="esimene-aasta">esimene aasta</div>
            <div class="Hind">6,47</div>
            <div class="hindJaKaive">€+KM/kuu</div>
            <div class="vanaHind">
                <span><span class="vanaHind-span">norm. </span><span class="vanaHind-span2">12,94 €+KM</span></span>
            </div>
            <div class="Description">
                Kindel valik kasvava e-äri püstihoidmiseks, suurem maht veebile ja e-postile
                ning rohkem samaaegseid veebikülastajaid.
            </div>
            <div class="Valik1">16 GB</div>
            <div class="Valik2">Privaatne postkast</div>
            <div class="Valik3">Oma IP aadress</div>
            <div class="button2">
                <div class="telli2">Telli</div>
            </div>
            <div class="Allahindlus">
                <div class="allahindlusTekst">-50%</div>
            </div>
            <div class="Valik1Punkt"></div>
            <div class="Valik2Punkt"></div>
            <div class="Valik3PunktAktiiv"></div>
        </div>
    </main>
</template>

<style scoped>
.Main,
.Main * {
    box-sizing: border-box;
    display: flex;
}

.Main {
    background: #ffffff;
    border-radius: 6px;
    border-style: solid;
    border-color: #62dc5f;
    border-width: 3px;
    width: 350px;
    height: 650px;
    position: relative;
    margin-right: 20px;
    display: flex;
    overflow: hidden;
    float: left;
}

.Title {
    color: #000000;
    text-align: center;
    font: 400 25px "Montserrat", sans-serif;
    position: absolute;
    left: 80px;
    top: 72px;
    width: 190px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.esimene-aasta {
    color: #868686;
    text-align: left;
    font: 600 12px "Montserrat", sans-serif;
    position: absolute;
    left: 108px;
    top: 112px;
    width: 134px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.Hind {
    color: #000000;
    text-align: left;
    font: 700 36px "Montserrat", sans-serif;
    position: absolute;
    left: 90px;
    top: 152px;
    width: 85px;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.hindJaKaive {
    color: #000000;
    text-align: left;
    font: 400 14px "Montserrat", sans-serif;
    position: absolute;
    left: 175px;
    top: 152px;
    width: 85px;
    height: 27px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.vanaHind {
    color: #a09e9e;
    text-align: center;
    font: 400 16px "Montserrat", sans-serif;
    position: absolute;
    left: 95px;
    top: 207px;
    width: 160px;
    height: 27px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.vanaHind-span {
    color: #a09e9e;
    font: 400 16px "Montserrat", sans-serif;
}

.vanaHind-span2 {
    color: #a09e9e;
    font: 400 16px "Montserrat", sans-serif;
    text-decoration: line-through;
}

.Description {
    color: #7d7d7d;
    text-align: center;
    font: 400 14px "Montserrat", sans-serif;
    position: absolute;
    left: 36px;
    top: 406px;
    width: 278px;
    height: 95px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.Valik1 {
    color: #000000;
    text-align: left;
    font: 500 14px "Montserrat", sans-serif;
    position: absolute;
    left: 118px;
    top: 262px;
    width: 137px;
    height: 27px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.Valik2 {
    color: #000000;
    text-align: left;
    font: 500 14px "Montserrat", sans-serif;
    position: absolute;
    left: 118px;
    top: 298px;
    width: 137px;
    height: 27px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.Valik3 {
    color: #000000;
    text-align: left;
    font: 500 14px "Montserrat", sans-serif;
    position: absolute;
    left: 118px;
    top: 334px;
    width: 137px;
    height: 27px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.button1 {
    border-radius: 6px;
    border-style: solid;
    border-color: #000000;
    border-width: 2px;
    width: 278px;
    height: 45px;
    position: absolute;
    left: 36px;
    top: 510px;
    overflow: hidden;
}

.telli1 {
    color: #000000;
    text-align: center;
    font: 700 17px "Montserrat", sans-serif;
    position: absolute;
    left: 23px;
    top: 9px;
    width: 232px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.button2 {
    background: #0090e1;
    border-radius: 6px;
    width: 278px;
    height: 45px;
    position: absolute;
    left: 36px;
    top: 510px;
    overflow: hidden;
}

.telli2 {
    color: #ffffff;
    text-align: center;
    font: 700 17px "Montserrat", sans-serif;
    position: absolute;
    left: 23px;
    top: 9px;
    width: 232px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.Allahindlus {
    border-radius: 18px;
    border-style: solid;
    border-color: #000000;
    border-width: 2px;
    width: 39px;
    height: 19px;
    position: absolute;
    left: 203px;
    top: 123px;
    overflow: hidden;
}

.allahindlusTekst {
    color: #000000;
    text-align: left;
    font: 600 11px "Montserrat", sans-serif;
    position: absolute;
    left: 6px;
    top: 3px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.Valik1Punkt {
    background: #00ff1a;
    border-radius: 82px;
    width: 24px;
    height: 24px;
    position: absolute;
    left: 83px;
    top: 264px;
    overflow: hidden;
}

.Valik2Punkt {
    background: #00ff1a;
    border-radius: 82px;
    width: 24px;
    height: 24px;
    position: absolute;
    left: 83px;
    top: 299px;
    overflow: hidden;
}

.Valik3Punkt {
    background: #8f8f8f;
    border-radius: 82px;
    width: 24px;
    height: 24px;
    position: absolute;
    left: 84px;
    top: 334px;
    overflow: hidden;
}

.Valik3PunktAktiiv {
    background: #00ff1a;
    border-radius: 82px;
    width: 24px;
    height: 24px;
    position: absolute;
    left: 84px;
    top: 335px;
    overflow: hidden;
}
</style>