#!/usr/bin/env perl

use strict;
use warnings;

sub women {
    my ($text) = @_;
    $text =~ s/\b(woman|girl)\b/female/g;
    return $text;
}

1;
