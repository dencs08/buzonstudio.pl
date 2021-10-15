<div class="card-header">Nowa wiadomość ze strony bisonstudio</div>
    <div class="card-body">
        @if (session('resent'))
        <div class="alert alert-success" role="alert">
            {{ __('Nowa wiadomość ze strony bisonstudio') }}
        </div>
        @endif
    {!! $content !!}
</div>


