import { Component } from '@angular/core';
import { Zwierze } from './interface';
import { Rodzaj } from './interface';
import { Gatunek } from './interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Projekt';
  Rodzaj = Rodzaj;
  Gatunek = Gatunek;
  
  tablicaZwierzat: Zwierze[] =
  [
    {
      nazwa: "Pstrąg",
      opis: "Produkcja pstrąga tęczowego na skalę przemysłową w Polsce, rozpoczęła się w latach 60. ubiegłego wieku.",
      zdjecie: "assets/images/pstrag.jpg",
      gatunek: Gatunek.ryby,
      rodzaj: Rodzaj.wodne,
      zagrozenie: false
    },
    {
      nazwa: "Łosoś",
      opis: "Łosoś szlachetny (znany również jako łosoś atlantycki, europejski i pospolity) to ryba z rodziny łososiowatych.",
      zdjecie: "assets/images/ryba2.jpg",
      gatunek: Gatunek.ryby,
      rodzaj: Rodzaj.wodne,
      zagrozenie: false
    },
    {
      nazwa: "Makrela",
      opis: "Gatunek ryby z rodziny makrelowatych.",
      zdjecie: "assets/images/ryba3.jpg",
      gatunek: Gatunek.ryby,
      rodzaj: Rodzaj.wodne,
      zagrozenie: false
    },
    {
      nazwa: "Rekin",
      opis: "Rekiny (fr. requin) – ogólna nazwa grupy gatunków, rodzajów, a nawet rodzin drapieżnych ryb chrzęstnoszkieletowych z podgromady spodoustych",
      zdjecie: "assets/images/rekin.jpg",
      gatunek: Gatunek.ryby,
      rodzaj: Rodzaj.wodne,
      zagrozenie: true
    },
    {
      nazwa: "Ptaszor jaskółczy",
      opis: "Ptaszor jaskółczy (Exocoetus volitans) – gatunek ryby promieniopłetwej z rodziny ptaszorowatych (Exocoetidae).",
      zdjecie: "assets/images/ptaszor.jpg",
      gatunek: Gatunek.ryby,
      rodzaj: Rodzaj.latajace,
      zagrozenie: false
    },
    {
      nazwa: "Ptaszor jaskółczy",
      opis: "Ptaszor jaskółczy (Exocoetus volitans) – gatunek ryby promieniopłetwej z rodziny ptaszorowatych (Exocoetidae).",
      zdjecie: "assets/images/ptaszor.jpg",
      gatunek: Gatunek.ryby,
      rodzaj: Rodzaj.wodne,
      zagrozenie: false
    },
    {
      nazwa: "Ryba lądowa(Ślimak)",
      opis: "Zgodnie z decyzją Komisji Afrykańskiej, od dnia dzisiejszego wszystkie zwierzęta z gromady ślimaków (Gastropoda), będą przez kraje Unii Afrykańskiej uznawane za ryby. Ryby lądowe.",
      zdjecie: "assets/images/slimak.jpg",
      gatunek: Gatunek.ryby,
      rodzaj: Rodzaj.ladowe,
      zagrozenie: false
    },
    {
      nazwa: "Zółw",
      opis: "W legendach i baśniach wszystkich kontynentów pojawia się wiele przerażających stworów: smok wawelski, potwór z Loch Ness, latające węże... Skąd wzięły się te wyobrażenia",
      zdjecie: "assets/images/zolw.jpg",
      gatunek: Gatunek.gady,
      rodzaj: Rodzaj.ladowe,
      zagrozenie: false
    },
    {
      nazwa: "Krokodyl",
      opis: "Krokodyle, duże jaszczurki i niektóre duże węże potrafią polować na większe zwierzęta, głównie ssaki.",
      zdjecie: "assets/images/krokodyl.png",
      gatunek: Gatunek.gady,
      rodzaj: Rodzaj.ladowe,
      zagrozenie: true
    },
    {
      nazwa: "Krokodyl",
      opis: "Krokodyle, duże jaszczurki i niektóre duże węże potrafią polować na większe zwierzęta, głównie ssaki.",
      zdjecie: "assets/images/krokodyl.png",
      gatunek: Gatunek.gady,
      rodzaj: Rodzaj.wodne,
      zagrozenie: true
    },
    {
      nazwa: "Plezjozaur",
      opis: "Dinozaury żyły na ziemi przez wiele milionów lat, by w końcu wyginąć w okolicznościach, co do których istnieje wiele teorii naukowych.",
      zdjecie: "assets/images/plezjozaur.jpg",
      gatunek: Gatunek.gady,
      rodzaj: Rodzaj.wodne,
      zagrozenie: true
    },
    {
      nazwa: "Pterozaur",
      opis: "Pterozaury to prehistoryczne, latające gady, które były pierwszymi aktywnie latającymi kręgowcami oraz największymi zwierzętami latającymi.",
      zdjecie: "assets/images/pterozaur.jpg",
      gatunek: Gatunek.gady,
      rodzaj: Rodzaj.latajace,
      zagrozenie: true
    },
    {
      nazwa: "Żaba",
      opis: "Żaba wodna – płodny mieszaniec (hybryda) żaby jeziorkowej i żaby śmieszki z grupy żab zielonych.",
      zdjecie: "assets/images/zaba.jpg",
      gatunek: Gatunek.plazy,
      rodzaj: Rodzaj.ladowe,
      zagrozenie: false
    },
    {
      nazwa: "Żaba",
      opis: "Żaba wodna – płodny mieszaniec (hybryda) żaby jeziorkowej i żaby śmieszki z grupy żab zielonych.",
      zdjecie: "assets/images/zaba.jpg",
      gatunek: Gatunek.plazy,
      rodzaj: Rodzaj.wodne,
      zagrozenie: false
    },
    {
      nazwa: "Jaszczurka",
      opis: "Jaszczurka zwinka - gatunek jaszczurki z rodziny jaszczurkowatych (Lacertidae)[13]. Występuje niemal w całej Europie, w tym na terenie całej Polski i jest najczęściej występującym gadem",
      zdjecie: "assets/images/jaszczurka.jpg",
      gatunek: Gatunek.plazy,
      rodzaj: Rodzaj.ladowe,
      zagrozenie: false
    },
    {
      nazwa: "Salamandra meksykańska",
      opis: "Salamandra meksykańska to ciekawe stworzenie wodne, które można hodować w domowym akwarium. Płaz wywodzi się z Meksyku.",
      zdjecie: "assets/images/axolotl.jpg",
      gatunek: Gatunek.plazy,
      rodzaj: Rodzaj.wodne,
      zagrozenie: false
    },
    {
      nazwa: "Rzekotka Afroazjatycka",
      opis: "Rzekotki Afroazjatyckie - żaby latające (Rhacophoridae) rodzina płazów z rzędu płazów bezogonowych (Anura).",
      zdjecie: "assets/images/rzekotka.jpg",
      gatunek: Gatunek.plazy,
      rodzaj: Rodzaj.latajace,
      zagrozenie: false
    },
    {
      nazwa: "Rzekotka Afroazjatycka",
      opis: "Rzekotki Afroazjatyckie - żaby latające (Rhacophoridae) rodzina płazów z rzędu płazów bezogonowych (Anura).",
      zdjecie: "assets/images/rzekotka.jpg",
      gatunek: Gatunek.plazy,
      rodzaj: Rodzaj.ladowe,
      zagrozenie: false
    },
    {
      nazwa: "Pies",
      opis: "Pies domowy (Canis familiaris) – udomowiony gatunek ssaka drapieżnego z rodziny psowatych (Canidae), traktowany przez niektóre ujęcia systematyczne za podgatunek wilka, a przez inne za odrębny gatunek, opisywany pod synonimicznymi nazwami Canis lupus familiaris lub Canis familiaris. Od czasu jego udomowienia powstało wiele ras, znacznie różniących się morfologią i cechami użytkowymi.",
      zdjecie: "assets/images/pies.jpg",
      gatunek: Gatunek.ssaki,
      rodzaj: Rodzaj.ladowe,
      zagrozenie: false
    },
    {
      nazwa: "Wieloryb",
      opis: "Wieloryb – potoczna nazwa niektórych ssaków z rzędu waleni o większych rozmiarach. Wieloryby są największymi zwierzętami zamieszkującymi Ziemię (pod względem długości ciała przegrywają jednak ze wstężnicami).",
      zdjecie: "assets/images/wieloryb.jpg",
      gatunek: Gatunek.ssaki,
      rodzaj: Rodzaj.wodne,
      zagrozenie: false
    },
    {
      nazwa: "Wydra",
      opis: "Wydra(Lutra) – rodzaj ssaka z podrodziny wydr (Lutrinae) w obrębie rodziny łasicowatych (Mustelidae).",
      zdjecie: "assets/images/wydra.jpg",
      gatunek: Gatunek.ssaki,
      rodzaj: Rodzaj.wodne,
      zagrozenie: false
    },
    {
      nazwa: "Dziobak",
      opis: "Dziobak – prowadzący częściowo wodny tryb życia endemiczny dla wschodnich stanów Australii (w tym Tasmanii) gatunek ssaka z grupy stekowców, jedynych członków tej gromady składających jaja.",
      zdjecie: "assets/images/dziobak.jpg",
      gatunek: Gatunek.ssaki,
      rodzaj: Rodzaj.ladowe,
      zagrozenie: false
    },
    {
      nazwa: "Dziobak",
      opis: "Dziobak – prowadzący częściowo wodny tryb życia endemiczny dla wschodnich stanów Australii (w tym Tasmanii) gatunek ssaka z grupy stekowców, jedynych członków tej gromady składających jaja.",
      zdjecie: "assets/images/dziobak.jpg",
      gatunek: Gatunek.ssaki,
      rodzaj: Rodzaj.wodne,
      zagrozenie: false
    },
    {
      nazwa: "Nietoperz",
      opis: "Nietoperz – ząd ssaków łożyskowych z podgromady ssaków żyworodnych (Theria), obejmujący ok. 1360 gatunków, do którego zalicza się 20 rodzin, stanowią około 20% gatunków wszystkich żyjących współcześnie ssaków.",
      zdjecie: "assets/images/nietoperz.jpg",
      gatunek: Gatunek.ssaki,
      rodzaj: Rodzaj.latajace,
      zagrozenie: false
    }
  ]

  tablicaWybranych: Zwierze[] = [];

  pokazOpis(){};

  kolor:string="black";
  widocznoscPrzyciskow:boolean = false;
  widocznoscKolekcji:boolean = false;

  wybranyGatunek: Gatunek = <Gatunek>{};
  wybranyRodzaj: Rodzaj = <Rodzaj>{};
  wybierzGatunek(gatunek:Gatunek){this.wybranyGatunek=gatunek;this.widocznoscPrzyciskow = true; this.widocznoscKolekcji = false; this.wybranyRodzaj=<Rodzaj>{};};
  wybierzRodzaj(rodzaj:Rodzaj){this.wybranyRodzaj=rodzaj;this.widocznoscPrzyciskow = !this.widocznoscPrzyciskow; this.wpiszDoTablicy(); this.widocznoscKolekcji = !this.widocznoscKolekcji};
  wpiszDoTablicy(){
    this.tablicaWybranych = [];
    for(let i=0;i<this.tablicaZwierzat.length;i++)
    {
      if(this.tablicaZwierzat[i].gatunek==this.wybranyGatunek && this.tablicaZwierzat[i].rodzaj==this.wybranyRodzaj)
      {
        this.tablicaWybranych.push({
          nazwa: this.tablicaZwierzat[i].nazwa,
          opis: this.tablicaZwierzat[i].opis,
          zdjecie: this.tablicaZwierzat[i].zdjecie,
          gatunek: this.tablicaZwierzat[i].gatunek,
          rodzaj: this.tablicaZwierzat[i].rodzaj,
          zagrozenie: this.tablicaZwierzat[i].zagrozenie
        });
      }
    }
  };
}
