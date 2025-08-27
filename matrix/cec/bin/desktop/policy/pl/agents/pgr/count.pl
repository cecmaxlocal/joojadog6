#!/usr/bin/env perl

use strict;
use warnings;

sub count {
    my ($text) = @_;
    my %counts;
    $counts{total} = () = $text =~ /\w+/g;
    $counts{words} = scalar split /\s+/, $text;
    return \%counts;
}

1;
