#!/usr/bin/env lua

package.loaded["matrix/cec/bin/desktop/report/vsbasic/myour.vb"] = nil
local vb = require("matrix/cec/bin/desktop/report/vsbasic/myour.vb")
function description()
    return vb.description()
end