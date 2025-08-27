#!/usr/bin/env raku

use v6;
use lib '../lib';
use strict;

# verifique se o módulo foi carregado corretamente
sub verifique_modulo {
    if (defined &Some::Module::Function) {
        say "O módulo foi carregado corretamente.";
    } else {
        say "O módulo não foi carregado.";
    }
}
verifique_modulo();

# Exemplo de uso de uma função do módulo
sub exemplo_uso_modulo {
    my $resultado = Some::Module::Function('argumento');
    say "Resultado da função do módulo: $resultado";
}

