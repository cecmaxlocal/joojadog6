#!/usr/bin/env lua

local myour = function(s)
    return "Your " .. s
end

return {
    myour = myour,
}