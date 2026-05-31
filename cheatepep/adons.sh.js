const adons = require("rapp/modepack/internal/adons_mods")
const adons1 = adons.install.setup.compatible.android
const interval_saveus = require("rapp/savebackus/interval_load")
const handle = adons1.inject.folder.save.`${interval_saveus}`.com

handle.start.autoload