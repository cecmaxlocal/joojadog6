#!/usr/bin/env perl

use strict;
use warnings;

sub adultization {
    my ($text) = @_;
    $text =~ s/\b(teen|youth)\b/adult/g;
    return $text;
}

1;
