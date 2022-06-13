@extends('layouts.master')
@section('title', 'Buzon Studio - Polityka Prywatności')

@section('meta')
<meta name="description" content='Wejście i korzystanie ze strony {{config("app.name")}} jest równoznaczne z zaakceptowaniem naszej polityki prywatności.'>
<link rel="canonical" href="https://www.buzon.studio/polityka"/>
@endsection

@section('css')
    <link rel="stylesheet" href="{{ asset('css/privacy.css') }}">
@endsection

@section('js')
    <!-- <script src="{{ asset('js/privacy.js') }}"></script> -->
@endsection

@section('content')

        <div class="container pt-5 pt-md-6">
            <h1>Polityka prywatności {{config("app.name")}}</h1>
        </div>
        <div data-scroll-section class="container">
        <p class="gs gs_fromLeft">
            Ta polityka prywatności (“<strong>Polityka</strong>”) zawarta na tej Stronie zarządza prywatnością informacji naszych uzytkownikow i odwiedzających, które zbieramy, uzywmy, ujawniamy i zarządzamy poprzez uzywanie Strony {{config("app.name")}} (“<strong>Strony</strong>”).<br />
            Poprzez uzywanie Strony, zgadzasz sie w pełni na warunki polityki zawartej w ninejszym dokumencie i oświadzasz, ze Twoja odpowiedzialnością jest zapoznanies się z nią i z prowadzanymi do niej poprawkami. Jeśli nie akceptujesz takiej polityki prywatności, proszę nie korzystaj ze Strony.
        </p>
        <p class="gs gs_fromLeft">
            <strong>1. Uzywanie informacji</strong><br />

            Poprzez wejście na stronę oświadzasz, ze mozemy uzyc Twoich informacji do ktorychkolwiek z podanych ponizej powodów, kiedykolwiek będzie to potrzebne bez zadnych ograniczeń: <br>
            Rejestrowanie, zarządzanie Twoim kontem, oraz tworzenie spersonalizowanego profilu do kolejnych odwiedzin na Stronie. <br>
            Zarządzanie spotkaniami i ich rezerwowanie. <br>
            Powiadamiać Cię o nowościach. <br>
            Uzywac w sprawie komunikacji user-to-user.<br>
            Uzywac do jakiejkolwiek aktywnosci ziwązanej z projektami {{config("app.name")}}. <br>
            Tworzenie kontentu, reklam, akcji promocyjnych i ofert rekomendownych dla Ciebie.<br>
            Prosić o opinię i monitorować uzytkowanie Strony w celu usprawnienia Twojego doświadczenia.<br>
            Odpowadać na zapytania klientów.
        </p>
        <p class="gs gs_fromLeft">
            <strong>2. Zbieranie informacji</strong><br />
            Mozemy zbierac informacje o Tobie między innymi takich jak np.: Dane personalne, dane pochodne, dane z social mediów lub dane sieciowe, dane finansowe, włącznie i bez zadnych limitów: Twoje imie, narodowość, data urodzenia, miejsce zamieszkania, informacje kontaktowe, wiek, płeć, lub jakichkolwiek innych informacji które nasza Strona zbiera automatycznie kiedy wejdziesz na stronę. (np. rodzaj przeglądarki, system operacyjny, czas uzytkowania, Strony ktore odwiedziles przed odwiedzeniem naszej Strony.) 
        </p>
        <p class="gs gs_fromLeft">
            <strong>3. Ujawnianie informacji</strong><br />
            3.1 Oświadzasz, ze mozemy udostepniac Twoje informacji z naszymi partnerami bieznesowymi, inwestorami, reklamodawcami, dostawcami usług marketingówych czy osobami współpracującymi, w celach usprawnienia Strony i doświadczenia które dostarczamy klientom online.

            3.2 Oświadczasz, ze mozemy współpracować z zewnętrznymi dostawcami / sprzedawcami lub zewnętrznym oprogramowaniem aby reklamować lub tworzyć i uzywac kampanii marketingowych na tej Stronie i poza nią. Jednocześnie oświadczając zgodę na to, Ci zewnętrzni dostawcy równiez mogą zbierać Twoje dane i je wykorzystywać w celu usprawnienia tej Strony. A tym samym jesteś odpowiedzialny za zapoznanie się z ich polityką prywatności i skontaktowanie się z nimi jeśli masz jakiekolwiek wątpliwości.
        </p>
        <p class="gs gs_fromLeft">
            <strong>4. Bezpieczeństwo informacji</strong><br />
            Uzyjemy rozsądynch środków i kroków aby zabezpieczyć i zarządzać Twoimi danymi które zebraliśmy i otrzymaliśmy od Ciebie. Pomimo naszych starań nie mozemy zagwarantowac bezpieczeństwa i prywatności Twoich danych, zadne środki bezpieczeństwa nie są nieprzenikalny przed jakimkolwiek przechwyceniem lub innym rodzajem niewłaściwego użytkowania.

        </p>
        <p class="gs gs_fromLeft">
            <strong>5. Polityka ciasteczek</strong><br />
            Mozemy uzywac ciasteczek, web beacon'ów i innych technologii śledzących na tej Stronie, które domyślnie są ustawione na akceptacje ich ciasteczek, w celu polepszenia doświadczenia online dla naszych klientów. Musisz być świadomym tego, ze blokowanie ciasteczek lub web beacon'ów moze wpłynąć na funkcjonalność tej Strony.
        </p>
        <p class="gs gs_fromLeft">
            <strong>6. Treść stron trzecich</strong><br />
            Jakakolwiek informacje, które dostarczysz stronom trzecim - nie związanych z nami - nie są pokryte w tej Polityce. Nie jesteśmy odpowiedzialni za zawartość, prywatność i bezpieczeństwo polityki jakiejkolwiek ze stron trzecich, włączajac w to inne Strony internetowe, reklamy, zewnętrzne seerwisy lub aplikacje, które mogą być powiazane do tej Strony. 
        </p>
        <p class="gs gs_fromLeft">
            <strong>7. Ograniczenie odpowiedzialności</strong><br />

            Nie jesteśmy odpowiedzialni za działalność stron trzecich z, którym udostępnileś lub wymieniłeś swoje dane w jakiej kolwiek formie i nie mamy mozliwosci zarządzania lub kontrolowania ich.
        </p>
        <p class="gs gs_fromLeft">
            <strong>8. Komunikacja</strong><br />
            Jeśli nie zyczysz sobie otrzymywania jakichkolwiek informacji od nas, mozesz zrezygnować poprzez skontaktowanie się z nami poprzez email lub jakąkolwiek inną formę kontaktu która jest zawarta na tej Stronie.  
        </p>
        <p class="gs gs_fromLeft">
            <strong>9. Modyfikacja polityki prywatności</strong><br />
            Przyjmujesz do wiadomości, ze ta polityka prywatności jest obiektem modyfikacji, alternacji i poprawek przez {{config("app.name")}} przez cały czas, bez lub z powiadomieniem Ciebie o nich. Zgadzasz się równiez z tym, ze jakiekolwiek modyfikacje są w wazne i mają wpływ po ich zamieszczeniu w tej Witrynie.
        </p>
    </div>
    <x-footer/>
</div>

@endsection