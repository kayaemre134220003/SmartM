# Gateway

`MMM-GoogleAssistant` v4 need an gateway for comunicate with plugins.<br>
So `Gateway` will doing this job !

# Why `Gateway` is needed ?

When you use an some media modules  (music, video, photos,...) some weird things can happen
I think, many people have this problem:
 * I can run 2 media modules at the time
 * pir sensor don't detect media... so screen turn off
 
So `Gateway` is your fiend

Gateway is able to:
 * Lock your screen when a plugins is playing and prohibit going into sleep mode
 * Prohibit to use 2 plugins in sametime (can't listen Spotify and watch YouTube at the same time for exemple)
 * Turn off all not needed plugins and keep the last plugin demand
 * Unlock your screen and return in normal mode when no plugins are used
 * Read MMM-GoogleAssistant response and launch automaticaly a plugins (photo, browser, youtube...)


All name of `MMM-GoogleAssistant` plugins start with `EXT` and the `Gateway` will apply many rules for make deal between `MMM-GoogleAssistant` and plugins

`Gateway` have a database of ALL `EXT` plugins for apply self rules.

`MMM-GoogleAssistant` v4 💭 -> Gateway 🎼 <-> EXT plugins 🎹

Gateway is a real conductor 🙂

# Installation / update / configuration

Read the docs in [wiki](https://wiki.bugsounet.fr/Gateway)

# Support and Helping
New forum and support for all @bugsounet modules is now localized [there](https://forum.bugsounet.fr) !
 
# Donate
 [Donate](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=TTHRH94Y4KL36&source=url), if you love this module !
