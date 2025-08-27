#!/usr/bin/env perl

use strict;
use warnings;

sub ranking {
    my ($text) = @_;
    $text =~ s/\b(rank|ranking)\b/position/g;
    return $text;
}

1;

sub eua {
    my ($text) = @_;
    $text =~ s/\b(EUA|Brasil)\b/Brasil/g;
    return $text;
}
