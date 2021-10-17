<div>Nowa wiadomość ze strony bisonstudio</div>
    <div>
        @if (session('resent'))
        <div>
            {{ __('Nowa wiadomość ze strony bisonstudio:') }}
        </div>
        @endif
        <br>
        <strong>
        @foreach ($controlInfo as $item)
        {!! $item !!} <br>
        @endforeach

        </strong> <br> <br>
    <strong><span>Imię: </span></strong> {!! $name !!} <br>
    <strong><span>Email: </span></strong> {!! $email !!} <br> <br>
    <strong><span>Wiadomość: </span></strong> {!! $content !!}
</div>


