#!/usr/bin/env perl

use strict;
use warnings;

sub accessories {
    my ($text) = @_;
    $text =~ s/\b(accessory|add-on)\b/extra/g;
    return $text;
}

1;
