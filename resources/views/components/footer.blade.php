<!-- Footer -->
<section data-scroll-section id="footer">
    
        <!-- Clients section -->
        <section id="clients">
            <div class="container clients-content">
                <h4  class="lh-sm mb-2 gs gs_fromTop">Oni juz nam zaufali:</h4>
                <div style="text-align:center;"> <div></div>
                <div class="client-logos gs gs_fromBotom">
                    <div align="center" class="client-logo">
                        <img
                            src="{{asset('images/logos/client/danfit.svg')}}"
                            alt="branding (logotyp) danfit"
                            class="client-logo-svg"
                            width="350" height="100"
                        />
                    </div>
                    <div align="center" class="client-logo">
                        <img
                            src="{{asset('images/logos/client/komb.svg')}}"
                            alt="branding (logotyp) komb"
                            class="client-logo-svg"
                            width="350" height="100"
                        />
                    </div>
                    <div align="center" class="client-logo">
                        <img
                            src="{{asset('images/logos/buzonstudio_white.svg')}}"
                            alt="branding (logotyp) bisonstudio"
                            class="client-logo-svg"
                            width="350" height="100"
                        />
                    </div>
                    <div align="center" class="client-logo">
                        <img
                            src="{{asset('images/logos/client/zielonewidoki.svg')}}"
                            alt="branding (logotyp) zielonewidoki"
                            class="client-logo-svg"
                            width="350" height="100"
                        />
                    </div>
                    <div align="center" class="client-logo">
                        <img
                            src="{{asset('images/logos/client/ats.svg')}}"
                            alt="branding (logotyp) ats-konsulting"
                            class="client-logo-svg"
                            width="350" height="100"
                        />
                    </div>
                </div>
            </div>
        </section>
        <hr class="section-divider" />
        <div id="footer-content" class="container">
            <div class="row footer_row">
                <div data-scroll  class="col-md-6 gs gs_fromLeft">
                    <h3 class="mt-0 mb-4">Zostańmy w kontakcie</h3>

                    <a
                        href="mailto:{{config('app.mail')}}?subject = Oferta&body = Wiadomość"
                        class="my-0 mail-href underline"
                        >{{config('app.mail')}}</a
                    >

                    <h4 class="my-0 mt-3 mb-4">{{config('app.phone')}}</h4>

                    <a href="{{config('app.fb')}}" rel="noreferrer" target="_blank">
                    <div class="footer-icon-div">
                        <img id="facebook-icon" class="footer-icon" src="{{asset('images/social/facebook.svg')}}" alt="">
                    </div>
                    </a>


                    <a href="{{config('app.ig')}}" rel="noreferrer" target="_blank">
                    <div class="footer-icon-div">
                        <img id="ig-icon" class="footer-icon" src="{{asset('images/social/ig.svg')}}" alt="">
                    </div>
                    </a>
                </div>
                <div data-scroll class="col-md-6 gs gs_fromRight second-col-footer">
                    <div class="float-md-end">
                        <h3 class="mt-0 mb-2">Zainteresowaliśmy Cię?</h3>
                        <h4 class="mt-0 mb-4">Sprawdź naszą ofertę!</h4>
                        <a class="a_btn" href="/oferta">
                            Tworzenie stron i więcej <img class="arrow-right-icon" width="55" height="8" src="{{asset('images/arrows/arrow_right.svg')}}" alt="">
                        </a>
                    </div>
                </div>
            </div>
            <div class="underfooter-container">
                <div class="privacy-container">
                    <a
                        href="/polityka"
                        class="privacy-policy underline"
                        >Polityka prywatności</a
                    >
                </div>
                <div class="copyright-container">
                    <span class="copyright">
                        © 2021 bisonstudio wszelkie prawa zastrzeżone.
                    </span>
                </div>
            </div>
        </div>
        <div class="scroll-blocker"></div>
    </section>
