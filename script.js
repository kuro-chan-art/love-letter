function generateLetter() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;

    if (!firstName || !lastName) {
        alert("Please enter both first and last name");
        return;
    }

    let letter = `

မင်္ဂလာပါ ${firstName} ${lastName},<br><br>

ကိုယ် အဓိက ပြောချင်တာက<br><br> First: "You had me at hello" 

<br><br>
ကို တစ်ခု ရင်ဖွင့်ပြောချင်တယ်။
အခုပြောလည်း ဒီစကား၊ နောက်မှပြောလည်း ဒီစကားပါပဲ။ 
နောက်မှ ဒီစာကိုလက်ခံရင် သင့်တော်ပေါ့မလား။
အခုဒီစာကိုဖတ်ရင် စောနေပေါ့မလား။
ကို ဂရုမစိုက်နိုင်တော့ဘူး...။
ဘာလိုဆို....
တစ်စတစ်စ အစပျိုးလာတဲ့ပန်းက အခုဆိုရင်
Corpse flower လိုတောင်ဖြစ်နေပြီး။
ဒီရင်မှာ မဆံတော့လို အ​ပြင်ကိုလျံထွက်လာတာပါ။<br><br>

Oxygen နဲ့ ပေါင်းစပ်ပြီး လောင်ကျွမ်းသွားတာကို မီးလိုခေါ်ရင် 
အလွမ်းဝေဒနာနဲ့ ပေါင်းစပ်ပြီး နှလုံးသားပူလောင်သွားတာကို "အချစ်" လို သတ်မှတ်လိုရပေါ့မလား။
မီးချင်းတူရင်တောင် အချစ်မီးက damage ပိုပြင်းတာပေါ့နော်။ 
<br><br>
ဘာလိုချစ်တာလဲ။
ဘာကြောင့်ချစ်တာလဲ။
ဘယ်ထိချစ်မှာလဲ... လို မမေးပါနဲ့။ 
စစတွေ့ကတည်းက အခုထိ ${firstName} ${lastName} အကြောင်း၊ ${firstName} ${lastName}  ပုံရိပ်က ပျောက်ပျက်သွားတယ်ဆိုတာ မရှိပါ။
ပြောနေရင်းနဲ့တောင် ကို ရင်ခုန်သံတွင် ထိန်းမရတော့ဘူး။ ကိုယ်မလိမ်ပါဘူး.... ဟန်လည်းမဆောင်တတ်ဘူး။
ရင်ခုန်ရလွန်းလိုလည်း စားမဝင်၊အိပ်မပျော်နဲ့ ဖြစ်နေပြီး။ 
${firstName} ${lastName} နဲ့ မတွေ့ခင်ကဆို ကို ချစ်ရမှာကြောက်တဲ့သူ။
အချစ်ဆို ဝေးဝေးရှောင်တယ်။
${firstName} ${lastName} နဲ့ကျတော့ တစ်ချက်ထဲနဲ့ အဲဒီအရာကို ကိုရဖိုကြိုးစားနေရပြီး။
<br><br>
ကိုနှလုံးသားက နားလည်ရခဲ့တယ်။ ကိုယ်ကိုတိုင် နားမလည်ဘူး။ ကိုယ်မှာ fav type လည်းမရှိဘူး။ 
လူတစ်ယောက်ကို အမြဲတွေ့နေပါစေ ကိုနှလုံးသားက လက်မခံရင် မချစ်ဘူး။ 
တစ်ကြိမ်ပဲတွေ့တဲ့ လူတစ်ယောက်ဖြစ်ပါစေ ကိုနှလုံးသားက လက်ခံလိုက်ရင် ကိုတကယ်အဲ့လူတစ်ယောက်အတွက်နဲ့ တစ်ကမ္ဘာလုံးကိုဆန့်ကျင်နေပြီး။
<br><br>
No matter who you are, where you come from, or what you have been through. 
<br><br>
တကယ်တော့.... ကိုက red flag တခြားသူအတွက်ဆိုရင် လုံးဝ red flag ။ but
${firstName} ${lastName} အတွက်ဆိုရင် မီးခွက်စောင့်ဘီလူးအဖြစ် ${firstName} ${lastName} အတွက် ရပ်တည်ပေးနေမယ်။ 
တစ်သက်လုံး အချစ်အတွက် ဖြစ်တည်ပေးနေမယ်။
<br><br>
Your beauty is power for me, 
Your smile is sword.<br><br>
${firstName} ${lastName}ရဲ့ အဖြေက ကိုယ်ကြားချင်နေတဲ့အတိုင်းဆို ကောင်းမှာပဲ။ ဒါမှမဟုတ်ရင် ဒီအတိုင်းဆက်ရှိနေပေးမှာပါ။ 
ဒါပေမဲ့ ရပါတယ် ${firstName} ${lastName} သဘောပါ၊ ${firstName} ${lastName} ဆန္ဒအတိုင်းပါပဲ။

<br><br>ချစ်တယ်နော်၊<br>
${firstName} ${lastName}<br>
`;


    let box = document.getElementById("letterBox");
    box.innerHTML = letter;
    box.style.display = "block";

    document.getElementById("nextBtn").style.display = "block";
}

function goToQuestion() {
    switchPage("page0", "page1");
}

function goNext() {
    switchPage("page1", "page2");
    startFlowers();
}

function switchPage(from, to) {
    document.getElementById(from).classList.remove("active");
    document.getElementById(to).classList.add("active");
}

/* Flower animation */
function startFlowers() {
    for (let i = 0; i < 30; i++) {
        let flower = document.createElement("div");
        flower.className = "flower";
        flower.innerHTML = "🌸";
        flower.style.left = Math.random() * 100 + "vw";
        flower.style.animationDuration = (Math.random() * 3 + 3) + "s";
        document.body.appendChild(flower);

        setTimeout(() => flower.remove(), 6000);
    }
}

