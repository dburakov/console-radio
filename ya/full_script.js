(function() {
    ! function(a, b) {
        var c;
        "undefined" != typeof window ? c = window : "undefined" != typeof global && (c = global);
        var d = {},
            e = function(b) {
                if (b in d) return d[b].Xh;
                if (!a[b]) return void console.error("No such module: " + b);
                var f = d[b] = {
                    Xh: {}
                };
                return a[b].call(c, f, f.Xh, function() {
                    return e.apply({}, arguments)
                }, c), f.Xh
            };
        e.call({}, 0)
    }([function(a, b, c, d) {
        var e = "radio.yandex.ru";
        if (e != location.hostname) throw Error("Please specify correct hostname. You specified '" + e + "' host, but actually running on '" + location.hostname + "'.");
        window.MUSIC_API = "v2.1", c(1), c(4);
        var f = c(45);
        ya.music.Audio.config.flash.path = f._a.replace(/v2\.1\/$/, "") + "audio/dist", delete ya.music.Audio.config, delete ya.music.Audio.Logger, c(46), c(55), c(59), c(158), a.Xh = c(47)
    }, function(a, b, c, d) {
        var e = c(2);
        e.prototype._b = e.prototype.on, e.prototype._c = e.prototype.off, e.prototype._d = e.prototype.trigger, a.Xh = e
    }, function(a, b, c, d) {
        var e = c(3),
            f = "_listeners",
            g = "_muted",
            h = function() {
                this[f] = {}, this[g] = !1
            };
        h.mixin = function(a) {
            return e(a.prototype, h.prototype, !0), a
        }, h.eventize = function(a) {
            return e(a, h.prototype, !0), h.call(a), a
        }, h.prototype.on = function(a, b) {
            return this[f][a] || (this[f][a] = []), this[f][a].push(b), this
        }, h.prototype.off = function(a, b) {
            if (!this[f][a]) return this;
            if (!b) return delete this[f][a], this;
            for (var c = this[f][a], d = 0, e = c.length; e > d; d++)
                if (c[d] === b || c[d].callback === b) {
                    c.splice(d, 1), c.length || delete this[f][a];
                    break
                }
            return this
        }, h.prototype.once = function(a, b) {
            var c = this,
                d = function() {
                    c.off(a, d), b.apply(this, arguments)
                };
            return d.callback = b, c.on(a, d), this
        }, h.prototype.clearListeners = function() {
            for (var a in this[f]) this[f].hasOwnProperty(a) && delete this[f][a];
            return this
        }, h.prototype.trigger = function(a, b) {
            if (this[g]) return this;
            if (b = [].slice.call(arguments, 1), "*" !== a && h.prototype.trigger.apply(this, ["*", a].concat(b)), !this[f][a]) return this;
            for (var c = [].concat(this[f][a]), d = 0, e = c.length; e > d; d++) c[d].apply(null, b);
            return this
        }, h.prototype.pipeEvents = function(a) {
            return this.on("*", h.prototype.trigger.bind(a)), this
        }, h.prototype.muteEvents = function() {
            return this[g] = !0, this
        }, h.prototype.unmuteEvents = function() {
            return delete this[g], this
        }, a.Xh = h
    }, function(a, b, c, d) {
        var e = function(a) {
            var b, c, d = [].slice.call(arguments, 1);
            if (d[d.length - 1] === !0) b = a, d.pop();
            else {
                b = {};
                for (c in a) a.hasOwnProperty(c) && (b[c] = a[c])
            }
            for (var e = 0, f = d.length; f > e; e++)
                for (c in d[e]) d[e].hasOwnProperty(c) && (b[c] = d[e][c]);
            return b
        };
        a.Xh = e
    }, function(a, b, c, d) {
        c(5);
        var e = c(6);
        c(33), c(34), c(35), c(36), c(43), a.Xh = e
    }, function(a, b, c, d) {
        ! function(a, b, c) {
            "use strict";

            function d(a) {
                a && (a.setTargetAtTime || (a.setTargetAtTime = a.setTargetValueAtTime))
            }
            window.hasOwnProperty("webkitAudioContext") && !window.hasOwnProperty("AudioContext") && (window.AudioContext = webkitAudioContext, AudioContext.prototype.hasOwnProperty("createGain") || (AudioContext.prototype.createGain = AudioContext.prototype.createGainNode), AudioContext.prototype.hasOwnProperty("createDelay") || (AudioContext.prototype.createDelay = AudioContext.prototype.createDelayNode), AudioContext.prototype.hasOwnProperty("createScriptProcessor") || (AudioContext.prototype.createScriptProcessor = AudioContext.prototype.createJavaScriptNode), AudioContext.prototype.hasOwnProperty("createPeriodicWave") || (AudioContext.prototype.createPeriodicWave = AudioContext.prototype.createWaveTable), AudioContext.prototype.internal_createGain = AudioContext.prototype.createGain, AudioContext.prototype.createGain = function() {
                var a = this.internal_createGain();
                return d(a.gain), a
            }, AudioContext.prototype.internal_createDelay = AudioContext.prototype.createDelay, AudioContext.prototype.createDelay = function(a) {
                var b = a ? this.internal_createDelay(a) : this.internal_createDelay();
                return d(b.delayTime), b
            }, AudioContext.prototype.internal_createBufferSource = AudioContext.prototype.createBufferSource, AudioContext.prototype.createBufferSource = function() {
                var a = this.internal_createBufferSource();
                return a.start ? (a.internal_start = a.start, a.start = function(b, c, d) {
                    "undefined" != typeof d ? a.internal_start(b || 0, c, d) : a.internal_start(b || 0, c)
                }) : a.start = function(a, b, c) {
                    b || c ? this.noteGrainOn(a || 0, b, c) : this.noteOn(a || 0)
                }, a.stop ? (a.internal_stop = a.stop, a.stop = function(b) {
                    a.internal_stop(b || 0)
                }) : a.stop = function(a) {
                    this.noteOff(a || 0)
                }, d(a.playbackRate), a
            }, AudioContext.prototype.internal_createDynamicsCompressor = AudioContext.prototype.createDynamicsCompressor, AudioContext.prototype.createDynamicsCompressor = function() {
                var a = this.internal_createDynamicsCompressor();
                return d(a.threshold), d(a.knee), d(a.ratio), d(a.reduction), d(a.attack), d(a.release), a
            }, AudioContext.prototype.internal_createBiquadFilter = AudioContext.prototype.createBiquadFilter, AudioContext.prototype.createBiquadFilter = function() {
                var a = this.internal_createBiquadFilter();
                return d(a.frequency), d(a.detune), d(a.Q), d(a.gain), a
            }, AudioContext.prototype.hasOwnProperty("createOscillator") && (AudioContext.prototype.internal_createOscillator = AudioContext.prototype.createOscillator, AudioContext.prototype.createOscillator = function() {
                var a = this.internal_createOscillator();
                return a.start ? (a.internal_start = a.start, a.start = function(b) {
                    a.internal_start(b || 0)
                }) : a.start = function(a) {
                    this.noteOn(a || 0)
                }, a.stop ? (a.internal_stop = a.stop, a.stop = function(b) {
                    a.internal_stop(b || 0)
                }) : a.stop = function(a) {
                    this.noteOff(a || 0)
                }, a.setPeriodicWave || (a.setPeriodicWave = a.setWaveTable), d(a.frequency), d(a.detune), a
            })), window.hasOwnProperty("webkitOfflineAudioContext") && !window.hasOwnProperty("OfflineAudioContext") && (window.OfflineAudioContext = webkitOfflineAudioContext)
        }(window)
    }, function(a, b, c, d) {
        "undefined" == typeof window.ya && (window.ya = {});
        var e = window.ya;
        "undefined" == typeof e.music && (e.music = {}), "undefined" == typeof e.music.Audio && (e.music.Audio = {});
        var f = c(7),
            g = c(8),
            h = c(31);
        e.music.Audio = h.createClass(g), e.music.Audio.config = f, c(32), a.Xh = e.music.Audio
    }, function(a, b, c, d) {
        var e = {
            audio: {
                retry: 3
            },
            flash: {
                path: "dist",
                name: "player-2_1.swf",
                version: "9.0.28",
                playerID: "YandexAudioFlashPlayer",
                callback: "ya.music.Audio._flashCallback",
                initTimeout: 3e3,
                loadTimeout: 5e3,
                clickTimeout: 1e3,
                heartBeatInterval: 1e3
            },
            html5: {
                blacklist: ["linux:mozilla", "unix:mozilla", "macos:mozilla", ":opera", "@NT 5", "@NT 4", ":msie/9"]
            }
        };
        a.Xh = e
    }, function(a, b, c, d) {
        var e = c(9),
            f = new e("Audio"),
            g = c(2),
            h = c(11),
            i = c(14),
            j = c(13),
            k = c(7),
            l = c(3),
            m = c(15),
            n = c(16),
            o = c(19),
            p = 1,
            q = {
                html5: c(20),
                flash: c(23)
            },
            r = "@" + j.platform.version + " " + j.platform.os + ":" + j.browser.name + "/" + j.browser.version;
        q.flash.priority = 0, q.html5.priority = k.html5.blacklist.some(function(a) {
            return r.match(a)
        }) ? -1 : 1, setTimeout(function() {
            f.info({
                flash: {
                    available: q.flash.available,
                    priority: q.flash.priority
                },
                html5: {
                    available: q.html5.available,
                    priority: q.html5.priority,
                    audioContext: !!q.html5.audioContext
                }
            }, "audioTypes")
        }, 0);
        var s = function(a, b) {
            this.name = p++, g.call(this), this.preferredType = a, this.overlay = b, this.state = s.STATE_INIT, this._e = 0, this._f = 0, this._g = null, this._h = !0, this._i = new i, this.whenReady = this._i.promise().then(function() {
                this._h = !1, f.info(this, "implementation found", this.Yh.type), this.Yh.on("*", function(a, b, c) {
                    if (this._j(a, b, c), !b) switch (a) {
                        case s.EVENT_PLAY:
                            this._k(s.STATE_PLAYING);
                            break;
                        case s.EVENT_ENDED:
                        case s.EVENT_SWAP:
                        case s.EVENT_STOP:
                        case s.EVENT_ERROR:
                            f.info(this, "onEnded", a, c), this._k(s.STATE_IDLE);
                            break;
                        case s.EVENT_PAUSE:
                            this._k(s.STATE_PAUSED);
                            break;
                        case s.EVENT_CRASHED:
                            this._k(s.STATE_CRASHED)
                    }
                }.bind(this)), this._k(s.STATE_IDLE)
            }.bind(this), function(a) {
                throw this._h = !1, f.error(this, n.NO_IMPLEMENTATION, a), this._k(s.STATE_CRASHED), a
            }.bind(this)), this._l(0)
        };
        g.mixin(s), l(s, o, !0), s.info = {
            html5: q.html5.available,
            flash: q.flash.available
        }, s.audioContext = q.html5.audioContext, s.prototype._k = function(a) {
            if (a !== s.STATE_PAUSED || this.state === s.STATE_PLAYING) {
                var b = this.state !== a;
                this.state = a, b && (f.info(this, "newState", a), this.trigger(s.EVENT_STATE, a))
            }
        }, s.prototype._l = function(a) {
            function b() {
                var e = c.shift();
                return e ? void d._m(e).then(d._i.resolve, b) : void d._l(a + 1)
            }
            if (a = a || 0, f.info(this, "_init", a), this._h) {
                a > k.audio.retry && (f.error(this, n.NO_IMPLEMENTATION), this._i.reject(new n(n.NO_IMPLEMENTATION)));
                var c = [q.html5, q.flash].sort(function(a, b) {
                        return a.available !== b.available ? a.available ? -1 : 1 : a.AudioImplementation.type === this.preferredType ? -1 : b.AudioImplementation.type === this.preferredType ? 1 : b.priority - a.priority
                    }.bind(this)),
                    d = this;
                b()
            }
        }, s.prototype._m = function(a) {
            f.info(this, "_initType", a);
            var b = new i;
            try {
                this.Yh = new a.AudioImplementation(this.overlay), this.Yh.whenReady ? this.Yh.whenReady.then(b.resolve, b.reject) : b.resolve()
            } catch (c) {
                b.reject(c), f.warn(this, "_initTypeError", a, c)
            }
            return b.promise()
        }, s.prototype._n = function(a, b, c) {
            var d = new i,
                e = this;
            this[a] = d;
            var f = function() {
                b.forEach(function(a) {
                    e.off(a, d.resolve)
                }), c.forEach(function(a) {
                    e.off(a, d.reject)
                }), delete e[a]
            };
            return b.forEach(function(a) {
                e.on(a, d.resolve)
            }), c.forEach(function(a) {
                e.on(a, function(b) {
                    var c = b instanceof Error ? b : new n(b || a);
                    d.reject(c)
                })
            }), d.promise().then(f, f), d.promise()
        }, s.prototype._j = function(a, b, c) {
            a !== s.EVENT_PROGRESS;
            var d = (b ? s.PRELOADER_EVENT : "") + a;
            switch (a) {
                case s.EVENT_CRASHED:
                case s.EVENT_SWAP:
                    this.trigger(a, c);
                    break;
                case s.EVENT_ERROR:
                    f.error(this, "error", d, c), this.trigger(d, c);
                    break;
                case s.EVENT_VOLUME:
                    this.trigger(a, this.getVolume());
                    break;
                case s.EVENT_PROGRESS:
                    this.trigger(d, {
                        duration: this.getDuration(b),
                        loaded: this.getLoaded(b),
                        position: b ? 0 : this.getPosition(),
                        played: b ? 0 : this.getPlayed()
                    });
                    break;
                default:
                    this.trigger(d)
            }
        }, s.prototype.initPromise = function() {
            return this.whenReady
        }, s.prototype.getState = function() {
            return this.state
        }, s.prototype.getType = function() {
            return this.Yh && this.Yh.type
        }, s.prototype.getSrc = function(a) {
            return this.Yh && this.Yh.getSrc(a)
        }, s.prototype.play = function(a, b) {
            f.info(this, "play", f._o(a), b), this._e = 0, this._f = 0, this._p(), this._whenPlay && this._whenPlay.reject("play"), this._whenPause && this._whenPause.reject("play"), this._whenStop && this._whenStop.reject("play");
            var c = this._n("_whenPlay", [s.EVENT_PLAY], [s.EVENT_STOP, s.EVENT_ERROR, s.EVENT_CRASHED]);
            return c.abort = function() {
                this._whenPlay && (this._whenPlay.reject.apply(this._whenPlay, arguments), this.stop())
            }.bind(this), this._k(s.STATE_PAUSED), this.Yh.play(a, b), c
        }, s.prototype.restart = function() {
            return this.getDuration() ? (this._p(), this.setPosition(0), this._e = 0, this._f = 0, this.resume()) : m(new n(n.BAD_STATE))
        }, s.prototype.stop = function(a) {
            if (f.info(this, "stop", a), 0 !== a) return this.Yh.stop(a);
            this._e = 0, this._f = 0, this._whenPlay && this._whenPlay.reject("stop"), this._whenPause && this._whenPause.reject("stop");
            var b;
            return b = this._whenStop ? this._whenStop.promise() : this._n("_whenStop", [s.EVENT_STOP], [s.EVENT_PLAY, s.EVENT_ERROR, s.EVENT_CRASHED]), this.Yh.stop(), b
        }, s.prototype.pause = function() {
            if (f.info(this, "pause"), this.state !== s.STATE_PLAYING) return m(new n(n.BAD_STATE));
            var a;
            return this._whenPlay && this._whenPlay.reject("pause"), a = this._whenPause ? this._whenPause.promise() : this._n("_whenPause", [s.EVENT_PAUSE], [s.EVENT_STOP, s.EVENT_PLAY, s.EVENT_ERROR, s.EVENT_CRASHED]), this.Yh.pause(), a
        }, s.prototype.resume = function() {
            if (f.info(this, "resume"), this.state === s.STATE_PLAYING && !this._whenPause) return h.resolve();
            if (this.state !== s.STATE_IDLE && this.state !== s.STATE_PAUSED && this.state !== s.STATE_PLAYING) return m(new n(n.BAD_STATE));
            var a;
            return this._whenPause && this._whenPause.reject("resume"), this._whenPlay ? a = this._whenPlay.promise() : (a = this._n("_whenPlay", [s.EVENT_PLAY], [s.EVENT_STOP, s.EVENT_ERROR, s.EVENT_CRASHED]), a.abort = function() {
                this._whenPlay && (this._whenPlay.reject.apply(this._whenPlay, arguments), this.stop())
            }.bind(this)), this.Yh.resume(), a
        }, s.prototype.playPreloaded = function(a) {
            if (f.info(this, "playPreloaded", f._o(a)), a || (a = this.getSrc(1)), !this.isPreloaded(a)) return f.warn(this, "playPreloadedBadTrack", n.NOT_PRELOADED), m(new n(n.NOT_PRELOADED));
            this._e = 0, this._f = 0, this._p(), this._whenPlay && this._whenPlay.reject("playPreloaded"), this._whenPause && this._whenPause.reject("playPreloaded"), this._whenStop && this._whenStop.reject("playPreloaded");
            var b = this._n("_whenPlay", [s.EVENT_PLAY], [s.EVENT_STOP, s.EVENT_ERROR, s.EVENT_CRASHED]);
            b.abort = function() {
                this._whenPlay && (this._whenPlay.reject.apply(this._whenPlay, arguments), this.stop())
            }.bind(this), this._k(s.STATE_PAUSED);
            var c = this.Yh.playPreloaded();
            return c || (f.warn(this, "playPreloadedError", n.NOT_PRELOADED), this._whenPlay.reject(new n(n.NOT_PRELOADED))), b
        }, s.prototype.preload = function(a, b) {
            if ("msie" === j.browser.name && "9" == j.browser.version[0]) return m(new n(n.NOT_PRELOADED));
            f.info(this, "preload", f._o(a), b), this._whenPreload && this._whenPreload.reject("preload");
            var c = this._n("_whenPreload", [s.PRELOADER_EVENT + s.EVENT_LOADING, s.EVENT_SWAP], [s.PRELOADER_EVENT + s.EVENT_CRASHED, s.PRELOADER_EVENT + s.EVENT_ERROR, s.PRELOADER_EVENT + s.EVENT_STOP]);
            return c.abort = function() {
                this._whenPreload && (this._whenPreload.reject.apply(this._whenPreload, arguments), this.stop(1))
            }.bind(this), this.Yh.preload(a, b), c
        }, s.prototype.isPreloaded = function(a) {
            return this.Yh.isPreloaded(a)
        }, s.prototype.isPreloading = function(a) {
            return this.Yh.isPreloading(a, 1)
        }, s.prototype.getPosition = function() {
            return this.Yh.getPosition() || 0
        }, s.prototype.setPosition = function(a) {
            return f.info(this, "setPosition", a), a = "flash" == this.Yh.type ? Math.max(0, Math.min(this.getLoaded() - 1, a)) : Math.max(0, Math.min(this.getDuration() - 1, a)), this._e += this.getPosition() - this._f, this._f = a, this.Yh.setPosition(a), a
        }, s.prototype.getDuration = function(a) {
            return this.Yh.getDuration(a ? 1 : 0) || 0
        }, s.prototype.getLoaded = function(a) {
            return this.Yh.getLoaded(a ? 1 : 0) || 0
        }, s.prototype.getPlayed = function() {
            var a = this.getPosition();
            return this._e += a - this._f, this._f = a, this._e
        }, s.prototype.getVolume = function() {
            return this.Yh ? this.Yh.getVolume() : 0
        }, s.prototype.setVolume = function(a) {
            return this.Yh ? this.Yh.setVolume(a) : 0
        }, s.prototype.isDeviceVolume = function() {
            return this.Yh ? this.Yh.isDeviceVolume() : !0
        }, s.prototype.toggleCrossDomain = function(a) {
            return "html5" !== this.Yh.type ? (f.warn(this, "toggleCrossDomainFailed", this.Yh.type), !1) : (this.Yh.toggleCrossDomain(a), !0)
        }, s.prototype.toggleWebAudioAPI = function(a) {
            return f.info(this, "toggleWebAudioAPI", a), "html5" !== this.Yh.type ? (f.warn(this, "toggleWebAudioAPIFailed", this.Yh.type), !1) : this.Yh.toggleWebAudioAPI(a)
        }, s.prototype.setAudioPreprocessor = function(a) {
            return f.info(this, "setAudioPreprocessor"), "html5" !== this.Yh.type ? (f.warn(this, "setAudioPreprocessorFailed", this.Yh.type), !1) : this.Yh.setAudioPreprocessor(a)
        }, s.prototype._p = function() {
            this._g = Math.random().toString().slice(2)
        }, s.prototype.getPlayId = function() {
            return this._g
        }, s.prototype._q = function() {
            return {
                index: this.Yh && this.Yh.name,
                src: this.Yh && this.Yh._q(),
                type: this.Yh && this.Yh.type
            }
        }, a.Xh = s
    }, function(a, b, c, d) {
        var e = ["debug", "log", "info", "warn", "error", "trace"],
            f = c(10),
            g = function(a) {
                this.channel = a
            };
        g.ignores = [], g.logLevels = [], g.prototype.debug = f, g.prototype.log = f, g.prototype.info = f, g.prototype.warn = f, g.prototype.error = f, g.prototype.trace = f, g.prototype._o = function(a) {
            return g.showUrl(a)
        }, g.showUrl = function(a) {
            return a
        }, e.forEach(function(a) {
            g.prototype[a] = function() {
                var b = [].slice.call(arguments);
                b.unshift(this.channel), b.unshift(a), g.log.apply(g, b)
            }
        }), g.log = function(a, b, c) {
            var d = [].slice.call(arguments, 3).map(function(a) {
                    return a && a._q && a._q() || a
                }),
                e = {
                    timestamp: +new Date,
                    level: a,
                    channel: b,
                    context: c,
                    message: d
                };
            g.ignores[b] || -1 === g.logLevels.indexOf(a) || g._r(e)
        }, g._r = function(a) {
            try {
                var b = a.level,
                    c = a.context && (a.context.taskName || a.context.name),
                    d = a.context && (a.context._q ? a.context._q() : "");
                "function" != typeof console[b] ? console.log.apply(console, [b.toUpperCase(), g._s(a.timestamp), "[" + a.channel + (c ? ":" + c : "") + "]", d].concat(a.message)) : console[b].apply(console, [g._s(a.timestamp), "[" + a.channel + (c ? ":" + c : "") + "]", d].concat(a.message))
            } catch (e) {}
        }, g._s = function(a) {
            var b = new Date(a),
                c = b.getMilliseconds();
            return c = c > 100 ? c : c > 10 ? "0" + c : "00" + c, b.toLocaleTimeString() + "." + c
        }, a.Xh = g
    }, function(a, b, c, d) {
        var e = function() {};
        a.Xh = e
    }, function(a, b, c, d) {
        var e, f = c(12),
            g = c(13),
            h = c(3);
        "function" != typeof window.Promise || "msie" === g.browser.name || "edge" === g.browser.name ? (e = function(a) {
            var b;
            try {
                b = new f.Promise(a)
            } catch (c) {
                b = f.reject(c)
            }
            return b
        }, h(e, f.Promise, !0), e.prototype = f.Promise.prototype) : e = window.Promise, a.Xh = e
    }, function(a, b, c, d) {
        ! function(b) {
            var c, d = function() {
                    var a = [],
                        c = function(b) {
                            return 1 === a.push(b)
                        },
                        d = function() {
                            var b = a,
                                c = 0,
                                d = a.length;
                            for (a = []; d > c;) b[c++]()
                        };
                    if ("function" == typeof setImmediate) return function(a) {
                        c(a) && setImmediate(d)
                    };
                    if ("object" == typeof process && process.nextTick) return function(a) {
                        c(a) && process.nextTick(d)
                    };
                    var e = b.MutationObserver || b.WebKitMutationObserver;
                    if (e) {
                        var f = 1,
                            g = document.createTextNode("");
                        return new e(d).observe(g, {
                                characterData: !0
                            }),
                            function(a) {
                                c(a) && (g.data = f *= -1)
                            }
                    }
                    if (b.postMessage) {
                        var h = !0;
                        if (b.attachEvent) {
                            var i = function() {
                                h = !1
                            };
                            b.attachEvent("onmessage", i), b.postMessage("__checkAsync", "*"), b.detachEvent("onmessage", i)
                        }
                        if (h) {
                            var j = "__promise" + +new Date,
                                k = function(a) {
                                    a.data === j && (a.stopPropagation && a.stopPropagation(), d())
                                };
                            return b.addEventListener ? b.addEventListener("message", k, !0) : b.attachEvent("onmessage", k),
                                function(a) {
                                    c(a) && b.postMessage(j, "*")
                                }
                        }
                    }
                    var l = b.document;
                    if ("onreadystatechange" in l.createElement("script")) {
                        var m = function() {
                            var a = l.createElement("script");
                            a.onreadystatechange = function() {
                                a.parentNode.removeChild(a), a = a.onreadystatechange = null, d()
                            }, (l.documentElement || l.body).appendChild(a)
                        };
                        return function(a) {
                            c(a) && m()
                        }
                    }
                    return function(a) {
                        c(a) && setTimeout(d, 0)
                    }
                }(),
                e = function(a) {
                    d(function() {
                        throw a
                    })
                },
                f = function(a) {
                    return "function" == typeof a
                },
                g = function(a) {
                    return null !== a && "object" == typeof a
                },
                h = Object.prototype.toString,
                i = Array.isArray || function(a) {
                    return "[object Array]" === h.call(a)
                },
                j = function(a) {
                    for (var b = [], c = 0, d = a.length; d > c;) b.push(c++);
                    return b
                },
                k = Object.keys || function(a) {
                    var b = [];
                    for (var c in a) a.hasOwnProperty(c) && b.push(c);
                    return b
                },
                l = function(a) {
                    var b = function(b) {
                        this.name = a, this.message = b
                    };
                    return b.prototype = new Error, b
                },
                m = function(a, b) {
                    return function(c) {
                        a.call(this, c, b)
                    }
                },
                n = function() {
                    this._t = new p
                };
            n.prototype = {
                promise: function() {
                    return this._t
                },
                resolve: function(a) {
                    this._t.isResolved() || this._t._u(a)
                },
                reject: function(a) {
                    this._t.isResolved() || (s.isPromise(a) ? (a = a.then(function(a) {
                        var b = s.defer();
                        return b.reject(a), b.promise()
                    }), this._t._u(a)) : this._t._v(a))
                },
                notify: function(a) {
                    this._t.isResolved() || this._t._w(a)
                }
            };
            var o = {
                    PENDING: 0,
                    RESOLVED: 1,
                    FULFILLED: 2,
                    REJECTED: 3
                },
                p = function(a) {
                    if (this._x = c, this._y = o.PENDING, this._z = [], this._A = [], this._B = [], a) {
                        var b = this,
                            d = a.length;
                        a(function(a) {
                            b.isResolved() || b._u(a)
                        }, d > 1 ? function(a) {
                            b.isResolved() || b._v(a)
                        } : c, d > 2 ? function(a) {
                            b.isResolved() || b._w(a)
                        } : c)
                    }
                };
            p.prototype = {
                valueOf: function() {
                    return this._x
                },
                isResolved: function() {
                    return this._y !== o.PENDING
                },
                isFulfilled: function() {
                    return this._y === o.FULFILLED
                },
                isRejected: function() {
                    return this._y === o.REJECTED
                },
                then: function(a, b, c, d) {
                    var e = new n;
                    return this._C(e, a, b, c, d), e.promise()
                },
                "catch": function(a, b) {
                    return this.then(c, a, b)
                },
                fail: function(a, b) {
                    return this.then(c, a, b)
                },
                always: function(a, b) {
                    var c = this,
                        d = function() {
                            return a.call(this, c)
                        };
                    return this.then(d, d, b)
                },
                progress: function(a, b) {
                    return this.then(c, c, a, b)
                },
                spread: function(a, b, c) {
                    return this.then(function(b) {
                        return a.apply(this, b)
                    }, b, c)
                },
                done: function(a, b, c, d) {
                    this.then(a, b, c, d).fail(e)
                },
                delay: function(a) {
                    var b, c = this.then(function(c) {
                        var d = new n;
                        return b = setTimeout(function() {
                            d.resolve(c)
                        }, a), d.promise()
                    });
                    return c.always(function() {
                        clearTimeout(b)
                    }), c
                },
                timeout: function(a) {
                    var b = new n,
                        c = setTimeout(function() {
                            b.reject(new s.TimedOutError("timed out"))
                        }, a);
                    return this.then(function(a) {
                        b.resolve(a)
                    }, function(a) {
                        b.reject(a)
                    }), b.promise().always(function() {
                        clearTimeout(c)
                    }), b.promise()
                },
                _D: !0,
                _u: function(a) {
                    if (!(this._y > o.RESOLVED)) {
                        if (a === this) return void this._v(TypeError("Can't resolve promise with itself"));
                        if (this._y = o.RESOLVED, a && a._D) return void(a.isFulfilled() ? this._E(a.valueOf()) : a.isRejected() ? this._v(a.valueOf()) : a.then(this._E, this._v, this._w, this));
                        if (g(a) || f(a)) {
                            var b;
                            try {
                                b = a.then
                            } catch (c) {
                                return void this._v(c)
                            }
                            if (f(b)) {
                                var d = this,
                                    e = !1;
                                try {
                                    b.call(a, function(a) {
                                        e || (e = !0, d._u(a))
                                    }, function(a) {
                                        e || (e = !0, d._v(a))
                                    }, function(a) {
                                        d._w(a)
                                    })
                                } catch (c) {
                                    e || this._v(c)
                                }
                                return
                            }
                        }
                        this._E(a)
                    }
                },
                _E: function(a) {
                    this._y > o.RESOLVED || (this._y = o.FULFILLED, this._x = a, this._F(this._z, a), this._z = this._A = this._B = c)
                },
                _v: function(a) {
                    this._y > o.RESOLVED || (this._y = o.REJECTED, this._x = a, this._F(this._A, a), this._z = this._A = this._B = c)
                },
                _w: function(a) {
                    this._F(this._B, a)
                },
                _C: function(a, b, d, e, g) {
                    d && !f(d) ? (g = d, d = c) : e && !f(e) && (g = e, e = c);
                    var h;
                    this.isRejected() || (h = {
                        defer: a,
                        fn: f(b) ? b : c,
                        ctx: g
                    }, this.isFulfilled() ? this._F([h], this._x) : this._z.push(h)), this.isFulfilled() || (h = {
                        defer: a,
                        fn: d,
                        ctx: g
                    }, this.isRejected() ? this._F([h], this._x) : this._A.push(h)), this._y <= o.RESOLVED && this._B.push({
                        defer: a,
                        fn: e,
                        ctx: g
                    })
                },
                _F: function(a, b) {
                    var c = a.length;
                    if (c) {
                        var e = this.isResolved(),
                            f = this.isFulfilled();
                        d(function() {
                            for (var d, g, h, i = 0; c > i;)
                                if (d = a[i++], g = d.defer, h = d.fn) {
                                    var j, k = d.ctx;
                                    try {
                                        j = k ? h.call(k, b) : h(b)
                                    } catch (l) {
                                        g.reject(l);
                                        continue
                                    }
                                    e ? g.resolve(j) : g.notify(j)
                                } else e ? f ? g.resolve(b) : g.reject(b) : g.notify(b)
                        })
                    }
                }
            };
            var q = {
                cast: function(a) {
                    return s.cast(a)
                },
                all: function(a) {
                    return s.all(a)
                },
                race: function(a) {
                    return s.anyResolved(a)
                },
                resolve: function(a) {
                    return s.resolve(a)
                },
                reject: function(a) {
                    return s.reject(a)
                }
            };
            for (var r in q) q.hasOwnProperty(r) && (p[r] = q[r]);
            var s = {
                    Deferred: n,
                    Promise: p,
                    defer: function() {
                        return new n
                    },
                    when: function(a, b, c, d, e) {
                        return s.cast(a).then(b, c, d, e)
                    },
                    fail: function(a, b, d) {
                        return s.when(a, c, b, d)
                    },
                    always: function(a, b, c) {
                        return s.when(a).always(b, c)
                    },
                    progress: function(a, b, c) {
                        return s.when(a).progress(b, c)
                    },
                    spread: function(a, b, c, d) {
                        return s.when(a).spread(b, c, d)
                    },
                    done: function(a, b, c, d, e) {
                        s.when(a).done(b, c, d, e)
                    },
                    isPromise: function(a) {
                        return g(a) && f(a.then)
                    },
                    cast: function(a) {
                        return a && a._D ? a : s.resolve(a)
                    },
                    valueOf: function(a) {
                        return a && f(a.valueOf) ? a.valueOf() : a
                    },
                    isFulfilled: function(a) {
                        return a && f(a.isFulfilled) ? a.isFulfilled() : !0
                    },
                    isRejected: function(a) {
                        return a && f(a.isRejected) ? a.isRejected() : !1
                    },
                    isResolved: function(a) {
                        return a && f(a.isResolved) ? a.isResolved() : !0
                    },
                    resolve: function(a) {
                        var b = s.defer();
                        return b.resolve(a), b.promise()
                    },
                    fulfill: function(a) {
                        var b = s.defer(),
                            c = b.promise();
                        return b.resolve(a), c.isFulfilled() ? c : c.then(null, function(a) {
                            return a
                        })
                    },
                    reject: function(a) {
                        var b = s.defer();
                        return b.reject(a), b.promise()
                    },
                    invoke: function(a, c) {
                        var d, e = Math.max(arguments.length - 1, 0);
                        if (e) {
                            d = Array(e);
                            for (var f = 0; e > f;) d[f++] = arguments[f]
                        }
                        try {
                            return s.resolve(d ? a.apply(b, d) : a.call(b))
                        } catch (g) {
                            return s.reject(g)
                        }
                    },
                    all: function(a) {
                        var b = new n,
                            c = i(a),
                            d = c ? j(a) : k(a),
                            e = d.length,
                            f = c ? [] : {};
                        if (!e) return b.resolve(f), b.promise();
                        var g = e;
                        return s._G(a, function(a, c) {
                            f[d[c]] = a, --g || b.resolve(f)
                        }, b.reject, b.notify, b, d), b.promise()
                    },
                    allResolved: function(a) {
                        var b = new n,
                            c = i(a),
                            d = c ? j(a) : k(a),
                            e = d.length,
                            f = c ? [] : {};
                        if (!e) return b.resolve(f), b.promise();
                        var g = function() {
                            --e || b.resolve(a)
                        };
                        return s._G(a, g, g, b.notify, b, d), b.promise()
                    },
                    allPatiently: function(a) {
                        return s.allResolved(a).then(function() {
                            var b, c, d, e, f = i(a),
                                g = f ? j(a) : k(a),
                                h = g.length,
                                l = 0;
                            if (!h) return f ? [] : {};
                            for (; h > l;) d = g[l++], e = a[d], s.isRejected(e) ? (b || (b = f ? [] : {}), f ? b.push(e.valueOf()) : b[d] = e.valueOf()) : b || ((c || (c = f ? [] : {}))[d] = s.valueOf(e));
                            if (b) throw b;
                            return c
                        })
                    },
                    any: function(a) {
                        var b = new n,
                            c = a.length;
                        if (!c) return b.reject(Error()), b.promise();
                        var d, e = 0;
                        return s._G(a, b.resolve, function(a) {
                            e || (d = a), ++e === c && b.reject(d)
                        }, b.notify, b), b.promise()
                    },
                    anyResolved: function(a) {
                        var b = new n,
                            c = a.length;
                        return c ? (s._G(a, b.resolve, b.reject, b.notify, b), b.promise()) : (b.reject(Error()), b.promise())
                    },
                    delay: function(a, b) {
                        return s.resolve(a).delay(b)
                    },
                    timeout: function(a, b) {
                        return s.resolve(a).timeout(b)
                    },
                    _G: function(a, b, c, d, e, f) {
                        for (var g = f ? f.length : a.length, h = 0; g > h;) s.when(a[f ? f[h] : h], m(b, h), c, d, e), ++h
                    },
                    TimedOutError: l("TimedOut")
                },
                t = !0;
            "object" == typeof a && "object" == typeof a.Xh && (a.Xh = s, t = !1), "object" == typeof modules && f(modules.define) && (modules.define("vow", function(a) {
                a(s)
            }), t = !1), "function" == typeof define && (define(function(a, b, c) {
                c.Xh = s
            }), t = !1), t && (b.vow = s)
        }(this)
    }, function(a, b, c, d) {
        var e = navigator.userAgent.toLowerCase(),
            f = /(ucbrowser)\/([\w.]+)/,
            g = /(webkit)[ \/]([\w.]+)/,
            h = /(yabrowser)[ \/]([\w.]+)/,
            i = /(opr|opera)(?:.*version)?[ \/]([\w.]+)/,
            j = /(msie) ([\w.]+)/,
            k = /(edge)\/([\w.]+)/,
            l = /(iemobile)\/([\d\.]+)/,
            m = /(mozilla)(?:.*? rv:([\w.]+))?/,
            n = /^((?!chrome).)*version\/([\d\w\.]+).*(safari)/,
            o = f.exec(e) || h.exec(e) || i.exec(e) || k.exec(e) || n.exec(e) || l.exec(e) || g.exec(e) || j.exec(e) || e.indexOf("compatible") < 0 && m.exec(e) || [],
            p = {
                name: o[1] || "",
                version: o[2] || "0"
            };
        "safari" === o[3] && (p.name = o[3], p.version = g.exec(e)[2]), "msie" === p.name && (document.documentMode ? p.documentMode = document.documentMode : (p.documentMode = 5, document.compatMode && "CSS1Compat" === document.compatMode && (p.documentMode = 7))), "opr" === p.name && (p.name = "opera"), "mozilla" === p.name && "11" === p.version.split(".")[0] && (p.name = "msie");
        var q = /(windows phone|ipad|iphone|ipod|android|blackberry|playbook|windows ce|webos)/,
            r = /(ipad|playbook)/,
            s = /(android)/,
            t = /(mobile)/;
        v = q.exec(e) || [];
        var u = r.exec(e) || !t.exec(e) && s.exec(e) || [];
        v[1] && (v[1] = v[1].replace(/\s/g, "_"));
        var v = {
            type: v[1] || "",
            tablet: !!u[1],
            mobile: v[1] && !u[1] || !1
        };
        v.type || (v.type = "pc"), v.os = v.type, "ipad" === v.type || "iphone" === v.type || "ipod" === v.type ? v.os = "ios" : "android" === v.type ? v.os = "android" : "windows phone" === v.type || -1 !== navigator.appVersion.indexOf("Win") ? (v.os = "windows", v.version = navigator.userAgent.match(/win[^ ]* ([^;]*)/i), v.version = v.version && v.version[1]) : -1 !== navigator.appVersion.indexOf("Mac") ? v.os = "macos" : -1 !== navigator.appVersion.indexOf("X11") ? v.os = "unix" : -1 !== navigator.appVersion.indexOf("Linux") && (v.os = "linux");
        var w = !0;
        try {
            var x = document.createElement("audio");
            x.volume = .63, w = Math.abs(x.volume - .63) > .01
        } catch (y) {
            w = !0
        }
        var z = {
            browser: p,
            platform: v,
            onlyDeviceVolume: w
        };
        a.Xh = z
    }, function(a, b, c, d) {
        var e = c(11),
            f = c(10),
            g = function() {
                var a = this,
                    b = new e(function(b, c) {
                        a.resolve = b, a.reject = c
                    });
                b["catch"](f), this.promise = function() {
                    return b
                }
            };
        a.Xh = g
    }, function(a, b, c, d) {
        var e = c(10),
            f = c(11),
            g = function(a) {
                var b = f.reject(a);
                return b["catch"](e), b
            };
        a.Xh = g
    }, function(a, b, c, d) {
        var e = c(17),
            f = function(a) {
                e.call(this, a)
            };
        f.prototype = e.create("AudioError"), f.NO_IMPLEMENTATION = "cannot find suitable implementation", f.NOT_PRELOADED = "track is not preloaded", f.BAD_STATE = "action is not permited from current state", f.FLASH_BLOCKER = "flash is rejected by flash blocker plugin", f.FLASH_UNKNOWN_CRASH = "flash is crashed without reason", f.FLASH_INIT_TIMEOUT = "flash init timed out", f.FLASH_INTERNAL_ERROR = "flash internal error", f.FLASH_EMMITER_NOT_FOUND = "flash event emmiter not found", f.FLASH_NOT_RESPONDING = "flash player doesn't response", a.Xh = f
    }, function(a, b, c, d) {
        var e = c(18),
            f = function(a, b) {
                var c = new Error(a, b);
                c.name = this.name, this.message = c.message, this.stack = c.stack
            };
        f.create = function(a) {
            var b = e(this);
            return b.name = a, b
        }, f.prototype = e(Error), f.prototype.name = "ErrorClass", a.Xh = f
    }, function(a, b, c, d) {
        var e = function(a) {
            var b = function() {};
            return b.prototype = a.prototype, new b
        };
        a.Xh = e
    }, function(a, b, c, d) {
        var e = {};
        e.EVENT_PLAY = "play", e.EVENT_STOP = "stop", e.EVENT_PAUSE = "pause", e.EVENT_PROGRESS = "progress", e.EVENT_LOADING = "loading", e.EVENT_LOADED = "loaded", e.EVENT_VOLUME = "volumechange", e.EVENT_ENDED = "ended", e.EVENT_CRASHED = "crashed", e.EVENT_ERROR = "error", e.EVENT_STATE = "state", e.EVENT_SWAP = "swap", e.PRELOADER_EVENT = "preloader:", e.STATE_INIT = "init", e.STATE_CRASHED = "crashed", e.STATE_IDLE = "idle", e.STATE_PLAYING = "playing", e.STATE_PAUSED = "paused", a.Xh = e
    }, function(a, b, c, d) {
        var e = c(9),
            f = new e("AudioHTML5"),
            g = c(13),
            h = c(2),
            i = c(19),
            j = c(21),
            k = 1;
        if (b.available = function() {
                var a = !0;
                try {
                    var b = document.createElement("audio"),
                        c = b.canPlayType("audio/mpeg");
                    c && "no" !== c || (f.warn(this, "HTML5 detection failed with reason", c), a = !1)
                } catch (d) {
                    f.warn(this, "HTML5 detection failed with error", d), a = !1
                }
                return f.info(this, "detection", a), a
            }(), g.platform.mobile || g.platform.tablet) l = null, f.info(this, "WebAudioAPI not allowed for mobile");
        else if ("safari" == g.browser.name && g.browser.version < "603.1.1") l = null, f.info(this, "WebAudioAPI temporarily not allowed for Safari prior to 602.1.41");
        else try {
            var l = new AudioContext;
            f.info(this, "WebAudioAPI context created")
        } catch (m) {
            l = null, f.info(this, "WebAudioAPI not detected")
        }
        var n = function() {
            this.name = k++, h.call(this), this.on("*", function(a) {
                a !== i.EVENT_PROGRESS
            }.bind(this)), this.webAudioApi = !1, this.activeLoader = 0, this.volume = 1, this.loaders = [], this._H(), this._H(), this._I(0)
        };
        h.mixin(n), b.type = n.type = n.prototype.type = "html5", n.prototype._H = function() {
            var a = this,
                b = new j;
            b.index = this.loaders.push(b) - 1, b.on("*", function(c, d) {
                var e = (a.loaders.length + b.index - a.activeLoader) % a.loaders.length;
                a.trigger(c, e, d)
            }), this.webAudioApi && b.createSource(l)
        }, n.prototype._I = function(a) {
            this.activeLoader = (this.activeLoader + a) % this.loaders.length, this.trigger(i.EVENT_SWAP, a), 0 !== a && this.stop(a)
        }, n.prototype._J = function(a) {
            return a = a || 0, this.loaders[(this.activeLoader + a) % this.loaders.length]
        }, n.prototype.toggleCrossDomain = function(a) {
            this.loaders.forEach(function(b) {
                b.toggleCrossDomain(a)
            })
        }, n.prototype.toggleWebAudioAPI = function(a) {
            return l ? (f.info(this, "toggleWebAudioAPI", a), this.webAudioApi == a ? a : (a ? (this.audioOutput = l.createGain(), this.audioOutput.gain.value = this.volume, this.audioOutput.connect(l.destination), this.preprocessor && this.preprocessor.output.connect(this.audioOutput), this.loaders.forEach(function(a) {
                a.audio.volume = 1, a.createSource(l), a.output.disconnect(), a.output.connect(this.preprocessor ? this.preprocessor.input : this.audioOutput)
            }.bind(this))) : this.audioOutput && (this.preprocessor && this.preprocessor.output.disconnect(), this.audioOutput.disconnect(), delete this.audioOutput, this.loaders.forEach(function(a) {
                a.audio.volume = this.volume, a.output.disconnect(), a.output.connect(l.destination)
            }.bind(this))), this.webAudioApi = a, a)) : (f.warn(this, "toggleWebAudioAPIError", a), !1)
        }, n.prototype.setAudioPreprocessor = function(a) {
            return this.webAudioApi ? (f.info(this, "setAudioPreprocessor"), this.preprocessor === a ? !0 : (this.preprocessor && this.preprocessor.output.disconnect(), this.preprocessor = a, a ? (this.loaders.forEach(function(b) {
                b.output.disconnect(), b.output.connect(a.input)
            }), a.output.connect(this.audioOutput), !0) : (this.loaders.forEach(function(a) {
                a.output.disconnect(), a.output.connect(this.audioOutput)
            }.bind(this)), !0))) : (f.warn(this, "setAudioPreprocessorError", a), !1)
        }, n.prototype.play = function(a, b) {
            var c = this._J();
            c.load(a), c.play(0)
        }, n.prototype.pause = function() {
            var a = this._J();
            a.pause()
        }, n.prototype.resume = function() {
            var a = this._J();
            a.play()
        }, n.prototype.stop = function(a) {
            var b = this._J(a || 0);
            b.stop(), this.trigger(i.EVENT_STOP, a)
        }, n.prototype.getPosition = function() {
            return this._J().audio.currentTime
        }, n.prototype.setPosition = function(a) {
            this._J().setPosition(a - .001)
        }, n.prototype.getDuration = function(a) {
            return this._J(a).audio.duration
        }, n.prototype.getLoaded = function(a) {
            var b = this._J(a);
            return b.audio.buffered.length ? b.audio.buffered.end(0) - b.audio.buffered.start(0) : 0
        }, n.prototype.getVolume = function() {
            return this.volume
        }, n.prototype.setVolume = function(a) {
            this.volume = a, this.webAudioApi ? this.audioOutput.gain.value = a : this.loaders.forEach(function(b) {
                b.audio.volume = a
            }), this.trigger(i.EVENT_VOLUME)
        }, n.prototype.preload = function(a, b, c) {
            c = null == c ? 1 : c;
            var d = this._J(c);
            d.load(a)
        }, n.prototype.isPreloaded = function(a, b) {
            b = null == b ? 1 : b;
            var c = this._J(b);
            return c.src === a && !c.notLoading
        }, n.prototype.isPreloading = function(a, b) {
            b = null == b ? 1 : b;
            var c = this._J(b);
            return c.src === a
        }, n.prototype.playPreloaded = function(a) {
            a = null == a ? 1 : a;
            var b = this._J(a);
            return b.src ? (this._I(a), b.play(), !0) : !1
        }, n.prototype.getSrc = function(a) {
            return this._J(a).src
        }, n.prototype.isDeviceVolume = function() {
            return g.onlyDeviceVolume
        }, n.prototype._q = function() {
            try {
                return {
                    main: f._o(this.getSrc(0)),
                    preloader: f._o(this.getSrc(1))
                }
            } catch (a) {
                return ""
            }
        }, b.audioContext = l, b.AudioImplementation = n
    }, function(a, b, c, d) {
        var e = c(9),
            f = new e("AudioHTML5Loader"),
            g = c(2),
            h = c(14),
            i = c(19),
            j = c(22),
            k = c(10),
            l = 1,
            m = function() {
                this.name = l++, g.call(this), this.on("*", function(a) {
                        a !== i.EVENT_PROGRESS
                    }.bind(this)), this.promises = {}, this.src = "", this.position = 0, this.lastUpdate = 0, this.notLoading = !0, this.output = null, this._K = this._L.bind(this), this._M = this._N.bind(this), this._O = this._P.bind(this), this._Q = this._R.bind(this), this._S = this._T.bind(this), this._U = this._V.bind(this), this._W = this._X.bind(this), this._Y = this._Z.bind(this), this._1 = this.trigger.bind(this, i.EVENT_PLAY),
                    this._2()
            };
        g.mixin(m), m._3 = function(a) {
            a && a["catch"] && a["catch"](function() {})
        }, m._4 = 30, m.EVENT_NATIVE_PLAY = "play", m.EVENT_NATIVE_PAUSE = "pause", m.EVENT_NATIVE_TIMEUPDATE = "timeupdate", m.EVENT_NATIVE_ENDED = "ended", m.EVENT_NATIVE_DURATION = "durationchange", m.EVENT_NATIVE_LOADING = "progress", m.EVENT_NATIVE_META = "loadedmetadata", m.EVENT_NATIVE_CANPLAY = "canplay", m.EVENT_NATIVE_ERROR = "error", m._5 = function() {}, m._5.step = "user", m.prototype._R = function() {
            var a = +new Date;
            a - this.lastUpdate < m._4 || (this.lastUpdate = a, this.trigger(i.EVENT_PROGRESS))
        }, m.prototype._T = function() {
            if (this._R(), this.audio.buffered.length) {
                var a = this.audio.buffered.end(0) - this.audio.buffered.start(0);
                this.notLoading && a && (this.notLoading = !1, this.trigger(i.EVENT_LOADING)), a >= this.audio.duration - .1 && this.trigger(i.EVENT_LOADED)
            }
        }, m.prototype._V = function() {
            this.trigger(i.EVENT_PROGRESS), this.trigger(i.EVENT_ENDED), this.ended = !0, this.playing = !1, m._3(this.audio.pause())
        }, m.prototype._X = function(a) {
            if (this.src) {
                if (2 == this.audio.error.code) return f.warn(this, "Network error. Restarting...", f._o(this.src)), this.position = this.audio.currentTime, void this._N();
                var b = new j(this.audio.error ? j.html5[this.audio.error.code] : a instanceof Error ? a.message : a, this.src);
                this.playing = !1, this.trigger(i.EVENT_ERROR, b)
            }
        }, m.prototype._Z = function() {
            this.ended || this.trigger(i.EVENT_PAUSE)
        }, m.prototype._6 = function() {
            document.body.addEventListener("mousedown", this._O, !0), document.body.addEventListener("keydown", this._O, !0), document.body.addEventListener("touchstart", this._O, !0)
        }, m.prototype._7 = function() {
            document.body.removeEventListener("mousedown", this._O, !0), document.body.removeEventListener("keydown", this._O, !0), document.body.removeEventListener("touchstart", this._O, !0)
        }, m.prototype._8 = function() {
            this.audio.addEventListener(m.EVENT_NATIVE_PAUSE, this._Y), this.audio.addEventListener(m.EVENT_NATIVE_PLAY, this._1), this.audio.addEventListener(m.EVENT_NATIVE_ENDED, this._U), this.audio.addEventListener(m.EVENT_NATIVE_TIMEUPDATE, this._Q), this.audio.addEventListener(m.EVENT_NATIVE_DURATION, this._Q), this.audio.addEventListener(m.EVENT_NATIVE_LOADING, this._S), this.audio.addEventListener(m.EVENT_NATIVE_ERROR, this._W)
        }, m.prototype._9 = function() {
            this.audio.removeEventListener(m.EVENT_NATIVE_PAUSE, this._Y), this.audio.removeEventListener(m.EVENT_NATIVE_PLAY, this._1), this.audio.removeEventListener(m.EVENT_NATIVE_ENDED, this._U), this.audio.removeEventListener(m.EVENT_NATIVE_TIMEUPDATE, this._Q), this.audio.removeEventListener(m.EVENT_NATIVE_DURATION, this._Q), this.audio.removeEventListener(m.EVENT_NATIVE_LOADING, this._S), this.audio.removeEventListener(m.EVENT_NATIVE_ERROR, this._W)
        }, m.prototype._2 = function() {
            this.muteEvents(), this.audio = document.createElement("audio"), this.audio.loop = !1, this.audio.preload = this.audio.autobuffer = "auto", this.audio.autoplay = !1, this.audio.src = "", this._6(), this._0 = m._5, this._8()
        }, m.prototype._$ = function() {
            this.muteEvents(), this._7(), this._9(), this.audio = null
        }, m.prototype._P = function() {
            this._7(), this._0 = function(a) {
                this._0 && (this.audio.removeEventListener(m.EVENT_NATIVE_PLAY, this._0), this.audio.removeEventListener(m.EVENT_NATIVE_CANPLAY, this._0), this.audio.removeEventListener(m.EVENT_NATIVE_META, this._0), this.audio.removeEventListener(m.EVENT_NATIVE_ERROR, this._0), this._0 = function() {
                    this._0 && (this.audio.removeEventListener(m.EVENT_NATIVE_PAUSE, this._0), delete this._0, this.unmuteEvents(), f.info(this, "_startupAudio:ready"))
                }.bind(this), this._0.step = "pause", this.audio.addEventListener(m.EVENT_NATIVE_PAUSE, this._0), m._3(this.audio.pause()))
            }.bind(this), this._0.step = "play", this.audio.addEventListener(m.EVENT_NATIVE_PLAY, this._0), this.audio.addEventListener(m.EVENT_NATIVE_CANPLAY, this._0), this.audio.addEventListener(m.EVENT_NATIVE_META, this._0), this.audio.addEventListener(m.EVENT_NATIVE_ERROR, this._0), m._3(this.audio.load()), m._3(this.audio.play())
        }, m.prototype.__ = function(a) {
            this._7(), this.unmuteEvents(), this._0 && (this.audio.removeEventListener(m.EVENT_NATIVE_PLAY, this._0), this.audio.removeEventListener(m.EVENT_NATIVE_CANPLAY, this._0), this.audio.removeEventListener(m.EVENT_NATIVE_META, this._0), this.audio.removeEventListener(m.EVENT_NATIVE_ERROR, this._0), this.audio.removeEventListener(m.EVENT_NATIVE_PAUSE, this._0), f.warn(this, "_startupAudio:interrupted", this._0.step, a), delete this._0)
        }, m.prototype._ba = function(a, b, c) {
            if (!this.promises[a]) {
                var d = new h;
                if (this.promises[a] = d, b.call(this)) d.resolve();
                else {
                    for (var e = function() {
                            b.call(this) && d.resolve()
                        }.bind(this), f = function() {
                            for (var a = 0, b = c.length; b > a; a++) this.audio.removeEventListener(c[a], e)
                        }.bind(this), g = 0, i = c.length; i > g; g++) this.audio.addEventListener(c[g], e);
                    d.promise().then(f, f)
                }
            }
            return this.promises[a].promise()
        }, m.prototype._bb = function(a, b) {
            var c;
            (c = this.promises[a]) && (delete this.promises[a], c.reject(b))
        }, m.prototype._bc = function(a) {
            for (var b in this.promises) this.promises.hasOwnProperty(b) && this._bb(b, a)
        }, m._bd = [m.EVENT_NATIVE_META, m.EVENT_NATIVE_CANPLAY], m.prototype._be = function() {
            return this.audio.readyState > this.audio.HAVE_METADATA
        }, m.prototype._bf = function() {
            return this._ba("metadata", this._be, m._bd)
        }, m._bg = [m.EVENT_NATIVE_LOADING], m.prototype._bh = function() {
            this._bi = this._bi && clearTimeout(this._bi) || setTimeout(function() {
                this._bb("loaded", "timeout")
            }.bind(this), 5e3);
            var a = Math.min(this.position + 45, this.audio.duration);
            return this.audio.buffered.length && this.audio.buffered.end(0) - this.audio.buffered.start(0) >= a
        }, m.prototype._bj = function() {
            var a = this._ba("loaded", this._bh, m._bg);
            return a.cleanTimer || (a.cleanTimer = function() {
                this._bi = clearTimeout(this._bi)
            }.bind(this), a.then(a.cleanTimer, a.cleanTimer)), a
        }, m._bk = [m.EVENT_NATIVE_TIMEUPDATE], m.prototype._bl = function() {
            var a = Math.min(this.position + .2, this.audio.duration);
            return this.audio.currentTime >= a
        }, m.prototype._bm = function() {
            return this._ba("playing", this._bl, m._bk)
        }, m.prototype._bn = function() {
            if (!this.promises.startPlaying) {
                var a = new h;
                this.promises.startPlaying = a;
                var b, c = function(a) {
                        d = !0, this._bb("startPlaying", a)
                    }.bind(this),
                    d = !1,
                    e = function() {
                        clearTimeout(b)
                    };
                this._bm().then(function() {
                    d = !0, a.resolve(), f.info(this, "startPlaying:success")
                }.bind(this), c), this._bj().then(function() {
                    d || (b = setTimeout(function() {
                        a.reject("timeout"), this._bb("playing", "timeout"), f.warn(this, "startPlaying:failed")
                    }.bind(this), 5e3))
                }.bind(this), c), this._bm().then(e, e), a.promise().then(e, e)
            }
            return this.promises.startPlaying.promise()
        }, m.prototype.load = function(a) {
            this._bc("load"), this.__("load"), this.ended = !1, this.playing = !1, this.notLoading = !0, this.position = 0, this.src = a, this.audio.src = a, m._3(this.audio.load())
        }, m.prototype.stop = function() {
            this._bc("stop"), this.__("stop"), this.load("")
        }, m.prototype._L = function() {
            this.audio.currentTime = this.position, this.playing && (this.__("startPlay"), m._3(this.audio.play()), this._bn().then(function() {
                this.retry = 0
            }.bind(this), this._M))
        }, m.prototype._N = function(a) {
            if (f.info(this, "_restart", a, this.position, this.playing), this.src && (!a || "timeout" === a)) {
                if (this.retry++, this.retry > 5) return this.playing = !1, void this.trigger(i.EVENT_ERROR, new j(j.DONT_START, this.src));
                var b = this.position,
                    c = this.playing;
                this.load(this.src), c ? this._bo(b) : this.setPosition(b)
            }
        }, m.prototype.play = function(a) {
            return this.retry = 0, this._bo(a)
        }, m.prototype._bo = function(a) {
            this.playing || (this.__("play"), this.ended = !1, this.playing = !0, this.position = null == a ? this.position || 0 : a, this._bf().then(this._K, k))
        }, m.prototype.pause = function() {
            this.playing = !1, this._bb("startPlaying", "pause"), this.__("pause"), m._3(this.audio.pause()), this.position = this.audio.currentTime
        }, m.prototype.setPosition = function(a) {
            return isFinite(a) ? (this.position = a, void this._bf().then(function() {
                this.audio.currentTime = this.position
            }.bind(this), k)) : void f.warn(this, "setPositionFailed", a)
        }, m.prototype.toggleCrossDomain = function(a) {
            a ? this.audio.crossOrigin = "anonymous" : this.audio.removeAttribute("crossOrigin"), this._N()
        }, m.prototype.createSource = function(a) {
            if (!this.output) {
                var b = !this.audio.crossOrigin;
                this.audio.crossOrigin = "anonymous", this.output = a.createMediaElementSource(this.audio), this.output.connect(a.destination), b && this._N()
            }
        }, m.prototype.destroySource = function() {
            this.output && (f.warn(this, "destroySource"), this.output.disconnect(), this.output = null, this._bc("destroy"), this._$(), this._2(), this._P(), this._N())
        }, m.prototype.destroy = function() {
            this.output && (this.output.disconnect(), this.output = null), this._bc(), this._$(), this._M = null, this._K = null, this.promises = null
        }, m.prototype._q = function() {
            return {
                init: !!this._0 && this._0.step,
                src: f._o(this.src),
                playing: this.playing,
                ended: this.ended,
                notLoading: this.notLoading,
                position: this.position
            }
        }, a.Xh = m
    }, function(a, b, c, d) {
        var e = c(17),
            f = function(a, b) {
                e.call(this, a), this.src = b
            };
        f.prototype = e.create("PlaybackError"), f.CONNECTION_ABORTED = "Connection aborted", f.NETWORK_ERROR = "Network error", f.DECODE_ERROR = "Decode error", f.BAD_DATA = "Bad data", f.DONT_START = "Playback start error", f.html5 = {
            1: f.CONNECTION_ABORTED,
            2: f.NETWORK_ERROR,
            3: f.DECODE_ERROR,
            4: f.BAD_DATA
        }, a.Xh = f
    }, function(a, b, c, d) {
        var e, f = c(7),
            g = c(24),
            h = c(13),
            i = c(9),
            j = new i("AudioFlash"),
            k = c(25),
            l = c(29),
            m = c(2),
            n = 1,
            o = g.getFlashPlayerVersion();
        h.flashVersion = o.major + "." + o.minor + "." + o.release, b.available = g.hasFlashPlayerVersion(f.flash.version), j.info(this, "detection", b.available);
        var p = function(a, b) {
            this.name = n++, e && !b || (e = new k(a)), m.call(this), this.whenReady = e.createPlayer(this), this.whenReady.then(function(a) {
                j.info(this, "ready", a)
            }.bind(this), function(a) {
                j.error(this, "failed", a)
            }.bind(this))
        };
        m.mixin(p), b.type = p.type = p.prototype.type = "flash", Object.keys(l.prototype).filter(function(a) {
            return l.prototype.hasOwnProperty(a) && "_" !== a[0]
        }).map(function(a) {
            p.prototype[a] = function() {
                if (!/^get/.test(a), !this.hasOwnProperty("id")) return j.warn(this, "player is not ready"), null;
                var b = [].slice.call(arguments);
                return b.unshift(this.id), e.flash[a].apply(e.flash, b)
            }
        }), p.prototype.isDeviceVolume = function() {
            return !1
        }, p.prototype._q = function() {
            try {
                return this.hasOwnProperty("id") ? {
                    main: j._o(this.getSrc(0)),
                    preloader: j._o(this.getSrc(1))
                } : {
                    main: "not ready",
                    preloader: "not ready"
                }
            } catch (a) {
                return ""
            }
        }, b.AudioImplementation = p
    }, function(a, b, c, d) {
        var e = function() {
            function a() {
                if (!S) {
                    try {
                        var a = L.getElementsByTagName("body")[0].appendChild(r("span"));
                        a.parentNode.removeChild(a)
                    } catch (b) {
                        return
                    }
                    S = !0;
                    for (var c = O.length, d = 0; c > d; d++) O[d]()
                }
            }

            function b(a) {
                S ? a() : O[O.length] = a
            }

            function c(a) {
                if (typeof K.addEventListener != D) K.addEventListener("load", a, !1);
                else if (typeof L.addEventListener != D) L.addEventListener("load", a, !1);
                else if (typeof K.attachEvent != D) s(K, "onload", a);
                else if ("function" == typeof K.onload) {
                    var b = K.onload;
                    K.onload = function() {
                        b(), a()
                    }
                } else K.onload = a
            }

            function d() {
                N ? f() : g()
            }

            function f() {
                var a = L.getElementsByTagName("body")[0],
                    b = r(E);
                b.setAttribute("type", H);
                var c = a.appendChild(b);
                if (c) {
                    var d = 0;
                    ! function() {
                        if (typeof c.GetVariable != D) {
                            var e = c.GetVariable("$version");
                            e && (e = e.split(" ")[1].split(","), V.pv = [parseInt(e[0], 10), parseInt(e[1], 10), parseInt(e[2], 10)])
                        } else if (10 > d) return d++, void setTimeout(arguments.callee, 10);
                        a.removeChild(b), c = null, g()
                    }()
                } else g()
            }

            function g() {
                var a = P.length;
                if (a > 0)
                    for (var b = 0; a > b; b++) {
                        var c = P[b].id,
                            d = P[b].callbackFn,
                            e = {
                                success: !1,
                                id: c
                            };
                        if (V.pv[0] > 0) {
                            var f = q(c);
                            if (f)
                                if (!t(P[b].swfVersion) || V.wk && V.wk < 312)
                                    if (P[b].expressInstall && i()) {
                                        var g = {};
                                        g.data = P[b].expressInstall, g.width = f.getAttribute("width") || "0", g.height = f.getAttribute("height") || "0", f.getAttribute("class") && (g.styleclass = f.getAttribute("class")), f.getAttribute("align") && (g.align = f.getAttribute("align"));
                                        for (var l = {}, m = f.getElementsByTagName("param"), n = m.length, o = 0; n > o; o++) "movie" != m[o].getAttribute("name").toLowerCase() && (l[m[o].getAttribute("name")] = m[o].getAttribute("value"));
                                        j(g, l, c, d)
                                    } else k(f), d && d(e);
                            else v(c, !0), d && (e.success = !0, e.ref = h(c), d(e))
                        } else if (v(c, !0), d) {
                            var p = h(c);
                            p && typeof p.SetVariable != D && (e.success = !0, e.ref = p), d(e)
                        }
                    }
            }

            function h(a) {
                var b = null,
                    c = q(a);
                if (c && "OBJECT" == c.nodeName)
                    if (typeof c.SetVariable != D) b = c;
                    else {
                        var d = c.getElementsByTagName(E)[0];
                        d && (b = d)
                    }
                return b
            }

            function i() {
                return !T && t("6.0.65") && (V.win || V.mac) && !(V.wk && V.wk < 312)
            }

            function j(a, b, c, d) {
                T = !0, z = d || null, A = {
                    success: !1,
                    id: c
                };
                var e = q(c);
                if (e) {
                    "OBJECT" == e.nodeName ? (x = l(e), y = null) : (x = e, y = c), a.id = I, (typeof a.width == D || !/%$/.test(a.width) && parseInt(a.width, 10) < 310) && (a.width = "310"), (typeof a.height == D || !/%$/.test(a.height) && parseInt(a.height, 10) < 137) && (a.height = "137"), L.title = L.title.slice(0, 47) + " - Flash Player Installation";
                    var f = V.ie && V.win ? "ActiveX" : "PlugIn",
                        g = "MMredirectURL=" + K.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + f + "&MMdoctitle=" + L.title;
                    if (typeof b.flashvars != D ? b.flashvars += "&" + g : b.flashvars = g, V.ie && V.win && 4 != e.readyState) {
                        var h = r("div");
                        c += "SWFObjectNew", h.setAttribute("id", c), e.parentNode.insertBefore(h, e), e.style.display = "none",
                            function() {
                                4 == e.readyState ? e.parentNode.removeChild(e) : setTimeout(arguments.callee, 10)
                            }()
                    }
                    m(a, b, c)
                }
            }

            function k(a) {
                if (V.ie && V.win && 4 != a.readyState) {
                    var b = r("div");
                    a.parentNode.insertBefore(b, a), b.parentNode.replaceChild(l(a), b), a.style.display = "none",
                        function() {
                            4 == a.readyState ? a.parentNode.removeChild(a) : setTimeout(arguments.callee, 10)
                        }()
                } else a.parentNode.replaceChild(l(a), a)
            }

            function l(a) {
                var b = r("div");
                if (V.win && V.ie) b.innerHTML = a.innerHTML;
                else {
                    var c = a.getElementsByTagName(E)[0];
                    if (c) {
                        var d = c.childNodes;
                        if (d)
                            for (var e = d.length, f = 0; e > f; f++) 1 == d[f].nodeType && "PARAM" == d[f].nodeName || 8 == d[f].nodeType || b.appendChild(d[f].cloneNode(!0))
                    }
                }
                return b
            }

            function m(a, b, c) {
                var d, e = q(c);
                if (V.wk && V.wk < 312) return d;
                if (e)
                    if (typeof a.id == D && (a.id = c), V.ie && V.win) {
                        var f = "";
                        for (var g in a) a[g] != Object.prototype[g] && ("data" == g.toLowerCase() ? b.movie = a[g] : "styleclass" == g.toLowerCase() ? f += ' class="' + a[g] + '"' : "classid" != g.toLowerCase() && (f += " " + g + '="' + a[g] + '"'));
                        var h = "";
                        for (var i in b) b[i] != Object.prototype[i] && (h += '<param name="' + i + '" value="' + b[i] + '" />');
                        e.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + f + ">" + h + "</object>", Q[Q.length] = a.id, d = q(a.id)
                    } else {
                        var j = r(E);
                        j.setAttribute("type", H);
                        for (var k in a) a[k] != Object.prototype[k] && ("styleclass" == k.toLowerCase() ? j.setAttribute("class", a[k]) : "classid" != k.toLowerCase() && j.setAttribute(k, a[k]));
                        for (var l in b) b[l] != Object.prototype[l] && "movie" != l.toLowerCase() && n(j, l, b[l]);
                        e.parentNode.replaceChild(j, e), d = j
                    }
                return d
            }

            function n(a, b, c) {
                var d = r("param");
                d.setAttribute("name", b), d.setAttribute("value", c), a.appendChild(d)
            }

            function o(a) {
                var b = q(a);
                b && "OBJECT" == b.nodeName && (V.ie && V.win ? (b.style.display = "none", function() {
                    4 == b.readyState ? p(a) : setTimeout(arguments.callee, 10)
                }()) : b.parentNode.removeChild(b))
            }

            function p(a) {
                var b = q(a);
                if (b) {
                    for (var c in b) "function" == typeof b[c] && (b[c] = null);
                    b.parentNode.removeChild(b)
                }
            }

            function q(a) {
                var b = null;
                try {
                    b = L.getElementById(a)
                } catch (c) {}
                return b
            }

            function r(a) {
                return L.createElement(a)
            }

            function s(a, b, c) {
                a.attachEvent(b, c), R[R.length] = [a, b, c]
            }

            function t(a) {
                var b = V.pv,
                    c = a.split(".");
                return c[0] = parseInt(c[0], 10), c[1] = parseInt(c[1], 10) || 0, c[2] = parseInt(c[2], 10) || 0, b[0] > c[0] || b[0] == c[0] && b[1] > c[1] || b[0] == c[0] && b[1] == c[1] && b[2] >= c[2]
            }

            function u(a, b, c, d) {
                if (!V.ie || !V.mac) {
                    var e = L.getElementsByTagName("head")[0];
                    if (e) {
                        var f = c && "string" == typeof c ? c : "screen";
                        if (d && (B = null, C = null), !B || C != f) {
                            var g = r("style");
                            g.setAttribute("type", "text/css"), g.setAttribute("media", f), B = e.appendChild(g), V.ie && V.win && typeof L.styleSheets != D && L.styleSheets.length > 0 && (B = L.styleSheets[L.styleSheets.length - 1]), C = f
                        }
                        V.ie && V.win ? B && typeof B.addRule == E && B.addRule(a, b) : B && typeof L.createTextNode != D && B.appendChild(L.createTextNode(a + " {" + b + "}"))
                    }
                }
            }

            function v(a, b) {
                if (U) {
                    var c = b ? "visible" : "hidden";
                    S && q(a) ? q(a).style.visibility = c : u("#" + a, "visibility:" + c)
                }
            }

            function w(a) {
                var b = /[\\\"<>\.;]/,
                    c = null != b.exec(a);
                return c && typeof encodeURIComponent != D ? encodeURIComponent(a) : a
            }
            var x, y, z, A, B, C, D = "undefined",
                E = "object",
                F = "Shockwave Flash",
                G = "ShockwaveFlash.ShockwaveFlash",
                H = "application/x-shockwave-flash",
                I = "SWFObjectExprInst",
                J = "onreadystatechange",
                K = window,
                L = document,
                M = navigator,
                N = !1,
                O = [d],
                P = [],
                Q = [],
                R = [],
                S = !1,
                T = !1,
                U = !0,
                V = function() {
                    var a = typeof L.getElementById != D && typeof L.getElementsByTagName != D && typeof L.createElement != D,
                        b = M.userAgent.toLowerCase(),
                        c = M.platform.toLowerCase(),
                        d = c ? /win/.test(c) : /win/.test(b),
                        e = c ? /mac/.test(c) : /mac/.test(b),
                        f = /webkit/.test(b) ? parseFloat(b.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : !1,
                        g = !1,
                        h = [0, 0, 0],
                        i = null;
                    if (typeof M.plugins != D && typeof M.plugins[F] == E) i = M.plugins[F].description, !i || typeof M.mimeTypes != D && M.mimeTypes[H] && !M.mimeTypes[H].enabledPlugin || (N = !0, g = !1, i = i.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), h[0] = parseInt(i.replace(/^(.*)\..*$/, "$1"), 10), h[1] = parseInt(i.replace(/^.*\.(.*)\s.*$/, "$1"), 10), h[2] = /[a-zA-Z]/.test(i) ? parseInt(i.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0);
                    else if (typeof K.ActiveXObject != D) try {
                        var j = new ActiveXObject(G);
                        j && (i = j.GetVariable("$version"), i && (g = !0, i = i.split(" ")[1].split(","), h = [parseInt(i[0], 10), parseInt(i[1], 10), parseInt(i[2], 10)]))
                    } catch (k) {}
                    return {
                        w3: a,
                        pv: h,
                        wk: f,
                        ie: g,
                        win: d,
                        mac: e
                    }
                }();
            return function() {
                    V.w3 && ((typeof L.readyState != D && "complete" == L.readyState || typeof L.readyState == D && (L.getElementsByTagName("body")[0] || L.body)) && a(), S || (typeof L.addEventListener != D && L.addEventListener("DOMContentLoaded", a, !1), V.ie && V.win && (L.attachEvent(J, function() {
                        "complete" == L.readyState && (L.detachEvent(J, arguments.callee), a())
                    }), K == top && ! function() {
                        if (!S) {
                            try {
                                L.documentElement.doScroll("left")
                            } catch (b) {
                                return void setTimeout(arguments.callee, 0)
                            }
                            a()
                        }
                    }()), V.wk && ! function() {
                        return S ? void 0 : /loaded|complete/.test(L.readyState) ? void a() : void setTimeout(arguments.callee, 0)
                    }(), c(a)))
                }(),
                function() {
                    V.ie && V.win && window.attachEvent("onunload", function() {
                        for (var a = R.length, b = 0; a > b; b++) R[b][0].detachEvent(R[b][1], R[b][2]);
                        for (var c = Q.length, d = 0; c > d; d++) o(Q[d]);
                        for (var f in V) V[f] = null;
                        V = null;
                        for (var g in e) e[g] = null;
                        e = null
                    })
                }(), {
                    registerObject: function(a, b, c, d) {
                        if (V.w3 && a && b) {
                            var e = {};
                            e.id = a, e.swfVersion = b, e.expressInstall = c, e.callbackFn = d, P[P.length] = e, v(a, !1)
                        } else d && d({
                            success: !1,
                            id: a
                        })
                    },
                    getObjectById: function(a) {
                        return V.w3 ? h(a) : void 0
                    },
                    embedSWF: function(a, c, d, e, f, g, h, k, l, n) {
                        var o = {
                            success: !1,
                            id: c
                        };
                        V.w3 && !(V.wk && V.wk < 312) && a && c && d && e && f ? (v(c, !1), b(function() {
                            d += "", e += "";
                            var b = {};
                            if (l && typeof l === E)
                                for (var p in l) b[p] = l[p];
                            b.data = a, b.width = d, b.height = e;
                            var q = {};
                            if (k && typeof k === E)
                                for (var r in k) q[r] = k[r];
                            if (h && typeof h === E)
                                for (var s in h) typeof q.flashvars != D ? q.flashvars += "&" + s + "=" + h[s] : q.flashvars = s + "=" + h[s];
                            if (t(f)) {
                                var u = m(b, q, c);
                                b.id == c && v(c, !0), o.success = !0, o.ref = u
                            } else {
                                if (g && i()) return b.data = g, void j(b, q, c, n);
                                v(c, !0)
                            }
                            n && n(o)
                        })) : n && n(o)
                    },
                    switchOffAutoHideShow: function() {
                        U = !1
                    },
                    ua: V,
                    getFlashPlayerVersion: function() {
                        return {
                            major: V.pv[0],
                            minor: V.pv[1],
                            release: V.pv[2]
                        }
                    },
                    hasFlashPlayerVersion: t,
                    createSWF: function(a, b, c) {
                        return V.w3 ? m(a, b, c) : void 0
                    },
                    showExpressInstall: function(a, b, c, d) {
                        V.w3 && i() && j(a, b, c, d)
                    },
                    removeSWF: function(a) {
                        V.w3 && o(a)
                    },
                    createCSS: function(a, b, c, d) {
                        V.w3 && u(a, b, c, d)
                    },
                    addDomLoadEvent: b,
                    addLoadEvent: c,
                    getQueryParamValue: function(a) {
                        var b = L.location.search || L.location.hash;
                        if (b) {
                            if (/\?/.test(b) && (b = b.split("?")[1]), null == a) return w(b);
                            for (var c = b.split("&"), d = 0; d < c.length; d++)
                                if (c[d].substring(0, c[d].indexOf("=")) == a) return w(c[d].substring(c[d].indexOf("=") + 1))
                        }
                        return ""
                    },
                    expressInstallCallback: function() {
                        if (T) {
                            var a = q(I);
                            a && x && (a.parentNode.replaceChild(x, a), y && (v(y, !0), V.ie && V.win && (x.style.display = "block")), z && z(A)), T = !1
                        }
                    }
                }
        }();
        a.Xh = e
    }, function(a, b, c, d) {
        var e = c(9),
            f = new e("FlashManager"),
            g = c(7),
            h = c(19),
            i = c(26),
            j = c(29),
            k = c(11),
            l = c(14),
            m = c(16),
            n = c(30),
            o = function(a) {
                this.state = "init", this.overlay = a, this.emmiters = [];
                var b = this.deferred = new l;
                this.whenReady = this.deferred.promise();
                var c = g.flash.callback.split("."),
                    d = c.pop(),
                    e = window;
                if (c.forEach(function(a) {
                        e[a] || (e[a] = {}), e = e[a]
                    }), e[d] = this._bp.bind(this), this._bq = setTimeout(this._br.bind(this), g.flash.loadTimeout), i(g.flash.path + "/" + g.flash.name, g.flash.version, g.flash.playerID, this._bs.bind(this), {}, a), a) {
                    var h;
                    a.addEventListener("mousedown", function() {
                        h = h || setTimeout(function() {
                            b.reject(new m(m.FLASH_NOT_RESPONDING))
                        }, g.flash.clickTimeout)
                    }, !0)
                }
                this.whenReady.then(function(a) {
                    h = h && clearTimeout(h), f.info(this, "ready", a)
                }.bind(this), function(a) {
                    f.error(this, "failed", a)
                }.bind(this))
            };
        o.EVENT_INIT = "init", o.EVENT_FAIL = "failed", o.EVENT_ERROR = "error", o.EVENT_DEBUG = "debug", o.prototype._bs = function(a) {
            clearTimeout(this._bq), delete this._bq, a.success ? (this.flash = new j(a.ref), "ready" === this.state ? this.deferred.resolve(a.ref) : this.overlay || (this._bt = setTimeout(this._bu.bind(this), g.flash.initTimeout))) : (this.state = "failed", this.deferred.reject(new m(a._bv ? m.FLASH_BLOCKER : m.FLASH_UNKNOWN_CRASH)))
        }, o.prototype._br = function() {
            this.state = "failed", this.deferred.reject(new n(n.TIMEOUT))
        }, o.prototype._bu = function() {
            this.state = "failed", this.deferred.reject(new m(m.FLASH_INIT_TIMEOUT))
        }, o.prototype._bw = function() {
            this.state = "ready", this._bt && (clearTimeout(this._bt), delete this._bt), this.flash && (this.deferred.resolve(this.flash), this._bx = setInterval(this._by.bind(this), 1e3))
        }, o.prototype._bp = function(a, b, c, d) {
            return "failed" === this.state ? void f.warn(this, "onEventFailed", a, b, c, d) : (a === o.EVENT_DEBUG ? f.info(this, "flashDEBUG", b, c, d) : a === o.EVENT_ERROR && f.warn(this, "flashError", b, c, d), a === o.EVENT_INIT ? this._bw() : a === o.EVENT_FAIL ? (f.error(this, "failed", m.FLASH_INTERNAL_ERROR), void this.deferred.reject(new m(m.FLASH_INTERNAL_ERROR))) : void(-1 == b ? k.resolve().then(function() {
                this.emmiters.forEach(function(b) {
                    b.trigger(a, c, d)
                })
            }.bind(this)) : this.emmiters[b] ? k.resolve().then(function() {
                this.emmiters[b].trigger(a, c, d)
            }.bind(this)) : f.error(this, m.FLASH_EMMITER_NOT_FOUND, b)))
        }, o.prototype._by = function() {
            try {
                this.flash._bz()
            } catch (a) {
                f.error(this, "crashed", a), this._bp(h.EVENT_CRASHED, -1, a)
            }
        }, o.prototype.createPlayer = function(a) {
            var b = this.whenReady.then(function() {
                return a.id = this.flash._bA(), this.emmiters[a.id] = a, a.id
            }.bind(this));
            return b.then(function(a) {}.bind(this), function(a) {
                f.error(this, "createPlayerError", a)
            }.bind(this)), b
        }, a.Xh = o
    }, function(a, b, c, d) {
        var e = c(27),
            f = c(28),
            g = c(13),
            h = "windows" === g.platform.os && "safari" === g.browser.name,
            i = "ya-flash-player-wrapper";
        a.Xh = function(a, b, c, d, g, j, k, l) {
            var m = document.createElement("div");
            m.id = "wrapper_" + c, m.innerHTML = '<div id="' + c + '"></div>', k = k || "1000", l = l || "1000";
            var n, o, p, q;
            return j && !h ? (n = f, o = k, p = l, q = {
                allowscriptaccess: "always",
                wmode: "transparent"
            }, m.className = i, m.style.cssText = "position: relative; width: 100%; height: 100%; overflow: hidden;", j.appendChild(m)) : (n = e, o = p = "1", q = {
                allowscriptaccess: "always"
            }, m.style.cssText = "position: absolute; left: -1px; top: -1px; width: 0px; height: 0px; overflow: hidden;", document.body.appendChild(m)), n.embedSWF(a, c, o, p, b, "", g, q, {}, d), m
        }
    }, function(a, b, c, d) {
        function e(a) {
            a.parentNode.removeChild(a)
        }
        var f = c(24),
            g = {
                _bB: "fbn-swf-wrapper",
                _bC: 500,
                _bD: [function(a, b) {
                    return b.childNodes.length > 1
                }, function(a) {
                    return a.type && "application/x-shockwave-flash" != a.type
                }, function(a) {
                    return !a.parentNode
                }, function(a) {
                    return a.parentNode.className.indexOf("CTFnodisplay") > -1
                }],
                embedSWF: function(a, b, c, d, h, i, j, k, l, m, n) {
                    f && f.addDomLoadEvent(function() {
                        var o = document.getElementById(b);
                        if (o) {
                            var p = document.createElement("div");
                            p.className = g._bB, o.parentNode.replaceChild(p, o), p.appendChild(o), f.embedSWF(a, b, c, d, h, i, j, k, l, function(a) {
                                function c(a) {
                                    if (n !== !1) {
                                        f.removeSWF(b), e(p);
                                        var c = document.getElementById("CTFstack");
                                        c && e(c);
                                        var d = document.body.lastChild;
                                        d && "ujs_flashblock_placeholder" == d.className && e(d)
                                    }
                                    a.success = !1, a._bv = !0, m(a)
                                }
                                if (a && a.success !== !1) {
                                    var d = a.ref,
                                        h = !1;
                                    try {
                                        h = d && d.getSVGDocument && d.getSVGDocument()
                                    } catch (i) {}
                                    h ? c(a) : window.setTimeout(function() {
                                        for (var b = g._bD, e = 0, f = b.length; f > e; e++)
                                            if (b[e](d, p)) return void c(a);
                                        m(a)
                                    }, g._bC)
                                } else m(a)
                            })
                        }
                    })
                }
            };
        a.Xh = g
    }, function(a, b, c, d) {
        var e = c(24),
            f = {
                _bB: "femb-swf-wrapper",
                _bC: 500,
                embedSWF: function(a, b, c, d, g, h, i, j, k, l) {
                    e.addDomLoadEvent(function() {
                        var m = document.getElementById(b);
                        if (m) {
                            var n = document.createElement("div");
                            n.className = f._bB, m.parentNode.replaceChild(n, m), n.appendChild(m), e.embedSWF(a, b, c, d, g, h, i, j, k, function(a) {
                                function b(a) {
                                    a.success = !1, l(a)
                                }
                                if (a && a.success !== !1) {
                                    var c = a.ref,
                                        d = !1;
                                    try {
                                        d = c && c.getSVGDocument && c.getSVGDocument()
                                    } catch (e) {}
                                    d ? b(a) : window.setTimeout(function() {
                                        l(a)
                                    }, f._bC)
                                } else l(a)
                            })
                        }
                    })
                }
            };
        a.Xh = f
    }, function(a, b, c, d) {
        var e = c(9),
            f = new e("FlashInterface"),
            g = function(a) {
                this.flash = ya.music.Audio._bE = a
            };
        g.prototype._bF = function(a) {
            try {
                return this.flash.call.apply(this.flash, arguments)
            } catch (b) {
                return f.error(this, "_callFlashError", b, arguments[0], arguments[1], arguments[2]), null
            }
        }, g.prototype._bz = function() {
            this._bF("heartBeat", -1)
        }, g.prototype._bA = function() {
            return this._bF("addPlayer", -1)
        }, g.prototype.setVolume = function(a, b) {
            this._bF("setVolume", -1, b)
        }, g.prototype.getVolume = function() {
            return this._bF("getVolume", -1)
        }, g.prototype.play = function(a, b, c) {
            this._bF("play", a, b, c && 1e3 * c)
        }, g.prototype.stop = function(a, b) {
            this._bF("stop", a, b || 0)
        }, g.prototype.pause = function(a) {
            this._bF("pause", a)
        }, g.prototype.resume = function(a) {
            this._bF("resume", a)
        }, g.prototype.getPosition = function(a) {
            return this._bF("getPosition", a)
        }, g.prototype.setPosition = function(a, b) {
            this._bF("setPosition", a, b)
        }, g.prototype.getDuration = function(a, b) {
            return this._bF("getDuration", a, b || 0)
        }, g.prototype.getLoaded = function(a, b) {
            return this._bF("getLoaded", a, b || 0)
        }, g.prototype.preload = function(a, b, c, d) {
            return this._bF("preload", a, b, c && 1e3 * c, null == d ? 1 : d)
        }, g.prototype.isPreloaded = function(a, b, c) {
            return this._bF("isPreloaded", a, b, null == c ? 1 : c)
        }, g.prototype.isPreloading = function(a, b, c) {
            return this._bF("isPreloading", a, b, null == c ? 1 : c)
        }, g.prototype.playPreloaded = function(a, b) {
            return this._bF("playPreloaded", a, null == b ? 1 : b)
        }, g.prototype.getSrc = function(a, b) {
            return this._bF("getSrc", a, b || 0)
        }, a.Xh = g
    }, function(a, b, c, d) {
        var e = c(17),
            f = function(a) {
                e.call(this, a)
            };
        f.prototype = e.create("LoaderError"), f.TIMEOUT = "request timeout", f.FAILED = "request failed", a.Xh = f
    }, function(a, b, c, d) {
        var e = c(2),
            f = function(a) {
                if (a) {
                    for (var b in a) "_" === b[0] || "function" != typeof a[b] || a[b] === Object.prototype[b] || a.hasOwnProperty(b) || e.prototype.hasOwnProperty(b) || (this[b] = a[b].bind(a));
                    a.pipeEvents && (e.call(this), this.on = e.prototype.on, this.once = e.prototype.once, this.off = e.prototype.off, this.clearListeners = e.prototype.clearListeners, a.pipeEvents(this))
                }
            };
        f.exportStatic = function(a, b, c) {
            c = c || [], Object.keys(a).forEach(function(d) {
                a.hasOwnProperty(d) && "_" !== d[0] && "prototype" !== d && -1 === c.indexOf(d) && (b[d] = a[d])
            })
        }, f.createClass = function(a, b, c) {
            var d = function() {
                    var b = function() {};
                    b.prototype = a.prototype;
                    var c = new b;
                    return a.apply(c, arguments), c._bG()
                },
                e = function() {};
            e.prototype = (b || f).prototype, d.prototype = new e;
            var g;
            for (var h in a.prototype) g = a.prototype[h], Object.prototype[h] != g && "function" != typeof g && "_" !== h[0] && (d.prototype[h] = g);
            var i = function(a) {
                var b = f.prototype;
                f.prototype = d.prototype;
                var c = new f(a);
                return f.prototype = b, c
            };
            return a.prototype._bG = function() {
                return this._bH || (this._bH = i(this)), this._bH
            }, c || f.exportStatic(a, d), d
        }, a.Xh = f
    }, function(a, b, c, d) {
        c(6), ya.music.lib || (ya.music.lib = {});
        var e = c(2),
            f = c(17),
            g = c(18),
            h = function() {
                e.call(this)
            };
        h.prototype = g(e), h.mixin = e.mixin, h.eventize = e.eventize;
        var i = function() {
            f.apply(this, arguments)
        };
        i.prototype = g(f), i.create = f.create, ya.music.lib.Events = h, ya.music.lib.Error = i, ya.music.lib.Promise = c(11), ya.music.lib.Deferred = c(14), ya.music.lib.pureInstance = g, ya.music.lib.merge = c(3), ya.music.info = c(13)
    }, function(a, b, c, d) {
        c(6);
        var e = c(16),
            f = c(22);
        ya.music.Audio.AudioError = e, ya.music.Audio.PlaybackError = f
    }, function(a, b, c, d) {
        c(6);
        var e = c(30);
        ya.music.Audio.LoaderError = e
    }, function(a, b, c, d) {
        c(6);
        var e = c(9);
        ya.music.Audio.Logger = e
    }, function(a, b, c, d) {
        c(37), ya.music.Audio.fx.Equalizer = c(38)
    }, function(a, b, c, d) {
        c(6), ya.music.Audio.fx = {}
    }, function(a, b, c, d) {
        var e = c(2),
            f = c(3),
            g = c(39),
            h = c(40),
            i = function(a, b) {
                e.call(this), this.preamp = new h(a, "highshelf", 0), this.preamp.on("*", this._bI.bind(this, this.preamp)), b = b || i.DEFAULT_BANDS;
                var c;
                this.bands = b.map(function(d, e) {
                    var f = new h(a, 0 == e ? "lowshelf" : e + 1 < b.length ? "peaking" : "highshelf", d);
                    return f.on("*", this._bI.bind(this, f)), c ? c.filter.connect(f.filter) : this.preamp.filter.connect(f.filter), c = f, f
                }.bind(this)), this.input = this.preamp.filter, this.output = this.bands[this.bands.length - 1].filter
            };
        e.mixin(i), f(i, g, !0), i.DEFAULT_BANDS = c(41), i.DEFAULT_PRESETS = c(42), i.prototype._bI = function(a, b, c) {
            this.trigger(b, a.getFreq(), c)
        }, i.prototype.loadPreset = function(a) {
            a.bands.forEach(function(a, b) {
                this.bands[b].setValue(a)
            }.bind(this)), this.preamp.setValue(a.preamp)
        }, i.prototype.savePreset = function() {
            return {
                preamp: this.preamp.getValue(),
                bands: this.bands.map(function(a) {
                    return a.getValue()
                })
            }
        }, i.prototype.guessPreamp = function() {
            for (var a = 0, b = 0, c = this.bands.length; c > b; b++) a += this.bands[b].getValue();
            return -a / 2
        }, a.Xh = i
    }, function(a, b, c, d) {
        var e = {};
        e.EVENT_CHANGE = "change", a.Xh = e
    }, function(a, b, c, d) {
        var e = c(2),
            f = c(39),
            g = function(a, b, c) {
                e.call(this), this.type = b, this.filter = a.createBiquadFilter(), this.filter.type = b, this.filter.frequency.value = c, this.filter.Q.value = 1, this.filter.gain.value = 0
            };
        e.mixin(g), g.prototype.getFreq = function() {
            return this.filter.frequency.value
        }, g.prototype.getValue = function() {
            return this.filter.gain.value
        }, g.prototype.setValue = function(a) {
            this.filter.gain.value = a, this.trigger(f.EVENT_CHANGE, a)
        }, a.Xh = g
    }, function(a, b, c, d) {
        a.Xh = [60, 170, 310, 600, 1e3, 3e3, 6e3, 12e3, 14e3, 16e3]
    }, function(a, b, c, d) {
        a.Xh = [{
            id: "default",
            preamp: 0,
            bands: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }, {
            id: "Classical",
            preamp: -.5,
            bands: [-.5, -.5, -.5, -.5, -.5, -.5, -3.5, -3.5, -3.5, -4.5]
        }, {
            id: "Club",
            preamp: -3.359999895095825,
            bands: [-.5, -.5, 4, 2.5, 2.5, 2.5, 1.5, -.5, -.5, -.5]
        }, {
            id: "Dance",
            preamp: -2.1599998474121094,
            bands: [4.5, 3.5, 1, -.5, -.5, -2.5, -3.5, -3.5, -.5, -.5]
        }, {
            id: "Full Bass",
            preamp: -3.5999999046325684,
            bands: [4, 4.5, 4.5, 2.5, .5, -2, -4, -5, -5.5, -5.5]
        }, {
            id: "Full Bass & Treble",
            preamp: -5.039999961853027,
            bands: [3.5, 2.5, -.5, -3.5, -2, .5, 4, 5.5, 6, 6]
        }, {
            id: "Full Treble",
            preamp: -6,
            bands: [-4.5, -4.5, -4.5, -2, 1, 5.5, 8, 8, 8, 8]
        }, {
            id: "Laptop Speakers / Headphone",
            preamp: -4.079999923706055,
            bands: [2, 5.5, 2.5, -1.5, -1, .5, 2, 4.5, 6, 7]
        }, {
            id: "Large Hall",
            preamp: -3.5999999046325684,
            bands: [5, 5, 2.5, 2.5, -.5, -2, -2, -2, -.5, -.5]
        }, {
            id: "Live",
            preamp: -2.6399998664855957,
            bands: [-2, -.5, 2, 2.5, 2.5, 2.5, 2, 1, 1, 1]
        }, {
            id: "Party",
            preamp: -2.6399998664855957,
            bands: [3.5, 3.5, -.5, -.5, -.5, -.5, -.5, -.5, 3.5, 3.5]
        }, {
            id: "Pop",
            preamp: -3.119999885559082,
            bands: [-.5, 2, 3.5, 4, 2.5, -.5, -1, -1, -.5, -.5]
        }, {
            id: "Reggae",
            preamp: -4.079999923706055,
            bands: [-.5, -.5, -.5, -2.5, -.5, 3, 3, -.5, -.5, -.5]
        }, {
            id: "Rock",
            preamp: -5.039999961853027,
            bands: [4, 2, -2.5, -4, -1.5, 2, 4, 5.5, 5.5, 5.5]
        }, {
            id: "Ska",
            preamp: -5.519999980926514,
            bands: [-1, -2, -2, -.5, 2, 2.5, 4, 4.5, 5.5, 4.5]
        }, {
            id: "Soft",
            preamp: -4.799999713897705,
            bands: [2, .5, -.5, -1, -.5, 2, 4, 4.5, 5.5, 6]
        }, {
            id: "Soft Rock",
            preamp: -2.6399998664855957,
            bands: [2, 2, 1, -.5, -2, -2.5, -1.5, -.5, 1, 4]
        }, {
            id: "Techno",
            preamp: -3.8399999141693115,
            bands: [4, 2.5, -.5, -2.5, -2, -.5, 4, 4.5, 4.5, 4]
        }]
    }, function(a, b, c, d) {
        c(37), ya.music.Audio.fx.volumeLib = c(44)
    }, function(a, b, c, d) {
        var e = {};
        e.EPSILON = .01, e._bJ = 20 / Math.log(10), e.toExponent = function(a) {
            var b = Math.pow(e.EPSILON, 1 - a);
            return b > e.EPSILON ? b : 0
        }, e.fromExponent = function(a) {
            return 1 - Math.log(Math.max(a, e.EPSILON)) / Math.log(e.EPSILON)
        }, e.toDBFS = function(a) {
            return Math.log(a) * e._bJ
        }, e.fromDBFS = function(a) {
            return Math.exp(a / e._bJ)
        }, a.Xh = e
    }, function(a, b, c, d) {
        var e = "radio.yandex.ru",
            f = "/api/v2.1/",
            g = "https://" + e + f,
            h = /inspect/.test(document.location.hash),
            i = /(totoro|prestable\.music|mt|qa)\.yandex\.ru$/.test(location.hostname),
            j = /\.yandex\.(ru|ua|kz|by|com|com\.tr)$/.test(location.hostname),
            k = {
                _a: g,
                _bK: e,
                _bL: f,
                _bM: j,
                _bN: i,
                _bO: e != location.hostname,
                _bP: h,
                _bQ: 7e3,
                _bR: 3,
                _bS: 1e3,
                _bT: 300,
                _bU: 18e5,
                _bV: 3e4,
                logger: {
                    _bW: 1e3
                },
                net: {
                    _bX: [400, 403, 404, 405, 410, 422],
                    _bY: 434,
                    _bZ: "Requested Host Unavailable"
                },
                audio: {
                    _bQ: 5e3,
                    _bR: 5,
                    _bS: 500,
                    _bT: 0,
                    _bV: 1e4,
                    start: {},
                    preload: {}
                },
                track: {
                    data: {},
                    populate: {
                        _bT: 0
                    },
                    info: {
                        _bS: 500,
                        _bU: 0
                    },
                    url: {
                        _bS: 500,
                        _bU: 0,
                        _bV: 1e4
                    },
                    init: {
                        _bQ: 1e4,
                        _bR: 3,
                        _bS: 1e3,
                        _bU: 0,
                        _bV: 2e4
                    },
                    play: {
                        _bQ: 3e4,
                        _bR: 20,
                        _bS: 1e3,
                        _bU: 0,
                        _bV: 18e4
                    }
                },
                advert: {
                    _b1: /advert/,
                    _b2: /fakes/,
                    _b3: /noads/,
                    partner: {
                        _bU: 216e5
                    },
                    data: {
                        _bQ: 1e3,
                        _bR: 1,
                        _bS: 500,
                        _bT: 1,
                        _bU: 15e3,
                        _bV: 3e3
                    },
                    feedback: {}
                },
                feedback: {
                    _bU: 0,
                    advert: {},
                    radio: {},
                    track: {
                        send: {},
                        retry: {
                            _bR: 20,
                            _bS: 5e3
                        }
                    }
                },
                source: {
                    album: {},
                    artist: {},
                    playlist: {},
                    radio: {
                        _bU: 0,
                        init: {
                            _bR: 10
                        },
                        available: {},
                        settings: {
                            load: {},
                            send: {}
                        }
                    }
                },
                core: {
                    _b4: 5,
                    _b5: 1,
                    _b6: 1,
                    _b7: 1,
                    user: {
                        _bU: 0,
                        _b8: 432e5
                    },
                    settings: {
                        _b9: "Ya_Music_Player_Type",
                        _b0: "Ya_Music_Player_Format",
                        _b$: "Ya_Music_Player_HQ",
                        _b_: "Ya_Music_Player_Volume",
                        _ca: "Ya_Music_Player_Volume_Gamma",
                        _cb: "Ya_Music_Player_Equalizer",
                        _cc: "Ya_Music_Player_CD",
                        _cd: .5
                    },
                    queue: {
                        _ce: 50,
                        _cf: 25,
                        _cg: 25
                    }
                },
                player: {
                    audio: {
                        _ch: 1e-4,
                        _ci: .7
                    }
                },
                cross_tabs: {
                    _cj: "Ya_Music_Player_ID",
                    _ck: 500
                },
                sandman: {
                    _cl: 5e3,
                    _cm: 2e4
                },
                skips: {
                    _cn: 2e3
                },
                crackdown: {
                    _co: "Crackdown",
                    _cp: 216e5,
                    _cq: 9e5,
                    _cr: 3456e5
                },
                xstorage: {
                    _cs: i ? location.hostname : "music.yandex.ru",
                    _bQ: 3e3
                }
            };
        if (k._ct = /crackdown/.test(document.location.hash), k._ct) {
            k.crackdown._cq = 5e3, k.crackdown._cr = 6e4, k.crackdown._cu = /crackdownMouse/.test(document.location.hash);
            var l = document.location.hash.match(/crackdown-([\w-]*)/);
            l && (k.crackdown._cv = l[1])
        }
        a.Xh = k
    }, function(a, b, c, d) {
        var e = c(47);
        c(48), e.lib || (e.lib = {}), e = e.lib, e.trackId = c(49), e.trackInfo = c(50), e.badTrack = c(51), a.Xh = e
    }, function(a, b, c, d) {
        "undefined" == typeof window.ya && (window.ya = {});
        var e = window.ya;
        e.music || (e.music = {}), a.Xh = e.music
    }, function(a, b, c, d) {
        !window.addEventListener && function(a, b, c, d, e, f, g) {
            a[d] = b[d] = c[d] = function(a, b) {
                var c = this;
                g.unshift([c, a, b, function(a) {
                    a.currentTarget = c, a.preventDefault = function() {
                        a.returnValue = !1
                    }, a.stopPropagation = function() {
                        a.cancelBubble = !0
                    }, a.target = a.srcElement || c, b && b.call && b.call(c, a)
                }]), this.attachEvent("on" + a, g[0][3])
            }, a[e] = b[e] = c[e] = function(a, b) {
                for (var c, d = 0; c = g[d]; ++d)
                    if (c[0] == this && c[1] == a && c[2] == b) return this.detachEvent("on" + a, g.splice(d, 1)[0][3])
            }, a[f] = b[f] = c[f] = function(a) {
                return this.fireEvent("on" + a.type, a)
            }
        }(Window.prototype, HTMLDocument.prototype, Element.prototype, "addEventListener", "removeEventListener", "dispatchEvent", []), Function.prototype.bind || (Function.prototype.bind = function(a) {
            if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
            var b = Array.prototype.slice.call(arguments, 1),
                c = this,
                d = function() {},
                e = function() {
                    return c.apply(this instanceof d && a ? this : a, b.concat(Array.prototype.slice.call(arguments)))
                };
            return d.prototype = this.prototype, e.prototype = new d, e
        }), Object.keys || (Object.keys = function() {
            "use strict";
            var a = Object.prototype.hasOwnProperty,
                b = !{
                    toString: null
                }.propertyIsEnumerable("toString"),
                c = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                d = c.length;
            return function(e) {
                if ("object" != typeof e && ("function" != typeof e || null === e)) throw new TypeError("Object.keys called on non-object");
                var f, g, h = [];
                for (f in e) a.call(e, f) && h.push(f);
                if (b)
                    for (g = 0; d > g; g++) a.call(e, c[g]) && h.push(c[g]);
                return h
            }
        }()), Array.prototype.indexOf || (Array.prototype.indexOf = function(a, b) {
            var c;
            if (null == this) throw new TypeError('"this" is null or not defined');
            var d = Object(this),
                e = d.length >>> 0;
            if (0 === e) return -1;
            var f = +b || 0;
            if (Math.abs(f) === 1 / 0 && (f = 0), f >= e) return -1;
            for (c = Math.max(f >= 0 ? f : e - Math.abs(f), 0); e > c;) {
                if (c in d && d[c] === a) return c;
                c++
            }
            return -1
        }), Array.prototype.forEach || (Array.prototype.forEach = function(a, b) {
            var c, d;
            if (null == this) throw new TypeError(" this is null or not defined");
            var e = Object(this),
                f = e.length >>> 0;
            if ("function" != typeof a) throw new TypeError(a + " is not a function");
            for (arguments.length > 1 && (c = b), d = 0; f > d;) {
                var g;
                d in e && (g = e[d], a.call(c, g, d, e)), d++
            }
        }), Array.prototype.map || (Array.prototype.map = function(a, b) {
            var c, d, e;
            if (null == this) throw new TypeError(" this is null or not defined");
            var f = Object(this),
                g = f.length >>> 0;
            if ("function" != typeof a) throw new TypeError(a + " is not a function");
            for (arguments.length > 1 && (c = b), d = new Array(g), e = 0; g > e;) {
                var h, i;
                e in f && (h = f[e], i = a.call(c, h, e, f), d[e] = i), e++
            }
            return d
        }), Array.prototype.filter || (Array.prototype.filter = function(a) {
            "use strict";
            if (void 0 === this || null === this) throw new TypeError;
            var b = Object(this),
                c = b.length >>> 0;
            if ("function" != typeof a) throw new TypeError;
            for (var d = [], e = arguments.length >= 2 ? arguments[1] : void 0, f = 0; c > f; f++)
                if (f in b) {
                    var g = b[f];
                    a.call(e, g, f, b) && d.push(g)
                }
            return d
        }), "undefined" == typeof console && (console = {}), "function" != typeof console.log && (console.log = function() {}), "function" != typeof console.info && (console.info = console.log), "function" != typeof console.warn && (console.warn = console.log), "function" != typeof console.error && (console.error = console.log), "function" != typeof console.debug && (console.debug = console.log)
    }, function(a, b, c, d) {
        var e = function(a) {
            if (!(a instanceof Object)) return "" + a;
            var b = a.albums && a.albums[0] && a.albums[0].id;
            return a.id + (b ? ":" + b : "")
        };
        a.Xh = e
    }, function(a, b, c, d) {
        var e = function(a, b) {
            var c, d, e, f = !1;
            if (a instanceof Object) c = a.id, d = a.albums && a.albums[0] && a.albums[0].id, e = b || a.artists && a.artists[0] && a.artists[0].id;
            else {
                var g = ("" + a).split(":");
                "yadisk" === g[0] ? (c = "" + a, f = !0) : g.length < 2 ? c = g[0] : (d = g.pop(), c = g.join(":"))
            }
            return b ? {
                id: c,
                albumId: d,
                yaDisk: f
            } : {
                id: c,
                albumId: d,
                artistId: e,
                yaDisk: f
            }
        };
        a.Xh = e
    }, function(a, b, c, d) {
        var e = c(52),
            f = function(a, b) {
                b = !!b;
                var c = !!(a instanceof Object);
                return c && e.premium && a.availableForPremiumUsers && (a.available = a.availableForPremiumUsers, delete a.error, delete a.availableForPremiumUsers), (!b || c) && (!c || !!a.error || a.available === !1 || a.embedPlayback === !1)
            };
        a.Xh = f
    }, function(a, b, c, d) {
        var e = c(53),
            f = c(1),
            g = a.Xh = f.eventize({
                csrf: "",
                device_id: e.load("device_id", !1),
                uid: null,
                logged: !1,
                premium: !1,
                invalid: !1,
                timestamp: (new Date).valueOf(),
                localTimestamp: (new Date).valueOf(),
                experiments: {},
                getTimestamp: function() {
                    return (new Date).valueOf() - g.localTimestamp + g.timestamp
                }
            });
        g._cB = "update"
    }, function(a, b, c, d) {
        var e = c(54),
            f = "." + document.location.hostname.split(".").slice(-2).join(".");
        b.store = function(a, b, c) {
            try {
                document.cookie = a + "=" + (c ? e : JSON.stringify)(b) + ";domain=" + f + ";path=/"
            } catch (d) {
                return !1
            }
            return !0
        }, b.load = function(a, b) {
            try {
                var c = document.cookie.match(new RegExp(a + "=([^;]*)"));
                c = c && c[1], b || (c = c && JSON.parse(c))
            } catch (d) {
                return ""
            }
            return c
        }
    }, function(a, b, c, d) {
        var e = function(a, b) {
            return b instanceof Object ? -1 !== a.indexOf(b) ? '"<recursion>"' : (a.push(b), "function" == typeof b ? '"<function>"' : b instanceof HTMLElement ? '"<DOMObject>"' : b instanceof Error ? '"Error: ' + Error.message.replace(/"/g, '\\"') + '"' : b instanceof Array ? "[" + b.filter(function(a) {
                return "function" != typeof a
            }).map(e.bind(null, a)).join(", ") + "]" : "{" + Object.keys(b).filter(function(a) {
                return b.hasOwnProperty(a) && "function" != typeof b[a]
            }).map(function(c) {
                return '"' + c + '":' + e(a, b[c])
            }).join(", ") + "}") : '"' + b + '"'
        };
        a.Xh = function(a) {
            try {
                return e([], a)
            } catch (b) {
                return a.toString()
            }
        }
    }, function(a, b, c, d) {
        var e = c(47),
            f = c(9),
            g = c(56);
        f.log = function() {
            g.log.apply(g, arguments)
        }, f.showUrl = g.showUrl, e.Logger = {
            dump: g.dump.bind(g, ["error", "warn", "log", "info"])
        }
    }, function(a, b, c, d) {
        var e = c(57),
            f = e("logger"),
            g = c(58),
            h = c(54),
            i = ["error", "warn", "log", "info"];
        f._bN && f._cx && i.push("debug", "trace");
        var j = function(a) {
            return this instanceof j ? void(this.channel = a) : new j(a)
        };
        j.ignores = {}, j.log = function(a, b, c) {
            if (f._bN || "debug" != a) {
                var d = [].slice.call(arguments, 3).map(function(a) {
                        if (a && a._q && (a = a._q()), "function" == typeof a && (a = "[[function]]"), "msie" === g.browser.name || "edge" === g.browser.name) try {
                            a = JSON.stringify(a)
                        } catch (b) {}
                        return a
                    }),
                    e = c && (c.name || c._cC);
                if (c && c._q && (c = c._q()), "msie" === g.browser.name || "edge" === g.browser.name) try {
                    c = JSON.stringify(c)
                } catch (h) {}
                e = e || c && (c.name || c._cC), "function" == typeof c && (c = "[[function]]");
                var i = {
                    name: e,
                    timestamp: +new Date,
                    level: a,
                    channel: b,
                    context: c,
                    message: d
                };
                j.logs.unshift(i), j.logs.length > f._bW && (j.logs.length = f._bW), j.ignores[b] || (f._bP && "debug" !== a || f._cx || "error" === a) && j._r.call(this, i)
            }
        }, j.logs = [], j.prototype.show = j.prototype.debug = j.prototype.trace = function() {}, i.forEach(function(a) {
            j.prototype[a] = function() {
                var b = [].slice.call(arguments);
                b.unshift(this.channel), b.unshift(a), j.log.apply(this, b)
            }
        }), j.prototype._o = function(a) {
            return j.showUrl(a)
        };
        var k = /^(([^:]*:)?\/\/[^\/?#]*).*$/;
        j.showUrl = function(a) {
            return (a || "").replace(k, "$1")
        }, j._s = function(a) {
            var b = new Date(a),
                c = b.getMilliseconds();
            c = c > 100 ? c : c > 10 ? "0" + c : "00" + c;
            var d = b.getDate();
            return d = d > 10 ? d : "0" + d, d + " " + b.toLocaleTimeString() + "." + c
        }, j._r = function(a, b) {
            var c = a.level,
                d = a.name,
                e = a.context;
            if (b) return [c.toUpperCase(), j._s(a.timestamp), "[" + a.channel + (d ? ":" + d : "") + "]"].concat(a.message.map(h));
            var f = [j._s(a.timestamp), "[" + a.channel + (d ? ":" + d : "") + "]", a.message[0], e];
            "function" != typeof console[c] && (f.unshift(c.toUpperCase()), c = "log"), console[c].apply(console, f.concat(a.message.slice(1)))
        }, j._cD = function(a, b) {
            return j.logs.filter(function(c) {
                return !(a && -1 === a.indexOf(c.level) || b && -1 === b.indexOf(c.channel))
            })
        }, j.dump = function(a, b) {
            return j._cD(a, b).reverse().map(function(a) {
                return j._r(a, !0).join(" ")
            })
        }, a.Xh = j
    }, function(a, b, c, d) {
        var e = c(45),
            f = function(a, b) {
                for (var c in b)
                    if (b.hasOwnProperty(c)) {
                        if (b[c] instanceof Object && !Array.isArray(b[c]) && !(b[c] instanceof RegExp)) continue;
                        a[c] = b[c]
                    }
                return a
            };
        a.Xh = function(a) {
            for (var b = a.split("."), c = e, d = f({}, c); b.length && (c = c[b.shift()]);) d = f(d, c);
            return d
        }
    }, function(a, b, c, d) {
        a.Xh = c(13)
    }, function(a, b, c, d) {
        var e = c(47),
            f = c(60).Zh,
            g = c(98),
            h = c(154),
            i = c(155),
            j = c(151),
            k = c(133),
            l = c(114),
            m = c(148),
            n = c(156),
            o = c(157);
        e.Player = f, e.user = o, e = e.Player, e.settings = n, e.playerEvents = g, e.playerStates = h, e.playerTasks = i, e.sourceEvents = k, e.sourceTypes = l, e.repeatTypes = m, e.audioEvents = j
    }, function(a, b, c, d) {
        var e = c(56),
            f = new e("Player"),
            g = c(61),
            h = c(62),
            i = c(1),
            j = c(63),
            k = c(65),
            l = c(66),
            m = c(67),
            n = c(68),
            o = c(93),
            p = c(149).Source,
            q = c(150).Audio,
            r = c(152),
            s = c(153),
            t = c(146),
            u = c(98),
            v = c(133),
            w = c(154),
            x = c(155),
            y = c(88),
            z = c(114),
            A = function(a) {
                var b = this;
                i.call(b), a = a || {}, b._cE = w.INIT, b._cF = new n(this, a.type, a.overlay), b._cG = this._cF._cG, b._cH = new s(b), b._cI = new p(b), b._cJ = new q(b), b._cK = new r(b), b._cF._cL().then(function() {
                    b._k()
                }, function() {
                    b._k(w.FAILED)
                }), b._cF._b("*", this._cM.bind(this)), b._cF._cO._cN._b(j.EVENT_STATE, this._k.bind(this, null))
            };
        A.prototype = {
            _q: function() {
                return {
                    state: this._cE
                }
            },
            _cM: function(a, b, c, d) {
                switch (this._k(), a) {
                    case u.TRACK_READY:
                        this._d(u.TRACK, b);
                        break;
                    case u.TRACK_END:
                    case u.TRACK_ERROR:
                        this._d(u.TRACK, !1);
                        break;
                    case u.ADVERT_READY:
                        this._d(u.ADVERT, d);
                        break;
                    case u.ADVERT_END:
                    case u.ADVERT_ERROR:
                        this._d(u.ADVERT, !1);
                        break;
                    case u.COMMON_START:
                        this._d(u.COMMON, !0);
                        break;
                    case u.COMMON_END:
                    case u.COMMON_ERROR:
                        this._d(u.COMMON, !1);
                        break;
                    case u.SOURCE:
                        this._cI._cP();
                        break;
                    case v.EMOTION:
                        return void this._cI._d(v.EMOTION, b, c);
                    case n._cQ:
                        return void this._k()
                }
                try {
                    this._d.apply(this, arguments)
                } catch (e) {
                    console.error(e)
                }
            },
            _k: function(a) {
                null == a && (a = this._cE === w.FAILED ? w.FAILED : this.isReady() ? this._cF._cR(n._cS) || this._cF._cR(n._cT) ? this._cF._cO._cU() ? w.PAUSED : w.PLAYING : w.IDLE : w.INIT), this._cE !== a && (this._cE = a, this._d(u.STATE, a))
            },
            isReady: function() {
                return this._cF._cV()
            },
            readyPromise: function() {
                return this._cF._cL()
            },
            getState: function() {
                return this._cE
            },
            isPlaying: function() {
                return this._cE === w.PLAYING
            },
            isPaused: function() {
                return this._cE === w.PAUSED
            },
            getCurrentTask: function() {
                return this._cF._cR(n._cT) ? x.SOURCE : this._cF._cR(n._cW) ? x.COMMON : this._cF._cR(n._cX) ? x.ADVERT : this._cF._cR(n._cY) ? x.TRACK : this._cF._cR(n._cS) ? x.PLAY : w.IDLE
            },
            getTrack: function() {
                var a = this._cF._cZ(n._cY);
                return a ? a._c1 : null
            },
            getAdvert: function() {
                var a = this._cF._cZ(n._cX);
                return a ? a._c3._c2 : null
            },
            advertClick: function() {
                this._cF._c4()
            },
            play: t._c5(m(l(function(a, b) {
                f.info(this, "play", !!a, a && a.index, b);
                var c;
                return c = a ? this.setSource(a).then(function() {
                    return this._cF._bo(a.type === z.RADIO ? null : b)._c6
                }.bind(this)) : this._cF._bo(b)._c6, this._cH._w(), this._cF._cO._c7(!1), this._cJ.toggleMute(!1), c
            }))),
            setSource: t._c5(m(l(function(a) {
                return this._cF._c8(a)
            }))),
            stop: t._c5(m(function() {
                return f.info(this, "stop"), this.isReady() ? this._cF._c9()["catch"](k) : h.resolve()
            })),
            playCommon: t._c5(m(l(function(a, b) {
                return this._cJ.toggleMute(!1), this._cF._c0(a, b)
            }))),
            stopCommon: t._c5(m(l(function() {
                var a = this._cF._cR(n._cW);
                return a && a.abort(new y("stop")), a["catch"](k)
            }))),
            audio: function() {
                return this._cJ._bG()
            },
            source: function() {
                return this._cI._bG()
            },
            observer: function() {
                return this._cK
            },
            destroy: function() {
                var a = this;
                a.clearListeners(), a._cF._c$(), a._cJ._c$(), a._cI._c$(), delete a._cF, delete a._cJ, delete a._cI, delete a._cE
            }
        }, i.mixin(A), A.getADB = function(a) {
            return a || null == o._cE ? o._c_() : h.resolve(o._cE)
        }, b.Player = A, b.Zh = g.createClass(A)
    }, function(a, b, c, d) {
        a.Xh = c(31)
    }, function(a, b, c, d) {
        a.Xh = c(11)
    }, function(a, b, c, d) {
        var e = c(1),
            f = c(64),
            g = function(a) {
                e.call(this), this._cE = a || !1, this._da = a || !1, this._db = null, this._dc = [], this._dd = this._de.bind(this)
            };
        g.EVENT_STATE = "state", g.prototype = {
            _de: function() {
                var a = this.isLocked();
                a != this._da && (a ? (this._df && this._df.resolve(), delete this._dg) : (this._dg && this._dg.resolve(), delete this._df), this._da = a, this._d(g.EVENT_STATE, a))
            },
            inverted: function() {
                return this._db || (this._db = new h(this)), this._db
            },
            isLocked: function() {
                var a = this._cE;
                if (a) return a;
                for (var b = 0, c = this._dc.length; c > b; b++)
                    if (a = a || this._dc[b].isLocked()) return !0;
                return a
            },
            toggle: function(a) {
                return null == a && (a = !this._cE), this._cE === a ? this : (this._cE = a, this._de(), this)
            },
            add: function(a) {
                return this._dc.push(a), a._b(g.EVENT_STATE, this._dd), this._dd(), this
            },
            remove: function(a) {
                var b = this._dc.indexOf(a);
                return -1 !== b && (this._dc.splice(b, 1), a.off(g.EVENT_STATE, this._dd), this._de()), this
            },
            promiseLock: function() {
                return this._df || (this._df = new f, this.isLocked() && this._df.resolve()), this._df.promise()
            },
            promiseUnlock: function() {
                return this._dg || (this._dg = new f, this.isLocked() || this._dg.resolve()), this._dg.promise()
            }
        }, e.mixin(g);
        var h = function(a) {
            e.call(this), this._dh = a, this._dh._b(g.EVENT_STATE, function(a) {
                this._d(g.EVENT_STATE, !a)
            }.bind(this))
        };
        h.prototype = {
            inverted: function() {
                return this._dh
            },
            isLocked: function() {
                return !this._dh.isLocked()
            },
            toggle: function(a) {
                return this._dh.toggle(null == a ? null : !a)
            },
            add: function(a) {
                return this._dh.add(a.inverted())
            },
            remove: function(a) {
                return this._dh.remove(a.inverted())
            },
            promiseLock: function() {
                return this._dh.promiseUnlock()
            },
            promiseUnlock: function() {
                return this._dh.promiseLock()
            }
        }, e.mixin(h), a.Xh = g
    }, function(a, b, c, d) {
        a.Xh = c(14)
    }, function(a, b, c, d) {
        a.Xh = function() {}
    }, function(a, b, c, d) {
        a.Xh = function(a) {
            return function() {
                if (!this.isReady()) throw new Error("Is not ready. Check for .isReady() or use .readyPromise()");
                return a.apply(this, arguments)
            }
        }
    }, function(a, b, c, d) {
        var e = (c(65), c(62));
        a.Xh = function(a) {
            return function() {
                var b = this,
                    c = arguments,
                    d = new e(function(d, e) {
                        var f = a.apply(b, c);
                        f && f.then || d(), f.then(function() {
                            d()
                        }, e)
                    });
                return d["catch"](function(a) {}), d
            }
        }
    }, function(a, b, c, d) {
        var e = c(56),
            f = new e("Core"),
            g = c(57),
            h = g("core"),
            i = g("source.radio.init"),
            j = c(69),
            k = c(65),
            l = c(70),
            m = c(1),
            n = c(62),
            o = c(64),
            p = c(71),
            q = c(78),
            r = c(72),
            s = c(73),
            t = c(79),
            u = c(74),
            v = c(75),
            w = c(80),
            x = c(103),
            y = c(104),
            z = c(100),
            A = c(105),
            B = c(115),
            C = c(49),
            D = c(51),
            E = c(108),
            F = c(116),
            G = c(123),
            H = c(126),
            I = c(128),
            J = c(130),
            K = c(120),
            L = c(131),
            M = c(102),
            N = c(132),
            O = c(98),
            P = c(133),
            Q = c(19),
            R = c(134),
            S = c(141),
            T = c(144),
            U = c(146),
            V = c(88),
            W = c(91),
            X = c(114),
            Y = c(148),
            Z = 1,
            $ = 1,
            _ = 1,
            aa = function(a) {
                var b = a._cI._di;
                return b._dj !== Y.ONE || "+" !== a._dk && "-" !== a._dk ? "+" === a._dk ? b._dl() : "-" === a._dk ? b._dm() : a._dk < -1 ? b._dn(-a._dk) : a._dk : b._dk
            },
            ba = function(a, b, c) {
                var d = this;
                m.call(d), d._cC = $++, d._cO = new R(d, b, c), d._cG = new U(this), d._cI = d._do({
                    type: X.COMMON
                }), d._dp = !1, d._dq = new o, n.all([d._cO._cL(), T._cL()]).then(function() {
                    d._dp = !0, d._dq.resolve(), f.info(d, "initReady")
                }), d._dr = {}, d._ds = {}, d._dt = d._du.bind(d)
            },
            ca = ba._cS = "play",
            da = ba._cY = "track",
            ea = ba._cX = "advert",
            fa = ba._cW = "common",
            ga = ba._cT = "source",
            ha = ba._cQ = "task_event";
        ba._c8 = q({
            create: {
                _ds: function(a) {
                    var b = a._cF,
                        c = b._cI,
                        d = b._do(a._dv);
                    return a._cI = d, a._di = d._di, b._dw(d) ? (d._l = c._l, d._dv = l(c._dv, d._dv), d._dx = l(c._dx, d._dx), a._dv.loadTracks ? a._di = d._di = c._di : d._di._dy(c._di), d._di._dz(a._dv.index), d._l || n.resolve()) : "init"
                },
                _dA: "setSource"
            },
            init: {
                _ds: function(a) {
                    var b = a._cF,
                        c = a._cI,
                        d = c._dB,
                        e = c._dx;
                    if (c._dC = d === X.RADIO || d === X.COLLA || d === X.PLAYLIST && (!e.uid || !e.login), c._dC || c._dD || c._dE) switch (d) {
                        case X.RADIO:
                            c._l = F(b._dF(c));
                            break;
                        case X.ALBUM:
                            c._l = G(b._dF(c));
                            break;
                        case X.ARTIST:
                            c._l = H(b._dF(c));
                            break;
                        case X.PLAYLIST:
                            c._l = I(b._dF(c));
                            break;
                        case X.COLLA:
                            c._l = J(b._dF(c))
                    }
                    return c._l = c._l || n.resolve(), c._l
                },
                _dA: function(a) {
                    return a._di._dG(!0) ? "populate" : "setSource"
                }
            },
            populate: {
                _ds: function(a) {
                    -1 == a._di._dk && a._di._dz(0, !0);
                    var b = a._di._dH();
                    return b.id || b.src ? n.resolve() : a._di._dI(null, null, null, !0)
                },
                _dA: "setSource"
            },
            setSource: {
                _ds: function(a) {
                    return a._cF._cI && a._cF._c9(new V("Source change")), a._cF._cI = a._cI, a._cF._d(O.SOURCE, a._cI._dB), a._cF._cG._dJ(), n.resolve()
                }
            }
        }, "create"), ba._dk = v(q({
            radioCheck: {
                _ds: s(function(a) {
                    if (a._dK) {
                        if (null == aa(a)) return K(a);
                        a._cI._di._dG() - aa(a) - 1 < a._dx.storeAfter && K(a)
                    }
                    return n.resolve()
                }, {
                    _bW: i._bR,
                    _cr: i._bS,
                    _dL: p._dL
                }),
                _dA: "tracksPopulate"
            },
            tracksPopulate: {
                _ds: function(a) {
                    var b = a._cI._di,
                        c = aa(a),
                        d = b._dM()[c];
                    return d ? d.id || d.src ? n.resolve() : b._dI(b._dn(c, !0), null, null, !0) : j(new V("No track to play"))
                }
            }
        }, "radioCheck"), [{
            _dN: r,
            _dA: function(a) {
                var b = a._cI._di,
                    c = aa(a),
                    d = b._dM()[c];
                if (D(d)) throw new Error("Track unavailable");
                return b._dz(c), c
            }
        }, {
            _dN: t,
            _dO: function(a) {
                return a._cI._cC
            }
        }, {
            _dN: u,
            _dO: function(a) {
                return a._cI._cC + ":" + a._dk
            },
            _cr: 0
        }]), ba._bo = t(q({
            init: {
                _ds: function(a) {
                    return a._cI._l || "index"
                },
                _dA: "index"
            },
            index: {
                _ds: function(a) {
                    return null == a._dk && (a._dk = a._cI._di._dP()), ba._dk(a)
                },
                _dA: "play"
            },
            play: {
                _ds: function(a) {
                    return a._c1 = a._cI._di._dH(), a._cF._dQ(a)
                }
            }
        }, "init"), {
            _dO: function(a) {
                return a._cI._cC
            }
        }), ba._dR = function() {
            return {
                _cC: this._cC,
                track: C(this._c1),
                from: this._dS,
                source: this._cI._dB + ":" + JSON.stringify(this._cI._dx)
            }
        }, ba.prototype = {
            _q: function() {
                return {
                    _cC: this._cC,
                    source: this._cI._dB + ":" + JSON.stringify(this._cI._dx)
                }
            },
            _c$: function() {
                var a = this;
                a._cC && (a.clearListeners(), delete a._cC, a._cO._c$(), delete a._cO, a._cI && a._cI._di._c$(), delete a._cI, delete a._dq, delete a._dp, delete a._dr, delete a._ds)
            },
            _cV: function() {
                return this._dp
            },
            _cL: function() {
                return this._dq.promise()
            },
            _du: function() {
                var a = this;
                f.info(a, "autoNext");
                var b = a._cG._c_();
                return b ? (a._d(O.CRACKDOWN_PAUSE, b), void a._dz("+")) : void a._bo("+")["catch"](function() {
                    a._cI._di._dT() || (f.info(a, "sourceEnd"), a._d(O.END))
                })
            },
            _dU: function(a) {
                this._dV = a, this._cI && this._cI._dB !== X.RADIO && this._cI._di._dU(a)
            },
            _do: function(a) {
                a.type || (a.type = X.COMMON);
                var b = {
                        _cC: Z++,
                        _di: new S(a.tracks, a.index, a.type === X.RADIO ? !1 : this._dV),
                        _dS: a.from || "default-" + location.hostname.replace(/\./g, "-"),
                        _dB: a.type,
                        _dx: a.config || {},
                        _dv: a.info || {},
                        _dW: a.eventId,
                        _dX: a.dashId,
                        _dD: a.type === X.RADIO ? !0 : null == a.loadInfo ? !a.info : a.loadInfo,
                        _dE: a.type === X.RADIO ? !0 : null == a.loadTracks ? !a.tracks : a.loadTracks
                    },
                    c = b._dx,
                    d = b._dB;
                switch (c.owner && c.owner instanceof Object && (c.uid = c.owner.uid, c.login = c.owner.login, delete c.owner), c.kind && (c.id = c.kind, delete c.kind), d !== X.PLAYLIST && d !== X.COLLA || (c.owner = c.owner || c.uid || c.login, isFinite(c.owner) ? c.uid = parseInt(c.owner) : c.login = c.owner), d) {
                    case X.RADIO:
                        if (!c.type || !c.tag) throw new TypeError("Bad config: " + JSON.stringify(c));
                        break;
                    case X.PLAYLIST:
                        if (!c.owner || !c.id) throw new TypeError("Bad config: " + JSON.stringify(c));
                        break;
                    case X.ALBUM:
                    case X.ARTIST:
                    case X.COLLA:
                        if (!c.id) throw new TypeError("Bad config: " + JSON.stringify(c));
                        break;
                    case X.FEED:
                        if (!b._dW) throw new TypeError("Event Id required")
                }
                return d === X.RADIO && (c.storeBefore = c.storeBefore || h._b6, c.storeAfter = c.storeAfter || h._b7), b
            },
            _dw: function(a) {
                if (this._cI._dB !== a._dB) return !1;
                var b = a._dx,
                    c = this._cI._dx;
                switch (a._dB) {
                    case X.ARTIST:
                    case X.ALBUM:
                        return b.id === c.id && b.sort == c.sort;
                    case X.RADIO:
                        return b.type === c.type && b.tag === c.tag;
                    case X.PLAYLIST:
                    case X.COLLA:
                        return b.owner = c.owner && b.id === c.id
                }
                return !0
            },
            _c8: t(function(a) {
                f.info(this, "setSource", a.type, a.config, a.from, !!a.info, a.tracks && a.tracks.length, a.index), this._cR(ca) && this._c9(new V("Source change"));
                var b = {
                        _cF: this,
                        _dv: a
                    },
                    c = ba._c8(b);
                return this._dY(ga, c, b), c
            }, {
                _dZ: !0,
                _dO: function() {
                    return this._cC
                }
            }),
            _bo: function(a, b) {
                if (!this._cI) return j(new Error("No source"));
                f.info(this, "play", a, b), this._cR(ca) && this._c9(new V("Track change"), b);
                var c = this._dF(this._cI);
                c._dk = a, c._d1 = new o, this._cI._dB === X.RADIO && (c._d2 = new o), this._d3(ca, c);
                var d = ba._bo(c);
                return this._dY(ca, d, c), d.then(this._dt, k), d._c6 = c._d1.promise(), d["catch"](function(a) {
                    c._d1.reject(a)
                }), this._cI._dB === X.RADIO && (d._d2 = c._d2.promise()), d
            },
            _dz: function(a, b) {
                if (!this._cI) return j(new Error("No source"));
                f.info(this, "setIndex", a, b), this._cR(ca) && this._c9(new V("Set index"), b);
                var c = this._dF(this._cI);
                return c._dk = a, ba._dk(c)
            },
            _c9: function(a, b) {
                if (!this._cI) return j(new Error("No source"));
                a = a || new V("Stopped");
                var c = this._cR(ca);
                return c && (f.info(this, "stop", a, b), a._d2 = b, c._d4(a)), this._cO._d5.toggle(!0), c || n.resolve()
            },
            _dF: function(a, b) {
                a = a || this._cI;
                var c = {
                    _q: ba._dR,
                    _cC: _++,
                    _cF: this,
                    _d6: this._cO._d6,
                    _d7: this._cO._d7,
                    _d8: this._cO._d8,
                    _c3: {},
                    _cI: a,
                    _dx: a && a._dx,
                    _dS: a && a._dS,
                    _dX: a && a._dX,
                    _c1: b
                };
                return a._dB === X.RADIO && (c._dK = {
                    _dB: a._dx.type,
                    _d9: a._dx.tag
                }), c
            },
            _cZ: function(a) {
                return this._dr[a]
            },
            _d3: function(a, b) {
                this._dr[a] = b
            },
            _d0: function(a, b) {
                this._dr[a] === b && delete this._dr[a]
            },
            _cR: function(a) {
                return this._ds[a]
            },
            _dY: function(a, b, c) {
                f.info(this, "taskStart", a, c._cC);
                var d = this;
                d._ds[a] = b, this._d(ha, !0, a, b, c);
                var e = function() {
                    d._d$(a, b, c)
                };
                b.then(function() {
                    f.info(d, "taskSuccess", a, c._cC), e()
                }, function(b) {
                    b instanceof V ? f.info(d, "taskAbort", a, c._cC, b) : f[a === ca || a === da ? "error" : "warn"](d, "taskFail", a, c._cC, b), e()
                })
            },
            _d$: function(a, b, c) {
                this._ds[a] === b && (delete this._ds[a], this._d(ha, !1, a, b, c)), this._d0(a, c)
            },
            _d_: function(a) {
                this._d(O.TRACK_REQUEST, a._c1)
            },
            _ea: function(a) {
                this._d(O.TRACK_BEGIN, a._c1)
            },
            _eb: function(a) {
                f.info(this, "trackReady", C(a._c1)), this._d(O.TRACK_READY, a._c1)
            },
            _ec: function(a) {
                this._cO._d5.toggle(!1), this._d(O.TRACK_START, a._c1)
            },
            _ed: function(a) {
                f.info(this, "trackPlay", C(a._c1)), this._d3(da, a), a._d1.resolve(), a._ee = function(b) {
                    var c = a._c1.statistics;
                    c && c.played > b.played || (c.duration = b.duration, c.position = b.position, c.played = b.played, a._b4 || b.duration - b.position < h._b4 && (a._b4 = !0, this._ef(a)), a._b5 || b.duration - b.loaded < h._b5 && (a._b5 = !0, this._eg(a)))
                }.bind(this), this._cO._d6._b(Q.EVENT_PROGRESS, a._ee), this._d(O.TRACK_PLAY, a._c1)
            },
            _eh: function(a) {
                this._cO._d5.toggle(!0), this._d0(da, a), a._ee && (this._cO._d6.off(Q.EVENT_PROGRESS, a._ee), delete a._ee), this._d(O.TRACK_END, a._c1, a._c1.statistics)
            },
            _ei: function(a, b) {
                return b instanceof V ? this._eh(a) : (this._cO._d6.stop(), this._cO._d5.toggle(!0), this._cO._c7(!0), this._d0(da, a), a._d1.reject(), a._ee && (this._cO._d6.off(Q.EVENT_PROGRESS, a._ee), delete a._ee), f.error(this, "trackError", C(a._c1), b), void this._d(O.TRACK_ERROR, a._c1, b))
            },
            _ej: function(a) {
                f.info(this, "advertRequest", a._c3._el._ek, a._dS), this._d(O.ADVERT_REQUEST, a._c3._el._ek, a._dS)
            },
            _em: function(a) {
                this._d(O.ADVERT_DATA_REQUEST, a._c3._el._ek, a._dS)
            },
            _en: function(a, b) {
                this._d(O.ADVERT_DATA_RESPONSE, a._c3._el._ek, a._dS, b)
            },
            _eo: function(a) {
                this._d(O.ADVERT_BEGIN, a._c3._el._ek, a._dS)
            },
            _ep: function(a) {
                f.info(this, "advertReady", a._c3._el._ek, a._dS), this._d3(ea, a), this._d(O.ADVERT_READY, a._c3._el._ek, a._dS, a._c3._c2)
            },
            _eq: function(a) {
                this._cO._cN.toggle(!1), this._cO._er.toggle(!1), this._d(O.ADVERT_START, a._c3._el._ek, a._dS, a._c3._c2)
            },
            _es: function(a) {
                f.info(this, "advertPlay", a._cI._dB, a._dS), this._d(O.ADVERT_PLAY, a._c3._el._ek, a._dS, a._c3._c2)
            },
            _et: function(a) {
                f.info(this, "advertEnd", a._cI._dB, a._dS), this._cO._er.toggle(!0), this._cO._d7.stop(), this._d0(ea, a), this._d(O.ADVERT_END, a._c3._el._ek, a._dS, a._c3._c2, a._c3._eu)
            },
            _ev: function(a, b) {
                this._cO._er.toggle(!0), this._cO._d7.stop(), this._d0(ea, a), b instanceof V || (f[b._dL ? "info" : "warn"](this, "advertError", a._cI._dB, a._dS, b), this._d(O.ADVERT_ERROR, a._c3._el._ek, a._dS, b))
            },
            _c4: function() {
                var a = this._cZ(ea);
                a && (f.info(this, "advertClick", a._c3._el._ek, a._dS), this._d(O.ADVERT_CLICK, a._c3._el._ek, a._dS, a._c3._c2))
            },
            _ew: function(a) {
                this._cO._ex.toggle(!1), this._d(O.COMMON_START, a._ey)
            },
            _ez: function(a) {
                this._d3(fa, a), this._d(O.COMMON_PLAY, a._ey)
            },
            _eA: function(a) {
                this._cO._ex.toggle(!0), this._cO._d8.stop(), this._d0(fa, a), this._d(O.COMMON_END, a._ey)
            },
            _eB: function(a) {
                this._cO._ex.toggle(!0), this._cO._d8.stop(), this._d0(fa, a), this._d(O.COMMON_ERROR, a._ey, a._eC)
            },
            _eD: function(a, b) {
                return f.info(this, "feedbackRadio", b, a._dK._dB, a._dK._d9, a._cC), L({
                    _dK: a._dK,
                    _dx: a._dx,
                    _cI: a._cI,
                    _dB: a._dK._dB,
                    _d9: a._dK._d9,
                    _d2: b,
                    _dS: a._dS,
                    _dX: a._dX,
                    _c1: a._c1
                })
            },
            _eE: function(a) {
                return this._cI._dB === X.RADIO && "artist" !== this._cI._dx.type ? a.liked : 1 == E._eF(a)
            },
            _eG: function(a) {
                return this._cI._dB === X.RADIO && "artist" !== this._cI._dx.type ? a.disliked : -1 == E._eF(a)
            },
            _eH: function(a, b, c, d) {
                if (f.info(this, "toggleLike", a, b, c, d), !b) {
                    var e = this._cZ(ca);
                    b = e && e._c1 ? e._c1 : this._cI._di._dH()
                }
                if (!b) return j(new Error("Track not found"));
                null == a && (a = !this._eE(b));
                var g, h;
                if (this._cI._dB == X.RADIO) {
                    e = this._cZ(ca);
                    var i = this._dF(this._cI, b);
                    b.liked = a, e && C(b) == C(e._c1) || (i._dK._dB = "radio", i._dK._d9 = "history"), g = this._eD(i, a ? M._eI : M._eJ)
                }(c || this._cI._dB != X.RADIO || "artist" === this._cI._dx.type) && (d || (e = this._cZ(ca), d = e && e._dS || this._cI._dS), h = E._eK(b, a, d));
                var k;
                k = g && h ? n.all([g, h]) : g || h;
                var l = function() {
                    this._d(P.EMOTION, b, "like")
                }.bind(this);
                return l(), k["catch"](l), g
            },
            _eL: function(a, b, c) {
                f.info(this, "toggleDislike", a, b, c);
                var d;
                if (b || (d = this._cZ(ca), b = d && d._c1 ? d._c1 : this._cI._di._dH()), !b) return j(new Error("Track not found"));
                null == a && (a = !this._eG(b));
                var e, g;
                if (this._cI._dB == X.RADIO)
                    if (d = this._cZ(ca), b.disliked = a, a && d && C(b) == C(d._c1)) this._cZ(da) ? (e = this._bo("+", M._eM)._c6, this._cO._c7(!1)) : e = d._c6.then(function() {
                        return this._eL(a, b, c)
                    }.bind(this));
                    else {
                        var h = this._dF(this._cI, b);
                        h._dK._dB = "radio", h._dK._d9 = "history", e = this._eD(h, a ? M._eM : M._eN)
                    }
                this._cI._dB == X.RADIO && "artist" !== this._cI._dx.type || (d = this._cZ(ca), c || (c = d && d._dS || this._cI._dS), g = E._eO(b, a, c), !e && a && d && b == d._c1 && g.then(function() {
                    this._bo("+"), this._cO._c7(!1)
                }.bind(this)));
                var i;
                i = e && g ? n.all([e, g]) : e || g;
                var k = function() {
                    this._d(P.EMOTION, b, "dislike")
                }.bind(this);
                return k(), i["catch"](k), i
            },
            _eP: function(a) {
                f.info(this, "setSettings", a);
                var b = this._dF(this._cI);
                return b._eQ = a, N(b)
            },
            _dQ: function(a) {
                f.info(this, "playTrack", C(a._c1)), this._d_(a), a._c1._eR && a._c1 === this._eS || (this._cO._d6.stop(), this._eS && (delete this._eS._eR, delete this._eS._eT));
                var b = A(a);
                return this._dY(da, b, a), this._eS = a._c1, b
            },
            _eg: function(a) {
                f.info(this, "preloadTrack", C(a._c1));
                var b = a._cI._di._dT();
                return b ? B(this._dF(a._cI, b)) : j(new Error("No next track found"))
            },
            _eU: function(a) {
                if (!a._c3._el) return j(new W("No advert params"));
                f.info(this, "playAdvert", a._dS, a._c3._el._ek, a._c3._eW._eV, a._c3._eW._bo, l({}, a._c1.statistics, !0)), this._ej(a);
                var b = w(a);
                return this._dY(ea, b, a), b
            },
            _ef: function(a) {
                return a._c3._el ? (f.info(this, "preloadAdvert", a._dS, a._c3._el._ek, a._c3._eW._eV, a._c3._eW._bo, l({}, a._c1.statistics, !0)), x(a)) : j(new W("No advert params"))
            },
            _c0: function(a, b) {
                f.info(this, "playCommon", a);
                var c = this._dF();
                c._ey = {
                    _eR: a,
                    _eX: b
                };
                var d = y(c);
                return this._dY(fa, d, c), d
            },
            _eY: function(a, b) {
                return f.info(this, "preloadCommon", a), z({
                    _eZ: this._cO._d8,
                    _eR: a,
                    _eX: b
                })
            }
        }, m.mixin(ba), a.Xh = ba
    }, function(a, b, c, d) {
        a.Xh = c(15)
    }, function(a, b, c, d) {
        a.Xh = c(3)
    }, function(a, b, c, d) {
        var e = c(57),
            f = e("net"),
            g = c(72),
            h = c(73),
            i = c(74),
            j = c(75),
            k = c(76),
            l = function(a, b) {
                return b instanceof k && -1 !== f._bX.indexOf(b.status)
            },
            m = function(a, b, c) {
                "string" == typeof b && (b = e(b)), c = c || {};
                var d = [{
                    _dN: g,
                    _cr: b._bQ,
                    _dA: c._e1,
                    _e2: c._e3
                }, {
                    _dN: h,
                    _bW: b._bR,
                    _cr: b._bS,
                    _dr: c._dr,
                    _e4: c._e4,
                    _e5: c._e5,
                    _dL: c._dL || l,
                    _e6: !0
                }];
                return c._e7 || d.push({
                    _dN: i,
                    _dO: c._dO,
                    _e8: b._bT,
                    _cr: b._bU
                }), d.push({
                    _dN: g,
                    _cr: b._bV,
                    _dA: c._dA,
                    _e2: c._e2
                }), j(a, d)
            };
        m._dL = l, a.Xh = m
    }, function(a, b, c, d) {
        var e = c(65),
            f = c(62),
            g = e.apply.bind(e.bind);
        a.Xh = function(a, b) {
            return b = b || {},
                function(c) {
                    var d, h;
                    try {
                        d = a.call(this, c), h = d && d.then ? d : f.resolve(d)
                    } catch (i) {
                        d = i, h = f.reject(d)
                    }
                    var j = [this, c],
                        k = b._d4 ? g(b._d4, [this, c, d]) : d && d._d4 ? d._d4.bind(this) : e;
                    if (b._cr) {
                        var l = clearTimeout.bind(null, setTimeout(k.bind(null, new Error("Task timeout")), b._cr));
                        h.then(l, l)
                    }
                    return b._dA && (h = h.then(g(b._dA, j))), b._e2 && (h = h["catch"](g(b._e2, j))), h["catch"](e), h._d4 = k, h
                }
        }
    }, function(a, b, c, d) {
        var e = c(62);
        a.Xh = function(a, b) {
            b = b || {};
            var c = "static" === b._dr ? {} : null,
                d = b._e4 || "_retry",
                f = b._e5 || "_result";
            return function(g) {
                var h, i, j, k, l, m = this,
                    n = "static" === b._dr ? c : "data" === b._dr ? g : "self" === b._dr ? m : {};
                b._resetOnStart && (delete n[d], delete n[f]);
                var o = function() {
                        j = a.call(m, g), j.then(h, p)
                    },
                    p = function(a) {
                        return n[f] = a, l ? void i(a) : b._dL && b._dL.call(m, g, a) ? void i(a) : (n[d] = (n[d] || 0) + 1, void(n[d] >= b._bW ? i(a) : b._cr ? (j = s, k = setTimeout(o, b._cr)) : o()))
                    },
                    q = function() {
                        (b._resetOnSuccess || b._resetOnSuccess !== !1 && b._e6 !== !1) && (delete n[d], delete n[f])
                    },
                    r = function() {
                        (b._e6 || b._resetOnFail) && b._resetOnFail !== !1 && (delete n[d], delete n[f])
                    },
                    s = {
                        abort: function() {
                            l = !0, k = k && clearTimeout(k), i(n[f])
                        }
                    },
                    t = new e(function(a, c) {
                        return n[d] >= b._bW ? (j = s, void c(n[f])) : (h = a, i = c, void o())
                    });
                return t.then(q, r), t._d4 = function(a) {
                    return l = !0, j._d4 && j._d4(a)
                }, t
            }
        }
    }, function(a, b, c, d) {
        var e = c(65);
        a.Xh = function(a, b) {
            b = b || {};
            var c = {},
                d = [],
                f = 0,
                g = function(a) {
                    if (!c[a] && (c[a] = {}, b._e8))
                        for (d.push(a), f++; f > b._e8;) h(d[0]);
                    return c[a]
                },
                h = function(a) {
                    c[a] && (c[a]._cr && clearTimeout(c[a]._cr), delete c[a], b._e8 && (d.splice(d.indexOf(a), 1), f--))
                },
                i = function(a) {
                    b._dO || (a = "only"), c[a] && h(a)
                },
                j = function(c) {
                    var d = "function" == typeof b._dO ? b._dO.call(this, c) : b._dO ? c[b._dO] : "only",
                        f = g(d),
                        j = function(a) {
                            return delete f._e9, m(), a
                        },
                        k = function(a) {
                            throw delete f._e9, b._storeFail ? m() : h(d), a
                        },
                        l = i.bind(null, d),
                        m = function() {
                            b._cr ? f._cr = setTimeout(l, b._cr) : 0 === b._cr && l()
                        },
                        n = function(a) {
                            f._e9 && f._e9._d4 && f._e9._d4(a), delete f._e9
                        };
                    return f._e0 ? f._e0 : (f._e9 = a.call(this, c), f._e0 = f._e9.then(j, k), f._e0["catch"](e), f._e0._e$ = l, f._e0._d4 = n, f._e0)
                };
            return j._e$ = i, j
        }
    }, function(a, b, c, d) {
        a.Xh = function(a, b) {
            for (var c = a, d = 0, e = b.length; e > d; d++) c = b[d]._dN(c, b[d]);
            return c
        }
    }, function(a, b, c, d) {
        var e = c(77),
            f = function(a, b, c) {
                this.status = b, this.statusText = c, a = a instanceof Object ? JSON.stringify(a) : a, a = (a || "") + " (" + this.status + ": " + this.statusText + ")", e.call(this, a)
            };
        f.prototype = e.create("AjaxError"), a.Xh = f
    }, function(a, b, c, d) {
        a.Xh = c(17)
    }, function(a, b, c, d) {
        var e = c(65),
            f = c(62);
        a.Xh = function(a, b) {
            if (!b) throw "Must specify root of graph";
            return function(c) {
                var d, g, h, i, j, k, l, m, n = this,
                    o = {},
                    p = function(a) {
                        return l ? void 0 : (l = !0, m = a, g._d4 && g._d4(a))
                    },
                    q = function(b) {
                        d = b;
                        var e = a[d];
                        return o[d] = o[d] || {}, l && !e._e_ ? void(e._successOnAbort ? r : s)(m) : (g = e._ds.call(e._separateContext ? o[d] : n, c), void(g && g.then ? g.then(r, s)["catch"](j) : "string" == typeof g || "function" == typeof g ? t(g) : j(new TypeError("Bad response type"))))
                    },
                    r = function(b) {
                        h = b, k = i, t(a[d]._dA)
                    },
                    s = function(b) {
                        h = b, k = j, t(a[d]._e2)
                    },
                    t = function(b) {
                        try {
                            b ? "string" == typeof b ? q(b) : "function" == typeof b ? t(b.call(a[d]._separateContext ? o[d] : n, c, h)) : b.then ? (g = b, b.then(t, t)) : j(new TypeError("Next task must be String, Function or Promise-like value")) : k(h)
                        } catch (e) {
                            j(e)
                        }
                    },
                    u = new f(function(a, c) {
                        i = a, j = c, q(b)
                    });
                return u["catch"](e), u._d4 = p, u
            }
        }
    }, function(a, b, c, d) {
        var e = c(65),
            f = c(62);
        a.Xh = function(a, b) {
            b = b || {};
            var c = {},
                d = {},
                g = function(a, b) {
                    return c[a] && c[a]._e9._d4(b)
                },
                h = function(a, b) {
                    d[a] && d[a]._v(b), delete d[a]
                },
                i = function(i) {
                    var j = b._dO ? b._dO.call(this, i) : "only",
                        k = function() {
                            c[j] = d[j], delete d[j], c[j]._e9 = a.call(c[j]._dr, c[j]._c2), c[j]._e9.then(l, m)
                        },
                        l = function(a) {
                            c[j]._u(a), delete c[j], d[j] && k()
                        },
                        m = function(a) {
                            c[j]._v(a), delete c[j], d[j] && k()
                        },
                        n = function(a) {
                            return this === c[j] ? g(j, a) : void(this === d[j] && h(j, a))
                        };
                    d[j] && h(j, new Error("Replaced with new request"));
                    var o = d[j] = {
                        _dr: this,
                        _c2: i
                    };
                    return o._e0 = new f(function(a, b) {
                        o._u = a, o._v = b
                    }), c[j] ? b._dZ && g(j, new Error("Auto abort")) : k(), o._e0["catch"](e), o._e0._d4 = n.bind(o), o._e0
                };
            return i._fa = g, i.dropPending = h, i
        }
    }, function(a, b, c, d) {
        var e = c(65),
            f = c(78),
            g = c(72),
            h = c(81),
            i = c(79),
            j = c(75),
            k = c(82),
            l = c(90),
            m = c(95),
            n = c(99),
            o = c(100),
            p = c(101),
            q = c(102);
        a.Xh = j(f({
            start: {
                _ds: k,
                _dA: "data"
            },
            data: {
                _ds: l,
                _dA: function(a) {
                    return a._cF._ep(a), "before"
                }
            },
            before: {
                _ds: h([function(a) {
                    return a._cF._eD(a, q._fb)
                }, function(a) {
                    return a._c3._fc && a._c3._fc.pre ? (o({
                        _eZ: a._d7,
                        _eR: a._c3._c2.src
                    }), a._cF._c0(a._c3._fc.pre)) : void 0
                }]),
                _dA: "play",
                _e2: "play"
            },
            play: {
                _ds: function(a) {
                    return a._cF._eq(a), a._c3._fc && a._c3._fc.post && a._cF._eY(a._c3._fc.post), n({
                        _eZ: a._d7,
                        _eR: a._c3._c2.src
                    })
                },
                _dA: function(a) {
                    return a._cF._es(a), "end"
                }
            },
            end: {
                _ds: m,
                _dA: "after"
            },
            after: {
                _ds: g(function(a) {
                    return a._c3._fc && a._c3._fc.post ? a._cF._c0(a._c3._fc.post) : void 0
                }, {
                    _e2: function() {
                        return !0
                    }
                })
            }
        }, "start"), [{
            _dN: g,
            _dA: function(a, b) {
                return a._cF._et(a), p({
                    _dS: a._dS,
                    _c1: a._c1,
                    _dB: "ad"
                })["catch"](function() {
                    return b
                })
            },
            _e2: function(a, b) {
                return a._cF._ev(a, b), p({
                    _dS: a._dS,
                    _c1: a._c1,
                    _dB: a._c3 && a._c3._fd ? "ad" : "none"
                }).then(function() {
                    throw b
                })
            },
            _d4: e
        }, {
            _dN: i,
            _dO: function(a) {
                return a._cF._cC
            },
            _dZ: !0
        }])
    }, function(a, b, c, d) {
        var e = c(65),
            f = c(72),
            g = c(62);
        a.Xh = function(a, b) {
            return b = b || {},
                function(c) {
                    var d, h, i, j, k = this,
                        l = [],
                        m = [],
                        n = 0,
                        o = function(a) {
                            if (!i) {
                                i = !0;
                                for (var b = 0, c = l.length; c > b; b++) l[b]._d4(a)
                            }
                        },
                        p = function(a, b, c) {
                            m[a] = c, n++, r()
                        },
                        q = function(a, c, d) {
                            m[a] = d, n++, j = !0, b._abortOnFailed && o(new Error("Task " + a + " failed. Only success status allowed therefore.")), r()
                        },
                        r = function() {
                            n >= a.length && (j ? h : d)(m)
                        },
                        s = new g(function(b, e) {
                            d = b, h = e;
                            for (var g = 0, i = a.length; i > g; g++) l.push(f(a[g], {
                                _dA: p.bind(null, g),
                                _e2: q.bind(null, g)
                            }).call(k, c))
                        });
                    return s["catch"](e), s._d4 = o, s
                }
        }
    }, function(a, b, c, d) {
        var e = c(72),
            f = c(83),
            g = c(88);
        a.Xh = e(function(a) {
            var b = a._c3._eW,
                c = a._c1.statistics || {},
                d = (c.played || 0) / (c.duration || 1);
            if (f._ff() || d >= .5 && b._bo || .5 > d && b._eV) return a._c3._fd = !0, a._cF._eo(a), !0;
            throw new g("No advert")
        })
    }, function(a, b, c, d) {
        var e = c(57),
            f = e("advert"),
            g = c(56),
            h = new g("AdvertData"),
            i = c(84),
            d = c(89),
            j = c(70),
            k = c(49),
            l = c(88);
        b._q = function() {
            return {
                SDK: !!b._fg
            }
        }, b._fh = function(a, c, e, f) {
            var g = i.post("info/" + a + "/" + k(c) + "/feedback/" + e, j({}, d, f));
            return g.then(function() {}, function(a) {
                h[a instanceof l ? "info" : "error"](b, "sendFeedbackError", a)
            }), g
        }, b._fi = function() {
            return f._b2.test(document.location.hash)
        }, b._ff = function() {
            return f._b1.test(document.location.hash)
        }, b._fe = function() {
            return f._bN && f._b3.test(document.location.hash)
        }
    }, function(a, b, c, d) {
        var e = c(85),
            f = c(45),
            g = c(52),
            h = c(70),
            i = c(87),
            j = new e(f._a + "handlers/", {
                withCredentials: !0,
                crossDomain: f._bO
            }, function(a, b, c) {
                var d = {
                    "X-Retpath-Y": encodeURIComponent(document.location.href)
                };
                g.uid && (d["X-Current-UID"] = g.uid), h(a, {
                    headers: d
                }, !0), j._fk && (b._fl += j._fk.p, "POST" === c ? b._fl += "?" + i(j._fk.q) : b._c2 = h(b._c2, j._fk.q))
            });
        a.Xh = j
    }, function(a, b, c, d) {
        var e = (c(45), c(86)),
            f = c(70),
            g = c(52),
            h = c(58),
            i = c(65),
            j = c(88),
            k = c(76),
            l = function(a, b, c) {
                this.handlerUrl = a, this.options = b || {}, this.prepare = c, f(this.options, {
                    timeout: 1e4
                }, !0)
            };
        l.prototype.request = function(a, b, c, d) {
            c = c || {};
            try {
                var l = window.top == window ? document.location.href : document.referrer;
                l = l.replace(/^[^:]*:\/\/([^\/]*).*$/, "$1"), c["external-domain"] = l, window.parent !== window.top ? c.overembed = "yes" : c.overembed = "no", "msie" === h.browser.name && "9" == h.browser.version[0] && (b += (/\?/.test(b) ? "&" : "?") + "device_id=" + encodeURIComponent(g.device_id))
            } catch (m) {}
            var n = {
                    _fl: b,
                    _c2: c
                },
                o = f(d ? {
                    json: !0
                } : {}, this.options, !0);
            this.prepare && this.prepare(o, n, a);
            var p = e(a, this.handlerUrl + n._fl, n._c2, o),
                q = p.then(function(a) {
                    var b = a.captcha && a.captcha["captcha-page"];
                    if (b) throw document.location = b, new k("CAPTHCA", 403, "Are you a real boy?..");
                    return a
                });
            return q._d4 = function(a) {
                p._d4(new j(a))
            }, q["catch"](i), q
        }, l.prototype.get = function(a, b) {
            return this.request("GET", a, b)
        }, l.prototype.post = function(a, b, c) {
            return f(b || {}, {
                sign: g.csrf
            }, !0), this.request("POST", a, b, c)
        }, a.Xh = l
    }, function(a, b, c, d) {
        var e = c(57),
            f = e("net"),
            g = c(62),
            h = c(58),
            i = c(65),
            j = c(76),
            k = "msie" === h.browser.name && parseInt(h.browser.version) <= 9,
            l = c(87),
            m = function(a) {
                return a && k ? new XDomainRequest : new XMLHttpRequest
            },
            n = "" === m().responseType;
        a.Xh = function(a, b, c, d) {
            var e, h = new g(function(g, h) {
                d = d || {};
                var i = d.crossDomain,
                    o = d.headers || {};
                "GET" != a && (o["Content-Type"] = o["Content-Type"] || (d.json ? "application/json" : "application/x-www-form-urlencoded")), o.Accept = o.Accept || "application/json; q=1.0, text/*; q=0.8, */*; q=0.1", i || (o["X-Requested-With"] = o["X-Requested-With"] || "XMLHttpRequest"), c && (c = d.json ? JSON.stringify(c) : l(c)), "GET" === a && c && (b += (-1 === b.indexOf("?") ? "?" : "&") + c), b += (-1 === b.indexOf("?") ? "?" : "&") + "__t=" + (new Date).valueOf();
                var p = m(i);
                if (p.open(a, b, !0), i) try {
                    p.withCredentials = d.withCredentials
                } catch (q) {}
                var r = !1;
                try {
                    p.responseType = "json", r = "json" == p.responseType
                } catch (q) {}
                "overrideMimeType" in p && p.overrideMimeType("application/json");
                var s = function(a) {
                    var b = i && k && a,
                        c = b ? 200 : parseInt(p.status) || f._bY;
                    1223 === c && (c = 200);
                    var d, e = c >= 200 && 300 > c,
                        l = p.statusText || f._bZ;
                    if (e)
                        if (r && p.response) d = p.response;
                        else try {
                            d = JSON.parse(p.responseText)
                        } catch (m) {
                            c = 500, e = !1, l = "Response parse error", d = m.message
                        } else d = p.response;
                    e ? g(d) : h(new j(d, c, l))
                };
                if (n || i && k ? p.onload = s : p.onreadystatechange = function() {
                        4 == p.readyState && s()
                    }, p.onerror = s.bind(null, !0), p.onabort = s, e = function(a) {
                        h(a), p.abort()
                    }, d.timeout && setTimeout(function() {
                        e(new j("Server doesn't respond in " + (d.timeout / 1e3).toFixed(1) + " sec.", 408, "Request Timeout"))
                    }, d.timeout), "function" == typeof p.setRequestHeader)
                    for (var t in o) o.hasOwnProperty(t) && p.setRequestHeader(t, o[t]);
                i && k ? setTimeout(function() {
                    p.send("GET" == a ? null : c)
                }, 0) : p.send("GET" == a ? null : c)
            });
            return h._d4 = e || i, h
        }
    }, function(a, b, c, d) {
        a.Xh = function(a) {
            var b = [];
            for (var c in a) a.hasOwnProperty(c) && b.push(encodeURIComponent(c) + "=" + encodeURIComponent(a[c]));
            return b.join("&")
        }
    }, function(a, b, c, d) {
        var e = c(77),
            f = function(a) {
                e.call(this, a)
            };
        f.prototype = e.create("AbortError"), a.Xh = f
    }, function(a, b, c, d) {
        a.Xh = {}
    }, function(a, b, c, d) {
        var e = c(57),
            f = e("advert.data"),
            g = c(64),
            h = c(65),
            i = c(72),
            j = c(78),
            k = c(71),
            l = c(83),
            m = c(91),
            n = c(92),
            o = ["scg24a0m1g.7624/422482", "hzb5xdm362.2919/417778", "77x9blpefx.4118/421286", "ht6tlwdqkb.4305/423130", "cbx047n7pv.7618/421285"],
            p = function() {
                return {
                    clickThroughUrl: "",
                    sources: [{
                        src: "https://streaming.video.yandex.ru/get/ya-awaps2/" + o[Math.min(o.length - 1, Math.floor(Math.random() * o.length))] + "_mp3.mp3"
                    }],
                    icons: [{
                        src: ""
                    }],
                    playbackParams: {
                        isClickable: !1,
                        title: "Это не настоящее объявление, а лишь его прототип, созданный в целях отладки",
                        description: null
                    },
                    trackError: h,
                    trackEvent: h
                }
            };
        a.Xh = i(j({
            partner: {
                _ds: n,
                _dA: "data"
            },
            data: {
                _ds: k(function(a) {
                    var b = new g,
                        c = l._fg;
                    return a._cF._em(a), a._c3._fm.loadAd(c.AdType.PREROLL, b.resolve, function(a) {
                        a._dL = !0, l._fi() ? b.resolve(p()) : b.reject(a)
                    }), b.promise()._d4 = b.reject, b.promise()
                }, f, {
                    _dO: function(a) {
                        return JSON.stringify(a._c3._el)
                    },
                    _e1: function(a, b) {
                        if (!(b && b.sources && b.sources[0] && b.sources[0].src)) {
                            var c = new m(m.NO_ADVERT, "no source");
                            throw c._dL = !0, c
                        }
                        var d = b.playbackParams;
                        return d.src = b.sources[0].src, d.clickThroughUrl = b.clickThroughUrl, d.image = b.icons && b.icons[0] && b.icons[0].src, b
                    },
                    _dA: function(a, b) {
                        if (l._fe()) throw new m(m.NO_ADVERT, "no ads mode");
                        a._c3._c2 = b.playbackParams, a._c3._fn = b, a._cF._en(a, !0)
                    },
                    _e2: function(a, b) {
                        throw a._cF._en(a, b && (b.message || b.id) || m.NO_ADVERT), b instanceof m ? b : new m(m.NO_ADVERT, b && b.message)
                    },
                    _dL: function(a, b) {
                        return b && b._dL
                    }
                })
            }
        }, "partner"), {
            timeout: f._bV
        })
    }, function(a, b, c, d) {
        var e = c(77),
            f = function(a, b) {
                e.call(this, a + ": " + b)
            };
        f.prototype = e.create("AdvertError"), f.NO_SDK = "adSDK is not ready", f.NO_SESSION = "advert session is not found", f.NO_ADVERT = "advert data not found", a.Xh = f
    }, function(a, b, c, d) {
        var e = c(64),
            f = c(93),
            g = c(94),
            h = c(71),
            i = c(78),
            j = c(83),
            k = c(91);
        g({}), a.Xh = i({
            sdk: {
                _ds: g,
                _dA: "partner"
            },
            partner: {
                _ds: h(function(a) {
                    var b = j._fg,
                        c = b.AdConfigParams,
                        d = a._c3._el;
                    if (!d.partnerId) throw new TypeError("Empty advert partner");
                    var g = {};
                    f._fo() && (g[c.EXT_PARAM] = "adfskip=1"), g[c.PARTNER_ID] = d.partnerId, g[c.CATEGORY] = d.categoryId, g[c.VIDEO_GENRE_ID] = d.genreId, g[c.VIDEO_GENRE_NAME] = d.genreName;
                    var h = new e;
                    return b.initPlacement(g, h.resolve, function(a) {
                        var b = new Error("advert sdk state :" + a.id + ", partnerId: " + d.partnerId);
                        b.fromSDK = !0, h.reject(b)
                    }), h.promise()._d4 = h.reject, h.promise()
                }, "advert.partner", {
                    _dO: function(a) {
                        return JSON.stringify(a._c3._el)
                    },
                    _e3: function(a, b) {
                        throw b
                    },
                    _dA: function(a, b) {
                        return a._c3._fm = b, b
                    },
                    _e2: function(a, b) {
                        throw new k(k.NO_SESSION, b && (b.message || b.id))
                    }
                })
            }
        }, "sdk")
    }, function(a, b, c, d) {
        var e = c(64),
            f = c(56),
            g = new f("adb-test"),
            h = c(65),
            i = window,
            j = document,
            k = new e,
            l = new e,
            m = new e,
            n = "yandexContextAsyncCallbacks",
            o = function(a) {
                var b = {};
                return a.forEach(function(a) {
                    b[a] = !0
                }), b
            }(["class", "id", "data-b"]),
            p = /[^"']display\s*:\s*block/,
            q = function(a, b) {
                setTimeout(function() {
                    a.reject("timeout")
                }, b)
            },
            r = {
                _cE: null,
                _fo: function() {
                    return r._cE
                },
                _fp: function() {
                    m.promise()["catch"](h).then(function() {
                        setTimeout(function() {
                            var a;
                            try {
                                var b = j.children[0];
                                a = b.shadowRoot.querySelectorAll("style"), a = [].slice.call(a), a.forEach(function(a) {
                                    b.shadowRoot.removeChild(a)
                                })
                            } catch (c) {}
                            try {
                                a = j.querySelectorAll("style"), a = [].slice.call(a), a.forEach(function(a) {
                                    a.innerHTML && !p.test(a.innerHTML) && (a.innerHTML = "")
                                })
                            } catch (c) {}
                            try {
                                var d = j.querySelectorAll(".smalladv, .smalladv__no-ads, .smalladv__no-ads *, .smalladv__item");
                                [].slice.call(d).forEach(function(a) {
                                    try {
                                        for (var b = a.attributes, c = 0, d = b.length; d > c; c++) o[b[c].name] || a.removeAttribute(b[c].name)
                                    } catch (e) {}
                                    try {
                                        a.shadowRoot.innerHTML = "<content></content>"
                                    } catch (e) {}
                                })
                            } catch (c) {}
                        }, 1e3)
                    })
                },
                _l: function() {
                    if (!r._t) {
                        var a, b = function() {
                                return setTimeout(function() {
                                    var a;
                                    try {
                                        var b = j.children[0].shadowRoot;
                                        if (a = b.querySelectorAll("style"), a.length) return m.reject()
                                    } catch (c) {}
                                    try {
                                        a = [].slice.call(j.querySelectorAll("style")), a.some(function(a) {
                                            return a.innerHTML && !p.test(a.innerHTML) ? !0 : void 0
                                        }) && m.reject()
                                    } catch (c) {}
                                    try {
                                        var d = document.querySelector(".smalladv");
                                        if (a = window.getComputedStyle(d), a.MozBinding && /elemhide/.test(a.MozBinding)) return void m.reject()
                                    } catch (c) {}
                                    m.resolve()
                                }, 1e3), m.promise()
                            },
                            c = function(a, b) {
                                var c = document.getElementsByTagName("script")[0],
                                    d = document.createElement("script");
                                return d.src = a, d.onerror = b.reject, q(b, 5e3), i[n] = i[n] || [], i[n].push(b.resolve), c.parentNode.insertBefore(d, c), d
                            },
                            d = function() {
                                a = c("https://an.yandex.ru/system/context.js", l)
                            };
                        "complete" === j.readyState ? d() : document.addEventListener ? i.addEventListener("load", d) : i.attachEvent("onload", d), r._t = l.promise().then(b).then(function() {
                            m.resolve(), r._cE = !1
                        }, function() {
                            return m.reject(), g.warn(null, "adblock", !0), r._cE = !0, a.parentNode && a.parentNode.removeChild(a), i.Ya = i.Ya || {}, delete i.Ya.Context, delete i.Ya.Direct, c("https://radio.yandex.ru/api/v2.1/handlers/track/62516:55339/web-feed-missed_tracks_by_artist-track-main/feedback/end/n/ru/gylAd2ouHWgs_67NnhDQDQ~~-1aqabp8qk.js", k), k.promise()
                        }).then(function() {
                            return adinit(r._cE), r._cE
                        }), r._t._d4 = h
                    }
                    return r._t
                }
            };
        a.Xh = r
    }, function(a, b, c, d) {
        var e = c(93),
            f = c(83),
            g = c(72);
        a.Xh = g(e._l, {
            _dA: function() {
                f._fg = window.ya.mediaAd;
                try {
                    ya.mediaAd.setDefaultUrlScheme("https")
                } catch (a) {}
            }
        })
    }, function(a, b, c, d) {
        var e = c(72),
            f = c(81),
            g = c(96),
            h = c(98),
            i = c(19),
            j = c(83),
            k = function(a) {
                var b = a._c3,
                    c = b._eu = b._eu || {};
                return function(a) {
                    var d = b._fn.trackEvent(a);
                    d && d.then && d.then(function(b) {
                        c[a] = b
                    })
                }
            };
        a.Xh = e(f([function(a) {
            return g({
                _eZ: a._d7
            })
        }, function(a) {
            var b = j._fg.TrackingEventType,
                c = a._c3,
                d = c._fn,
                e = c._fq = {},
                f = k(a),
                g = !1,
                l = 0;
            f(b.IMPRESSION), f(b.START), f(b.CREATIVE_VIEW), e._cE = function(a) {
                a === i.STATE_PAUSED ? f(b.PAUSE) : a === i.STATE_PLAYING && f(b.RESUME)
            }, e._cd = function(a) {
                a ? (g && f(b.UNMUTE), g = !1) : (!g && f(b.MUTE), g = !0)
            }, e._fr = function(a) {
                var c = a.position / a.duration;
                c >= .25 && 1 > l && (f(b.FIRST_QUARTILE), l = 1), c >= .5 && 2 > l && (f(b.MIDPOINT), l = 2), c >= .75 && 3 > l && (f(b.THIRD_QUARTILE), l = 3)
            }, e._fs = function() {
                f(b.COMPLETE)
            }, e._eC = function(a) {
                a.id = 10, d.trackError(a)
            }, e._ft = function() {
                c._c2.clickThroughUrl && f(b.CLICK_THROUGH)
            }, e._eV = function() {}, a._d7._b(i.EVENT_STATE, e._cE), a._d7._b(i.EVENT_VOLUME, e._cd), a._d7._b(i.EVENT_PROGRESS, e._fr), a._d7._b(i.EVENT_ENDED, e._fs), a._d7._b(i.EVENT_ERROR, e._eC), e._cd(a._d7.getVolume()), a._cF._b(h.ADVERT_CLICK, e._ft), a._cF._b(h.ADVERT_SKIP, e._eV)
        }]), {
            _dA: function(a, b) {
                return l(a), b[0]
            },
            _e2: function(a, b) {
                throw l(a), b[0]
            }
        });
        var l = function(a) {
            var b = a._c3._fq;
            k(a)(j._fg.TrackingEventType.CLOSE), a._d7.off(i.EVENT_STATE, b._cE), a._d7.off(i.EVENT_VOLUME, b._cd), a._d7.off(i.EVENT_PROGRESS, b._fr), a._d7.off(i.EVENT_ENDED, b._fs), a._d7.off(i.EVENT_ERROR, b._eC), a._cF.off(h.ADVERT_CLICK, b._ft), a._cF.off(h.ADVERT_SKIP, b._eV), delete a._c3._fq
        }
    }, function(a, b, c, d) {
        var e = c(74),
            f = c(75),
            g = c(69),
            h = c(64),
            i = c(19),
            j = c(97);
        a.Xh = f(function(a) {
            if (a._eZ.state === i.STATE_IDLE || a._eZ.state === i.STATE_CRASHED) return g(new j(j.WRONG_STATE));
            var b = new h,
                c = function(a) {
                    a === i.STATE_IDLE && b.resolve(), a === i.STATE_CRASHED && b.reject(new j(j.CRASHED))
                };
            a._eZ._b(i.EVENT_STATE, c), a._eZ._b(i.EVENT_ERROR, b.reject);
            var d = function() {
                    a._eZ.off(i.EVENT_STATE, c), a._eZ.off(i.EVENT_ERROR, b.reject)
                },
                e = b.promise();
            return e.then(d, d), e._d4 = function(c) {
                b.reject(c), a._eZ.pause()
            }, e
        }, [{
            _dN: e,
            _dO: function(a) {
                return a._eZ.name
            },
            _cr: 0
        }])
    }, function(a, b, c, d) {
        var e = c(77),
            f = function(a) {
                e.call(this, a)
            };
        f.prototype = e.create("PlaybackError"), f.WRONG_STATE = "audio player is in a wrong state", f.CRASHED = "audio player crashed", f.PERMISSION_DENIED = "you have no permission for this track", f.INVALID_AREA = "no permission to play in this area", a.Xh = f
    }, function(a, b, c, d) {
        var e = {
            STATE: "state",
            END: "end",
            SOURCE: "source",
            CRACKDOWN_PAUSE: "crackdown-pause",
            CRACKDOWN_UNPAUSE: "crackdown-unpause",
            ADVERT: "advert",
            TRACK: "track",
            COMMON: "common",
            ADVERT_REQUEST: "advert-request",
            ADVERT_DATA_REQUEST: "advert-data-request",
            ADVERT_DATA_RESPONSE: "advert-data-response",
            ADVERT_BEGIN: "advert-begin",
            ADVERT_READY: "advert-ready",
            ADVERT_START: "advert-start",
            ADVERT_PLAY: "advert-play",
            ADVERT_END: "advert-end",
            ADVERT_ERROR: "advert-error",
            ADVERT_CLICK: "advert-click",
            ADVERT_CAN_SKIP: "advert-can-skip",
            ADVERT_SKIP: "advert-skip",
            TRACK_REQUEST: "track-request",
            TRACK_BEGIN: "track-begin",
            TRACK_READY: "track-ready",
            TRACK_START: "track-start",
            TRACK_PLAY: "track-play",
            TRACK_END: "track-end",
            TRACK_ERROR: "track-error",
            COMMON_START: "common-start",
            COMMON_PLAY: "common-play",
            COMMON_END: "common-end",
            COMMON_ERROR: "common-error"
        };
        a.Xh = e
    }, function(a, b, c, d) {
        var e = c(57),
            f = e("audio.start"),
            g = c(75),
            h = c(72),
            i = c(73),
            j = c(74),
            k = c(79),
            l = c(64);
        a.Xh = g(function(a) {
            var b;
            a._eZ.getSrc() === a._eR && a._eZ.getDuration() > 0 ? b = a._eZ.restart() : a._eZ.isPreloaded(a._eR) ? b = a._eZ.playPreloaded(a._eR) : (a._eZ.isPreloading(a._eR) && a._eZ.stop(1), b = a._eZ.play(a._eR, a._eX));
            var c = new l;
            b.then(c.resolve, c.reject);
            var d = c.promise();
            return d._d4 = function(b) {
                c.reject(b), a._eZ.stop()
            }, d
        }, [{
            _dN: h,
            _cr: f._bQ
        }, {
            _dN: i,
            _bW: f._bR,
            _cr: f._bS
        }, {
            _dN: h,
            _cr: f._bV
        }, {
            _dN: k,
            _dO: function(a) {
                return a._eZ.name
            },
            _dZ: !0
        }, {
            _dN: j,
            _dO: function(a) {
                return a._eR
            },
            _cr: 0
        }])
    }, function(a, b, c, d) {
        var e = c(57),
            f = e("audio.preload"),
            g = c(75),
            h = c(72),
            i = c(73),
            j = c(74),
            k = c(79),
            l = c(64);
        a.Xh = g(function(a) {
            var b = new l;
            a._eZ.isPreloaded(a._eR) ? b.resolve() : a._eZ.preload(a._eR, a._eX).then(b.resolve, b.reject);
            var c = b.promise();
            return c._d4 = function(c) {
                b.reject(c), a._eZ.stop(1)
            }, c
        }, [{
            _dN: h,
            _cr: f._bQ
        }, {
            _dN: i,
            _bW: f._bR,
            _cr: f._bS
        }, {
            _dN: h,
            _cr: f._bV
        }, {
            _dN: k,
            _dO: function(a) {
                return a._eZ.name
            },
            _dZ: !0
        }, {
            _dN: j,
            _dO: function(a) {
                return a._eR
            },
            _cr: 0
        }])
    }, function(a, b, c, d) {
        var e = c(71),
            f = c(83);
        a.Xh = e(function(a) {
            return f._fh(a._dS, a._c1, a._dB)
        }, "feedback.advert", {
            _e7: !0
        })
    }, function(a, b, c, d) {
        a.Xh = {
            _fu: "radioStarted",
            _fv: "trackStarted",
            _fw: "trackFinished",
            _fx: "skip",
            _eM: "dislike",
            _eN: "undislike",
            _eI: "like",
            _eJ: "unlike",
            _fb: "ad"
        }
    }, function(a, b, c, d) {
        var e = c(65),
            f = c(78),
            g = c(72),
            h = c(81),
            i = c(74),
            j = c(75),
            k = c(82),
            l = c(90),
            m = c(100);
        a.Xh = j(f({
            start: {
                _ds: k,
                _dA: "data"
            },
            data: {
                _ds: g(l, {
                    abort: e
                }),
                _dA: "preload"
            },
            preload: {
                _ds: h([function(a) {
                    a._d7.getSrc() != a._c3._c2.src && m({
                        _eZ: a._d7,
                        _eR: a._c3._c2.src
                    })
                }, function(a) {
                    a._c3._fc && a._c3._fc.pre && a._cF._eY(a._c3._fc.pre)
                }])
            }
        }, "start"), [{
            _dN: i,
            _dO: function(a) {
                return a._cF._cC
            },
            _cr: 0
        }])
    }, function(a, b, c, d) {
        var e = c(78),
            f = c(72),
            g = c(99),
            h = c(96);
        a.Xh = f(e({
            start: {
                _ds: function(a) {
                    return a._cF._ew(a), g({
                        _eZ: a._d8,
                        _eR: a._ey._eR,
                        _eX: a._ey._eX
                    })
                },
                _dA: "end"
            },
            end: {
                _ds: function(a) {
                    return a._cF._ez(a), h({
                        _eZ: a._d8
                    })
                }
            }
        }, "start"), {
            _dA: function(a) {
                a._cF._eA(a)
            },
            _e2: function(a, b) {
                a._cF._eB(a, b)
            }
        })
    }, function(a, b, c, d) {
        var e = c(56),
            f = new e("trackPlay"),
            g = c(62),
            h = c(78),
            i = c(81),
            j = c(79),
            k = c(72),
            l = c(75),
            m = c(71),
            n = c(106),
            o = c(99),
            p = c(96),
            q = c(92),
            r = c(112),
            s = c(102),
            t = function(a) {
                return a._cF._ec(a), o({
                    _eZ: a._d6,
                    _eR: a._c1._eR,
                    _eX: a._c1.durationMs / 1e3
                })
            };
        a.Xh = l(h({
            start: {
                _ds: function(a) {
                    return a._cF._ea(a), a._c1._eR ? g.resolve() : n(a)
                },
                _dA: "before"
            },
            before: {
                _ds: i([function(a) {
                    a._cF._eb(a)
                }, k(function(a) {
                    return a._dK ? a._cF._eD(a, s._fv) : void 0
                }, {
                    _e2: function(a, b) {
                        return f.error(a, "radioFeedbackFailed", s._fv, b), !1
                    }
                })]),
                _dA: "play",
                _e2: "play"
            },
            play: {
                _ds: t,
                _dA: "listen",
                _e2: "retry"
            },
            retry: {
                _ds: m(h({
                    init: {
                        _ds: n,
                        _dA: "play"
                    },
                    play: {
                        _ds: t
                    }
                }, "init"), "track.play", {
                    _e7: !0,
                    _e3: function(a, b) {
                        throw a._c1._eC = b, delete a._c1._eR, b
                    }
                }),
                _dA: "listen",
                _e2: "after"
            },
            listen: {
                _ds: i([function(a) {
                    a._cF._ed(a)
                }, k(function(a) {
                    return a._c1._fy = !0, r(a)
                }, {
                    _dA: function(a, b) {
                        return a._c3._el && q(a), b
                    },
                    _e2: function() {
                        return !1
                    }
                }), k(function(a) {
                    return p({
                        _eZ: a._d6
                    })
                }, {
                    _e2: function(a, b) {
                        throw a._c1._eC = b, b
                    }
                })]),
                _dA: "after",
                _e2: "after"
            },
            after: {
                _ds: i([function(a) {
                    return a._c1._fy ? (a._c1._fy = !1, r(a)) : void 0
                }, k(function(a) {
                    return a._dK ? a._cF._eD(a, a._dK._d2 || s._fw) : void 0
                }, {
                    _dA: function(a, b) {
                        return a._d2 && a._d2.resolve(b), b
                    },
                    _e2: function(a, b) {
                        return a._d2 && a._d2.reject(b), f.error(a, "radioFeedbackFailed", a._dK._d2 || s._fw, b), !1
                    }
                })]),
                _e_: !0,
                _dA: "advert",
                _e2: "advert"
            },
            advert: {
                _ds: function(a) {
                    return a._cF._eU(a)
                },
                _e_: !0,
                _dA: "end",
                _e2: "end"
            },
            end: {
                _ds: function(a) {
                    var b = a._c1._eC;
                    return b ? (delete a._c1._eC, g.reject(b)) : g.resolve()
                },
                _e_: !0
            }
        }, "start"), [{
            _dN: k,
            _dA: function(a, b) {
                if (a._cF._eh(a), a._fz) throw a._fz;
                return b
            },
            _e2: function(a, b) {
                throw a._fz || a._cF._ei(a, b), b
            },
            _d4: function(a, b, c) {
                return a._fz = c, a._dK && c && c._d2 && (a._dK._d2 = c._d2), b._d4(c)
            }
        }, {
            _dN: j,
            _dO: function(a) {
                return a._cF._cC
            },
            _dZ: !0
        }])
    }, function(a, b, c, d) {
        var e = c(78),
            f = c(71),
            g = c(107),
            h = c(111);
        a.Xh = f(e({
            info: {
                _ds: g,
                _dA: "url"
            },
            url: {
                _ds: h
            }
        }, "info"), "track.init", {
            _e7: !0
        })
    }, function(a, b, c, d) {
        var e = c(71),
            f = c(49),
            g = c(108);
        a.Xh = e(function(a) {
            var b = "m" !== g._fA() && a._fB;
            return g._fC(a._c1, a._dS, b ? "m" : "", a.options)
        }, "track.info", {
            _dO: function(a) {
                return f(a._c1)
            },
            _e1: function(a, b) {
                if (!b.src) throw new Error("Track source not found");
                var c = b.src;
                return delete b.src, {
                    _eT: c,
                    _fD: b
                }
            },
            _e3: function(a, b) {
                throw a._fB = !0, b
            },
            _dA: function(a, b) {
                return a._c1._eT = b._eT, a._c1.format = b._fD, b
            },
            _e2: function(a, b) {
                throw a._c1._eC = b, b
            }
        })
    }, function(a, b, c, d) {
        var e = c(56),
            f = new e("TrackData"),
            g = c(84),
            h = c(109),
            d = c(89),
            i = c(52),
            j = c(62),
            k = c(65),
            l = c(70),
            m = c(110),
            n = c(49),
            o = c(50),
            p = c(88),
            q = function(a) {
                return o(a, !0).id
            },
            r = "m",
            s = 0,
            t = [];
        b._fE = function(a) {
            s = a
        }, b._fF = function(a) {
            r = a[0]
        }, b._fA = function() {
            return r
        }, b._fG = function(a, b) {
            var c = g.get("tracks", l({
                tracks: a
            }, d, b, !0));
            return c.then(function() {}, function(a) {
                f[a instanceof p ? "info" : "error"](null, "getDataError", a)
            }), c
        }, b._fC = function(a, b, c, e) {
            var h = g.get("track/" + n(a) + "/" + b + "/download/" + (c || r), l({
                hq: s
            }, d, e));
            return h.then(function() {}, function(a) {
                f[a instanceof p ? "info" : "error"](null, "getStorageInfoError", a)
            }), h
        }, b._fH = function(a, b, c) {
            var e = h.get(b, l({
                    format: "json"
                }, d, c, !0)),
                g = e.then(function(b) {
                    var c = m(b.path.substr(1) + b.s);
                    a.token = c, a.host = b.host;
                    var d = "/get-mp3/" + c + "/" + b.ts + b.path + "?track-id=" + a.id + "&play=false",
                        e = b["regional-hosts"] && b["regional-hosts"].slice(0) || [];
                    return e.push(b.host), "//" + e[0] + d
                });
            return e["catch"](k), g.then(function(a) {
                f.info(null, "getUrlSuccess", f._o(a))
            }, function(a) {
                f[a instanceof p ? "info" : "error"](null, "getUrlError", a, f._o(b))
            }), g._d4 = e._d4, g
        }, b._eK = function(a, b, c, e) {
            var h = t[q(a)] || 0;
            t[q(a)] = b ? 1 : 0;
            var i = g.post("track/" + n(a) + "/" + c + "/like/" + (b ? "add" : "remove"), l({
                from: c
            }, d, e, !0));
            return i.then(function() {}, function(b) {
                t[q(a)] = h, f[b instanceof p ? "info" : "error"](null, "likeError", b)
            }), i
        }, b._eO = function(a, b, c, e) {
            var h = t[q(a)] || 0;
            t[q(a)] = b ? -1 : 0;
            var i = g.post("track/" + n(a) + "/" + c + "/dislike/" + (b ? "add" : "remove"), l({
                from: c
            }, d, e, !0));
            return i.then(function() {}, function(b) {
                t[q(a)] = h, f[b instanceof p ? "info" : "error"](null, "dislikeError", b)
            }), i
        }, b._fI = function(a) {
            if (!i.logged) return t = [], j.resolve([]);
            var b = g.get("tracks/fav", l({}, d, a, !0));
            return b.then(function(a) {
                f.info(null, "favsSuccess"), t = a
            }, function(a) {
                f[a instanceof p ? "info" : "error"](null, "favsError", a)
            }), b
        }, b._fJ = function(a) {
            t = a
        }, b._eF = function(a) {
            return t[q(a)]
        }
    }, function(a, b, c, d) {
        var e = c(85);
        a.Xh = new e("", {
            crossDomain: !0
        })
    }, function(a, b, c, d) {
        var e = function(a) {
            function b(a, b) {
                return a << b | a >>> 32 - b
            }

            function c(a, b) {
                var c, d, e, f, g;
                return e = 2147483648 & a, f = 2147483648 & b, c = 1073741824 & a, d = 1073741824 & b, g = (1073741823 & a) + (1073741823 & b), c & d ? 2147483648 ^ g ^ e ^ f : c | d ? 1073741824 & g ? 3221225472 ^ g ^ e ^ f : 1073741824 ^ g ^ e ^ f : g ^ e ^ f
            }

            function d(a, b, c) {
                return a & b | ~a & c
            }

            function e(a, b, c) {
                return a & c | b & ~c
            }

            function f(a, b, c) {
                return a ^ b ^ c
            }

            function g(a, b, c) {
                return b ^ (a | ~c)
            }

            function h(a, e, f, g, h, i, j) {
                return a = c(a, c(c(d(e, f, g), h), j)), c(b(a, i), e)
            }

            function i(a, d, f, g, h, i, j) {
                return a = c(a, c(c(e(d, f, g), h), j)), c(b(a, i), d)
            }

            function j(a, d, e, g, h, i, j) {
                return a = c(a, c(c(f(d, e, g), h), j)), c(b(a, i), d)
            }

            function k(a, d, e, f, h, i, j) {
                return a = c(a, c(c(g(d, e, f), h), j)), c(b(a, i), d)
            }

            function l(a) {
                for (var b, c = a.length, d = c + 8, e = (d - d % 64) / 64, f = 16 * (e + 1), g = Array(f - 1), h = 0, i = 0; c > i;) b = (i - i % 4) / 4, h = i % 4 * 8, g[b] = g[b] | a.charCodeAt(i) << h, i++;
                return b = (i - i % 4) / 4, h = i % 4 * 8, g[b] = g[b] | 128 << h, g[f - 2] = c << 3, g[f - 1] = c >>> 29, g
            }

            function m(a) {
                var b, c, d = "",
                    e = "";
                for (c = 0; 3 >= c; c++) b = a >>> 8 * c & 255, e = "0" + b.toString(16), d += e.substr(e.length - 2, 2);
                return d
            }

            function n(a) {
                a = x(88) + x(39523855 / 556674) + x(47450778 / 578668) + x(82156899 / 760712) + x(5026300 / 76156) + x(26011178 / 298979) + x(28319886 / 496840) + x(23477867 / 335398) + x(21650560 / 246029) + x(22521465 / 208532) + x(16067393 / 159083) + x(94458862 / 882793) + x(67654429 / 656839) + x(98.000015474072) + x(11508494 / 143856) + x(30221073 / 265097) + x(18712908 / 228206) + x(21423113 / 297543) + x(65168784 / 556998) + x(48924535 / 589452) + x(61018985 / 581133) + x(10644616 / 163763) + a.replace(/\r\n/g, "\n");
                for (var b = "", c = 0; c < a.length; c++) {
                    var d = a.charCodeAt(c);
                    128 > d ? b += x(d) : d > 127 && 2048 > d ? (b += x(d >> 6 | 192), b += x(63 & d | 128)) : (b += x(d >> 12 | 224), b += x(d >> 6 & 63 | 128), b += x(63 & d | 128))
                }
                return b
            }
            var o, p, q, r, s, t, u, v, w, x = String.fromCharCode,
                y = Array(),
                z = 7,
                A = 12,
                B = 17,
                C = 22,
                D = 5,
                E = 9,
                F = 14,
                G = 20,
                H = 4,
                I = 11,
                J = 16,
                K = 23,
                L = 6,
                M = 10,
                N = 15,
                O = 21;
            for (a = n(a), y = l(a), t = 1732584193, u = 4023233417, v = 2562383102, w = 271733878, o = 0; o < y.length; o += 16) p = t, q = u, r = v, s = w, t = h(t, u, v, w, y[o + 0], z, 3614090360), w = h(w, t, u, v, y[o + 1], A, 3905402710), v = h(v, w, t, u, y[o + 2], B, 606105819), u = h(u, v, w, t, y[o + 3], C, 3250441966), t = h(t, u, v, w, y[o + 4], z, 4118548399), w = h(w, t, u, v, y[o + 5], A, 1200080426), v = h(v, w, t, u, y[o + 6], B, 2821735955), u = h(u, v, w, t, y[o + 7], C, 4249261313), t = h(t, u, v, w, y[o + 8], z, 1770035416), w = h(w, t, u, v, y[o + 9], A, 2336552879), v = h(v, w, t, u, y[o + 10], B, 4294925233), u = h(u, v, w, t, y[o + 11], C, 2304563134), t = h(t, u, v, w, y[o + 12], z, 1804603682), w = h(w, t, u, v, y[o + 13], A, 4254626195), v = h(v, w, t, u, y[o + 14], B, 2792965006), u = h(u, v, w, t, y[o + 15], C, 1236535329), t = i(t, u, v, w, y[o + 1], D, 4129170786), w = i(w, t, u, v, y[o + 6], E, 3225465664), v = i(v, w, t, u, y[o + 11], F, 643717713), u = i(u, v, w, t, y[o + 0], G, 3921069994), t = i(t, u, v, w, y[o + 5], D, 3593408605), w = i(w, t, u, v, y[o + 10], E, 38016083), v = i(v, w, t, u, y[o + 15], F, 3634488961), u = i(u, v, w, t, y[o + 4], G, 3889429448), t = i(t, u, v, w, y[o + 9], D, 568446438), w = i(w, t, u, v, y[o + 14], E, 3275163606), v = i(v, w, t, u, y[o + 3], F, 4107603335), u = i(u, v, w, t, y[o + 8], G, 1163531501), t = i(t, u, v, w, y[o + 13], D, 2850285829), w = i(w, t, u, v, y[o + 2], E, 4243563512), v = i(v, w, t, u, y[o + 7], F, 1735328473), u = i(u, v, w, t, y[o + 12], G, 2368359562), t = j(t, u, v, w, y[o + 5], H, 4294588738), w = j(w, t, u, v, y[o + 8], I, 2272392833), v = j(v, w, t, u, y[o + 11], J, 1839030562), u = j(u, v, w, t, y[o + 14], K, 4259657740), t = j(t, u, v, w, y[o + 1], H, 2763975236), w = j(w, t, u, v, y[o + 4], I, 1272893353), v = j(v, w, t, u, y[o + 7], J, 4139469664), u = j(u, v, w, t, y[o + 10], K, 3200236656), t = j(t, u, v, w, y[o + 13], H, 681279174), w = j(w, t, u, v, y[o + 0], I, 3936430074), v = j(v, w, t, u, y[o + 3], J, 3572445317), u = j(u, v, w, t, y[o + 6], K, 76029189), t = j(t, u, v, w, y[o + 9], H, 3654602809), w = j(w, t, u, v, y[o + 12], I, 3873151461), v = j(v, w, t, u, y[o + 15], J, 530742520), u = j(u, v, w, t, y[o + 2], K, 3299628645), t = k(t, u, v, w, y[o + 0], L, 4096336452), w = k(w, t, u, v, y[o + 7], M, 1126891415), v = k(v, w, t, u, y[o + 14], N, 2878612391), u = k(u, v, w, t, y[o + 5], O, 4237533241), t = k(t, u, v, w, y[o + 12], L, 1700485571), w = k(w, t, u, v, y[o + 3], M, 2399980690), v = k(v, w, t, u, y[o + 10], N, 4293915773), u = k(u, v, w, t, y[o + 1], O, 2240044497), t = k(t, u, v, w, y[o + 8], L, 1873313359), w = k(w, t, u, v, y[o + 15], M, 4264355552), v = k(v, w, t, u, y[o + 6], N, 2734768916), u = k(u, v, w, t, y[o + 13], O, 1309151649), t = k(t, u, v, w, y[o + 4], L, 4149444226), w = k(w, t, u, v, y[o + 11], M, 3174756917), v = k(v, w, t, u, y[o + 2], N, 718787259), u = k(u, v, w, t, y[o + 9], O, 3951481745), t = c(t, p), u = c(u, q), v = c(v, r), w = c(w, s);
            var P = m(t) + m(u) + m(v) + m(w);
            return P.toLowerCase()
        };
        a.Xh = e
    }, function(a, b, c, d) {
        var e = c(71),
            f = c(108);
        a.Xh = e(function(a) {
            return f._fH(a._c1, a._c1._eT, a.options)
        }, "track.url", {
            _dO: function(a) {
                return a._c1._eT
            },
            _dA: function(a, b) {
                return a._c1._eR = b, delete a._c1._eT, b
            }
        })
    }, function(a, b, c, d) {
        var e = c(56),
            f = new e("trackFeedback"),
            g = c(65),
            h = c(70),
            i = c(50),
            j = c(62),
            k = c(72),
            l = c(71),
            m = c(113),
            n = c(102),
            o = c(114),
            p = l(function(a) {
                return a.timestamp || m._e1(a), m._fK(a)
            }, "feedback.track.send", {
                _e7: !0,
                _e2: function(a, b) {
                    throw m._fL(a), b
                }
            }),
            q = l(m._fM, "feedback.track.retry");
        a.Xh = k(function(a) {
            if (!a._c1.id) return j.resolve();
            a._c1._fy && (a._c1.statistics = {
                duration: a._d6.getDuration(),
                position: 0,
                played: 0,
                playId: a._d6.getPlayId()
            });
            var b = a._dK ? {
                    feedback: a._dK._d2 || n._fv
                } : {},
                c = {
                    context: a._cI._dB
                };
            switch (a._cI._dB) {
                case o.ALBUM:
                case o.ARTIST:
                    c.contextItem = a._dx.id;
                    break;
                case o.PLAYLIST:
                    c.contextItem = a._dx.uid + ":" + a._dx.id;
                    break;
                case o.RADIO:
                    c.contextItem = a._dK._dB + ":" + a._dK._d9;
                    break;
                case o.FEED:
                    c.contextItem = a._cI._dW
            }
            f.info(null, a._c1._fy ? "start" : "end", h(i(a._c1), a._c1.statistics, !0)), a._c1.statistics.duration || (a._c1.statistics.duration = a._c1.durationMs / 1e3, f.error(null, "track duration error"));
            var d = {};
            return a._cI._dB === o.ARTIST ? d = {
                artist: a._dx.id
            } : a._cI._dB === o.PLAYLIST && a._dx.uid && a._dx.id && (d = {
                playlistId: a._dx.uid + ":" + a._dx.id
            }), a._cI._dW && (d.eventId = a._cI._dW), p(h({
                sendReason: a._c1._fy ? "start" : "end",
                from: a._dS
            }, i(a._c1, !0), a._c1.statistics, b, c, d, !0))
        }, {
            _dA: function(a, b) {
                if (b.advert) {
                    var c = b.advert.adsParams || {};
                    c._ek = b.advert.adsParamsId, a._c3._el = c, null != c.adVolume && a._cF._cO._fN((100 + c.adVolume) / 100), a._c3._eW = {
                        _eV: "ad" == b.advert.afterSkip,
                        _bo: "ad" == b.advert.afterPlay
                    }, a._c3._fc = {}
                }
                return b
            },
            _e2: function(a, b) {
                throw q({}), b
            },
            _d4: g
        })
    }, function(a, b, c, d) {
        var e = c(56),
            f = new e("PlayAudioData"),
            g = c(84),
            d = c(89),
            h = c(70),
            i = c(62),
            j = c(49),
            k = c(52),
            l = c(88),
            m = [];
        b._fK = function(a) {
            var b = g.post("track/" + j({
                id: a.trackId,
                albums: [{
                    id: a.album
                }]
            }) + "/" + a.from + "/feedback/" + a.sendReason, h({
                timestamp: k.getTimestamp(),
                data: [a]
            }, d, !0), !0);
            return b.then(function(a) {
                g._fk = a.path
            }, function(a) {
                f[a instanceof l ? "info" : "error"](null, "playAudioSendError", a)
            }), b
        }, b._e1 = function(a) {
            a.playId && a.duration || f.error(null, "playAudioStatisticsError", a.sendReason, a), a.timestamp = k.getTimestamp(), a.trackId = a.id, delete a.id, a.album = a.albumId, delete a.albumId
        }, b._fL = function(a) {
            m.push(a)
        }, b._fM = function() {
            if (!m.length) return i.resolve();
            var a = m;
            m = [];
            var b = g.post("track/none/history/feedback/retry", h({
                timestamp: k.getTimestamp(),
                data: a
            }, d, !0), !0);
            return b.then(function() {}, function(b) {
                f[b instanceof l ? "info" : "error"](null, "playAudioRetryError", b), m = a.concat(m)
            }), b
        }
    }, function(a, b, c, d) {
        var e = {
            COMMON: "common",
            ALBUM: "album",
            ARTIST: "artist",
            PLAYLIST: "playlist",
            RADIO: "radio",
            COLLA: "colla",
            FEED: "feed",
            TRACK: "track"
        };
        a.Xh = e
    }, function(a, b, c, d) {
        var e = c(78),
            f = c(106),
            g = c(100);
        a.Xh = e({
            start: {
                _ds: function(a) {
                    return a._c1._eR ? "preload" : "init"
                }
            },
            init: {
                _ds: f,
                _dA: "preload"
            },
            preload: {
                _ds: function(a) {
                    return g({
                        _eZ: a._d6,
                        _eR: a._c1._eR,
                        _eX: a._c1.durationMs / 1e3
                    })
                }
            }
        }, "start")
    }, function(a, b, c, d) {
        var e = c(56),
            f = new e("radioStart"),
            g = c(57),
            h = g("source.radio.init"),
            i = c(71),
            j = c(72),
            k = c(78),
            l = c(74),
            m = c(73),
            n = c(81),
            o = c(117),
            p = c(119),
            q = c(120),
            r = c(102);
        a.Xh = l(k({
            start: {
                _ds: o,
                _dA: "prepare"
            },
            prepare: {
                _ds: n([p, j(function(a) {
                    return a._cF._eD(a, r._fu)
                }, {
                    _e2: function(a, b) {
                        return f.error(a, "radioFeedbackFailed", r._fu, b), !1
                    }
                })], {
                    abortOnFail: !0
                }),
                _dA: "tracks"
            },
            tracks: {
                _ds: m(q, {
                    _bW: h._bR,
                    _cr: h._bS,
                    _dL: i._dL
                })
            }
        }, "start"), {
            _dO: function(a) {
                return a._cI._cC
            },
            _cr: 0
        })
    }, function(a, b, c, d) {
        var e = c(71),
            f = c(118);
        a.Xh = e(function(a) {
            if (a._dx.available === !1) throw new Error("Radio is unavailable");
            return f._fO(a._dx.type, a._dx.tag, a._options)
        }, "source.radio.available", {
            _dO: function(a) {
                return a._dx.type + ":" + a._dx.tag
            },
            _dA: function(a, b) {
                if (!b || !b.available) throw new Error("Radio is unavailable");
                return a._dx.available = !0, !0
            },
            _e2: function(a, b) {
                throw a._dx.available = !1, b
            }
        })
    }, function(a, b, c, d) {
        var e = c(56),
            f = new e("RadioData"),
            g = c(84),
            d = c(89),
            h = c(70),
            i = c(49),
            j = c(50),
            k = c(102),
            l = c(88);
        b._fP = function(a, b, c, e) {
            var i = {};
            c.forEach(function(a) {
                i[a] && console.warn("double", a), i[a] = !0
            });
            var j = g.get("radio/" + a + "/" + b + "/tracks", h({
                queue: c
            }, d, e, !0));
            return j.then(function() {}, function(a) {
                f[a instanceof l ? "info" : "error"](null, "getTracksError", a)
            }), j
        }, b._fO = function(a, b, c) {
            var e = g.get("radio/" + a + "/" + b + "/available", h(d, c));
            return e.then(function() {}, function(a) {
                f[a instanceof l ? "info" : "error"](null, "isAvailableError", a)
            }), e
        }, b._fh = function(a, b, c, e, m, n, o, p) {
            var q = {
                timestamp: a,
                from: n
            };
            if (e != k._fu) {
                q.batchId = m.batchId;
                var r = j(m, !0);
                q.trackId = r.id, r.albumId && (q.albumId = r.albumId);
                var s = m.statistics || {};
                q.totalPlayed = s.played || .1
            }
            e === k._fu && o && (q.dashId = o);
            var t = g.post("radio/" + b + "/" + c + "/feedback/" + e + (m ? "/" + i(m) : ""), h(q, d, p));
            return t.then(function() {}, function(a) {
                f[a instanceof l ? "info" : "error"](null, "sendFeedbackError", a)
            }), t
        }, b._fQ = function(a, b, c) {
            var e = g.get("radio/" + a + "/" + b + "/settings", h(d, c));
            return e.then(function() {}, function(a) {
                f[a instanceof l ? "info" : "error"](null, "getInfoError", a)
            }), e
        }, b._eP = function(a, b, c, e) {
            c = h({}, c), delete c.restrictions;
            var i = g.post("radio/" + a + "/" + b + "/settings", h(c, d, e));
            return i.then(function() {}, function(a) {
                f[a instanceof l ? "info" : "error"](null, "setSettingsError", a)
            }), i
        }, b._dM = function(a) {
            var b = g.get("radio/list", h(d, a));
            return b.then(function() {}, function(a) {
                f[a instanceof l ? "info" : "error"](null, "getListError", a)
            }), b
        }
    }, function(a, b, c, d) {
        var e = c(57),
            f = e("source.radio.settings.load"),
            g = c(71),
            h = c(75),
            i = c(72),
            j = c(73),
            k = c(79),
            l = c(118);
        a.Xh = h(function(a) {
            return l._fQ(a._dx.type, a._dx.tag, a._options)
        }, [{
            _dN: i,
            _cr: f._bQ,
            _dA: function(a, b) {
                return b.station ? {
                    _cC: b.station.name,
                    _fS: b.station.icon,
                    _eQ: b.settings,
                    _fT: b.station.restrictions
                } : {
                    _eQ: [],
                    _fR: []
                }
            }
        }, {
            _dN: j,
            _bW: f._bR,
            _cr: f._bS,
            _dL: g._dL
        }, {
            _dN: k,
            _dO: function(a) {
                return a._dx.type + ":" + a._dx.tag
            },
            _dZ: !0
        }, {
            _dN: i,
            _dA: function(a, b) {
                b._cC && (a._cI._dv = {
                    name: b._cC,
                    icon: b._fS
                }), a._cI._eQ = b._eQ, a._cI._fT = b._fT
            },
            _cr: f._bV
        }])
    }, function(a, b, c, d) {
        var e = c(57),
            f = e("source.radio.tracks"),
            g = c(71),
            h = c(75),
            i = c(72),
            j = c(73),
            k = c(79),
            l = c(74),
            m = c(121),
            n = c(49),
            o = c(122),
            p = c(118);
        a.Xh = h(function(a) {
            for (var b = a._cI._di, c = b._dM(!0).slice(b._dP(!0)), d = 0, e = c.length; e > d; d++) c[d]._c3 && (c.splice(d, 0, "ad"), d++, e++), c[d] = n(c[d]);
            return p._fP(a._dx.type, a._dx.tag, c, a.options)
        }, [{
            _dN: i,
            _dA: function(a, b) {
                for (var c, d = [], e = a._cI._c3 || !1, f = 0, g = b.tracks.length; g > f; f++) c = b.tracks[f], "jingle" !== c.type && ("ad" !== c.type ? "track" === c.type && (c.track.liked = c.liked, c.track.disliked = c.disliked, c.track._c3 = e, e = !1, d.push(c.track)) : e = c.spaces || !0);
                return d._c3 = e, d
            },
            _cr: f._bQ
        }, {
            _dN: j,
            _bW: f._bR,
            _cr: f._bS,
            _dL: g._dL
        }, {
            _dN: k,
            _dO: function(a) {
                return a._dK._dB + ":" + a._dK._d9
            },
            _dZ: !0
        }, {
            _dN: i,
            _dA: function(a, b) {
                a._cI._c3 = b._c3, delete b.advert;
                var c = a._cI._di;
                return o._fU(a), c._fV(b), b
            },
            _e2: function(a, b) {
                throw a._cI._di._fW(), b
            },
            _cr: f._bV
        }, {
            _dN: l,
            _dO: function(a) {
                return a._dK._dB + ":" + a._dK._d9
            },
            _cr: 0
        }, {
            _dN: m,
            _e9: function(a, b) {
                a._cI._fX = b._e$
            }
        }])
    }, function(a, b, c, d) {
        var e = c(65),
            f = c(62);
        a.Xh = function(a, b) {
            return b._ds && b._ds.call(null, a),
                function(c) {
                    var d, g = this,
                        h = new f(function(f, h) {
                            d = a.call(g, c), b._e9 && b._e9.call(g, c, d), d.then(function(a) {
                                b._dA && b._dA.call(g, c, a), f(a)
                            }, function(a) {
                                b._e2 && b._e2.call(g, c, a), h(a)
                            })["catch"](e)
                        });
                    return h["catch"](e), h._d4 = d._d4, h
                }
        }
    }, function(a, b, c, d) {
        b._fU = function(a, b) {
            var c = a._cI._di;
            c._fY(0, c._dP() - (null == b ? a._dx.storeBefore : b)), c._fZ()
        }, b._f1 = function(a, b) {
            var c = a._cI._di;
            c._fY(c._dP() + (null == b ? a._dx.storeAfter : b) + 1, null), c._fZ()
        }
    }, function(a, b, c, d) {
        var e = c(124),
            f = c(71),
            g = c(125);
        a.Xh = f(function(a) {
            return g._f2(a._cI._dx.id)
        }, "source.album", {
            _dO: function(a) {
                return a._cI._dx.id
            },
            _dA: function(a, b) {
                return a._cI._dE && e(a._cI._di, b.tracks), a._cI._dD && (a._cI._dv = b), b
            }
        })
    }, function(a, b, c, d) {
        a.Xh = function(a, b) {
            b = b.slice(a._dG()), b.length && (a._fV(b), a._fZ())
        }
    }, function(a, b, c, d) {
        var e = c(56),
            f = new e("AlbumData"),
            g = c(84),
            d = c(89),
            h = c(70),
            i = c(88);
        b._f2 = function(a, b) {
            f.debug(null, "getAlbum", a);
            var c = g.get("album/" + a, h(d, b));
            return c.then(function() {
                f.debug(null, "getAlbumSuccess")
            }, function(a) {
                f[a instanceof i ? "info" : "error"](null, "getAlbumError", a)
            }), c
        }
    }, function(a, b, c, d) {
        var e = c(124),
            f = c(71),
            g = c(127);
        a.Xh = f(function(a) {
            return g._f3(a._cI._dx.id, a._cI._dx.top)
        }, "source.artist", {
            _dO: function(a) {
                return a._cI._dx.id + ":" + a._cI._dx.top
            },
            _dA: function(a, b) {
                return a._cI._dE && e(a._cI._di, b.tracks), a._cI._dD && (a._cI._dv = b), b
            }
        })
    }, function(a, b, c, d) {
        var e = c(56),
            f = new e("ArtistData"),
            g = c(84),
            d = c(89),
            h = c(70),
            i = c(88);
        b._f3 = function(a, b) {
            var c = g.get("artist/" + a, h(d, b));
            return c.then(function() {}, function(a) {
                f[a instanceof i ? "info" : "error"](null, "getArtistError", a)
            }), c
        }
    }, function(a, b, c, d) {
        var e = c(124),
            f = c(71),
            g = c(129);
        a.Xh = f(function(a) {
            return g._f4(a._dx.owner, a._dx.id)
        }, "source.playlist", {
            _dO: function(a) {
                return a._dx.owner + ":" + a._dx.id
            },
            _dA: function(a, b) {
                return a._cI._dE && e(a._cI._di, b.tracks), a._cI._dD && (a._cI._dv = b), a._dx.uid = b.owner.uid, a._dx.login = b.owner.login, b
            }
        })
    }, function(a, b, c, d) {
        var e = c(56),
            f = new e("PlaylistData"),
            g = c(84),
            d = c(89),
            h = c(70),
            i = c(88);
        b._f4 = function(a, b, c) {
            f.debug(null, "getPlaylist", a, b), a || (a = "_");
            var e = g.get("playlist/" + a + "/" + b, h(d, c));
            return e.then(function() {
                f.debug(null, "getPlaylistSuccess")
            }, function(a) {
                f[a instanceof i ? "info" : "error"](null, "getPlaylistError", a)
            }), e
        }
    }, function(a, b, c, d) {}, function(a, b, c, d) {
        var e = c(78),
            f = c(72),
            g = c(71),
            h = c(65),
            i = c(102),
            j = c(120),
            k = c(122),
            l = c(52),
            m = c(118),
            n = [i._fx, i._eI, i._eM, i._eJ, i._eN],
            o = g(function(a) {
                return m._fh(l.getTimestamp(), a._dB, a._d9, a._d2, a._c1, a._dS, a._dX)
            }, "feedback.radio", {
                dontCache: !0
            });
        a.Xh = f(e({
            start: {
                _ds: function(a) {
                    return a._d2 === i._fu || a._d2 === i._fb ? "info" : "track"
                }
            },
            info: {
                _ds: o
            },
            track: {
                _ds: function(a) {
                    return -1 !== n.indexOf(a._d2) && (k._fU(a), k._f1(a, 1)), o(a)
                }
            }
        }, "start"), {
            _dA: function(a) {
                switch (a._d2) {
                    case i._eI:
                        a._c1.liked = !0, a._c1.disliked = !1;
                        break;
                    case i._eM:
                        a._c1.disliked = !0, a._c1.liked = !1;
                        break;
                    case i._eJ:
                        a._c1.liked = !1;
                        break;
                    case i._eN:
                        a._c1.disliked = !1
                }
                return -1 !== n.indexOf(a._d2) && (a._cI._fX && a._cI._fX(), j(a)), !0
            },
            _d4: h
        })
    }, function(a, b, c, d) {
        var e = c(57),
            f = e("source.radio.settings.send"),
            g = c(70),
            h = c(78),
            i = c(81),
            j = c(79),
            k = c(71),
            l = c(75),
            m = c(72),
            n = c(73),
            o = c(119),
            p = c(120),
            q = c(122),
            r = c(118),
            s = l(function(a) {
                return r._eP(a._dx.type, a._dx.tag, a._eQ, a._options)
            }, [{
                _dN: m,
                _cr: f._bQ
            }, {
                _dN: n,
                _bW: f._bR,
                _cr: f._bS,
                _dL: k._dL
            }, {
                _dN: j,
                _dO: function(a) {
                    return a._dx.type + ":" + a._dx.tag
                },
                _dZ: !0
            }, {
                _dN: m,
                _dA: function(a, b) {
                    return a._cI._fX(), q._f1(a, 0), q._fU(a), b
                },
                _cr: f._bV
            }]);
        a.Xh = j(h({
            send: {
                _ds: function(a) {
                    return a._eQ = g(a._cI._eQ, a._eQ), s(a)
                },
                _dA: "load"
            },
            load: {
                _ds: i([o, p])
            }
        }, "send"), {
            _dO: function(a) {
                return a._dx.type + ":" + a._dx.tag
            },
            _dZ: !0
        })
    }, function(a, b, c, d) {
        var e = {
            UPDATE: "update",
            POPULATE: "populate",
            CONTROLS: "controls",
            EMOTION: "emotion"
        };
        a.Xh = e
    }, function(a, b, c, d) {
        var e = c(56),
            f = new e("InternalAudio"),
            g = c(64),
            h = c(62),
            i = c(63),
            j = c(8),
            k = c(19),
            l = c(135),
            m = c(136),
            n = function(a, b, c) {
                this._ci = .8;
                var d = this;
                d._cF = a, d._dq = new g, d._dp = !1, d._cN = new i(!0), d._d5 = new i(!0), d._er = new i(!0), d._ex = new i(!0), d._f5 = new i, d._f6 = new i, d._f7 = new i, d._f5.add(d._d5), d._f6.add(d._er), d._f7.add(d._ex), d._f5.add(d._cN), d._f6.add(d._cN), d._f7.add(d._cN), d._f5.add(d._er.inverted()), d._f5.add(d._ex.inverted()), d._f6.add(d._ex.inverted()), m._cL().then(d._l.bind(d, b, c))
            };
        n.prototype = {
            _c$: function() {
                var a = this;
                a._f5.clearListeners(), a._f6.clearListeners(), a._f7.clearListeners(), a._d6.clearListeners(), a._d7.clearListeners(), a._d8.clearListeners(), a._d6.stop(), a._d7.stop(), a._d8.stop(), a._d6.stop(1), a._d7.stop(1), a._d8.stop(1), a._d6.toggleWebAudioAPI(!1), a._d7.toggleWebAudioAPI(!1), a._d8.toggleWebAudioAPI(!1), delete a._cF, delete a._dq, delete a._dp, delete a._cN, delete a._d5, delete a._er, delete a._ex, delete a._f5, delete a._f6, delete a._f7, delete a._d6, delete a._d7, delete a._d8
            },
            _l: function(a, b) {
                var c = this;
                a = a || m._f8(), c._d6 = new j(a, b), c._d7 = new j(a, b), c._d8 = new j(a, b), c._f9(c._f5, "play", c._d6), c._f9(c._f6, "advert", c._d7), c._f9(c._f7, "common", c._d8), h.all([c._d6.initPromise(), c._d7.initPromise(), c._d8.initPromise()]).then(function() {
                    j.audioContext && c._d6.toggleCrossDomain(!0), l.on(l._f0, function() {
                        c._cN.toggle(!0)
                    }), c._dp = !0, c._dq.resolve()
                })
            },
            _fN: function(a) {
                this._ci !== a && (f.info(null, "adcorrect", a), this._ci = a, this._d7.setVolume(this._cd * this._ci), this._d8.setVolume(this._cd * this._ci))
            },
            _f$: function(a) {
                this._cV() && (this._cd = a, this._d6.setVolume(a), this._d7.setVolume(a * this._ci), this._d8.setVolume(a * this._ci))
            },
            _f9: function(a, b, c) {
                var d = function() {
                        c.getState() === k.STATE_PLAYING && c.pause()
                    },
                    e = function() {
                        if (a.isLocked()) {
                            if (c._f_) return;
                            c._b(k.EVENT_STATE, d), c._f_ = !0, d()
                        } else {
                            if (!c._f_) return;
                            c.off(k.EVENT_STATE, d), c._f_ = !1, this._cF._cZ(b) && (c.getState() === k.STATE_PAUSED || c._whenPause) && c.resume()
                        }
                    }.bind(this);
                a._b(i.EVENT_STATE, e), e()
            },
            _c7: function(a) {
                this._cN.toggle(a)
            },
            _cU: function() {
                return this._cN.isLocked()
            },
            _cV: function() {
                return this._dp
            },
            _cL: function() {
                return this._dq.promise()
            }
        }, a.Xh = n
    }, function(a, b, c, d) {
        var e = c(57),
            f = e("sandman"),
            g = c(1),
            h = (new Date).valueOf(),
            i = new g;
        i._f0 = "sleep", setInterval(function() {
            var a = (new Date).valueOf();
            a - h > f._cm && i._d(i._f0), h = a
        }, f._cl), a.Xh = i
    }, function(a, b, c, d) {
        var e = c(56),
            f = new e("settings"),
            g = c(57),
            h = g("core.settings"),
            i = (c(137), c(138)),
            j = new i,
            k = "local",
            l = c(108);
        a.Xh = {
            _cV: function() {
                return j._cV()
            },
            _cL: function() {
                return j._cL().then(this._ga.bind(this))
            },
            _ga: function() {
                l._fF(this._fA()), l._fE(this._gb() ? 1 : 0)
            },
            _f8: function() {
                return j._gc(k, h._b9)
            },
            _gd: function(a) {
                return f.info(null, "setPreferredType", a), j._ge(k, h._b9, a), a
            },
            _fA: function() {
                var a = j._gc(k, h._b0);
                return "mp3" !== a && "aac" !== a && (a = "mp3"), a
            },
            _fF: function(a) {
                if (f.info(null, "setFormat", a), "mp3" !== a && "aac" !== a) throw new RangeError("Only 'mp3' and 'aac' format accepted for now");
                return l._fF(a), j._ge(k, h._b0, a), a
            },
            _gb: function() {
                return 1 == j._gc(k, h._b$)
            },
            _fE: function(a) {
                return f.info(null, "setHQ", a), a = a ? 1 : 0, l._fE(a), j._ge(k, h._b$, a ? 1 : 0), a
            },
            _gf: function() {
                return parseFloat(j._gc(k, h._b_)) || h._cd
            },
            _f$: function(a) {
                j._ge(k, h._b_, a)
            },
            _gg: function() {
                return 0 != parseInt(j._gc(k, h._ca))
            },
            _gh: function(a) {
                f.info(null, "setExponent", a), j._ge(k, h._ca, a ? 1 : 0)
            },
            _gi: function() {
                return JSON.parse(j._gc(k, h._cb) || "{}")
            },
            _gj: function(a) {
                f.info(null, "setEqualizer", a), j._ge(k, h._cb, JSON.stringify(a))
            },
            _gk: function(a) {
                j._ge(k, h._cc, a)
            },
            _gl: function() {
                return j._gc(k, h._cc)
            }
        }
    }, function(a, b, c, d) {
        var e = c(54),
            f = function() {
                try {
                    return "localStorage" in window && null !== window.localStorage
                } catch (a) {
                    return !1
                }
            }(),
            g = window.localStorage,
            h = "." + document.location.hostname.split(".").slice(-2).join(".");
        b.store = function(a, b, c, d) {
            if (c && !f) return !1;
            var i;
            if (f) try {
                g.setItem(a, (d ? e : JSON.stringify)(b))
            } catch (j) {
                if (c) return !1;
                i = j
            }
            if (!f || i) try {
                document.cookie = a + "=" + (d ? e : JSON.stringify)(b) + ";domain=" + h
            } catch (j) {
                return !1
            }
            return !0
        }, b.load = function(a, b) {
            if (b && !f) return null;
            var c, d;
            if (f) try {
                c = JSON.parse(g.getItem(a))
            } catch (e) {
                if (b) return null;
                d = e
            }
            if (!f || d) try {
                c = document.cookie.match(new RegExp(a + "=([^;]*)")), c = c || c[0], c = c && JSON.parse(c)
            } catch (e) {
                return null
            }
            return c
        }
    }, function(a, b, c, d) {
        var e = c(56),
            f = new e("xstorage"),
            g = c(57),
            h = g("xstorage"),
            i = c(65),
            j = c(1),
            k = c(64),
            l = c(139),
            m = l._gm,
            n = l._gn,
            o = n.hasOwnProperty.bind(n),
            p = c(140),
            q = 0,
            r = function(a, b) {
                setTimeout(function() {
                    a.reject(new Error("Request timeout"))
                }, b)
            },
            s = {},
            t = function(a) {
                if (a = h._bK, s[a]) return s[a];
                j.call(this), this._go = "https://" + a, this._dq = new k, this._dp = !1, this._gp = document.createElement("iframe"), this._gp.src = this._go + h._bL + "handlers/tracks/af/ru/-qAnSBiAl2a6xHePo7hMCg~~-1aqabp8qk/radio.yandex.ru/get-direct/Sq8SdrVSsQuQ_dRv4OcVpw/x80", this._gq = {}, this._gr = {};
                var b = this._gp.style;
                b.position = "absolute", b.width = 0, b.height = 0, b.left = "-1000px", b.top = "-1000px", window.addEventListener("message", this._gs.bind(this)), document.body.appendChild(this._gp), this._gp = this._gp.contentWindow, s[a] = this
            };
        t.prototype = {
            _cL: function() {
                return this._dq.promise()
            },
            _cV: function() {
                return this._dp
            },
            _fK: function(a, b, c, d) {
                var e = q++,
                    f = this._gq[e] = new k;
                return r(f, h._bQ), f.promise()["catch"](i).then(function() {
                    delete this._gq[e]
                }.bind(this)), this._gp.postMessage(JSON.stringify({
                    event: a,
                    requestId: e,
                    data: {
                        storage: b,
                        key: c,
                        value: d
                    }
                }), this._go), f.promise()
            },
            _gs: function(a) {
                if ((a.origin || a.originalEvent.origin) === this._go) {
                    try {
                        var b = JSON.parse(a.data);
                        if (!b.xstorage) throw "Wrong message"
                    } catch (c) {
                        return
                    }
                    var d = b.data.requestId;
                    if (d) {
                        var e = this._gq[d];
                        e && (b.event === m._gt ? e.reject(Error(b.error)) : e.resolve(b.data)), delete b.data.requestId
                    }
                    switch (b.event) {
                        case m._gu:
                            this._gv(b.data);
                            break;
                        case m._gt:
                            this._gw(b.data);
                            break;
                        case m._gx:
                            this._gy(b.data);
                            break;
                        case m._gz:
                            this._gA(b.data)
                    }
                }
            },
            _gw: function(a) {
                f.warn(this, "error", a);
                var b = Error(a.error);
                this._dp ? this._d(p.ERROR, b) : (this._d(p.FAILED, b), this._dp = !1, this._dq.reject(b))
            },
            _gv: function(a) {
                var b = this._gr[a.storage];
                b = b && b[a.key], b === a.value || null == a.value && b == a.value || (null == a.value ? delete this._gr[a.storage][a.key] : this._gr[a.storage][a.key] = a.value, this._d(p.UPDATE, a.storage, a.key, a.value))
            },
            _gA: function(a) {
                this._gr[a.storage] = {}, this._d(p.CLEAN, a.storage)
            },
            _gy: function(a) {
                for (var b in a) a.hasOwnProperty(b) && (this._gr[b] = a[b]);
                this._dp = !0, this._dq.resolve(a), this._d(p.READY)
            },
            _gc: function(a, b) {
                if (!o(b)) throw Error("Field " + b + " is not allowed storage field");
                return this._gr[a][b]
            },
            _ge: function(a, b, c) {
                if (!o(b)) throw Error("Field " + b + " is not allowed storage field");
                return this._gr[a][b] = c, this._d(p.UPDATE, a, b, c), this._fK(m._gB, a, b, c)
            },
            _gC: function(a, b) {
                if (!o(b)) throw Error("Field " + b + " is not allowed storage field");
                return delete this._gr[a][b], this._d(p.UPDATE, a, b, null), this._fK(m._gB, a, b, null)
            },
            _de: function() {
                return this._fK(m._gD)
            }
        }, j.mixin(t), a.Xh = t
    }, function(a, b, c, d) {
        var e = {
                _gu: "update",
                _gz: "clear",
                _gt: "error",
                _gx: "dump",
                _gB: "update",
                _gD: "dump"
            },
            f = function(a) {
                var b = {};
                return a.forEach(function(a) {
                    b[a] = !0
                }), b
            }(["Ya_Music_Player_Type", "Ya_Music_Player_Format", "Ya_Music_Player_HQ", "Ya_Music_Player_Volume", "Ya_Music_Player_Volume_Gamma", "Ya_Music_Player_Equalizer", "Ya_Music_Player_CD", "Ya_Music_Player_ID"]);
        b._gm = e, b._gn = f
    }, function(a, b, c, d) {
        var e = {
            READY: "ready",
            FAILED: "failed",
            ERROR: "error",
            UPDATE: "update",
            CLEAN: "clean"
        };
        a.Xh = e
    }, function(a, b, c, d) {
        var e = c(57),
            f = e("core.queue"),
            g = c(51),
            h = c(50),
            i = c(65),
            j = c(1),
            k = c(62),
            l = c(78),
            m = c(142),
            n = c(63),
            o = c(75),
            p = c(71),
            q = c(108),
            r = c(143),
            s = "tracks",
            t = "index",
            u = "order",
            v = function(a, b) {
                return a - b
            },
            w = 0,
            x = function(a, b, c) {
                j.call(this), this._cC = "queue:" + w++, this._dV = c || !1, this._dj = !1, this._gE = [], this._dk = -1, this._gF = [], this._gG = -1, this._gH = {}, this._gI = new n, this._gJ = null, this._gK = this._gL.bind(this), a && (this._fV(a), null != b && this._dz(b)), this._fZ()
            };
        x._dI = o(l({
            start: {
                _ds: function(a) {
                    return a._gE = a._di._gM(a._dk, a._fU, a._f1, a._gN), a._gE.length ? "load" : k.resolve()
                }
            },
            load: {
                _ds: p(function(a) {
                    return q._fG(a._gE)
                }, "track.populate", {
                    _e7: !0,
                    _dA: function(a, b) {
                        a._gO = b
                    }
                }),
                _dA: "update"
            },
            update: {
                _ds: function(a) {
                    return a._di._gP(a._gO) ? k.resolve() : "start"
                }
            }
        }, "start"), [{
            _dN: m,
            _df: function(a) {
                return a._di._gI
            }
        }]), x.prototype = {
            _fZ: function() {
                this._gJ = this._gJ && clearTimeout(this._gJ)
            },
            _fW: function() {
                Object.keys(this._gH).length && this._gL()
            },
            _gQ: function(a) {
                this._gH[a] = !0, this._gR()
            },
            _gL: function() {
                this._gJ = this._gJ && clearTimeout(this._gJ);
                var a = this._gH;
                this._gH = {}, this._d(r._cB, a[t], a[s]), this._dI(this._dk, null, null, !0)
            },
            _gR: function() {
                this._gJ || (this._gJ = setTimeout(this._gK, f._ce))
            },
            _gS: function() {
                for (var a = [], b = 0, c = this._gE.length; c > b; b++) g(this._gE[b], !0) || a.push(b);
                if (this._dV) {
                    this._gF = [];
                    var d = a.indexOf(this._dk);
                    for (-1 !== d ? (a.splice(d, 1), this._gF.push(this._dk), this._gG = d) : this._gG = -1; a.length;) this._gF.push(a.splice(Math.min(a.length, Math.floor(Math.random() * a.length)), 1)[0])
                } else this._gF = a, this._gG = a.indexOf(this._dk); - 1 === this._gG && this._gF.length > 0 && (this._gG = 0, this._dk = this._gF[this._gG], this._gQ(t)), this._gQ(u)
            },
            _dz: function(a, b) {
                this._dk = b ? this._dn(a) : a, this._gG = this._gF.indexOf(this._dk), this._gQ(t)
            },
            _fV: function(a) {
                this._gE = this._gE.concat(a), this._gS(), this._gQ(s), this._dI(0, 0, 150, !1)
            },
            _gT: function(a) {
                this._gE = a.concat(this._gE), this._dk += a.length, this._gS(), this._gQ(t), this._gQ(s), this._dI()
            },
            _gU: function(a, b) {
                this._gE.splice(b, 0, this._gE.splice(a, 1)[0]), this._dk === a ? (this._dk = b, this._gQ(t)) : this._dk > a && this._dk <= b ? (this._dk--, this._gQ(t)) : this._dk >= b && this._dk < a && (this._dk++, this._gQ(t)), this._gS(), this._gQ(s)
            },
            _fY: function(a, b) {
                if (this._gV(), b = null == b ? this._gE.length - a + 1 : b, !(0 >= b)) {
                    var c = a + b - 1;
                    if (this._gE.splice(a, b), 0 == this._gE.length) this._dk = 0, this._gQ(t), this._d(r._gW);
                    else if (this._dk >= a && this._dk <= c) {
                        this._dk = a - 1;
                        var d = !0;
                        if (this._dk < 0 && (d = !1), this._gS(), d) {
                            var e = this._dl();
                            null != e && (this._dk = e)
                        }
                        this._d(r._gW)
                    } else this._dk > c && (this._dk -= b, this._gQ(t));
                    this._gS(), this._gQ(s)
                }
            },
            _gV: function() {
                if (this._gF.length != this._gE.length) {
                    for (var a = [].concat(this._gF).sort(v), b = 0, c = 0, d = a.length; d > c; c++) a[c] < this._dk && b++, a[c] = this._gE[a[c]];
                    this._gE = a, this._gQ(s), this._dk != b && (this._dk = b, this._gQ(t)), this._gS()
                }
            },
            _gX: function(a) {
                this._dj = a, this._gQ(u)
            },
            _dU: function(a) {
                this._dV = a, this._gS()
            },
            _dP: function(a) {
                return a ? this._dn(this._dk, !0) : this._dk
            },
            _dl: function(a) {
                if (!this._dj && this._gG + 1 >= this._gF.length) return null;
                var b = this._gF[(this._gG + 1) % this._gF.length];
                return a ? void this._dn(b, !0) : b
            },
            _dm: function(a) {
                if (!this._dj && this._gG < 1) return null;
                var b = this._gF[(this._gF.length + this._gG - 1) % this._gF.length];
                return a ? void this._dn(b, !0) : b
            },
            _gY: function(a, b) {
                for (var c, d = [], e = 0, f = this._gE.length; f > e && (c = h(this._gE[e]), c.id != a.id || c.albumId && a.albumId && c.albumId != a.albumId || (d.push(e), !(b && a.length >= b))); e++);
                return d
            },
            _dn: function(a, b) {
                var c = [].concat(this._gF).sort(v);
                return b ? c.indexOf(a) : c[a]
            },
            _dG: function(a) {
                return (a ? this._gF : this._gE).length
            },
            _dM: function(a) {
                if (a) {
                    for (var b = [].concat(this._gF).sort(v), c = 0, d = b.length; d > c; c++) b[c] = this._gE[b[c]];
                    return b
                }
                return [].concat(this._gE)
            },
            _dH: function() {
                return this._gE[this._dk]
            },
            _dT: function() {
                var a = this._dl();
                return null == a ? null : this._gE[a]
            },
            _gZ: function() {
                var a = this._dm();
                return null == a ? null : this._gE[a]
            },
            _gM: function(a, b, c, d) {
                var e, f, h, i = this,
                    j = [];
                d && -1 === this._gF.indexOf(a) && (d = !1);
                var k = d ? i._gF.length : i._gE.length,
                    l = k;
                a = d ? this._gF.indexOf(a) : a, c = Math.min(c || 0, k), b = Math.min(b || 0, k - c);
                var m = function(a) {
                    return a = d ? i._gF[a] : a, h = i._gE[a], h && (h.id || h.src) ? !g(h) : (j.push(h), !0)
                };
                for (l && m(a), l--, e = 0, f = 1; l && b > e;) m((k + a - f) % k) && e++, l--, f++;
                for (e = 0, f = 1; l && c > e;) m((a + f) % k) && e++, l--, f++;
                return j
            },
            _dI: function(a, b, c, d) {
                return null == a && (a = this._dk), null == b && (b = f._cf), null == c && (c = f._cg), x._dI({
                    _di: this,
                    _dk: a,
                    _fU: b,
                    _f1: c,
                    _gN: d
                })
            },
            _dy: function(a) {
                a = a._gE;
                var b, c, d, e, f = {};
                for (d = 0, e = a.length; e > d; d++) a[d].id && (b = h(a[d]), c = f[b.id] = f[b.id] || {}, c._g1 = a[d], b.albumId && (c[b.albumId] = a[d]));
                var g = this._gE;
                for (d = 0, e = g.length; e > d; d++) g[d].id || (b = h(g[d]), f[b.id] && (c = f[b.id], c = b.albumId ? c[b.albumId] : c._g1, c && (g[d] = c)))
            },
            _gP: function(a) {
                var b, c, d, e, f, i = !0,
                    j = {};
                for (c = 0, d = a.length; d > c; c++) {
                    for (b = this._gY({
                            id: h(a[c]).id
                        }), e = 0, f = b.length; f > e; e++) this._gE[b[e]] = a[c], j[b[e]] = a[c];
                    i = i && !g(a[c])
                }
                if (this._d(r._g2, j), !i) {
                    for (c = 0, d = this._gF.length; d > c; c++) g(this._gE[this._gF[c]], !0) && (this._gF.splice(c, 1), this._gG > c ? this._gG-- : this._gG == c && (this._gG = -1), c--, d--); - 1 == this._gG && (this._dk = -1, this._gS()), this._gQ(u)
                }
                return i
            },
            _c$: function() {
                delete this._dV, delete this._dj, delete this._gE, delete this._dk, delete this._gF, delete this._gG, delete this._gH, this._gP = i
            }
        }, j.mixin(x), a.Xh = x
    }, function(a, b, c, d) {
        var e = c(65),
            f = c(62),
            g = c(63),
            h = c(72);
        a.Xh = function(a, b) {
            return a = h(a),
                function(c) {
                    var d = this,
                        h = "function" == typeof b._df ? b._df.call(d, c) : b._df;
                    if (!b._dontLock) {
                        var i = new g;
                        i.toggle(!0)
                    }
                    var j, k, l, m, n, o = function() {
                            j || (h.isLocked() ? h.promiseUnlock().then(o) : (b._dontLock || h.add(i), k = a.call(d, c), k.then(p(m), p(n))))
                        },
                        p = function(a) {
                            return function(c) {
                                b._dontLock || h.remove(i), a(c)
                            }
                        },
                        q = function(a) {
                            j = !0, k && k._d4 && k._d4(a)
                        };
                    return l = new f(function(a, b) {
                        m = a, n = b, o()
                    }), l["catch"](e), l._d4 = q, l
                }
        }
    }, function(a, b, c, d) {
        a.Xh = {
            _cB: "update",
            _g2: "populate",
            _gW: "removed"
        }
    }, function(a, b, c, d) {
        var e = c(57),
            f = e("core.user"),
            g = c(71),
            h = c(64),
            i = c(145),
            j = c(108),
            k = c(52),
            l = function() {
                var a = this;
                a._cr = null, a._dp = !1, a._dq = new h, this._dd = this._de.bind(this), a._de().then(function() {
                    a._dp = !0, a._dq.resolve()
                }, function() {
                    a._dq.reject()
                })
            };
        l.prototype = {
            _cV: function() {
                return this._dp
            },
            _cL: function() {
                return this._dq.promise()
            },
            _g3: function(a) {
                k.uid = a
            },
            _g4: function() {
                return k.uid
            },
            _de: g(function() {
                return this._cr = this._cr && clearTimeout(this._cr), i._g5()
            }, f, {
                _dA: function() {
                    return this._cr = this._cr && clearTimeout(this._cr) || setTimeout(this._dd, f._b8), j._fI(), {
                        logged: k.logged,
                        premium: k.premium,
                        invalid: k.invalid
                    }
                },
                _e2: function(a, b) {
                    throw b
                }
            })
        }, a.Xh = new l
    }, function(a, b, c, d) {
        var e = c(56),
            f = new e("UserData"),
            g = c(84),
            d = c(89),
            h = c(70),
            i = c(53),
            j = c(52),
            k = c(88);
        b._g5 = function(a) {
            var b = g.get("auth", h(d, a));
            return b.then(function(a) {
                h(j, a, !0), j.localTimestamp = (new Date).valueOf(), j._d(j._cB), i.store("device_id", a.device_id)
            }, function(a) {
                f[a instanceof k ? "info" : "error"](null, "getAuthError", a)
            }), b
        }
    }, function(a, b, c, d) {
        var e = c(56),
            f = new e("CrackDown"),
            g = c(57),
            h = g("crackdown"),
            i = (c(147), c(114)),
            j = c(136),
            k = c(144),
            l = c(52),
            m = c(98),
            n = function(a) {
                this._cF = a, this._cO = a._cO, this._g6 = "default", this._g7 = (new Date).valueOf(), this._gE = 0;
                var b = this._g8.bind(this);
                a._b(m.TRACK_END, b), a._b(m.TRACK_ERROR, b), l._b(l._cB, this._dJ.bind(this)), this._dJ(), j._cL().then(this._g9.bind(this)), j._cV() && this._g9();
                var c = this._e6.bind(this);
                h._ct && !h._cu || (window.addEventListener("mousemove", c), window.addEventListener("keydown", c), window.addEventListener("touchstart", c))
            };
        n.prototype = {
            _g9: function() {
                this._g0 = j._gl(), this._g0 && this._g0 < (new Date).valueOf() && (this._g0 = !1), this._g /*##index##*/ & clearTimeout(this._g$), this._g$ = setTimeout(this._g9.bind(this), h._cp)
            },
            _dJ: function() {
                if (this._cF._cI && k._cV()) {
                    var a = this._cF._cI._dB === i.RADIO ? "radio" : "music";
                    this._g6 = h._cv || l.experiments && l.experiments[a + h._co] || "default", j._cV() && this._g9(), f.info(null, "update", this._g6, !!this._g0)
                }
            },
            _g8: function() {
                this._gE++
            },
            _e6: function() {
                if (this._g7 = (new Date).valueOf(), this._gE = 0, this._g_) {
                    var a = (new Date).valueOf() - this._g_;
                    a < h._cq && "muted" !== this._ha && (this._g0 = (new Date).valueOf() + h._cr, j._gk(this._g0)), this._cF._d(m.CRACKDOWN_UNPAUSE, this._ha, a, this._g0), f.info(null, "unpaused", this._ha, a, !!this._g0), delete this._g_, delete this._ha
                }
            },
            _c_: function() {
                var a = this._g6.split("-"),
                    b = n._hb[a[0]],
                    c = !1;
                if (this._hc()) c = "muted";
                else {
                    if (h._cA) return !1;
                    if (this._g0 && this._g0 < (new Date).valueOf()) return this._g0 = !1, this._c_();
                    l.premium ? c = !1 : b && b(this, parseInt(a[1])) && (c = this._g6)
                }
                return c && (this._g_ = (new Date).valueOf(), this._ha = c, f.info(null, "paused", this._ha, this._g_, this._gE, (((new Date).valueOf() - self._g7) / 6e4 || -1).toFixed(1))), c
            },
            _hc: function() {
                return this._cO._cd <= 0
            }
        }, n._hb = {
            tracks: function(a, b) {
                return a._gE >= b
            },
            time: function(a, b) {
                return (new Date).valueOf() - a._g7 > 1e3 * b * 60
            }
        }, n._c5 = function(a, b) {
            return null == b && (b = a, a = !1),
                function() {
                    return a && h._ct || this._cG._e6(), b.apply(this, arguments)
                }
        }, a.Xh = n
    }, function(a, b, c, d) {
        var e = c(65),
            f = c(64);
        a.Xh = function(a, b) {
            var c = {};
            return function() {
                var d, g = ("function" == typeof b._dO ? b._dO.apply(this, arguments) : b._dO) || "key";
                if (c[g]) d = c[g]._e0;
                else {
                    d = new f, d.promise()["catch"](e).then(function() {
                        delete c[g]
                    });
                    var h = setTimeout(function() {
                        d.resolve(a.apply(c[g]._dr, c[g]._c2))
                    }, b._cr || 0);
                    c[g] = {
                        _hd: h,
                        _e0: d
                    }
                }
                return c[g]._c2 = arguments, c[g]._dr = this, d.promise()
            }
        }
    }, function(a, b, c, d) {
        var e = {
            ALL: !0,
            ONE: 1,
            NONE: !1
        };
        a.Xh = e
    }, function(a, b, c, d) {
        var e = c(57),
            f = e("skips"),
            g = c(56),
            h = new g("Source"),
            i = c(61),
            j = c(65),
            k = c(64),
            l = c(147),
            m = c(67),
            n = c(1),
            o = c(63),
            p = c(133),
            q = c(114),
            r = c(143),
            s = c(102),
            t = c(148),
            u = c(108),
            v = c(146)._c5,
            w = [].slice,
            x = function(a, b, c) {
                return function() {
                    var d = this._he();
                    if (!d) throw new Error("No source attached");
                    if (b && d._dB !== b) throw new Error("This method allowed only on " + b + ", but " + d._dB + " selected as current source");
                    if (c && d._dB === c) throw new Error("This method denied on " + c);
                    var e = w.call(arguments);
                    return e.unshift(d), a.apply(this, e)
                }
            },
            y = function(a) {
                var b = function() {
                    var c = this;
                    if (c._hf.isLocked()) return c._hg && c._hg._hh.reject(Error("Skip like a boss")), c._hg = {
                        _hh: new k,
                        _c2: arguments,
                        _dr: c,
                        _hi: b
                    }, c._hg._hh.promise();
                    var d = a.apply(c, arguments);
                    c._hj = !0;
                    var e = c.getCurrent();
                    return e && (e.skipped = !0), c._hf.toggle(!0), d["catch"](j).then(function() {
                        c._hj = !1, c._hf.toggle(!1)
                    }), c._he()._dB === q.RADIO && (c._hk.toggle(!0), setTimeout(function() {
                        c._hk.toggle(!1)
                    }, f._cn)), d
                };
                return b
            },
            z = function(a) {
                var b = this;
                n.call(b), b._cG = a._cG, b._cH = a._cH, b._cF = a._cF, b._cO = b._cF._cO, b._cI = b._cF._cI, b._dV = !1, b._dj = t.NONE, b._hl = b._gv.bind(b), b._hm = b._gP.bind(b), b._hn = b._ho.bind(b), b._hf = new o, b._hk = new o, b._hf.add(b._hk), b._hf._b(o.EVENT_STATE, b._hp.bind(b)), b._hq = null
            };
        z.prototype = {
            _hp: function() {
                var a = this,
                    b = a._hg;
                if (a._hr(), b) {
                    delete a._hg;
                    try {
                        b._hi.apply(b._dr, b._c2).then(b._hh.resolve, b._hh._v)
                    } catch (c) {
                        b._hh.reject(c)
                    }
                }
            },
            _he: function() {
                return this._cI || (this._cI = this._cF._cI), this._cI
            },
            _cP: function() {
                var a = this._cI;
                this._cI = null, a && (a._di.off(r._cB, this._hl), a._di.off(r._g2, this._hm), a._di.off(r._gW, this._hn)), a = this._he(), this._hs(), this._ht(), a._di._b(r._cB, this._hl), a._di._b(r._g2, this._hm), a._di._b(r._gW, this._hn), a._di._gR(), this._hr()
            },
            _ho: function() {
                this._cF._bo(this.getIndex())
            },
            _gP: function(a) {
                this._d(p.POPULATE, a)
            },
            _gv: function(a, b) {
                (a || b) && this._d(p.UPDATE, a, b), this._hr()
            },
            _hr: l(function() {
                var a = this.getControls(),
                    b = JSON.stringify(a);
                this._hu !== b && this._d(p.CONTROLS, a), this._hu = b
            }, {
                _dO: function() {
                    this._cF._cC
                },
                _cr: 30
            }),
            _hs: function() {
                var a = this._he();
                a && a._dB !== q.RADIO && (a._di._gX(this._dj), this._hr())
            },
            _ht: function() {
                this._cF._dU(this._dV), this._hr()
            },
            _c$: function() {
                var a = this;
                a.clearListeners(), a._cI._di.off(r._cB, a._hl), a._cI._di.off(r._g2, a._hm), a._cI._di.off(r._gW, a._hn), delete a._cF, delete a._cI, delete a._hu, delete a._dV, delete a._dj
            },
            getType: function() {
                var a = this._he();
                return a && a._dB
            },
            getConfig: x(function(a) {
                return a._dx
            }),
            getInfo: x(function(a) {
                return a._dv
            }),
            getControls: x(function(a) {
                return {
                    index: a._dB === q.RADIO ? null : !0,
                    next: a._dB === q.RADIO ? !this._hf.isLocked() : !!a._di._dT(),
                    prev: a._dB === q.RADIO ? null : !!a._di._gZ(),
                    like: !0,
                    dislike: !this._hf.isLocked(),
                    shuffle: this.getShuffle(),
                    repeat: this.getRepeat(),
                    skipping: this._hj || !1
                }
            }),
            getIndex: x(function(a, b) {
                return a._di._dP(b)
            }),
            getNextIndex: x(function(a, b) {
                return a._di._dl(b)
            }),
            getPrevIndex: x(function(a, b) {
                return a._di._dm(b)
            }),
            convertIndex: x(function(a, b, c) {
                return a._di._dn(b, !c)
            }),
            getList: x(function(a, b) {
                return a._di._dM(b)
            }),
            getCount: x(function(a, b) {
                return a._di._dG(b)
            }),
            getCurrent: x(function(a) {
                return a._di._dH()
            }),
            getNext: x(function(a) {
                return a._di._dT()
            }),
            getPrev: x(function(a) {
                return a._di._gZ()
            }),
            _gU: y(function(a, b) {
                var c = this._cF._bo(a, b)._c6;
                return this._cO._c7(!1), c
            }),
            setIndex: v(m(x(function(a, b, c) {
                return h.info(null, "setIndex", b, c), this._cH._w(), c && (b = a._di._dn(b)), this._gU(b)
            }, null, q.RADIO))),
            next: v(m(x(function(a) {
                if (h.info(null, "next"), this._cH._w(), a._di._dj === t.ONE && (a._di._dj = t.ALL, this._dj = t.ALL, this._hr()), !this.getNext()) throw new Error("No next track");
                return this._gU("+", s._fx)
            }))),
            prev: v(m(x(function(a) {
                if (h.info(null, "prev"), this._cH._w(), a._di._dj === t.ONE && (a._di._dj = t.ALL, this._dj = t.ALL, this._hr()), !this.getPrev()) throw new Error("No prev track");
                return this._gU("-")
            }, null, q.RADIO))),
            selectTrack: v(m(x(function(a, b) {
                var c = a._di._gY(b, 1);
                if (c.length < 1) throw new Error("Track not found");
                return this.setIndex(c[0])
            }, null, q.RADIO))),
            setSettings: v(m(x(function(a, b) {
                return h.info(null, "setSettings", b), this._cF._eP(b)
            }, q.RADIO))),
            getSettings: x(function(a) {
                return a._eQ
            }, q.RADIO),
            getRestrictions: x(function(a) {
                return a._fT
            }, q.RADIO),
            updateFrom: x(function(a, b) {
                h.info(null, "updateFrom", b), a._dS = b
            }),
            append: v(x(function(a, b) {
                h.info(null, "append", b.length), a._di._fV(b)
            }, null, q.RADIO)),
            prepend: v(x(function(a, b) {
                h.info(null, "prepend", b.length), a._di._gT(b)
            }, null, q.RADIO)),
            move: v(x(function(a, b, c) {
                h.info(null, "move", b, c), a._di._gU(b, c)
            }, null, q.RADIO)),
            remove: v(x(function(a, b, c) {
                h.info(null, "remove", b, c), a._di._fY(b, c)
            }, null, q.RADIO)),
            cleanup: x(function(a) {
                h.info(null, "cleanup"), a._di._gV()
            }),
            populate: m(x(function(a, b, c, d, e) {
                return a._di._dI(b, c, d, e)
            })),
            isLiked: x(function(a, b) {
                return null == b && (b = this.getCurrent()), this._cF._eE(b)
            }),
            isDisliked: x(function(a, b) {
                return null == b && (b = this.getCurrent()), this._cF._eG(b)
            }),
            toggleLike: v(m(x(function(a, b, c, d, e) {
                return h.info(null, "toggleLike", b, c, e), this._cF._eH(b, c, d, e)
            }))),
            toggleDislike: v(m(x(function(a, b, c, d) {
                return h.info(null, "toggleDislike", b, c, d), this._cH._w(), this._eO(b, c, d)
            }))),
            _eO: y(function(a, b, c) {
                return this._cF._eL(a, b, c)
            }),
            updateFavs: m(function(a) {
                return a ? (u._fJ(a), !0) : u._fI()
            }),
            getShuffle: function() {
                var a = this._he();
                return a && a._dB !== q.RADIO ? this._dV : null
            },
            toggleShuffle: v(function(a) {
                return null == a && (a = !this._dV), h.info(null, "toggleShuffle", a), this._dV !== a ? (this._dV = a, this._ht(), this._dV) : void 0
            }),
            getRepeat: function() {
                var a = this._he();
                return a && a._dB !== q.RADIO ? this._dj : null
            },
            toggleRepeat: v(function(a) {
                return null == a && (a = this._dj === t.ALL ? t.ONE : this._dj === t.ONE ? t.NONE : t.ALL), h.info(null, "toggleRepeat", a), this._dj !== a ? (this._dj = a, this._hs(), this._dj) : void 0
            })
        }, n.mixin(z), b.Source = z, b.$h = i.createClass(z)
    }, function(a, b, c, d) {
        var e = c(56),
            f = new e("Audio"),
            g = c(61),
            h = c(57),
            i = h("player.audio"),
            j = c(66),
            k = c(68),
            l = c(136),
            m = c(1),
            n = c(151),
            o = c(19),
            p = ya.music.Audio,
            q = p.audioContext,
            r = p.fx.Equalizer,
            s = p.fx.volumeLib,
            t = c(146)._c5,
            u = "main",
            v = "advert",
            w = "common",
            x = function(a) {
                m.call(this), this._cG = a._cG, this._cH = a._cH, this._cF = a._cF, this._cO = this._cF._cO, this._hv = !1, this._cd = .5, this._hw = null, this._hx = !1, this.readyPromise().then(this._ga.bind(this))
            };
        x.prototype = {
            _q: function() {
                return {
                    type: this.isReady() ? this.getType() : "not ready",
                    current: this._hy()
                }
            },
            _c$: function() {
                var a = this;
                a.clearListeners(), delete a._cF, delete a._cO, delete a._hv, delete a._cd, delete a._hw, delete a._hx
            },
            _ga: function() {
                this._cd = l._gf(), this._hv = l._gg(), this.setVolume(this.getVolume()), this._cO._d6._b(o.EVENT_PROGRESS, this._hz.bind(this, u)), this._cO._d7._b(o.EVENT_PROGRESS, this._hz.bind(this, v)), this._cO._d8._b(o.EVENT_PROGRESS, this._hz.bind(this, w))
            },
            _hz: function(a, b) {
                var c = this._hy();
                a === c && this._d(n.TIME, b)
            },
            _hA: function() {
                return this.isReady() ? this._cO._ex.isLocked() ? this._cO._er.isLocked() ? this._cO._d5.isLocked() ? null : this._cO._d6 : this._cO._d7 : this._cO._d8 : null
            },
            _hy: function() {
                return this.isReady() ? this._cO._ex.isLocked() ? this._cO._er.isLocked() ? this._cO._d5.isLocked() ? null : u : v : w : null
            },
            isReady: function() {
                return this._cO._cV()
            },
            readyPromise: function() {
                return this._cO._cL()
            },
            canNavigate: function() {
                return this._hy() === u
            },
            getType: j(function() {
                return this._cO._d6.getType()
            }),
            isDeviceVolume: j(function() {
                return this._cO._d6.isDeviceVolume()
            }),
            isEqualizerAvailable: j(function() {
                return "html5" === this.getType() && !!q
            }),
            getDuration: function() {
                var a = this._hA();
                return a ? a.getDuration() : 0
            },
            getLoaded: function() {
                var a = this._hA();
                return a ? a.getLoaded() : 0
            },
            getPosition: function() {
                var a = this._hA();
                return a ? a.getPosition() : 0
            },
            getPlayed: function() {
                return this.isReady() ? this._cO._d6.getPlayed() : 0
            },
            setPosition: t(!0, function(a) {
                return f.info(this, "setPosition", a), this._hy() !== u ? this.getPosition() : this._cO._d6.setPosition(a)
            }),
            isPaused: function() {
                return this._cO._cN.isLocked()
            },
            togglePause: t(function(a) {
                f.info(this, "togglePause", a), !a && this._cH._w(), a || this.toggleMute(!1), this._cF._cR(k._cS) || this._cF._cR(k._cT) ? this._cO._c7(a) : a || (this._cO._c7(!1), this._cF._bo())
            }),
            isExponent: function() {
                return this._hv
            },
            toggleExponent: t(function(a) {
                this._hv = a, l._gh(a), this._d(n.VOLUME, this.getVolume())
            }),
            getVolume: function() {
                return this._hv ? s.fromExponent(this._cd) : this._cd
            },
            setVolume: t(function(a) {
                a = Math.max(0, Math.min(1, a)), this._hv && (a = s.toExponent(a)), a < i._ch && (a = 0), this._cO._f$(a), this._cd = a, a && l._f$(a), this._d(n.VOLUME, this.getVolume())
            }),
            toggleMute: t(function(a) {
                if (f.info(this, "toggleMute", a), null == a && (a = 0 !== this._cd), a) {
                    if (0 == this._cd) return;
                    this.lastVolume = this.getVolume(), this.setVolume(0)
                } else {
                    if (0 != this._cd) return;
                    this.setVolume(this.lastVolume)
                }
            }),
            getEqualizer: j(function() {
                return this.isEqualizerAvailable() ? (this._hw || (this._hw = new r(q, r.DEFAULT_BANDS)), this._hw) : null
            }),
            getEqualizerState: function() {
                return this._hx
            },
            toggleEqualizerState: t(j(function(a) {
                if (f.info(this, "toggleEqualizerState", a), !this.isEqualizerAvailable()) return null;
                var b = this._cO._d6;
                return null == a && (a = !this._hx), a ? this._hx ? this.getEqualizer() : b.toggleWebAudioAPI(!0) && this.getEqualizer() ? (b.setAudioPreprocessor(this._hw), this._hx = !0, this._hw) : (this._hx = !1, null) : this._hx ? (b.setAudioPreprocessor(null), this._hx = !1, null) : null
            }))
        }, m.mixin(x), b.Audio = x, b._h = g.createClass(x)
    }, function(a, b, c, d) {
        var e = {
            TIME: "time",
            VOLUME: "volume",
            EQUALIZER: "equalizer"
        };
        a.Xh = e
    }, function(a, b, c, d) {
        var e = c(68),
            f = c(136),
            g = c(144),
            h = c(70),
            i = c(52),
            j = c(49),
            k = c(83),
            l = function(a) {
                this._hB = a, this._cI = a._cI, this._cF = a._cF, this._cO = this._cF._cO, this._cJ = a._cJ
            };
        l.prototype._hC = function(a) {
            return a ? {
                id: j(a),
                available: a.available,
                error: a.error,
                title: a.title,
                liked: this._cI.isLiked(a),
                disliked: this._cI.isDisliked(a)
            } : null
        }, l.prototype.show = function() {
            var a = this._cF._cZ(e._cS),
                b = this._cF._cI,
                c = b._di;
            return {
                player: {
                    state: this._hB.getState(),
                    ready: this._cF._cV(),
                    tasks: Object.keys(this._cF._ds),
                    contexts: Object.keys(this._cF._dr),
                    play: a ? {
                        from: a._dS,
                        track: this._hC(a._c1),
                        advert: {
                            sdk: !!k._fg,
                            loader: !!a._c3._fm,
                            sender: !!a._c3._fn,
                            id: a._c3._el && a._c3._el._ek,
                            cond: a._c3._eW ? {
                                skip: a._c3._eW._eV,
                                play: a._c3._eW._bo
                            } : null
                        }
                    } : null
                },
                source: {
                    type: b._dB,
                    config: b._dx,
                    current: this._hC(c._dH()),
                    next: this._hC(c._dT()),
                    prev: this._hC(c._gZ()),
                    repeat: c._dj,
                    shuffle: c._dV,
                    count: c._dG(),
                    playable: c._dG(!0),
                    index: c._dk,
                    vindex: c._gG,
                    controls: this._cI.getControls()
                },
                audio: h(this._cJ._q(), {
                    pause: this._cO._cN.isLocked(),
                    main: this._cO._d5.isLocked(),
                    advert: this._cO._er.isLocked(),
                    common: this._cO._ex.isLocked(),
                    playMain: this._cO._f5.isLocked(),
                    playAdvert: this._cO._f6.isLocked(),
                    playCommon: this._cO._f7.isLocked()
                }, this._cJ.isReady() ? {
                    position: this._cJ.getPosition(),
                    duration: this._cJ.getDuration(),
                    loaded: this._cJ.getLoaded(),
                    played: this._cJ.getPlayed()
                } : {}),
                user: {
                    ready: g._cV(),
                    logged: i.logged,
                    premium: i.premium,
                    invalid: i.invalid
                },
                settings: {
                    ready: f._cV()
                }
            }
        }, a.Xh = l
    }, function(a, b, c, d) {
        var e = c(57),
            f = e("cross_tabs"),
            g = c(138),
            h = c(140),
            i = new g,
            j = function(a) {
                this._cO = a._cF._cO, this._hD = "" + +new Date + Math.random(), j._hE[this._hD] = this, j._hF || (i.on(h.UPDATE, j._c_), j._hF = !0)
            };
        j.prototype._w = function() {
            i._ge("session", f._cj, this._hD)
        }, j._c_ = function(a, b, c) {
            if (b == f._cj && c) {
                var d;
                for (var e in j._hE) j._hE.hasOwnProperty(e) && (d = j._hE[e]._cO, e != c && d._cN.toggle(!0))
            }
        }, j._hE = {}, a.Xh = j
    }, function(a, b, c, d) {
        var e = {
            INIT: "init",
            IDLE: "idle",
            PLAYING: "playing",
            PAUSED: "paused",
            FAILED: "failed"
        };
        a.Xh = e
    }, function(a, b, c, d) {
        var e = {
            IDLE: "idle",
            SOURCE: "source",
            PLAY: "play",
            COMMON: "common",
            ADVERT: "advert",
            TRACK: "track"
        };
        a.Xh = e
    }, function(a, b, c, d) {
        var e = c(136),
            f = c(66),
            d = c(89),
            g = c(70),
            h = {
                isReady: function() {
                    return e._cV()
                },
                readyPromise: function() {
                    return e._cL()
                },
                getPreferredType: f(function() {
                    return e._f8()
                }),
                setPreferredType: f(function(a) {
                    return e._gd(a)
                }),
                getFormat: f(function() {
                    return e._fA()
                }),
                setFormat: f(function(a) {
                    return e._fF(a)
                }),
                getHQ: f(function() {
                    return e._gb()
                }),
                setHQ: f(function(a) {
                    return e._fE(a)
                }),
                getVolume: f(function() {
                    return e._gf()
                }),
                getExponent: f(function() {
                    return e._gg()
                }),
                setRequestsGlobal: function(a) {
                    g(d, a, !0)
                }
            };
        a.Xh = h
    }, function(a, b, c, d) {
        var e = c(144),
            f = c(52),
            g = c(66),
            h = c(67),
            i = {
                isReady: function() {
                    return e._cV()
                },
                readyPromise: function() {
                    return e._cL()
                },
                update: h(function() {
                    return e._de()
                }),
                setCurrentUID: function(a) {
                    e._g3(a)
                },
                isLogged: g(function() {
                    return f.logged
                }),
                isPremium: g(function() {
                    return f.premium
                }),
                isForeign: g(function() {
                    return f.invalid
                })
            };
        a.Xh = i
    }, function(a, b, c, d) {
        var e = c(47),
            f = c(93);
        e.getContext = f._l, e.adbState = f._fo, e.antiAdbStyles = f._fp
    }]);

    var p = ["radio.yandex.ru/api/v2.1/handlers/radio/genre/electronics/tracks/n/", "radio.yandex.ru/api/v2.1/handlers/radio/genre/vocal/tracks/w/", "aI4gAtM7kYhRyHQAKjqXVw~~-1aqabp8qi", "bj0JYhDGdXYPRFjNRGmWvQ~~-1aqabp8qi", "xYK8Xw6LR1yjKU6VJL09mg~~-1aqabp8qj"],
        o = ["an.yandex.", "awaps.yandex.", "meta/", "target-ref", "vcset/"];

    function adinit(a) {
        var adblink = function(i) {
            return (a ? p : o)[i]
        };
        /*##context##*/
        ! function(e) {
            function t(n) {
                if (r[n]) return r[n].exports;
                var i = r[n] = {
                    exports: {},
                    id: n,
                    loaded: !1
                };
                return e[n].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
            }
            var n = window.webpackJsonp;
            window.webpackJsonp = function(r, o) {
                for (var a, u, c = 0, s = []; c < r.length; c++) u = r[c], i[u] && s.push.apply(s, i[u]), i[u] = 0;
                for (a in o) e[a] = o[a];
                for (n && n(r, o); s.length;) s.shift().call(null, t)
            };
            var r = {},
                i = {
                    0: 0
                };
            return t.e = function(e, n) {
                if (0 === i[e]) return n.call(null, t);
                if (void 0 !== i[e]) i[e].push(n);
                else {
                    i[e] = [n];
                    var r = document.getElementsByTagName("head")[0],
                        o = document.createElement("script");
                    o.type = "text/javascript", o.charset = "utf-8", o.async = !0, o.src = t.p + "bundles/" + ({
                        1: "adsdk.bundle",
                        2: "inpage.bundle",
                        3: "banner_ad.bundle",
                        4: "video_player.bundle",
                        5: "ad_loader.bundle"
                    }[e] || e) + ".js", r.appendChild(o)
                }
            }, t.m = e, t.c = r, t.p = "", t(0)
        }([function(e, t, n) {
            var r, i;
            r = [n, t, n(1)], i = function(e, t, n) {
                "use strict";
                n.deployObject(n.ya, "ya")
            }.apply(t, r), !(void 0 !== i && (e.exports = i))
        }, function(e, t, n) {
            var r, i;
            r = [n, t, n(2)], i = function(e, t) {
                "use strict";

                function r(e, t) {
                    for (var n = t.split("."), i = window, o = 0; o < n.length - 1; o++) i = i[n[o]];
                    var a = n[n.length - 1];
                    if (void 0 === i[a]) i[a] = e;
                    else if ("object" == typeof i[a])
                        for (var u in e) e.hasOwnProperty(u) && r(e[u], t + "." + u)
                }
                var i = function() {
                        return "ontouchstart" in window || window.navigator.maxTouchPoints > 0 || window.navigator.msMaxTouchPoints > 0
                    },
                    o = function() {
                        var e = navigator.userAgent.toLowerCase();
                        return e.indexOf("iphone") > -1 || e.indexOf("ipad") > -1 || e.indexOf("ipod") > -1
                    };
                t.AdType = {
                    PREROLL: "preroll",
                    MIDROLL: "midroll",
                    PAUSEROLL: "pauseroll",
                    OVERLAY: "overlay",
                    POSTROLL: "postroll"
                }, t.AdConfigParams = {
                    VAST_URL: "vastUrl",
                    VAST: "vast",
                    AD_FOX_URL: "adFoxUrl",
                    AD_FOX_URL_VAST: "adFoxUrlVast",
                    PARTNER_ID: "partnerId",
                    CATEGORY: "category",
                    TAGS_LIST: "tagsList",
                    CHARSET: "charset",
                    VIDEO_CONTENT_ID: "videoContentId",
                    VIDEO_CONTENT_NAME: "videoContentName",
                    VIDEO_PUBLISHER_ID: "videoPublisherId",
                    VIDEO_PUBLISHER_NAME: "videoPublisherName",
                    VIDEO_GENRE_ID: "videoGenreId",
                    VIDEO_GENRE_NAME: "videoGenreName",
                    EXT_PARAM: "extParam",
                    PLAYER_INFO: "playerInfo",
                    DURATION: "duration",
                    IMPRESSION_TRACK_OFFSET: "impressionOffset"
                }, t.TrackingEventType = {
                    ERROR: "error",
                    IMPRESSION: "impression",
                    CREATIVE_VIEW: "creativeView",
                    START: "start",
                    FIRST_QUARTILE: "firstQuartile",
                    MIDPOINT: "midpoint",
                    THIRD_QUARTILE: "thirdQuartile",
                    COMPLETE: "complete",
                    MUTE: "mute",
                    UNMUTE: "unmute",
                    PAUSE: "pause",
                    RESUME: "resume",
                    FULLSCREEN: "fullscreen",
                    EXIT_FULLSCREEN: "exitFullscreen",
                    CLOSE: "close",
                    SKIP: "skip",
                    CLICK_THROUGH: "clickThrough",
                    PROGRESS: "progress",
                    REWIND: "rewind",
                    VIEWABLE: "viewable",
                    DWELL: "dwell",
                    EXPAND: "expand",
                    COLLAPSE: "collapse",
                    ACCEPT_INVITATION: "acceptInvitation"
                };
                var a = function() {
                    function e() {
                        function t(e) {
                            for (var t, n = e[0][0], r = 0; r < e.length && (t = e[r], !(i <= n)); r++) n += e[r][0];
                            return t[1]
                        }
                        var r = this;
                        this.CURRENT_SCRIPT_SRC = document.currentScript ? document.currentScript.src : "";
                        var i = Math.random(),
                            o = {
                                loader: 320,
                                bundles: [
                                    [1, 320]
                                ]
                            };
                        this.LOADER_VERSION = o.loader, this.BUNDLES_VERSION = t(o.bundles), this.SDK_VERSION = "1.0-" + this.BUNDLES_VERSION, this.SDK_FULL_VERSION = this.SDK_VERSION, this.DEV_MODE = !1, this.DOMAIN = this.DEV_MODE ? e.DOMAINS.TEST[0] : e.DOMAINS.PROD[0], this.TESTING_MODE = "boolean" == typeof YANDEX_AD_SDK_TESTING_MODE && YANDEX_AD_SDK_TESTING_MODE, this.DEFAULT_CSS = null, n.p = function() {
                            return r.TESTING_MODE ? "./base/target/" : r.DEV_MODE ? "../../target/" : "https://" + r.getActualDomain() + "/awaps-ad-sdk-js-bundles/" + r.SDK_VERSION + "/"
                        }()
                    }
                    return e.prototype.getActualDomain = function() {
                        var t = this;
                        return e.DOMAINS.TEST.some(function(e) {
                            return t.CURRENT_SCRIPT_SRC.indexOf(e) !== -1
                        }) ? e.DOMAINS.TEST[0] : this.DOMAIN
                    }, e.prototype.getVersioningURL = function() {
                        return this.DEV_MODE ? ("1.0-" + this.BUNDLES_VERSION).split("-")[0].split(".").join("_") : ("1.0-" + this.BUNDLES_VERSION).split("-")[0].split(".").join("_") + "/v-" + this.SDK_VERSION
                    }, e.DOMAINS = {
                        TEST: ["betastatic.yastatic.net", "betastatic.yandex.net"],
                        PROD: ["yastatic.net"]
                    }, e
                }();
                t.ENVIRONMENT = new a;
                var u = function(e) {
                    return new Promise(function(t) {
                        switch (e) {
                            case "AdSDK":
                                n.e(1, function(e) {
                                    return t(n(3))
                                });
                                break;
                            case "InPage":
                                n.e(2, function(e) {
                                    return t(n(13))
                                });
                                break;
                            case "BannerAd":
                                n.e(3, function(e) {
                                    return t(n(15))
                                });
                                break;
                            case "VideoPlayer":
                                n.e(4, function(e) {
                                    return t(n(17))
                                });
                                break;
                            case "AdLoader":
                                n.e(5, function(e) {
                                    return t(n(18))
                                });
                                break;
                            default:
                                throw new Error("AdSDK JS Error: Unexpecter loader: " + e)
                        }
                    })
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t["default"] = u, t.ya = {
                    videoAd: {
                        AdConfigParams: t.AdConfigParams,
                        loadModule: u,
                        initVideoNode: function(e, t, n, r) {
                            return u("AdSDK").then(function(i) {
                                return i.initVideoNode(e, t, n, r)
                            })
                        }
                    },
                    mediaAd: {
                        util: {
                            isIOS: o,
                            isTouchDevice: i,
                            setDefaultUrlScheme: function(e) {
                                var n = ["http", "https"];
                                if (n.indexOf(e) < 0) throw new Error("AdSDK setDefaultUrlScheme error. Allowed: " + n.join(", "));
                                t.ya.mediaAd.util.URL_SCHEME = e
                            },
                            URL_SCHEME: null
                        },
                        DOMAIN: t.ENVIRONMENT.DOMAIN,
                        SDK_VERSION: t.ENVIRONMENT.SDK_VERSION,
                        AdType: t.AdType,
                        TrackingEventType: t.TrackingEventType,
                        AdConfigParams: t.AdConfigParams,
                        bannerAd: {
                            initVideo: function(e, t, n) {
                                return u("BannerAd").then(function(r) {
                                    return r.initVideo(e, t, n)
                                })
                            }
                        },
                        inPage: {
                            addInPageVideo: function(e, t, n) {
                                return u("InPage").then(function(r) {
                                    return r.addInPageVideo(e, t, n)
                                })
                            }
                        },
                        initForVideoNode: function(e, t, n, r, i) {
                            return u("AdSDK").then(function(o) {
                                return o.initForVideoNode(e, t, n, r, i)
                            })
                        },
                        initAdDisplay: function(e, t, n, r) {
                            return u("AdSDK").then(function(i) {
                                return i.initAdDisplay(e, t, n, r)
                            })
                        },
                        initPlacement: function(e, t, n) {
                            return u("AdSDK").then(function(r) {
                                return r.initPlacement(e, t, n)
                            })
                        }
                    },
                    video: {
                        addVideoPlayer: function(e, t, n, r) {
                            return u("VideoPlayer").then(function(i) {
                                return i.addVideoPlayer(e, t, n, r)
                            })
                        }
                    }
                }, t.deployObject = r
            }.apply(t, r), !(void 0 !== i && (e.exports = i))
        }, function(e, t) {
            (function(e) {
                ! function(e) {
                    function t() {}

                    function n(e, t) {
                        return function() {
                            e.apply(t, arguments)
                        }
                    }

                    function r(e) {
                        if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
                        if ("function" != typeof e) throw new TypeError("not a function");
                        this._state = 0, this._value = void 0, this._deferreds = [], s(e, this)
                    }

                    function i(e, t) {
                        for (; 3 === e._state;) e = e._value;
                        return 0 === e._state ? void e._deferreds.push(t) : void f(function() {
                            var n = 1 === e._state ? t.onFulfilled : t.onRejected;
                            if (null === n) return void(1 === e._state ? o : a)(t.promise, e._value);
                            var r;
                            try {
                                r = n(e._value)
                            } catch (i) {
                                return void a(t.promise, i)
                            }
                            o(t.promise, r)
                        })
                    }

                    function o(e, t) {
                        try {
                            if (t === e) throw new TypeError("A promise cannot be resolved with itself.");
                            if (t && ("object" == typeof t || "function" == typeof t)) {
                                var i = t.then;
                                if (t instanceof r) return e._state = 3, e._value = t, void u(e);
                                if ("function" == typeof i) return void s(n(i, t), e)
                            }
                            e._state = 1, e._value = t, u(e)
                        } catch (o) {
                            a(e, o)
                        }
                    }

                    function a(e, t) {
                        e._state = 2, e._value = t, u(e)
                    }

                    function u(e) {
                        for (var t = 0, n = e._deferreds.length; t < n; t++) i(e, e._deferreds[t]);
                        e._deferreds = null
                    }

                    function c(e, t, n) {
                        this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n
                    }

                    function s(e, t) {
                        var n = !1;
                        try {
                            e(function(e) {
                                n || (n = !0, o(t, e))
                            }, function(e) {
                                n || (n = !0, a(t, e))
                            })
                        } catch (r) {
                            if (n) return;
                            n = !0, a(t, r)
                        }
                    }
                    var d = setTimeout,
                        f = function(e) {
                            d(e, 1)
                        },
                        l = Array.isArray || function(e) {
                            return "[object Array]" === Object.prototype.toString.call(e)
                        };
                    r.prototype["catch"] = function(e) {
                        return this.then(null, e)
                    }, r.prototype.then = function(e, n) {
                        var o = new r(t);
                        return i(this, new c(e, n, o)), o
                    }, r.all = function() {
                        var e = Array.prototype.slice.call(1 === arguments.length && l(arguments[0]) ? arguments[0] : arguments);
                        return new r(function(t, n) {
                            function r(o, a) {
                                try {
                                    if (a && ("object" == typeof a || "function" == typeof a)) {
                                        var u = a.then;
                                        if ("function" == typeof u) return void u.call(a, function(e) {
                                            r(o, e)
                                        }, n)
                                    }
                                    e[o] = a, 0 === --i && t(e)
                                } catch (c) {
                                    n(c)
                                }
                            }
                            if (0 === e.length) return t([]);
                            for (var i = e.length, o = 0; o < e.length; o++) r(o, e[o])
                        })
                    }, r.resolve = function(e) {
                        return e && "object" == typeof e && e.constructor === r ? e : new r(function(t) {
                            t(e)
                        })
                    }, r.reject = function(e) {
                        return new r(function(t, n) {
                            n(e)
                        })
                    }, r.race = function(e) {
                        return new r(function(t, n) {
                            for (var r = 0, i = e.length; r < i; r++) e[r].then(t, n)
                        })
                    }, r._setImmediateFn = function(e) {
                        f = e
                    }, e.Promise || (e.Promise = r)
                }("undefined" != typeof window ? window : e)
            }).call(t, function() {
                return this
            }())
        }]);

        webpackJsonp([1], [, , , function(e, t, r) {
            var n, i;
            n = [r, t, r(4), r(10), r(23), r(19), r(9), r(52), r(53)], i = function(e, t, r, n, i, o, a) {
                "use strict";
                t.initPlacement = function(e, t, r) {
                    function s(r) {
                        t(new i["default"](e, r))
                    }
                    e.blockInfo ? s(e.blockInfo) : o["default"].load(e).then(s)["catch"](function(e) {
                        a.trackError(e), n.fireCallback(r, e)
                    })
                }, t.initAdDisplay = function(e, i, o, a) {
                    t.initPlacement(e, function(t) {
                        n.fireCallback(a, new r["default"](e, t, i, o))
                    }, a)
                };
                var s = function() {
                    function e(e, t, r) {
                        this.config = e, this.adCallbacks = {
                            onBeforeAdStart: function() {},
                            onAdStart: function() {},
                            onAdEnd: function() {},
                            onAdMediaStart: function() {},
                            onAdMediaEnd: function() {}
                        }, this.videoNode = n.getElement(t), this.videoWrapperNode = n.getElement(r)
                    }
                    return e.prototype.init = function(e, r) {
                        var i = this;
                        this.callbacks = {
                            onInit: e,
                            onError: r
                        }, t.initAdDisplay(this.config, this.videoNode.id, this.videoWrapperNode.id, function(t) {
                            t instanceof Error ? n.fireCallback(r, t) : (i.displayController = t, i.displayController.on({
                                afterStartAd: function() {
                                    return n.fireCallback(i.adCallbacks.onAdStart, i.displayController.currentAdType)
                                },
                                afterStartAdMedia: function() {
                                    return n.fireCallback(i.adCallbacks.onAdMediaStart, i.displayController.currentAdType)
                                },
                                afterEndAdMedia: function() {
                                    return n.fireCallback(i.adCallbacks.onAdMediaEnd, i.displayController.currentAdType)
                                },
                                afterEndAd: function() {
                                    return n.fireCallback(i.adCallbacks.onAdEnd, i.displayController.currentAdType)
                                }
                            }), i.displayController.onBeforeStartAd.add(function() {
                                return n.fireCallback(i.adCallbacks.onBeforeAdStart, i.displayController.currentAdType)
                            }), i.mainVideoState = i.displayController.videoNodeController.getVideoState(), i.startWatchingVideoForAd(), n.fireCallback(e, i.adCallbacks))
                        })
                    }, e.prototype.startWatchingVideoForAd = function() {
                        var e = this,
                            t = this.displayController.videoNodeController,
                            r = !1,
                            i = !1;
                        return t.when("start").then(function() {
                            return e.displayController.onBeforeStartAd.addOne(function() {
                                return r = !0
                            })
                        }).then(function() {
                            return e.showAd("preroll")
                        }).then(function() {
                            return e.playMainVideo()
                        })["catch"](function(t) {
                            r ? e.playMainVideo() : e.displayController.videoNodeController.play(), n.fireCallback(e.callbacks.onError, t)
                        }).then(function() {
                            return t.when("complete")
                        }).then(function() {
                            return e.displayController.onBeforeStartAd.addOne(function() {
                                return i = !0
                            })
                        }).then(function() {
                            return e.showAd("postroll")
                        }).then(function() {
                            return e.setMainVideo()
                        }).then(function() {
                            return e.startWatchingVideoForAd()
                        })["catch"](function(t) {
                            i && e.setMainVideo(), n.fireCallback(e.callbacks.onError, t)
                        })
                    }, e.prototype.setMainVideo = function() {
                        this.displayController.videoNodeController.setVideoState(this.mainVideoState)
                    }, e.prototype.playMainVideo = function() {
                        this.setMainVideo(), this.displayController.videoNodeController.play()
                    }, e.prototype.showAd = function(e) {
                        return this.displayController.loadAndShowAd(e)
                    }, e
                }();
                t.initForVideoNode = function(e, t, r, n, i) {
                    var o = new s(e, t, r);
                    o.init(n, i)
                }, t.initVideoNode = function(e, r, n, i) {
                    t.initForVideoNode(e, r, n, i, i)
                }
            }.apply(t, n), !(void 0 !== i && (e.exports = i))
        }, function(e, t, r) {
            var n, i, o = this && this.__extends || function(e, t) {
                function r() {
                    this.constructor = e
                }
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            };
            n = [r, t, r(10), r(11), r(39), r(41), r(8), r(5), r(43), r(47), r(36), r(35), r(49), r(1)], i = function(e, t, r, n, i, a, s, u, c, l, d, p, f, h) {
                "use strict";
                var v = function(e) {
                    function t(t, o, a, s) {
                        var u = this;
                        e.call(this, r.getElement(s)), this.config = t, this.adManager = o, this.qualityLevel = 0, this.onAdLoaded = new n["default"], this.onPlayRequest = new n["default"], this.onBeforeStartAd = new n["default"], this.viewersList = [], this.desiredBitrate = t.desiredBitrate, this.indulgentlyForMobile = t.indulgentlyForMobile;
                        var c = r.getElement(a);
                        this.videoNodeController = new i["default"](c), this.videoNodeController.on("click", function() {
                            return u.clickThrough()
                        }), t.qualityLevel && (this.qualityLevel = t.qualityLevel), this.on({
                            afterEndAd: function() {
                                return u.setVisibleNativeControls(!0)
                            },
                            ready: function() {
                                return u.setVisibleNativeControls(!1)
                            }
                        }), this.addGui(), this.on({
                            afterStartAdMedia: function() {
                                return c.style.cursor = u.getCurrentClickability() ? "pointer" : "default"
                            },
                            afterEndAdMedia: function() {
                                return c.style.cursor = "default"
                            },
                            currentPositionChange: function(e) {
                                var t = e.currentTime,
                                    r = e.duration,
                                    n = t >= u.currentViewer.playbackParams.skipDelay && u.currentViewer.playbackParams.skipDelay > 0,
                                    i = r - t,
                                    o = Math.floor(i / 60),
                                    a = Math.floor(u.currentViewer.playbackParams.skipDelay - t),
                                    s = Math.floor(i - 60 * o);
                                u.gui.controls.skipTimeLeft.setVisible(!n), u.gui.controls.skip.setVisible(n), n || u.gui.controls.skipTimeLeft.setText("&#1055;&#1088;&#1086;&#1087;&#1091;&#1089;&#1090;&#1080;&#1090;&#1100; &#1088;&#1077;&#1082;&#1083;&#1072;&#1084;&#1091;: " + a + " &#1089;&#1077;&#1082;"), u.gui.controls.timeLeft.setText("&#1056;&#1077;&#1082;&#1083;&#1072;&#1084;&#1072; " + (s < 10 ? "0" + s : s))
                            }
                        })
                    }
                    return o(t, e), t.prototype.loadAndShowAd = function(e) {
                        var t = this;
                        return this.isFinished = !1, this.currentAdType = e, this.videoNodeController.pause(), this.loadAd().then(function(e) {
                            return t.viewersList = e
                        }).then(function() {
                            return t.showAd()
                        })["catch"](function(e) {
                            return t.emit("error", e), Promise.reject(e)
                        })
                    }, t.prototype.getPartnerIdAndCategory = function() {
                        return {
                            partnerId: parseInt(this.adManager.blockInfo.partnerId, 10) || 139995,
                            category: this.adManager.blockInfo.categoryID || 0
                        }
                    }, t.prototype.getClickThroughURL = function() {
                        return this.viewersList[0].mediaAd.clickThroughUrl
                    }, t.prototype.destroy = function() {
                        this.videoNodeController.destroy()
                    }, t.prototype.setMute = function(e, t) {
                        this.videoNodeController.setMute(e, t)
                    }, t.prototype.clickThrough = function() {
                        this.currentViewer && this.currentViewer.clickThrough()
                    }, t.prototype.play = function(e) {
                        return void 0 === e && (e = !0), e && this.onPlayRequest.trigger(), this.currentViewer ? this.currentViewer.play(e) : Promise.reject(new Error("AdSDK Error: play request without AdMedia"))
                    }, t.prototype.pause = function() {
                        this.currentViewer && this.currentViewer.pause()
                    }, t.prototype.resume = function() {
                        this.currentViewer.resume()
                    }, t.prototype.skip = function(e) {
                        this.isFinished = !0, this.currentViewer.skip(e), this.emitAdEnd()
                    }, t.prototype.stop = function() {
                        this.isFinished = !0, this.emit("stop"), this.emitAdEnd()
                    }, t.prototype.getAdDimensions = function() {
                        return this.currentViewer ? this.currentViewer.getAdDimensions() : d.ZERO_DIMENSION
                    }, t.prototype.trackEvent = function(e) {
                        this.currentViewer && this.currentViewer.trackEvent(e)
                    }, t.prototype.trackError = function(e) {
                        this.currentViewer && this.currentViewer.trackError(e)
                    }, t.prototype.getCurrentContentType = function() {
                        return this.currentViewer ? this.currentViewer.contentType : null
                    }, t.prototype.getCurrentTime = function() {
                        return this.getCurrentViewerStartTime() + this.currentViewer.getCurrentTime()
                    }, t.prototype.getDuration = function() {
                        var e = 0;
                        return this.viewersList.forEach(function(t) {
                            e += t.duration
                        }), e
                    }, t.prototype.getPaused = function() {
                        return this.videoNode.paused
                    }, t.prototype.getVolume = function() {
                        return this.videoNodeController.volume
                    }, t.prototype.setVolume = function(e) {
                        this.videoNodeController.volume = e
                    }, t.prototype.getMuted = function() {
                        return this.videoNode.muted
                    }, t.prototype.getAutoplay = function() {
                        var e = !this.config.hasOwnProperty("autoplay") || this.config.autoplay;
                        return e || this.getCurrentViewerIndex() > 0
                    }, t.prototype.setVisibleNativeControls = function(e) {
                        e ? this.nativeControlsHidder && this.nativeControlsHidder.parentElement && document.head.removeChild(this.nativeControlsHidder) : (this.nativeControlsHidder || (this.nativeControlsHidder = document.createElement("style"), this.nativeControlsHidder.innerHTML = "\n                    #" + this.videoNode.id + "::-webkit-media-controls{\n                        display:none !important;\n                    }\n                "), document.head.appendChild(this.nativeControlsHidder))
                    }, t.prototype.getCurrentClickability = function() {
                        return this.currentViewer && this.currentViewer.playbackParams.isClickable && !this.currentViewer.playbackParams.visitSiteShow
                    }, t.prototype.getCurrentSrc = function() {
                        return this.currentViewer ? this.currentViewer.getSrc() : ""
                    }, t.prototype.addGui = function() {
                        var e = this,
                            t = this.gui = new l["default"](this.wrapperNode),
                            n = t.controls;
                        return r.isTouchDevice() && t.wrapper.addClass("yaAdSdkGui-mobile"), n.play.setVisible(!this.getAutoplay()), this.on("pause", function() {
                            n.play.show()
                        }).on(["start", "resume"], function() {
                            n.play.hide()
                        }).once("playAdMedia", function() {
                            n.play.setVisible(!e.getAutoplay() || e.indulgentlyForMobile && (r.isIPhone() || r.isAndroid()))
                        }), r.isTouchDevice() ? this.on(["start", "resume"], function() {
                            e.currentViewer.playbackParams.pauseAllowed && !r.isIPhone() && n.pause.show()
                        }) : (this.onChangeHover.add(function(t) {
                            t ? e.currentViewer && e.currentViewer.playbackParams.pauseAllowed && !n.play.isVisible && !n.unmuteInviter.isVisible && n.pause.show() : n.pause.hide()
                        }), this.on(["start", "resume"], function() {
                            e.currentViewer.playbackParams.pauseAllowed && e.isHovered && n.pause.show()
                        })), this.on({
                            pause: function() {
                                return n.pause.hide()
                            }
                        }), t.on({
                            changeMute: function(t) {
                                return e.setMute(!e.muted, t)
                            },
                            click: function() {
                                return e.clickThrough()
                            },
                            pause: function() {
                                return e.pause()
                            },
                            play: function() {
                                e.currentContentType === p.AdSourceType.video ? r.muffleUncaughtErrors(e.videoNode.play()) : e.play(), e.currentViewer.isStarted && e.trackEvent(h.TrackingEventType.RESUME)
                            },
                            skip: function() {
                                return e.skip()
                            }
                        }), this.once("playAdMedia", function() {
                            var r = e.currentViewer.playbackParams;
                            t.addSkin(r.skinUrl), e.getCurrentClickability() ? t.wrapper.addClass("pointer") : t.wrapper.removeClass("pointer")
                        }).on({
                            afterEndAd: function() {
                                return t.hide()
                            },
                            afterStartAdMedia: function(i) {
                                var o = i.playbackParams;
                                i.contentType === p.AdSourceType.video || i.contentType === p.AdSourceType.js && o.showGuiForVpaid ? t.show() : n.unmuteInviter.isVisible || t.hide(), t.topRightBlock.className = o.minimalGui ? "topRightBlockMinimal" : "topRightBlock", n.skip.setBlocked(o.minimalGui), n.skipTimeLeft.setBlocked(o.minimalGui || !o.skipTimeLeftShow), n.timeLeft.setVisible(o.timeLeftShow), n.title.setText(o.title).setVisible(!!o.title.trim() && !o.minimalGui), n.mute.setVisible(!r.isIOS() && o.soundButtonShow && (r.isTouchDevice() || !o.minimalGui)), n.visitSite.setVisible(o.isClickable && o.visitSiteShow), t.setMute(e.muted)
                            },
                            muteChange: function(e) {
                                return t.setMute(e)
                            }
                        }), this.onBeforeStartAd.add(function() {
                            return t.show()
                        }), t
                    }, t.prototype.getCurrentViewerIndex = function() {
                        return Math.max(this.viewersList.indexOf(this.currentViewer), 0)
                    }, t.prototype.showAd = function() {
                        var e = this;
                        return new Promise(function(t, r) {
                            e.emitAdEnd = t, e.onBeforeStartAd.trigger(), e.viewersList[0].once({
                                ready: function() {
                                    return e.emit("ready")
                                },
                                start: function() {
                                    return e.emit("afterStartAd")
                                }
                            }), e.viewersList.forEach(function(t) {
                                e.reemit(t, ["start", "resume", "muteChange", "pause", "clickThrough", "impression"]), t.once("start", function() {
                                    return e.emit("afterStartAdMedia", t)
                                }).on("currentPositionChange", function(t) {
                                    var r = t.currentTime;
                                    return e.emit("currentPositionChange", {
                                        currentTime: e.getCurrentViewerStartTime() + r,
                                        duration: e.duration
                                    })
                                })
                            });
                            var n = Promise.resolve();
                            return e.viewersList.forEach(function(t) {
                                n = n.then(function() {
                                    return e.isFinished ? null : e.playAdMedia(t).then(function() {
                                        return e.emit("afterEndAdMedia")
                                    })["catch"](function(t) {
                                        e.emit("afterEndAdMedia"), e.isFinished = !0, r(t)
                                    })
                                })
                            }), n.then(t)
                        }).then(function() {
                            return e.emit("afterEndAd")
                        })["catch"](function(t) {
                            return e.emit("afterEndAd", t), Promise.reject(t)
                        })
                    }, t.prototype.playAdMedia = function(e) {
                        var t = this;
                        return this.currentViewer = e, new Promise(function(n, i) {
                            var o = e.playbackParams,
                                a = e.contentType === p.AdSourceType.video,
                                u = a ? o.videoTimeout : o.vpaidTimeout,
                                c = a ? s["default"].VIDEO_TIMEOUT : s["default"].VPAID_START_TIMEOUT,
                                l = !0,
                                d = function() {
                                    return t.onPlayRequest.addOne(function() {
                                        if (!e.isStarted) {
                                            var n = setTimeout(function() {
                                                if (t.indulgentlyForMobile && (r.isIPhone() || r.isAndroid()) && e.contentType === p.AdSourceType.video && l) l = !1, d();
                                                else {
                                                    var n = new s["default"]("Timeout of " + e.getContentTypeString() + ": " + u / 1e3 + "s: " + t.getCurrentSrc(), c);
                                                    t.trackError(n), i(n)
                                                }
                                            }, u);
                                            e.once(["start", "resume"], function() {
                                                return clearTimeout(n)
                                            })
                                        }
                                    })
                                };
                            d(), t.emit("playAdMedia"), t.play(t.getAutoplay()).then(n)["catch"](i)
                        }).then(function() {
                            t.currentViewer = null, e.destroyAdMedia()
                        })["catch"](function(r) {
                            return t.currentViewer = null, e.destroyAdMedia(), Promise.reject(r)
                        })
                    }, t.prototype.loadAd = function() {
                        var e = this;
                        return this.adManager.loadAd(this.currentAdType).then(function(t) {
                            return e.onAdLoaded.trigger(t), t.map(function(t) {
                                return e.createAdMedia(t)
                            })
                        })
                    }, t.prototype.getCurrentViewerStartTime = function() {
                        for (var e = this.getCurrentViewerIndex(), t = 0, r = 0; r < e; r++) t += this.viewersList[r].duration;
                        return t
                    }, t.prototype.createAdMedia = function(e) {
                        var t, r = e.playbackParams,
                            n = this.config;
                        switch (e.contentType) {
                            case p.AdSourceType.js:
                                t = new c["default"](this, e);
                                break;
                            case p.AdSourceType.video:
                                t = new u["default"](this, e);
                                break;
                            case p.AdSourceType.flash:
                                t = new f["default"](this, e);
                                break;
                            default:
                                throw new Error("AdSDKJS Error: Unresolved content type of mediaAd: " + e.contentType)
                        }
                        return n.numruns && t.setNumRepeats(n.numruns), void 0 !== n.impressionOffset && (t.impressionTrackOffset = n.impressionOffset), n.minimalGui === !0 && (r.minimalGui = !0), n.timeLeftShow === !0 && (r.timeLeftShow = !0), n.skipDelay && (r.skipDelay = n.skipDelay), void 0 !== n.visitSiteShow && (r.visitSiteShow = n.visitSiteShow), void 0 !== n.pauseAllowed && (r.pauseAllowed = n.pauseAllowed), t
                    }, Object.defineProperty(t.prototype, "videoNode", {
                        get: function() {
                            return this.videoNodeController.videoNode
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "muted", {
                        get: function() {
                            return this.videoNodeController.muted
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(a.DisplayController);
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t["default"] = v
            }.apply(t, n), !(void 0 !== i && (e.exports = i))
        }, function(e, t, r) {
            var n, i, o = this && this.__extends || function(e, t) {
                function r() {
                    this.constructor = e
                }
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            };
            n = [r, t, r(6), r(7), r(8), r(9), r(36), r(37), r(1)], i = function(e, t, r, n, i, a, s, u, c) {
                "use strict";
                var l = function(e) {
                    function t(t, r) {
                        var n = this;
                        e.call(this, t, r), this.videoCurrentTime = NaN, this.videoDuration = NaN;
                        var i = !1,
                            o = !1,
                            a = !1,
                            s = !1,
                            u = !1;
                        this.on("currentPositionChange", function(e) {
                            var t = e.currentTime,
                                c = e.duration;
                            !i && t >= n.impressionTrackOffset && (i = !0, n.emit("impression")), !o && t >= r.playbackParams.progressOffset && (o = !0, n.emit("progress")), !a && t >= c / 4 && (a = !0, n.emit("firstQuartile")), !s && t >= c / 2 && (s = !0, n.emit("midpoint")), !u && t >= 3 * c / 4 && (u = !0, n.emit("thirdQuartile"))
                        }), this.on({
                            firstQuartile: function() {
                                return n.trackEvent(c.TrackingEventType.FIRST_QUARTILE)
                            },
                            midpoint: function() {
                                return n.trackEvent(c.TrackingEventType.MIDPOINT)
                            },
                            thirdQuartile: function() {
                                return n.trackEvent(c.TrackingEventType.THIRD_QUARTILE)
                            },
                            pause: function() {
                                return n.trackEvent(c.TrackingEventType.PAUSE)
                            },
                            skip: function() {
                                return n.trackEvent(c.TrackingEventType.SKIP)
                            },
                            start: function() {
                                n.trackEvent(c.TrackingEventType.START), n.trackEvent(c.TrackingEventType.CREATIVE_VIEW)
                            },
                            complete: function() {
                                return n.trackEvent(c.TrackingEventType.COMPLETE)
                            },
                            clickThrough: function() {
                                return n.trackEvent(c.TrackingEventType.CLICK_THROUGH)
                            },
                            impression: function() {
                                return n.trackEvent(c.TrackingEventType.IMPRESSION)
                            },
                            progress: function() {
                                return n.trackEvent(c.TrackingEventType.PROGRESS)
                            }
                        })
                    }
                    return o(t, e), t.prototype.resume = function() {
                        this.videoNodeController.resume()
                    }, t.prototype.changeMute = function(e, t) {
                        void 0 === t && (t = !1), this.adDisplayController.setMute(e, t)
                    }, t.prototype.play = function(e) {
                        var t = this;
                        return void 0 === e && (e = !0), this.preload()["catch"](function(e) {
                            return t.onStop.trigger(e)
                        }), e ? this.isStarted ? this.resume() : (this.isStarted = !0, this.subscribeEvents(), this.start()) : this.videoNodeController.once(["start", "resume"], function() {
                            t.isStarted || t.videoNodeController.videoNode.currentSrc === t.preferredSource.src && (t.isStarted = !0, t.subscribeEvents(), t.start())
                        }), this.onStop.promise().then(function(e) {
                            if (e) return Promise.reject(e)
                        })
                    }, t.prototype.pause = function() {
                        this.videoNodeController.pause()
                    }, t.prototype.skip = function(e) {
                        void 0 === e && (e = c.TrackingEventType.SKIP), this.emit("skip"), this.onStop.trigger()
                    }, t.prototype.getSkippable = function() {
                        return this.playbackParams.skipDelay > 0 && this.getCurrentTime() > this.playbackParams.skipDelay
                    }, t.prototype.getAdDimensions = function() {
                        var e = this.videoNodeController.videoNode;
                        return e.videoWidth > 0 ? {
                            width: e.videoWidth,
                            height: e.videoHeight
                        } : this.preferredSource ? {
                            width: this.preferredSource.width,
                            height: this.preferredSource.height
                        } : s.ZERO_DIMENSION
                    }, t.prototype.getCurrentTime = function() {
                        return this.videoCurrentTime
                    }, t.prototype.getDuration = function() {
                        return this.videoDuration || this.mediaAd.duration
                    }, t.prototype.getSrc = function() {
                        return this.preferredSource ? this.preferredSource.src : ""
                    }, t.prototype.destroy = function() {
                        this.videoNodeCallbacks && this.videoNodeController.off(this.videoNodeCallbacks)
                    }, t.prototype.getPreferredSource = function(e) {
                        for (var t, r = [], i = this.videoNodeController.videoNode, o = 0, a = e.length; o < a; o++) {
                            var s = e[o];
                            "probably" === i.canPlayType(s.type) && r.push(s)
                        }
                        if (0 === r.length)
                            for (var o = 0, a = e.length; o < a; o++) {
                                var s = e[o];
                                "maybe" === i.canPlayType(s.type) && r.push(s)
                            }
                        if (0 === r.length)
                            for (var o = 0, a = e.length; o < a; o++) {
                                var s = e[o];
                                "application/x-shockwave-flash" !== s.type && "video/mp4" !== s.type && s.src.indexOf(".mp4") > -1 && r.push(s)
                            }
                        if (0 === r.length) return Promise.reject(new n["default"](n["default"].NO_APPROPRIATE_VIDEO_SOURCE, "Cannot find an appropriate video source."));
                        r.sort(function(e, t) {
                            return e.bitrate && t.bitrate ? e.bitrate - t.bitrate : e.width && t.width ? e.width - t.width : e.height && t.height ? e.height - t.height : void 0
                        });
                        var u = this.adDisplayController.desiredBitrate;
                        if (this.adDisplayController.desiredBitrate) {
                            var c = r.filter(function(e) {
                                return !!e.bitrate
                            });
                            if (c.length) return c.reduce(function(e, t) {
                                return Math.abs(u - e.bitrate) < Math.abs(u - t.bitrate) ? e : t
                            })
                        }
                        for (var o = 0; o < this.adDisplayController.qualityLevel && r.length > 1; o++) r.shift();
                        for (var l = Number.MAX_VALUE, o = 0, a = r.length; o < a; o++) {
                            var s = r[o],
                                d = Math.max(Math.abs(this.videoNodeController.getWidth() - s.width), Math.abs(this.videoNodeController.getHeight() - s.height));
                            d < l && (l = d, t = s)
                        }
                        var p = t;
                        if (!p) {
                            var f = "Cannot find an appropriate video source.";
                            return e.some(function(e) {
                                return e.isVpaid
                            }) && (f = "VPAID returned. " + f), Promise.reject(new n["default"](n["default"].NO_APPROPRIATE_VIDEO_SOURCE, f))
                        }
                        return /\.yandex\.(ru|net)\/get/.test(p.src) ? this.loadSourceRedirect(p.src).then(function(e) {
                            return p.src = e, p
                        }) : p
                    }, t.prototype.loadSourceRedirect = function(e) {
                        var t = new XMLHttpRequest;
                        return void 0 === t.responseURL ? Promise.resolve(e) : new Promise(function(t) {
                            var r = new XMLHttpRequest;
                            r.open("HEAD", a.fixUrlSheme(e)), r.onload = function() {
                                t(200 === r.status ? r.responseURL : e)
                            }, r.onerror = function() {
                                return t(e)
                            }, r.ontimeout = function() {
                                return t(e)
                            }, r.send()
                        })
                    }, t.prototype.preload = function() {
                        var e = this;
                        if (this.isPreloaded) return Promise.resolve();
                        var t = this.getPreferredSource(this.mediaAd.sources);
                        return this.mediaAd.imageSources.length && this.videoNodeController.setPoster(this.mediaAd.imageSources[0].src), t instanceof Promise ? t.then(function(t) {
                            return e.setMediaSource(t)
                        }) : (this.setMediaSource(t), Promise.resolve())
                    }, t.prototype.setMediaSource = function(e) {
                        this.isPreloaded = !0, this.preferredSource = e, this.videoNodeController.setSrc(e.src), this.emit("ready")
                    }, t.prototype.subscribeEvents = function() {
                        var e = this,
                            t = this.mediaAd,
                            n = this.videoNodeController,
                            o = 0,
                            a = 0,
                            s = !0;
                        this.videoNodeCallbacks = {
                            error: function(t) {
                                return e.onStop.trigger(t)
                            },
                            pause: function() {
                                return e.emit("pause")
                            },
                            resume: function() {
                                return e.emit("resume")
                            },
                            complete: function() {
                                o++, 1 === o ? e.emit("complete") : e.trackEvent(c.TrackingEventType.COMPLETE + o), o === t.numRepeats ? e.onStop.trigger() : n.resume()
                            },
                            fullscreen: function() {
                                e.trackEvent(c.TrackingEventType.FULLSCREEN)
                            },
                            exitFullscreen: function() {
                                e.trackEvent(c.TrackingEventType.EXIT_FULLSCREEN)
                            },
                            muteChange: function(t) {
                                e.isPlaying && e.trackEvent(t ? c.TrackingEventType.MUTE : c.TrackingEventType.UNMUTE), e.emit("muteChange", t)
                            },
                            bufferEmpty: function() {
                                if (++a > t.playbackParams.bufferEmptyLimit) e.onStop.trigger(new i["default"]("Buffer empty limit", i["default"].BUFFER_EMPTY_LIMIT));
                                else if (s) s = !1;
                                else {
                                    e.trackEvent(r["default"].BUFFER_EMPTY);
                                    var n = setTimeout(function() {
                                        e.onStop.trigger(new i["default"]("Buffer full timeout", i["default"].BUFFER_FULL_TIMEOUT))
                                    }, e.mediaAd.playbackParams.bufferFullTimeout);
                                    e.onStop.addOne(function() {
                                        return clearTimeout(n)
                                    }), e.videoNodeController.once("bufferFull", function() {
                                        return clearTimeout(n)
                                    })
                                }
                            },
                            bufferFull: function() {
                                e.trackEvent(r["default"].BUFFER_FULL)
                            },
                            currentPositionChange: function(r) {
                                var n = r.currentTime,
                                    i = r.duration;
                                if (!i) {
                                    if (!t.duration) return;
                                    i = t.duration
                                }
                                e.videoCurrentTime = n, e.videoDuration = i, e.emit("currentPositionChange", {
                                    currentTime: n,
                                    duration: i
                                })
                            }
                        }, n.on(this.videoNodeCallbacks);
                        var u = function() {
                                e.emit("start"), n.off("playing", u), e.off("currentPositionChange", l)
                            },
                            l = function(e) {
                                var t = e.currentTime;
                                t > 0 && u()
                            };
                        n.once("playing", u), this.on("currentPositionChange", l)
                    }, t.prototype.start = function() {
                        this.videoNodeController.play(), this.videoNodeController.setVisibleControls(!1)
                    }, Object.defineProperty(t.prototype, "muted", {
                        get: function() {
                            return this.videoNodeController.muted
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "videoNodeController", {
                        get: function() {
                            return this.adDisplayController.videoNodeController
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(u.Viewer);
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t["default"] = l
            }.apply(t, n), !(void 0 !== i && (e.exports = i))
        }, function(e, t, r) {
            var n, i;
            n = [r, t], i = function(e, t) {
                "use strict";
                var r = {
                    BUFFER_EMPTY: "bufferEmpty",
                    BUFFER_FULL: "bufferFull"
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t["default"] = r
            }.apply(t, n), !(void 0 !== i && (e.exports = i))
        }, function(e, t, r) {
            var n, i, o = this && this.__extends || function(e, t) {
                function r() {
                    this.constructor = e
                }
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            };
            n = [r, t], i = function(e, t) {
                "use strict";
                var r = function(e) {
                    function t(t, r) {
                        e.call(this, r), this.id = t, this.message = r
                    }
                    return o(t, e), t.NO_APPROPRIATE_VIDEO_SOURCE = 52, t.FETCHING_ABORTED = 101, t.NETWORK_ERROR = 102, t.DECODE_ERROR = 103, t.SRC_NOT_SUPPORTED = 104, t.VIDEO_ERROR = 10, t
                }(Error);
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t["default"] = r
            }.apply(t, n), !(void 0 !== i && (e.exports = i))
        }, function(e, t, r) {
            var n, i, o = this && this.__extends || function(e, t) {
                function r() {
                    this.constructor = e
                }
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            };
            n = [r, t], i = function(e, t) {
                "use strict";
                var r = function(e) {
                    function t(t, r) {
                        e.call(this, t), this.id = r, this.message = t
                    }
                    return o(t, e), t.VIDEO_TIMEOUT = 62, t.VPAID_START_TIMEOUT = 65, t.BUFFER_FULL_TIMEOUT = 63, t.BUFFER_EMPTY_LIMIT = 64, t
                }(Error);
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t["default"] = r
            }.apply(t, n), !(void 0 !== i && (e.exports = i))
        }, function(e, t, r) {
            var n, i, o = this && this.__extends || function(e, t) {
                function r() {
                    this.constructor = e
                }
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            };
            n = [r, t, r(10), r(12), r(1)], i = function(e, t, r, n, i) {
                "use strict";

                function a(e) {
                    return r.isTrueYandexDomain(e) ? n.addUrlParam(e, "video-api-version", "js:" + i.ENVIRONMENT.SDK_FULL_VERSION) : e
                }

                function s(e) {
                    return "//" === e.trim().substr(0, 2) && "undefined" != typeof ya && ya.mediaAd && ya.mediaAd.util && ya.mediaAd.util.URL_SCHEME && (e = ya.mediaAd.util.URL_SCHEME + e), e
                }

                function u(e, t, r, i) {
                    return void 0 === i && (i = !0), new Promise(function(o, a) {
                        function u(e) {
                            a(e)
                        }
                        "https:" === window.location.protocol && (e = n.setUrlProtocol(e, "https:"));
                        var c = new XMLHttpRequest;
                        c.open("GET", s(e)), c.timeout = "number" == typeof r ? r : 0, c.withCredentials = i, c.ontimeout = function() {
                            var e = new h("HTTP timeout error");
                            e.isTimeoutError = !0, a(e)
                        }, c.onerror = function() {
                            var t = new Error("XHROnError " + c.statusText + ": " + e);
                            t.id = c.status, u(t)
                        }, c.onreadystatechange = function() {
                            if (4 === c.readyState && 0 !== c.status) {
                                if (200 !== c.status) {
                                    var t = new Error(c.statusText);
                                    return t.id = c.status, t.message += ": " + e, void u(t)
                                }
                                o(c.responseXML)
                            }
                        };
                        try {
                            c.send(t)
                        } catch (l) {
                            l.message += ": " + e, u(l)
                        }
                    })
                }

                function c(e) {
                    return {
                        url: e,
                        promise: new Promise(function(t) {
                            var r = new Image;
                            r.onload = function() {
                                return t(!0)
                            }, r.onerror = function() {
                                return t(!1)
                            }, r.src = s(a(e))
                        })
                    }
                }

                function l(e) {
                    return Array.isArray(e) ? e.map(c) : []
                }

                function d(e, t) {
                    void 0 === t && (t = []);
                    var r = [],
                        n = [],
                        i = e && e.hasOwnProperty("id") ? encodeURIComponent(e.id.toString()) : "0";
                    r.push("errcode=" + i), r.push("subsection=" + i), e && "string" == typeof e.message && e.message.length > 0 && r.push("errstring=" + encodeURIComponent(e.message)), t = t.concat([f]);
                    for (var o = 0, a = t.length; o < a; o++) {
                        var s = t[o],
                            u = s.indexOf("?") > -1 ? "&" : "?";
                        n.push("" + s + u + r.join("&"))
                    }
                    return l(n)
                }

                function p(e, t) {
                    var r = s(e);
                    return new Promise(function(n, i) {
                        t && setTimeout(function() {
                            return i(new Error("Script Loading Error: loading timeout: " + t / 1e3 + "s : " + e))
                        }, t);
                        var o = document.createElement("script");
                        o.type = "text/javascript", o.async = !0, o.onload = n, o.onerror = function() {
                            return i(new Error("Script Loading Error: " + r))
                        }, o.src = r, document.head.appendChild(o)
                    })
                }
                var f = "//" + adblink(1) + "ru/65/218/0.gif";
                t.appendVersion = a, t.fixUrlSheme = s;
                var h = function(e) {
                    function t() {
                        e.apply(this, arguments)
                    }
                    return o(t, e), t
                }(Error);
                t.load = u, t.knock = c, t.knockEach = l, t.trackError = d, t.loadScript = p
            }.apply(t, n), !(void 0 !== i && (e.exports = i))
        }, function(e, t, r) {
            var n, i;
            n = [r, t, r(9), r(11), r(12), r(1)], i = function(e, t, r, n, i, o) {
                "use strict";

                function a(e) {
                    for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                    o.ENVIRONMENT.DEV_MODE && console && console.log && console.log.apply(console, [e].concat(t))
                }

                function s(e) {
                    for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                    o.ENVIRONMENT.DEV_MODE && console && console.log && console.error.apply(console, [e].concat(t))
                }

                function u(e) {
                    for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                    if (e)
                        if ("function" == typeof e) e.apply(void 0, t);
                        else if (e && e.hasOwnProperty("length")) {
                        var n = e;
                        n.forEach(function(e) {
                            return e.apply(void 0, t)
                        })
                    }
                }

                function c(e, t) {
                    var r = function() {
                        e.forEach(function(e) {
                            return document.removeEventListener(e, r)
                        }), t()
                    };
                    e.forEach(function(e) {
                        return document.addEventListener(e, r)
                    })
                }

                function l(e, t) {
                    return t === e.substring(e.length - t.length)
                }

                function d(e) {
                    return p(e, !0)
                }

                function p(e, t) {
                    if (void 0 === t && (t = !1), !e) return !1;
                    var r = i.getUrlDomain(e),
                        n = t ? L : L.concat(U);
                    return !(!r || 0 === r.length) && n.some(function(e) {
                        return l(r, e)
                    })
                }

                function f(e, t, n, i) {
                    var o = document.createElement("video");
                    return o.id = "yaVideoPlayer_" + Math.floor(1e6 * Math.random()), o.setAttribute("x-webkit-airplay", "allow"), Array.isArray(t) ? t.forEach(function(e) {
                        var t = document.createElement("source");
                        t.src = r.fixUrlSheme(e.src), t.type = e.type, o.appendChild(t)
                    }) : t && (o.src = r.fixUrlSheme(t)), n && (o.poster = n), o.autoplay = !!i, o.preload = i ? "auto" : "none", e.firstChild ? e.insertBefore(o, e.firstChild) : e.appendChild(o), o
                }

                function h() {
                    if (v()) {
                        var e = window.navigator.mimeTypes;
                        if (e.hasOwnProperty("application/x-shockwave-flash")) {
                            var t = e["application/x-shockwave-flash"];
                            if (t.enabledPlugin && t.enabledPlugin.version) {
                                var r = t.enabledPlugin.version.split(".").map(function(e) {
                                    return parseInt(e, 10)
                                });
                                if (4 === r.length)
                                    for (var n = F.split(".").map(function(e) {
                                            return parseInt(e, 10)
                                        }), i = 0; i < 4; i++) {
                                        if (r[i] < n[i]) return !0;
                                        if (r[i] > n[i]) return !1
                                    }
                            }
                        }
                    }
                    return !1
                }

                function v() {
                    return window.navigator.userAgent.toLowerCase().indexOf("firefox") > -1
                }

                function m() {
                    return "ontouchstart" in window || window.navigator.maxTouchPoints > 0 || window.navigator.msMaxTouchPoints > 0
                }

                function y() {
                    return navigator.userAgent.toLowerCase().indexOf("iphone") > -1
                }

                function g() {
                    return /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
                }

                function E() {
                    return navigator.platform.indexOf("iPad") > -1
                }

                function T() {
                    return navigator.userAgent.toLowerCase().indexOf("android") > -1
                }

                function w() {
                    var e = navigator.userAgent.toLowerCase();
                    return e.indexOf("iphone") > -1 || e.indexOf("ipad") > -1 || e.indexOf("ipod") > -1
                }

                function A() {
                    return w() && 7 === k()
                }

                function k() {
                    if (/iP(hone|od|ad)/.test(navigator.platform)) {
                        var e = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                        return parseInt(e[1], 10)
                    }
                }

                function S(e) {
                    return "string" != typeof e ? NaN : e.split(":").reverse().reduce(function(e, t, r) {
                        return e + parseFloat(t) * Math.pow(60, r)
                    }, 0)
                }

                function b(e) {
                    var t = Math.floor(e / 60 / 60),
                        r = Math.floor((e - 60 * t * 60) / 60),
                        n = e - 60 * t * 60 - 60 * r,
                        i = function(e, t) {
                            return void 0 === t && (t = 0), e.toFixed(t).split(".").map(function(e, t) {
                                return 0 !== t ? e : 1 === e.length ? "0" + e : e
                            }).join(".")
                        };
                    return [i(t), i(r), i(n, 3)].join(":")
                }

                function P(e, t) {
                    var r = document.createElement("div");
                    return r.className = e, t && (r.innerHTML = t), r
                }

                function C(e, t, r, n) {
                    var i = P(e, r);
                    return i.addEventListener("click", t), n && n.appendChild(i), i
                }

                function _(e) {
                    return "string" == typeof e ? document.getElementById(e) : e
                }

                function I() {
                    var e;
                    try {
                        e = top.location.href
                    } catch (t) {
                        e = location.href
                    }
                    return e
                }

                function O() {
                    var e = document.querySelector("style[data-yamediaad]");
                    e || (e = document.createElement("style"), e.setAttribute("data-yamediaad", ""), e.innerHTML = o.ENVIRONMENT.DEFAULT_CSS, document.querySelector("head").appendChild(e))
                }

                function N(e, t) {
                    var r = t.split("."),
                        n = e;
                    for (var i in r)
                        if (r.hasOwnProperty(i)) {
                            if (!n.hasOwnProperty(r[i])) return "$" + t + "$";
                            var o = n[r[i]];
                            if ("string" == typeof o) return o;
                            n = o
                        }
                }

                function R(e, t) {
                    return e.split("$").map(function(e, r) {
                        return r % 2 !== 0 ? N(t, e) : e
                    }).join("")
                }

                function V(e, t) {
                    for (var r in t) t.hasOwnProperty(r) && (e.style[r] = t[r])
                }

                function D(e) {
                    var t = new n["default"];
                    return e.addEventListener("mouseenter", function() {
                        t.trigger(!0)
                    }), e.addEventListener("mouseleave", function() {
                        t.trigger(!1)
                    }), t
                }

                function x(e) {
                    return e instanceof Promise ? e : Promise.resolve(e)
                }

                function M(e) {
                    e && "function" == typeof e["catch"] && e["catch"](function(e) {})
                }
                var L = ["yandex.ru", "yandex.com", "yandex.net", "yandex.com.tr", "yandex.ua", "yandex.by", "yandex.kz", "yastatic.net", "yandex.st", "yandex-team.ru", "yandex-team.com", "yandex-team.com.ua", "yandex-team.net.ua", "yandex-team.com.tr", "ya.ru"],
                    U = ["kinopoisk.ru", "kinopoisk.ua", "kinopoisk.by", "kinopoisk.tel", "vidigital.ru", "tns-counter.ru", "adfox.ru"];
                t.log = a, t.logError = s, t.fireCallback = u, t.waitForDocumentEvents = c, t.endsWith = l, t.isTrueYandexDomain = d, t.isYandexDomain = p, t.createVideoNode = f;
                var F = "20.0.0.306";
                t.isBlockedFlash = h, t.isFirefox = v, t.isTouchDevice = m, t.isIPhone = y, t.isIOSWebView = g, t.isIPad = E, t.isAndroid = T, t.isIOS = w, t.isIOS7 = A, t.getIOSVersion = k, t.parseVASTTime = S, t.toVastTime = b, t.createDiv = P, t.createControl = C, t.getElement = _, t.getReferrer = I;
                var j = function() {
                    function e(e) {
                        this.time = e, this.isFired = !1
                    }
                    return e.prototype.setup = function() {
                        var e = this;
                        return void 0 === this.promise && (this.promise = new Promise(function(t) {
                            e.id = setTimeout(function() {
                                e.isFired = !0, t()
                            }, e.time)
                        })), this.promise
                    }, e.prototype.stop = function() {
                        void 0 !== this.id && (clearTimeout(this.id), this.id = void 0)
                    }, e
                }();
                t.Timer = j, t.addBuiltinSkin = O, t.getObjectProperty = N, t.replaceStringWith = R, t.applyStyles = V, t.createHoverE = D, t.toPromise = x, t.muffleUncaughtErrors = M
            }.apply(t, n), !(void 0 !== i && (e.exports = i))
        }, function(e, t, r) {
            var n, i;
            n = [r, t], i = function(e, t) {
                "use strict";
                var r = function() {
                    function e() {
                        this.on = [], this.once = []
                    }
                    return e.prototype.add = function(t) {
                        t instanceof e ? this.on.push(function(e) {
                            return t.trigger(e)
                        }) : this.on.push(t)
                    }, e.prototype.addOne = function(t) {
                        t instanceof e ? this.once.push(function(e) {
                            return t.trigger(e)
                        }) : this.once.push(t)
                    }, e.prototype.promise = function() {
                        var e = this;
                        return new Promise(function(t) {
                            e.addOne(function(e) {
                                return t(e)
                            })
                        })
                    }, e.prototype.trigger = function(e) {
                        this.triggerECallbacks(this.on, e), this.triggerECallbacks(this.once, e), this.once = []
                    }, e.prototype.triggerECallbacks = function(e, t) {
                        for (var r in e) e.hasOwnProperty(r) && e[r](t)
                    }, e
                }();
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t["default"] = r
            }.apply(t, n), !(void 0 !== i && (e.exports = i))
        }, function(e, t, r) {
            var n, i;
            n = [r, t], i = function(e, t) {
                "use strict";

                function r(e) {
                    return a.href = e, a.hostname
                }

                function n(e, t, r) {
                    a.href = e;
                    var n = encodeURIComponent(t) + "=" + encodeURIComponent(r);
                    return a.search = a.search ? a.search + "&" + n : "?" + n, a.href
                }

                function i(e, t) {
                    a.href = e;
                    var r = a.search.substring(1).split("&");
                    for (var n in r)
                        if (r.hasOwnProperty(n)) {
                            var i = r[n].split("="),
                                o = i[0],
                                s = i[1];
                            if (o === t) return s ? decodeURIComponent(s) : ""
                        }
                    return null
                }

                function o(e, t) {
                    if (s.indexOf(t) === -1) throw new Error("setUrlProtocol Error: Unsupported protocol: " + t);
                    return a.href = e, a.protocol = t, a.href
                }
                var a = document.createElement("a");
                t.getUrlDomain = r, t.addUrlParam = n, t.getUrlParam = i;
                var s = ["http:", "https:"];
                t.setUrlProtocol = o
            }.apply(t, n), !(void 0 !== i && (e.exports = i))
        }, , function(e, t, r) {
            var n, i;
            n = [r, t, r(10), r(9), r(1)], i = function(e, t, r, n, i) {
                "use strict";

                function o(e) {
                    return e.replace(/[^a-zA-Z0-9_]/g, "_")
                }

                function a() {
                    function e() {
                        return swfobject.getFlashPlayerVersion().major > 0
                    }
                    return void 0 === window.swfobject ? n.loadScript("https://" + i.ENVIRONMENT.getActualDomain() + "/awaps-ad-sdk-js/" + i.ENVIRONMENT.getVersioningURL() + "/swfobject.min.js").then(function() {
                        return e()
                    }) : Promise.resolve(e())
                }

                function s(e, t) {
                    var r = new Promise(function(r, o) {
                        var a = new XMLHttpRequest,
                            s = "https://" + i.ENVIRONMENT.getActualDomain() + "/swf/" + e + "/" + t + "/info?nc=" + Math.random();
                        a.onreadystatechange = function() {
                            a.readyState === XMLHttpRequest.DONE && (200 === a.status ? r(a.responseText.split("'")[1]) : o(new Error(a.statusText)))
                        };
                        try {
                            a.open("GET", n.fixUrlSheme(s), !0), a.send()
                        } catch (u) {
                            o(u)
                        }
                    });
                    return r.then(function(r) {
                        return "//" + i.ENVIRONMENT.getActualDomain() + "/swf/" + e + "/" + t + "/v-" + r + "/" + e + ".swf"
                    })
                }

                function u(e, t) {
                    for (var n in e) e.hasOwnProperty(n) && c[n] && (t[c[n]] = e[n]);
                    void 0 !== e.adFoxUrl && (t["ad-fox-url"] = encodeURIComponent(e.adFoxUrl)), void 0 !== e.adFoxUrlMidRoll && (t["ad-fox-url-midroll"] = encodeURIComponent(e.adFoxUrlMidRoll)), void 0 !== e.adFoxUrlPauseRoll && (t["ad-fox-url-pauseroll"] = encodeURIComponent(e.adFoxUrlPauseRoll)), void 0 !== e.adFoxUrlPostRoll && (t["ad-fox-url-postroll"] = encodeURIComponent(e.adFoxUrlPostRoll)), void 0 !== e.vastUrl && (t["vast-url"] = encodeURIComponent(e.vastUrl)), t["" + adblink(3) + "errer"] = encodeURIComponent(r.getReferrer()), t["page-referrer"] = encodeURIComponent(document.referrer) || "unknown"
                }
                var c = {
                    partnerId: "partner-id",
                    category: "category",
                    tagsList: "tags-list",
                    emptyId: "empty-id",
                    extParam: "ext-param",
                    videoContentId: "video-content-id",
                    videoContentName: "video-content-name",
                    videoPublisherId: "video-publisher-id",
                    videoPublisherName: "video-publisher-name",
                    videoGenreId: "video-genre-id",
                    videoGenreName: "video-genre-name",
                    duration: "duration"
                };
                t.sanitizeId = o, t.checkForFlashPlayer = a, t.loadSWFUrlByPackageAndBuild = s, t.adConfigToFlashvars = u
            }.apply(t, n), !(void 0 !== i && (e.exports = i))
        }, , , , , function(e, t, r) {
            var n, i;
            n = [r, t, r(20), r(21), r(9), r(10), r(22)], i = function(e, t, r, n, i, o, a) {
                "use strict";
                var s = 3e3,
                    u = function() {
                        function e() {
                            this.partnerId = "", this.sessionId = "", this.categoryID = 0, this.categoryName = "", this.skinUrl = "", this.title = "", this.skipDelay = 5, this.skipTimeLeftShow = !0, this.timeLeftShow = !0, this.visitSiteShow = !1, this.vastTimeout = 3e3, this.videoTimeout = 2e3, this.wrapperTimeout = 3e3, this.wrapperMaxCount = 3, this.vpaidTimeout = 3e3, this.bufferFullTimeout = 2500, this.bufferEmptyLimit = 5, this.vpaidEnabled = !0, this.skinTimeout = 2e3, this.blocks = []
                        }
                        return e.getUrl = function(e) {
                            return e.partnerId ? i.appendVersion("https://" + adblink(0) + "ru/" + adblink(4) + "" + encodeURIComponent("" + e.partnerId) + "?video-category-id=" + encodeURIComponent("" + e.category) + "&duration=" + encodeURIComponent("" + e.duration) + "&client_type=html") : null
                        }, e.fromXml = function(t) {
                            function r(e) {
                                return n.readElementText(s.querySelector(e))
                            }
                            var i, s = t.querySelector("Blocksinfo"),
                                u = s.querySelectorAll("Blocks > Block"),
                                c = new e;
                            c.partnerId = r("PartnerID"), c.sessionId = r("SessionID"), c.categoryID = +r("CategoryID"), c.categoryName = r("CategoryName"), o.endsWith(r("Skin"), ".css") && (c.skinUrl = r("Skin")), c.bufferEmptyLimit = parseInt(r("BufferEmptyLimit"), 10), c.title = r("Title"), c.skipDelay = parseInt(r("SkipDelay"), 10), c.skipTimeLeftShow = "true" === r("SkipTimeLeftShow"), c.timeLeftShow = "true" === r("TimeLeftShow"), c.visitSiteShow = "true" === r("VisitSiteShow"), c.vastTimeout = parseInt(r("VASTTimeout"), 10), c.videoTimeout = parseInt(r("VideoTimeout"), 10), c.vpaidTimeout = parseInt(r("VPAIDTimeout"), 10), c.wrapperTimeout = parseInt(r("WrapperTimeout"), 10), c.wrapperMaxCount = parseInt(r("WrapperMaxCount"), 10), c.bufferFullTimeout = parseInt(r("BufferFullTimeout"), 10), c.skinTimeout = parseInt(r("SkinTimeout"), 10);
                            for (var l = 0; l < u.length; l++) i = a["default"].fromXml(u[l]), c.blocks.push(i);
                            return c
                        }, e.load = function(t) {
                            var n = e.getUrl(t);
                            return n ? i.load(n, null, s).then(function(t) {
                                var n;
                                try {
                                    n = e.fromXml(t)
                                } catch (i) {
                                    return Promise.reject(new r["default"](i.message, r["default"].PARSE_ERROR))
                                }
                                return n
                            })["catch"](function(e) {
                                return e.isTimeoutError ? Promise.reject(new r["default"]("Timeout of loading block info. PartnerId: " + t.partnerId + "; categoryId: " + t.category, r["default"].TIMEOUT_ERROR)) : Promise.reject(new r["default"](e.message, r["default"].PARSE_ERROR))
                            }) : Promise.reject(new r["default"]("Invalid ad parameters", r["default"].PARAMS_ERROR))
                        }, e.createPrerollBlockInfo = function() {
                            var t = new e;
                            t.videoTimeout = 1e4, t.skipDelay = -1, t.skipTimeLeftShow = !1, t.timeLeftShow = !1, t.vpaidEnabled = !1;
                            var r = new a["default"];
                            return r.adType = "preroll", t.blocks = [r], t.skinUrl = "", t
                        }, e.prototype.getBlockByAdType = function(e) {
                            for (var t = 0; t < this.blocks.length; t++)
                                if (this.blocks[t].adType === e) return this.blocks[t];
                            return null
                        }, e
                    }();
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t["default"] = u
            }.apply(t, n), !(void 0 !== i && (e.exports = i))
        }, function(e, t, r) {
            var n, i, o = this && this.__extends || function(e, t) {
                function r() {
                    this.constructor = e
                }
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            };
            n = [r, t], i = function(e, t) {
                "use strict";
                var r = function(e) {
                    function t(t, r) {
                        e.call(this, t), this.id = r, this.message = t
                    }
                    return o(t, e), t.PARSE_ERROR = 1001, t.TIMEOUT_ERROR = 1002, t.PARAMS_ERROR = 1003, t
                }(Error);
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t["default"] = r
            }.apply(t, n), !(void 0 !== i && (e.exports = i))
        }, function(e, t, r) {
            var n, i;
            n = [r, t], i = function(e, t) {
                "use strict";

                function r(e, t, r) {
                    return void 0 === r && (r = null), e.hasAttribute(t) ? e.getAttribute(t).trim() : r
                }

                function n(e) {
                    return e && e.textContent ? e.textContent.trim() : ""
                }

                function i(e) {
                    return e && n(e).length
                }

                function o(e, t, r, n) {
                    var i = t.ownerDocument.createElement(e);
                    if (t.appendChild(i), r && (i.innerHTML = "<![CDATA[" + r + "]]>"), n)
                        for (var o in n) n.hasOwnProperty(o) && null !== n[o] && i.setAttribute(o, String(n[o]));
                    return i
                }
                t.readAttr = r, t.readElementText = n, t.isElementSet = i, t.appendNewElement = o
            }.apply(t, n), !(void 0 !== i && (e.exports = i))
        }, function(e, t, r) {
            var n, i;
            n = [r, t, r(21)], i = function(e, t, r) {
                "use strict";
                var n = function() {
                    function e() {
                        this.id = 0, this.adType = "preroll", this.startTime = 0, this.duration = 0, this.positionsCount = 0
                    }
                    return e.fromXml = function(t) {
                        var n = t.querySelector("StartTime"),
                            i = t.querySelector("Duration"),
                            o = t.querySelector("PositionsCount"),
                            a = new e;
                        return a.id = r.readAttr(t, "BlockID", 0), a.adType = r.readAttr(t, "type", "preroll"), a.startTime = +r.readElementText(n), a.duration = +r.readElementText(i), a.positionsCount = +r.readElementText(o), a
                    }, e
                }();
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t["default"] = n
            }.apply(t, n), !(void 0 !== i && (e.exports = i))
        }, function(e, t, r) {
            var n, i;
            n = [r, t, r(24), r(31), r(32), r(9), r(24)], i = function(e, t, r, n, i, o, a) {
                "use strict";

                function s(e) {
                    return encodeURIComponent("string" == typeof e ? e : e.join("\n"))
                }

                function u(e, t, r) {
                    var n, i, a = window.location.toString(),
                        u = window.document.referrer;
                    return i = "imp-id=" + r + "&" + adblink(3) + "=" + encodeURIComponent(a) + "&page-ref=" + encodeURIComponent(u), e.playerInfo && (i += ":" + e.playerInfo), e.width && (i += "&video-width=" + e.width), e.height && (i += "&video-height=" + e.height), e.videoContentId && (i += "&video-content-id=" + e.videoContentId), e.videoContentName && (i += "&video-content-name=" + encodeURIComponent(e.videoContentName)), e.videoPublisherId && (i += "&video-publisher-id=" + e.videoPublisherId), e.videoPublisherName && (i += "&video-publisher-name=" + encodeURIComponent(e.videoPublisherName)), e.videoGenreId && (i += "&video-genre-id=" + s("" + e.videoGenreId)), e.videoGenreName && (i += "&video-genre-name=" + s(e.videoGenreName)), e.tagsList && (i += "&tags-list=" + s(e.tagsList)), e.extParam && (i += "&ext-param=" + encodeURIComponent(e.extParam)), i += "&charset=" + encodeURIComponent(e.charset || "UTF-8"), t.sessionId && (i += "&video-session-id=" + encodeURIComponent(t.sessionId)), i += "&rnd=" + Math.random(), n = "https://" + adblink(0) + "ru/" + adblink(2) + "" + encodeURIComponent(t.partnerId) + "?" + i, o.appendVersion(n)
                }
                var c = function() {
                    function e(e, t) {
                        this.adConfig = e, this.blockInfo = t
                    }
                    return e.sortMediaAdsBySequence = function(e) {
                        return e.sort(function(e, t) {
                            return e.vastAd.sequence - t.vastAd.sequence
                        })
                    }, e.prototype.loadAd = function(e, t, r) {
                        return this.loadAdInternal(e).then(function(e) {
                            return "function" == typeof t && t(e[0]), e
                        })["catch"](function(e) {
                            return "function" == typeof r && r(e), Promise.reject(e)
                        })
                    }, e.prototype.loadAdInternal = function(t) {
                        var r = this;
                        return new Promise(function(e, s) {
                            function c(e, t) {
                                return e.prerollVast && "preroll" === t ? e.prerollVast : e.postrollVast && "postroll" === t ? e.postrollVast : null
                            }
                            var l, d, p, f, h, v = r.adConfig,
                                m = v.yandexADXInsteadOfAdFoxFail,
                                y = r.blockInfo.getBlockByAdType(t),
                                g = v.simpleLogic,
                                E = !1,
                                T = !1,
                                w = !1,
                                A = r.getAdFoxUrlByAdType(t);
                            if (!y) return void s(new Error("No ads of a given type: " + t));
                            var k = function(t) {
                                    var o = i["default"].create(r.blockInfo, t);
                                    o && o[0] && o[0].hasMedia() ? e(o) : s(new n["default"](n["default"].NO_AD_TO_DISPLAY_MSG, n["default"].NO_AD_TO_DISPLAY))
                                },
                                S = c(v, t);
                            if (S) return void k(new a["default"]([S]));
                            h = v.vastUrl ? v.vastUrl : v.vast ? v.vast : u(v, r.blockInfo, y.id);
                            var b;
                            A && (b = r.loadVast(A, !0).then(function(e) {
                                d = e, C()
                            })["catch"](function(e) {
                                return o.trackError(e), T = !0, C(), Promise.reject(e)
                            }));
                            var P = function() {
                                r.loadVast(h, !1).then(function(e) {
                                    A ? (l = e, C()) : k(e)
                                })["catch"](function(e) {
                                    o.trackError(e), A ? (w = !0, C()) : s(e)
                                })
                            };
                            g && A ? b["catch"](P) : P();
                            var C = function() {
                                var t;
                                if (!E) {
                                    if (T && w) return E = !0, void s(new n["default"](n["default"].NO_AD_TO_DISPLAY_MSG, n["default"].NO_AD_TO_DISPLAY));
                                    if (T) !g && m && v.partnerId ? l && (E = !0, t = i["default"].create(r.blockInfo, l)) : E = !0;
                                    else if (w && d) E = !0, t = i["default"].create(r.blockInfo, d);
                                    else if (d || l) {
                                        f = d ? d.ads[0] : null, p = l ? l.ads[0] : null;
                                        var a = f && f.hasMedia(),
                                            u = p && p.hasMedia();
                                        a ? (E = !0, t = i["default"].create(r.blockInfo, d)) : u && !a ? (E = !0, f && (!g && f.isYandexAdxWrapper && p && f.merge(p), t = i["default"].create(r.blockInfo, f))) : d && l && (E = !0)
                                    }
                                    E && (t && t[0] && t[0].hasMedia() ? e(t) : f && f.returnUrl && !g ? r.loadVast(f.returnUrl, !0).then(k)["catch"](function(e) {
                                        o.trackError(e), s(e)
                                    }) : s(new n["default"](n["default"].NO_AD_TO_DISPLAY_MSG, n["default"].NO_AD_TO_DISPLAY)))
                                }
                            }
                        }).then(function(t) {
                            return e.sortMediaAdsBySequence(t)
                        })
                    }, e.prototype.loadVast = function(e, t) {
                        return r.loadVast(e, t, this.blockInfo.vastTimeout, this.blockInfo.wrapperTimeout, this.blockInfo.wrapperMaxCount)
                    }, e.prototype.getAdFoxUrlByAdType = function(e) {
                        var t = this.adConfig;
                        return t.adFoxUrlVast ? t.adFoxUrlVast : "midroll" === e && t.adFoxUrlMidRoll ? t.adFoxUrlMidRoll : "pauseroll" === e && t.adFoxUrlPauseRoll ? t.adFoxUrlPauseRoll : "postroll" === e && t.adFoxUrlPostRoll ? t.adFoxUrlPostRoll : t.adFoxUrl
                    }, e
                }();
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t["default"] = c
            }.apply(t, n), !(void 0 !== i && (e.exports = i))
        }, function(e, t, r) {
            var n, i;
            n = [r, t, r(10), r(21), r(9), r(25), r(26), r(27), r(12)], i = function(e, t, r, n, i, o, a, s, u) {
                "use strict";

                function c(e) {
                    return e.replace(d, encodeURIComponent(r.getReferrer()))
                }

                function l(e, t, l, d, v, m) {
                    function y(e, t) {
                        return i.load(e, null, l).then(function(r) {
                            return g(r, e, t, m)
                        })["catch"](function(e) {
                            return e.isTimeoutError ? Promise.reject(new a["default"]("VAST load timeout", a["default"].VAST_LOAD_TIMEOUT)) : e instanceof a["default"] ? Promise.reject(e) : Promise.reject(new a["default"]((e.id ? e.id + ": " : "") + e.message, t === o["default"].AD_FOX ? a["default"].ADFOX_VAST_LOAD_ERROR : a["default"].YA_VAST_LOAD_ERROR))
                        })
                    }

                    function g(e, t, r, n) {
                        if (!e) throw new a["default"]("No XML in Vast Document", a["default"].INVALID_VAST_XML);
                        var i = e.querySelector("VAST"),
                            o = Array.prototype.slice.call(e.querySelectorAll("VAST Ad"));
                        if (!i) throw new a["default"]("No VAST tag found", a["default"].INVALID_VAST_XML);
                        if (!n && p.indexOf(i.getAttribute("version")) === -1) throw new a["default"]("Invalid VAST document version", a["default"].INVALID_VAST_XML);
                        if (0 === o.length) throw new a["default"]("No Ad section", a["default"].NO_IN_LINE_OR_WRAPPER_NODE);
                        return Promise.all(o.map(function(e) {
                            return E(e, t, r)
                        })).then(function(e) {
                            return new h(e)
                        })
                    }

                    function E(e, t, r) {
                        var n, i = e.querySelector("InLine") || e.querySelector("Inline"),
                            o = e.querySelector("Wrapper");
                        if (i) {
                            try {
                                n = s["default"].fromXml(e, r)
                            } catch (u) {
                                throw new a["default"](u.toString(), a["default"].INVALID_VAST_XML)
                            }
                            return n
                        }
                        if (A.isFired) throw new a["default"]("There is no InLine or Wrapper node in the VAST document", a["default"].NO_IN_LINE_OR_WRAPPER_NODE);
                        if (++w > v) throw new a["default"]("Limit of nested wrappers reached", a["default"].WRAPPER_MAX_COUNT_LIMIT);
                        return T(o, r)
                    }

                    function T(e, t) {
                        var r, i = e.querySelector("VASTAdTagURI");
                        if (!n.isElementSet(i)) throw new a["default"]("There is no VASTAdTagURI in the 'Wrapper' node", a["default"].NO_VAST_ID_TAG_URI);
                        r = s["default"].fromXml(e, t, !0);
                        var o = n.readElementText(i);
                        if (o === f) {
                            r.isYandexAdxWrapper = !0;
                            var u = e.querySelector("Extension[type='ReturnURL']");
                            return n.isElementSet(u) && (r.returnUrl = n.readElementText(u)), r
                        }
                        return Promise.race([A.setup().then(function() {
                            return Promise.reject(new a["default"]("Wrapper load timeout.", a["default"].WRAPPER_LOAD_TIMEOUT))
                        }), y(o, t).then(function(e) {
                            for (var t = 0, n = e.ads.length; t < n; t++) r.merge(e.ads[t]);
                            return r
                        })])
                    }
                    void 0 === m && (m = !1);
                    var w = 0,
                        A = new r.Timer(d),
                        k = "<" === e.charAt(0);
                    if (k) {
                        var S = void 0;
                        try {
                            S = (new DOMParser).parseFromString(e, "application/xml")
                        } catch (b) {
                            return Promise.reject(new a["default"]("Inline VAST syntax error: " + b, a["default"].INVALID_VAST_XML))
                        }
                        return g(S, "", o["default"].EXTERNAL, m)
                    }
                    return y(c(e), t ? o["default"].AD_FOX : r.endsWith(u.getUrlDomain(e), "adfox.ru") ? o["default"].AD_FOX : r.isYandexDomain(e) ? o["default"].YANDEX : o["default"].EXTERNAL)
                }
                var d = "{REFERER}",
                    p = ["2.0", "3.0"],
                    f = "Yandex ADX",
                    h = function() {
                        function e(e) {
                            this.ads = e
                        }
                        return e
                    }();
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t["default"] = h, t.loadVast = l
            }.apply(t, n), !(void 0 !== i && (e.exports = i))
        }, function(e, t, r) {
            var n, i;
            n = [r, t], i = function(e, t) {
                "use strict";
                var r;
                ! function(e) {
                    e[e.EXTERNAL = 0] = "EXTERNAL", e[e.AD_FOX = 1] = "AD_FOX", e[e.YANDEX = 2] = "YANDEX"
                }(r || (r = {})), Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t["default"] = r
            }.apply(t, n), !(void 0 !== i && (e.exports = i))
        }, function(e, t, r) {
            var n, i, o = this && this.__extends || function(e, t) {
                function r() {
                    this.constructor = e
                }
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            };
            n = [r, t], i = function(e, t) {
                "use strict";
                var r = function(e) {
                    function t(t, r) {
                        e.call(this, t), this.id = r, this.message = t
                    }
                    return o(t, e), t.INVALID_VAST_XML = 40, t.NO_IN_LINE_OR_WRAPPER_NODE = 53, t.NO_VAST_ID_TAG_URI = 54, t.VAST_LOAD_TIMEOUT = 60, t.WRAPPER_LOAD_TIMEOUT = 61, t.WRAPPER_MAX_COUNT_LIMIT = 44, t.INCORRECT_SKIPOFFSET_FORMAT = 46, t.ADFOX_VAST_LOAD_ERROR = 47, t.YA_VAST_LOAD_ERROR = 48, t.YANDEX_WRAPPER_ENDED_WITH_NOT_YANDEX_VAST = 49, t
                }(Error);
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t["default"] = r
            }.apply(t, n), !(void 0 !== i && (e.exports = i))
        }, function(e, t, r) {
            var n, i;
            n = [r, t, r(21), r(26), r(25), r(10), r(9), r(28), r(29), r(30)], i = function(e, t, r, n, i, o, a, s, u, c) {
                "use strict";
                var l = function() {
                    function e() {
                        this.mediaFiles = [], this.icons = [], this.trackings = {}, this.clickThrough = "", this.isYandexAdxWrapper = !1, this.skipTime = NaN, this.skipOffset = NaN, this.progressOffset = NaN, this.duration = NaN, this.isClickable = !0, this.numRepeats = 1, this.comscoreLinks = []
                    }
                    return e.fromXml = function(t, l, d) {
                        void 0 === d && (d = !1);
                        var p = t.getAttribute("sequence"),
                            f = null === p ? Number.MAX_VALUE : parseInt(p, 10),
                            h = t.querySelector("VideoClicks"),
                            v = t.querySelectorAll("MediaFile"),
                            m = t.querySelector("Linear"),
                            y = t.querySelectorAll("Tracking"),
                            g = t.querySelectorAll("Impression"),
                            E = t.querySelectorAll("ViewableImpression"),
                            T = t.querySelectorAll("Error"),
                            w = t.querySelector("Extensions"),
                            A = t.querySelector("Description"),
                            k = t.querySelectorAll("Icons Icon"),
                            S = t.querySelector("AdParameters"),
                            b = new e;
                        if (b.sequence = f, b.adParameters = S ? r.readElementText(S) : "", !d) {
                            for (var P = 0, C = v.length; P < C; P++) b.mediaFiles.push(s["default"].fromXml(v[P]));
                            if (h) {
                                var _ = r.readElementText(h.querySelector("ClickThrough"));
                                _ && (b.clickThrough = _)
                            }
                        }
                        if (h)
                            for (var I = h.querySelectorAll("ClickTracking"), P = 0, C = I.length; P < C; P++) b.addEventUrl("clickThrough", r.readElementText(I[P]));
                        for (var P = 0, C = y.length; P < C; P++) {
                            var O = r.readAttr(y[P], "event");
                            b.addEventUrl(O, r.readElementText(y[P])), "progress" === O && (b.progressOffset = o.parseVASTTime(r.readAttr(y[P], "offset", "")))
                        }
                        for (var P = 0, C = g.length; P < C; P++) b.addEventUrl("impression", r.readElementText(g[P]));
                        for (var P = 0, C = E.length; P < C; P++)
                            for (var N = E[P].querySelectorAll("Viewable"), R = 0, V = N.length; R < V; R++) {
                                var D = r.readElementText(N[R]);
                                b.addEventUrl("viewable", D)
                            }
                        for (var P = 0, C = T.length; P < C; P++) l === i["default"].AD_FOX ? b.addEventUrl("adFoxError", r.readElementText(T[P])) : b.addEventUrl("error", r.readElementText(T[P]));
                        for (var P = 0, C = k.length; P < C; P++) b.icons.push(u["default"].fromXml(k[P]));
                        if (w) {
                            for (var x = w.querySelectorAll('Extension[type="dwell"]'), P = 0, C = x.length; P < C; P++) b.addEventUrl("dwell", r.readElementText(x[P]));
                            for (var M = w.querySelectorAll('Extension[type="skipAd"]'), P = 0, C = M.length; P < C; P++) b.addEventUrl("skip", r.readElementText(M[P]));
                            var L = w.querySelector('Extension[type="skipTime"]');
                            r.isElementSet(L) && (b.skipTime = o.parseVASTTime(r.readElementText(L)), b.skipTime > 180 && (b.skipTime = 0));
                            var U = w.querySelector('Extension[type="controls"]');
                            U && (b.imhoParams = c["default"].fromXML(U));
                            var F = w.querySelector('Extension[type="isClickable"]');
                            r.isElementSet(F) && (b.isClickable = "0" !== r.readElementText(F));
                            var j = w.querySelectorAll('Extension[type="comscore"]');
                            if (j.length)
                                for (var P = 0; P < j.length; P++) b.comscoreLinks.push(r.readElementText(j[P]))
                        }
                        if (r.isElementSet(A) && (b.description = r.readElementText(A)), m) {
                            var _ = r.readAttr(m, "skipoffset", "").trim();
                            if ("" !== _) {
                                var B = o.parseVASTTime(_);
                                isNaN(B) ? a.trackError(new n["default"](_, n["default"].INCORRECT_SKIPOFFSET_FORMAT), b.trackings.error) : b.skipOffset = B
                            }
                            var q = m.querySelector("Duration");
                            q && (b.duration = o.parseVASTTime(r.readElementText(q)))
                        }
                        return b
                    }, e.prototype.addEventUrl = function(e, t) {
                        t && e && (this.trackings[e] || (this.trackings[e] = []), this.trackings[e].push(t))
                    }, e.prototype.merge = function(e) {
                        if (e.mediaFiles.length)
                            for (var t = 0, r = e.mediaFiles.length; t < r; t++) this.mediaFiles.push(e.mediaFiles[t]);
                        for (var n in e.trackings) e.trackings.hasOwnProperty(n) && (this.trackings[n] ? this.trackings[n] = this.trackings[n].concat(e.trackings[n]) : this.trackings[n] = e.trackings[n]);
                        "string" == typeof e.clickThrough && e.clickThrough.length && (this.clickThrough = e.clickThrough), this.skipTime = e.skipTime, this.skipOffset = e.skipOffset, this.isClickable = e.isClickable, isNaN(e.progressOffset) || (this.progressOffset = e.progressOffset), this.comscoreLinks = this.comscoreLinks.concat(e.comscoreLinks), e.adParameters && (this.adParameters = e.adParameters), isNaN(e.duration) || (this.duration = e.duration), e.sequence !== Number.MAX_VALUE && (this.sequence = e.sequence)
                    }, e.prototype.hasMedia = function() {
                        return Boolean(this.mediaFiles && this.mediaFiles.length)
                    }, e
                }();
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t["default"] = l
            }.apply(t, n), !(void 0 !== i && (e.exports = i))
        }, function(e, t, r) {
            var n, i;
            n = [r, t, r(21)], i = function(e, t, r) {
                "use strict";
                var n = function() {
                    function e() {}
                    return e.fromXml = function(t) {
                        var n = new e;
                        return n.width = parseInt(r.readAttr(t, "width", 0), 10), n.height = parseInt(r.readAttr(t, "height", 0), 10), n.bitrate = parseInt(r.readAttr(t, "bitrate", 0), 10), n.delivery = r.readAttr(t, "delivery"), n.type = r.readAttr(t, "type"), n.isVpaid = "VPAID" === r.readAttr(t, "apiFramework"), n.source = r.readElementText(t), n
                    }, e
                }();
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t["default"] = n
            }.apply(t, n), !(void 0 !== i && (e.exports = i))
        }, function(e, t, r) {
            var n, i;
            n = [r, t, r(21)], i = function(e, t, r) {
                "use strict";
                var n = function() {
                    function e() {}
                    return e.fromXml = function(t) {
                        var n = t.querySelector("StaticResource"),
                            i = new e;
                        return i.src = r.readElementText(n), i.program = r.readAttr(t, "program"), i.xPosition = parseInt(r.readAttr(t, "xPosition", 0), 10), i.yPosition = parseInt(r.readAttr(t, "yPosition", 0), 10), i.width = parseInt(r.readAttr(t, "width", 0), 10), i.height = parseInt(r.readAttr(t, "height", 0), 10), i
                    }, e
                }();
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t["default"] = n
            }.apply(t, n), !(void 0 !== i && (e.exports = i))
        }, function(e, t, r) {
            var n, i;
            n = [r, t, r(21)], i = function(e, t, r) {
                "use strict";
                var n = function() {
                    function e() {
                        this.resetSkipDelay = !1, this.showCountDown = !0, this.showSoundButton = !0, this.showLabel = !0
                    }
                    return e.fromXML = function(t) {
                        var n = new e,
                            i = t.querySelector('control[id="skipbtn"]');
                        r.isElementSet(i) && (n.resetSkipDelay = "0" === r.readAttr(i, "layout"));
                        var o = t.querySelector('control[id="countdown"]');
                        r.isElementSet(o) && (n.showCountDown = "0" !== r.readAttr(o, "layout"));
                        var a = t.querySelector('control[id="soundbtn"]');
                        r.isElementSet(a) && (n.showSoundButton = "0" !== r.readAttr(a, "layout"));
                        var s = t.querySelector('control[id="adlabel"]');
                        return r.isElementSet(s) && (n.showLabel = "0" !== r.readAttr(s, "layout")), n
                    }, e
                }();
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t["default"] = n
            }.apply(t, n), !(void 0 !== i && (e.exports = i))
        }, function(e, t, r) {
            var n, i, o = this && this.__extends || function(e, t) {
                function r() {
                    this.constructor = e
                }
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            };
            n = [r, t], i = function(e, t) {
                "use strict";
                var r = function(e) {
                    function t(t, r) {
                        e.call(this, t), this.id = r, this.message = t
                    }
                    return o(t, e), t.NO_AD_TO_DISPLAY = 51, t.NO_AD_TO_DISPLAY_MSG = "No ads to display in the VAST documents", t.SKIP_DELAY_WITHOUT_SKIPOFFSET = 45, t.SKIP_DELAY_WITHOUT_SKIPOFFSET_MSG = "BlockInfo-Skipoffset error", t
                }(Error);
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t["default"] = r
            }.apply(t, n), !(void 0 !== i && (e.exports = i))
        }, function(e, t, r) {
            var n, i;
            n = [r, t, r(9), r(34), r(10), r(24), r(33), r(35), r(12), r(21), r(1)], i = function(e, t, r, n, i, o, a, s, u, c, l) {
                "use strict";
                var d = ["image/jpeg", "image/gif", "image/png"],
                    p = [l.TrackingEventType.START, l.TrackingEventType.FIRST_QUARTILE, l.TrackingEventType.MIDPOINT, l.TrackingEventType.THIRD_QUARTILE, l.TrackingEventType.COMPLETE, l.TrackingEventType.MUTE, l.TrackingEventType.UNMUTE, l.TrackingEventType.PAUSE, l.TrackingEventType.REWIND, l.TrackingEventType.RESUME, l.TrackingEventType.FULLSCREEN, l.TrackingEventType.EXIT_FULLSCREEN, l.TrackingEventType.EXPAND, l.TrackingEventType.COLLAPSE, l.TrackingEventType.ACCEPT_INVITATION, l.TrackingEventType.SKIP, l.TrackingEventType.PROGRESS, "closeLinear"],
                    f = function() {
                        function e(e, t) {
                            this.vastAd = t, this.numRepeats = 1, this.duration = 0, this.clickThroughUrl = t.clickThrough, this.numRepeats = t.numRepeats, this.duration = 0, this.sources = t.mediaFiles.map(function(e) {
                                return new n["default"](e)
                            }), this.imageSources = this.sources.filter(function(e) {
                                return d.indexOf(e.type) > -1
                            }).sort(function(e, t) {
                                return d.indexOf(e.type) - d.indexOf(t.type)
                            }), this.icons = t.icons.map(function(e) {
                                return a["default"].fromVastIcon(e)
                            }), this.playbackParams = {
                                isClickable: t.isClickable && !!this.clickThroughUrl,
                                title: e.title,
                                description: t.description,
                                skinUrl: e.skinUrl,
                                skipTimeLeftShow: e.skipTimeLeftShow,
                                timeLeftShow: e.timeLeftShow,
                                soundButtonShow: !0,
                                showGuiForVpaid: !1,
                                videoTimeout: e.videoTimeout,
                                vpaidTimeout: e.vpaidTimeout,
                                bufferFullTimeout: e.bufferFullTimeout,
                                bufferEmptyLimit: e.bufferEmptyLimit,
                                progressOffset: t.progressOffset,
                                visitSiteShow: e.visitSiteShow,
                                autoplay: !0,
                                minimalGui: !1,
                                skipDelay: 0,
                                pauseAllowed: !1
                            }, isNaN(t.skipOffset) ? this.sources.length > 0 && e.skipDelay : isNaN(t.skipTime) ? this.playbackParams.skipDelay = 0 === e.skipDelay ? t.skipOffset : Math.min(e.skipDelay, t.skipOffset) : this.playbackParams.skipDelay = t.skipTime, isNaN(t.duration) || (this.duration = t.duration), t.imhoParams && (this.playbackParams.showGuiForVpaid = !0, this.playbackParams.timeLeftShow = t.imhoParams.showCountDown, t.imhoParams.showLabel || (this.playbackParams.title = ""), this.playbackParams.soundButtonShow = t.imhoParams.showSoundButton, t.imhoParams.resetSkipDelay && (this.playbackParams.skipDelay = 0))
                        }
                        return e.create = function(t, r) {
                            var n = [];
                            return r instanceof o["default"] ? r.ads.forEach(function(e) {
                                n.push(e)
                            }) : n.push(r), n[0] ? n.map(function(r) {
                                return new e(t, r)
                            }) : null
                        }, e.prototype.toXML = function() {
                            var e = (new DOMParser).parseFromString("<VAST></VAST>", "application/xml"),
                                t = e.querySelector("VAST");
                            t.setAttribute("version", "2.0");
                            var r = this.vastAd,
                                n = c.appendNewElement("Ad", t),
                                o = c.appendNewElement("InLine", n);
                            r.trackings.impression && r.trackings.impression.forEach(function(e) {
                                return c.appendNewElement("Impression", n, e)
                            }), r.trackings.error && r.trackings.error.forEach(function(e) {
                                return c.appendNewElement("Error", n, e)
                            }), r.trackings.adFoxError && r.trackings.adFoxError.forEach(function(e) {
                                return c.appendNewElement("Error", n, e, {
                                    isAdFox: !0
                                })
                            });
                            var a = c.appendNewElement("Creatives", o),
                                s = c.appendNewElement("Creative", a),
                                u = c.appendNewElement("Linear", s);
                            this.duration && c.appendNewElement("Duration", u, i.toVastTime(this.duration));
                            var d = c.appendNewElement("TrackingEvents", u),
                                p = function(e) {
                                    if (l.TrackingEventType.hasOwnProperty(e)) {
                                        var t = l.TrackingEventType[e];
                                        r.trackings[t] && r.trackings[t].forEach(function(e) {
                                            var n = {
                                                event: t
                                            };
                                            "progress" === t && (n.offset = String(r.progressOffset || i.toVastTime(0))), c.appendNewElement("Tracking", d, e, n)
                                        })
                                    }
                                };
                            for (var f in l.TrackingEventType) p(f);
                            var h = c.appendNewElement("MediaFiles", u);
                            r.mediaFiles.forEach(function(e) {
                                return c.appendNewElement("MediaFile", h, e.source, {
                                    width: e.width,
                                    height: e.height,
                                    bitrate: e.bitrate,
                                    apiFramework: e.isVpaid ? "VPAID" : null,
                                    type: e.type,
                                    delivery: e.delivery
                                })
                            }), r.adParameters && c.appendNewElement("AdParameters", u, r.adParameters);
                            var v = c.appendNewElement("VideoClicks", u);
                            r.clickThrough && c.appendNewElement("ClickThrough", v, r.clickThrough), r.trackings.clickThrough && r.trackings.clickThrough.forEach(function(e) {
                                return c.appendNewElement("ClickTracking", v, e)
                            });
                            var m = c.appendNewElement("Extensions", o);
                            return r.trackings.dwell && r.trackings.dwell.forEach(function(e) {
                                return c.appendNewElement("Extension", m, e, {
                                    type: "dwell"
                                })
                            }), r.skipTime && c.appendNewElement("Extension", m, i.toVastTime(r.skipTime), {
                                type: "skipTime"
                            }), r.isClickable && c.appendNewElement("Extension", m, "1", {
                                type: "isClickable"
                            }), r.comscoreLinks && r.comscoreLinks.forEach(function(e) {
                                return c.appendNewElement("Extension", m, e, {
                                    type: "comscore"
                                })
                            }), e
                        }, e.prototype.toXMLString = function() {
                            return (new XMLSerializer).serializeToString(this.toXML())
                        }, e.prototype.trackError = function(e) {
                            i.log("Track error ==> ", e), r.trackError(e, this.vastAd.trackings.error), r.knockEach(this.vastAd.trackings.adFoxError)
                        }, e.prototype.trackEvent = function(e) {
                            var t = this;
                            i.log("Track event ==> ", e);
                            var n = this.vastAd.trackings[e];
                            return Array.isArray(n) ? n.map(function(n) {
                                var o = u.getUrlParam(n, "vce4v");
                                if ("1" === o) {
                                    var a = t.displayController,
                                        s = a.getAdDimensions(),
                                        c = a.wrapperNode,
                                        l = a.videoNode;
                                    return cs_vce_.trackEvent(e, n, {
                                        ns_ad_cd: a.duration,
                                        ns_ad_fs: a.videoNodeController.isFullscreen,
                                        ns_ad_vs: a.muted,
                                        ns_ad_ctp: !t.playbackParams.autoplay,
                                        ns_ad_sz: c.clientWidth + "x" + c.clientHeight,
                                        ns_ad_ps: l.clientWidth + "x" + l.clientHeight,
                                        ns_ad_ct: "linear",
                                        ns_ad_of: "0x0",
                                        ns_ad_fts: i.isTouchDevice(),
                                        ns_ad_fsr: s ? s.width + "x" + s.height : "0x0",
                                        ns_ad_fpt: "html5"
                                    }, t.displayController.videoNode.id), {
                                        url: n,
                                        promise: Promise.resolve(!0)
                                    }
                                }
                                if ("0" !== o) return r.knock(n)
                            }) : []
                        }, e.prototype.hasMedia = function() {
                            return Boolean(this.sources && this.sources.length)
                        }, e.prototype.initComscore = function(e) {
                            var t = this;
                            this.displayController = e, this.vastAd.comscoreLinks.length && this.vastAd.comscoreLinks.forEach(function(r) {
                                cs_vce_.init("yandex", {
                                    playerNode: e.videoNode,
                                    defaultTrackingURL: r
                                }), p.forEach(function(e) {
                                    t.vastAd.addEventUrl(e, r)
                                })
                            })
                        }, Object.defineProperty(e.prototype, "contentType", {
                            get: function() {
                                var e = {
                                    vpaid: [],
                                    video: [],
                                    swf: []
                                };
                                return this.sources.forEach(function(t) {
                                    if (t.isVpaid)
                                        if ("application/javascript" === t.type) e.vpaid.push(t);
                                        else {
                                            if ("application/x-shockwave-flash" !== t.type) throw new Error("AdSDKJS Error: unexpected mediaSource vpaid type: " + t.type);
                                            e.swf.push(t)
                                        }
                                    else e.video.push(t)
                                }), e.vpaid.length ? s.AdSourceType.js : e.video.length ? s.AdSourceType.video : s.AdSourceType.flash
                            },
                            enumerable: !0,
                            configurable: !0
                        }), e
                    }();
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t["default"] = f
            }.apply(t, n), !(void 0 !== i && (e.exports = i))
        }, function(e, t, r) {
            var n, i;
            n = [r, t], i = function(e, t) {
                "use strict";
                var r = function() {
                    function e() {
                        this.x = NaN, this.y = NaN, this.width = NaN, this.height = NaN
                    }
                    return e.fromVastIcon = function(t) {
                        var r = new e;
                        return r.src = t.src, r.type = t.program, r.x = t.xPosition, r.y = t.yPosition, r.width = t.width, r.height = t.height, r
                    }, e
                }();
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t["default"] = r
            }.apply(t, n), !(void 0 !== i && (e.exports = i))
        }, function(e, t, r) {
            var n, i;
            n = [r, t], i = function(e, t) {
                "use strict";
                var r = function() {
                    function e(e) {
                        var t = e.source,
                            r = e.type,
                            n = e.bitrate,
                            i = e.width,
                            o = e.height,
                            a = e.isVpaid;
                        this.isVpaid = !1, this.src = t, this.type = r, this.bitrate = n, this.width = i, this.height = o, this.isVpaid = a
                    }
                    return e
                }();
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t["default"] = r
            }.apply(t, n), !(void 0 !== i && (e.exports = i))
        }, function(e, t, r) {
            var n, i;
            n = [r, t], i = function(e, t) {
                "use strict";
                ! function(e) {
                    e[e.js = 0] = "js", e[e.video = 1] = "video", e[e.flash = 2] = "flash"
                }(t.AdSourceType || (t.AdSourceType = {}));
                t.AdSourceType
            }.apply(t, n), !(void 0 !== i && (e.exports = i))
        }, function(e, t, r) {
            var n, i;
            n = [r, t], i = function(e, t) {
                "use strict";
                t.ZERO_DIMENSION = {
                    width: 0,
                    height: 0
                }
            }.apply(t, n), !(void 0 !== i && (e.exports = i))
        }, function(e, t, r) {
            var n, i, o = this && this.__extends || function(e, t) {
                function r() {
                    this.constructor = e
                }
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            };
            n = [r, t, r(38), r(11), r(35)], i = function(e, t, r, n, i) {
                "use strict";
                var a = function(e) {
                    function t(t, r) {
                        var i = this;
                        e.call(this), this.adDisplayController = t, this.mediaAd = r, this.impressionTrackOffset = 0, this.viewability = !1, this.isPreloaded = !1, this.isStarted = !1, this.isPlaying = !1, this.onStop = new n["default"];
                        var o = function() {
                            i.isPlaying = !1, i.setViewability(!1)
                        };
                        this.on(["start", "resume"], function() {
                            i.isPlaying = !0, t.visibilitySensor.getVisibility() && i.setViewability(!0)
                        }).on("pause", o), this.onStop.add(o), t.visibilitySensor.onChangeVisibility.add(function(e) {
                            return i.setViewability(e && i.isPlaying)
                        }), r.initComscore(this.adDisplayController)
                    }
                    return o(t, e), t.prototype.trackEvent = function(e) {
                        this.adDisplayController.emit("trackEvent", e), this.mediaAd.trackEvent(e)
                    }, t.prototype.trackError = function(e) {
                        this.mediaAd.trackError(e)
                    }, t.prototype.clickThrough = function() {
                        var e = this.mediaAd.clickThroughUrl;
                        e && (window.open(e, "_blank"), this.pause(), this.emit("clickThrough"))
                    }, t.prototype.setNumRepeats = function(e) {
                        this.mediaAd.numRepeats = e
                    }, t.prototype.destroyAdMedia = function() {
                        this.resetEventBus(), this.destroy()
                    }, t.prototype.setViewability = function(e) {
                        this.viewability !== e && (this.viewability = e, this.emit("changeViewability", e))
                    }, t.prototype.getContentTypeString = function() {
                        switch (this.mediaAd.contentType) {
                            case i.AdSourceType.video:
                                return "VIDEO";
                            case i.AdSourceType.js:
                                return "JAVASCRIPT_VPAID";
                            case i.AdSourceType.flash:
                                return "SHOCKWAVE_FLASH_VPAID";
                            default:
                                throw new Error("AdSDK JS Error: Unresolver AdSourceType: " + this.mediaAd.contentType)
                        }
                    }, Object.defineProperty(t.prototype, "duration", {
                        get: function() {
                            return this.getDuration()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "playbackParams", {
                        get: function() {
                            return this.mediaAd.playbackParams
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "contentType", {
                        get: function() {
                            return this.mediaAd.contentType
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(r["default"]);
                t.Viewer = a
            }.apply(t, n), !(void 0 !== i && (e.exports = i))
        }, function(e, t, r) {
            var n, i;
            n = [r, t], i = function(e, t) {
                "use strict";
                var r = function() {
                    function e() {
                        this.resetEventBus()
                    }
                    return e.toEventsArr = function(e, t) {
                        var r = [];
                        if ("string" == typeof e) r.push({
                            name: e,
                            callback: t
                        });
                        else if (e instanceof Array) {
                            for (var n in e)
                                if (e.hasOwnProperty(n)) {
                                    if ("function" != typeof t) throw new Error("You MUST pass callback in the second parameter with eventsName array");
                                    e.hasOwnProperty(n) && r.push({
                                        name: e[n],
                                        callback: t
                                    })
                                }
                        } else {
                            if ("object" != typeof e) throw new Error("Event name MUST be a string");
                            for (var n in e) e.hasOwnProperty(n) && r.push({
                                name: n,
                                callback: e[n]
                            })
                        }
                        return r
                    }, e.addEvent = function(e, t) {
                        var r = t.name,
                            n = t.callback;
                        if ("function" != typeof n) throw new Error("Event listener MUST be a function");
                        e[r] || (e[r] = []), e[r].indexOf(n) === -1 && e[r].push(n)
                    }, e.addEvents = function(t, r) {
                        for (var n in r) r.hasOwnProperty(n) && e.addEvent(t, r[n])
                    }, e.offCallbackByCallbacks = function(e, t) {
                        if (e) {
                            var r = e.indexOf(t);
                            r !== -1 && e.splice(r, 1)
                        }
                    }, e.prototype.resetEventBus = function() {
                        return this._events = {
                            on: {},
                            once: {}
                        }, this
                    }, e.prototype.on = function(t, r) {
                        return e.addEvents(this._events.on, e.toEventsArr(t, r)), this
                    }, e.prototype.once = function(t, r) {
                        return e.addEvents(this._events.once, e.toEventsArr(t, r)), this
                    }, e.prototype.when = function(e) {
                        var t = this;
                        return new Promise(function(r) {
                            if ("string" == typeof e) t.once(e, function(e) {
                                return r(e)
                            });
                            else {
                                if (!(e instanceof Array)) throw new Error('EventBus "when" method can take a string on string array parameter');
                                for (var n in e) e.hasOwnProperty(n) && t.once(e[n], function(e) {
                                    return r(e)
                                })
                            }
                        })
                    }, e.prototype.off = function(t, r) {
                        return this.offEvents(e.toEventsArr(t, r)), this
                    }, e.prototype.emit = function(e, t) {
                        if ("string" == typeof e) this.emitEvent(e, t);
                        else if (e instanceof Array)
                            for (var r in e) e.hasOwnProperty(r) && this.emitEvent(e[r], t);
                        else if ("object" == typeof e)
                            for (var n in e) e.hasOwnProperty(n) && this.emitEvent(n, e[n]);
                        return this
                    }, e.prototype.reemit = function(e, t) {
                        var r = this,
                            n = t instanceof Array ? t : [t];
                        for (var i in n) n.hasOwnProperty(i) && ! function(t) {
                            return e.on(t, function(e) {
                                return r.emit(t, e)
                            })
                        }(n[i]);
                        return this
                    }, e.prototype.offEvents = function(t) {
                        for (var r in t)
                            if (t.hasOwnProperty(r)) {
                                var n = t[r],
                                    i = n.name,
                                    o = n.callback;
                                e.offCallbackByCallbacks(this._events.on[i], o), e.offCallbackByCallbacks(this._events.once[i], o)
                            }
                    }, e.prototype.emitEvent = function(e, t) {
                        this.emitEvents(this._events.on[e], t), this.emitEvents(this._events.once[e], t), this._events.once[e] = void 0
                    }, e.prototype.emitEvents = function(e, t) {
                        if (e)
                            for (var r in e) e.hasOwnProperty(r) && e[r].apply(this, [t])
                    }, e
                }();
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t["default"] = r
            }.apply(t, n), !(void 0 !== i && (e.exports = i))
        }, function(e, t, r) {
            var n, i, o = this && this.__extends || function(e, t) {
                function r() {
                    this.constructor = e
                }
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            };
            n = [r, t, r(7), r(38), r(40), r(10)], i = function(e, t, r, n, i, a) {
                "use strict";
                var s = 1e3,
                    u = 400,
                    c = function(e) {
                        function t(t) {
                            e.call(this), this.videoNode = t, this.isFullscreen = !1, this.lastMutedValue = !1, this.isStarted = !1, this.justStarted = !1, this.isLagging = !1, this._muted = !1, this.init()
                        }
                        return o(t, e), t.prototype.resetState = function() {
                            this.isStarted = !1, this.isLagging = !1, this.timeUpdateIntervalId && (clearInterval(this.timeUpdateIntervalId), this.timeUpdateIntervalId = 0)
                        }, t.prototype.play = function() {
                            var e = this,
                                t = function() {
                                    e.videoNode.removeEventListener("abort", t), setTimeout(function() {
                                        return a.muffleUncaughtErrors(e.videoNode.play())
                                    }, 0)
                                };
                            this.videoNode.addEventListener("abort", t), this.resume()
                        }, t.prototype.getVideoState = function() {
                            return new i["default"](this.videoNode)
                        }, t.prototype.setVideoState = function(e) {
                            this.resetState(), this.videoNode.autoplay = !1, e.applyTo(this.videoNode)
                        }, t.prototype.resume = function() {
                            this.videoNode.autoplay = !0, this.videoNode.preload = "auto", a.muffleUncaughtErrors(this.videoNode.play())
                        }, t.prototype.pause = function() {
                            this.videoNode.pause()
                        }, t.prototype.setMute = function(e, t) {
                            void 0 === t && (t = !1), this._muted = e, t ? this.muteWithFade(e) : (this.videoNode.muted = e, this.videoNode.volume = e ? 0 : 1)
                        }, t.prototype.setSrc = function(e) {
                            this.videoNode.src = e
                        }, t.prototype.getWidth = function() {
                            return this.videoNode.clientWidth
                        }, t.prototype.getHeight = function() {
                            return this.videoNode.clientHeight
                        }, t.prototype.setVisibleControls = function(e) {
                            this.videoNode.controls = e
                        }, t.prototype.setPoster = function(e) {
                            this.videoNode.poster = e
                        }, t.prototype.getVideoNodeError = function() {
                            var e = new r["default"](r["default"].VIDEO_ERROR, "Cannot play the video source");
                            if (this.videoNode.error) switch (this.videoNode.error.code) {
                                case MediaError.MEDIA_ERR_ABORTED:
                                    e = new r["default"](r["default"].FETCHING_ABORTED, "The fetching process for the video resource was aborted by the user agent");
                                    break;
                                case MediaError.MEDIA_ERR_NETWORK:
                                    e = new r["default"](r["default"].NETWORK_ERROR, "A network error occurred");
                                    break;
                                case MediaError.MEDIA_ERR_DECODE:
                                    e = new r["default"](r["default"].DECODE_ERROR, "An error occurred while decoding the video resource");
                                    break;
                                case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
                                    e = new r["default"](r["default"].SRC_NOT_SUPPORTED, "AdSDK VideoError: video src not supported: " + this.videoNode.currentSrc)
                            }
                            return e
                        }, t.prototype.init = function() {
                            var e = this,
                                t = this.videoNode;
                            this._muted = this.lastMutedValue = t.muted, t.addEventListener("click", function(t) {
                                e.emit("click", t)
                            });
                            var r = function() {
                                    (e.isLagging || e.justStarted) && (e.isLagging = !1, e.justStarted = !1)
                                },
                                n = function() {
                                    document.fullscreenEnabled ? document.fullscreenElement === t && (e.isFullscreen = !0, e.emit("fullscreen")) : e.isFullscreen && (e.isFullscreen = !1, e.emit("exitFullscreen"))
                                },
                                i = function() {
                                    e.emit("currentPositionChange", {
                                        currentTime: t.currentTime,
                                        duration: t.duration
                                    })
                                },
                                o = 300,
                                a = 0,
                                s = 0,
                                u = !1,
                                c = function() {
                                    s = e.videoNode.currentTime;
                                    var t = 1 / o;
                                    !u && s < a + t && !e.videoNode.paused && (e.emit("bufferEmpty"), u = !0), u && s > a + t && !e.videoNode.paused && (e.emit("bufferFull"), u = !1), a = s
                                };
                            setInterval(c, o);
                            var l = [{
                                name: "error",
                                handler: function() {
                                    return e.emit("error", e.getVideoNodeError())
                                }
                            }, {
                                name: "waiting",
                                handler: function() {
                                    e.isStarted && !e.justStarted && (e.isLagging = !0)
                                }
                            }, {
                                name: "timeupdate",
                                handler: i
                            }, {
                                name: "play",
                                handler: function() {
                                    e.timeUpdateIntervalId || (e.timeUpdateIntervalId = setInterval(i, 500)), e.justStarted = !0, e.isStarted ? e.emit("resume") : (e.isStarted = !0, e.emit("start"))
                                }
                            }, {
                                name: "canplay",
                                handler: r
                            }, {
                                name: "playing",
                                handler: function() {
                                    e.lastMutedValue = t.muted, r(), e.emit("playing")
                                }
                            }, {
                                name: "ended",
                                handler: function() {
                                    e.resetState(), e.emit("complete")
                                }
                            }, {
                                name: "pause",
                                handler: function() {
                                    t.currentTime !== t.duration && e.emit("pause")
                                }
                            }, {
                                name: "volumechange",
                                handler: function() {
                                    e.lastMutedValue !== t.muted && (e.lastMutedValue = t.muted, e.emit("muteChange", t.muted))
                                }
                            }, {
                                name: "fullscreenchange",
                                handler: n,
                                target: window.document
                            }];
                            l.forEach(function(e) {
                                var r = e.target,
                                    n = e.name,
                                    i = e.handler;
                                (r ? r : t).addEventListener(n, i)
                            }), n(), this.destroy = function() {
                                e.resetState(), l.forEach(function(e) {
                                    var r = e.target,
                                        n = e.name,
                                        i = e.handler;
                                    (r ? r : t).removeEventListener(n, i)
                                }), t.pause(), t.src = "", e.destroy = null
                            }
                        }, t.prototype.muteWithFade = function(e) {
                            var t = this;
                            this.muteIntervalId && clearInterval(this.muteIntervalId);
                            var r = (new Date).getTime(),
                                n = this.videoNode.volume,
                                i = e ? 0 : 1,
                                o = Math.abs((e ? s : u) * (n - i));
                            0 !== o && (this.videoNode.muted = !1, this.muteIntervalId = setInterval(function() {
                                var a = ((new Date).getTime() - r) / o;
                                t.videoNode.volume = e ? Math.max(i, (1 - a) * (n - i)) : Math.min(i, a * (i - n)), a >= 1 && (clearInterval(t.muteIntervalId), t.muteIntervalId = 0, e && (t.videoNode.muted = !0))
                            }, 20))
                        }, Object.defineProperty(t.prototype, "muted", {
                            get: function() {
                                return this.muteIntervalId > 0 ? this._muted : this.videoNode.muted
                            },
                            enumerable: !0,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "volume", {
                            get: function() {
                                return this.videoNode.volume
                            },
                            set: function(e) {
                                this.videoNode.volume = e
                            },
                            enumerable: !0,
                            configurable: !0
                        }), t
                    }(n["default"]);
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t["default"] = c
            }.apply(t, n), !(void 0 !== i && (e.exports = i))
        }, function(e, t, r) {
            var n, i;
            n = [r, t], i = function(e, t) {
                "use strict";
                var r = function() {
                    function e(e) {
                        this.src = e.currentSrc, this.controls = e.controls, this.poster = e.poster
                    }
                    return e.prototype.applyTo = function(e) {
                        e.src = this.src || "", e.controls = this.controls, e.poster = this.poster
                    }, e
                }();
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t["default"] = r
            }.apply(t, n), !(void 0 !== i && (e.exports = i))
        }, function(e, t, r) {
            var n, i, o = this && this.__extends || function(e, t) {
                function r() {
                    this.constructor = e
                }
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            };
            n = [r, t, r(42), r(38), r(10), r(35)], i = function(e, t, r, n, i, a) {
                "use strict";
                var s = function(e) {
                    function t(t) {
                        var n = this;
                        e.call(this), this.wrapperNode = t, this.visibilitySensor = new r["default"](t, .5), this.onChangeHover = i.createHoverE(t), this.onChangeHover.add(function(e) {
                            return n.isHovered = e
                        })
                    }
                    return o(t, e), t.isJs = function(e) {
                        return e.currentContentType !== a.AdSourceType.flash
                    }, Object.defineProperty(t.prototype, "paused", {
                        get: function() {
                            return this.getPaused()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "muted", {
                        get: function() {
                            return this.getMuted()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "duration", {
                        get: function() {
                            return this.getDuration()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "currentTime", {
                        get: function() {
                            return this.getCurrentTime()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "currentContentType", {
                        get: function() {
                            return this.getCurrentContentType()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(n["default"]);
                t.DisplayController = s
            }.apply(t, n), !(void 0 !== i && (e.exports = i))
        }, function(e, t, r) {
            var n, i;
            n = [r, t, r(11)], i = function(e, t, r) {
                "use strict";
                var n = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i),
                    i = "hidden" in document ? "hidden" : "webkitHidden" in document ? "webkitHidden" : "mozHidden" in document ? "mozHidden" : null,
                    o = "visibilityState" in document ? "visibilityState" : "webkitVisibilityState" in document ? "webkitVisibilityState" : "mozVisibilityState" in document ? "mozVisibilityState" : null,
                    a = function() {
                        function e(t, n) {
                            var a = this;
                            this.el = t, this.threshold = n, this.onResize = new r["default"], this.onChangeVisibility = new r["default"], this.onShow = new r["default"], this.onHide = new r["default"], this.onChangeState = new r["default"], this.onDocumentFullScroll = new r["default"], this.onChangeDocumentVisibility = new r["default"], this.visibility = !1, this.isEndOfTheBody = !1;
                            var s = t.ownerDocument,
                                u = s.defaultView,
                                c = this.el.getBoundingClientRect(),
                                l = c.width,
                                d = c.height;
                            if (this.onChangeState.add(function() {
                                    var e = a.el.getBoundingClientRect();
                                    e.width === l && e.height === d || (a.onResize.trigger(e), l = e.width, d = e.height);
                                    var t = a.getTheEndOfTheBody();
                                    t !== a.isEndOfTheBody && (a.isEndOfTheBody = t, t && a.onDocumentFullScroll.trigger());
                                    var r = a.getVisibility();
                                    a.getVisibility() !== a.visibility && (a.visibility = r, a.onChangeVisibility.trigger(r), r ? a.onShow.trigger() : a.onHide.trigger())
                                }), null !== i && null !== o) {
                                var p = i.replace(/hidden/i, "visibilitychange");
                                s.addEventListener(p, function() {
                                    return a.onChangeDocumentVisibility.trigger(e.getDocumentVisibility(s))
                                })
                            }
                            for (var f = function(e) {
                                    if ("function" == typeof e.onscroll) {
                                        var t = e.onscroll;
                                        e.onscroll = function(e) {
                                            t(e), a.onChangeState.trigger()
                                        }
                                    } else e.onscroll = function() {
                                        return a.onChangeState.trigger()
                                    }
                                }, h = t.parentElement; h; h = h.parentElement) f(h);
                            u.addEventListener("resize", function() {
                                return a.onChangeState.trigger()
                            }), u.addEventListener("scroll", function() {
                                return a.onChangeState.trigger()
                            }), this.onChangeDocumentVisibility.add(this.onChangeState), this.visibility = this.getVisibility(), this.isEndOfTheBody = this.getTheEndOfTheBody()
                        }
                        return e.getDocumentVisibility = function(e) {
                            return !e[i]
                        }, e.getDifferenceBetweenCoordinates = function(e, t) {
                            return {
                                winWidth: t.winWidth,
                                winHeight: t.winHeight,
                                left: e.left + t.left,
                                top: e.top + t.top,
                                width: e.width,
                                height: e.height
                            }
                        }, e.getElementRelativeCoordinades = function(e) {
                            var t = e.ownerDocument,
                                r = t.defaultView,
                                i = t.documentElement,
                                o = e.getBoundingClientRect();
                            return {
                                winWidth: n ? Math.max(i.clientWidth, r.innerWidth || 0) : r.innerWidth || t.documentElement.clientWidth || t.body.clientWidth,
                                winHeight: n ? Math.max(i.clientHeight, r.innerHeight || 0) : r.innerHeight || t.documentElement.clientHeight || t.body.clientHeight,
                                left: o.left,
                                top: o.top,
                                width: o.width,
                                height: o.height
                            }
                        }, e.sliceExtraSpace = function(e) {
                            var t = e.width,
                                r = e.height,
                                n = e.top,
                                i = e.left,
                                o = e.winWidth,
                                a = e.winHeight,
                                s = i + t,
                                u = n + r,
                                c = i < 0 ? 0 : i < o ? i : o,
                                l = n < 0 ? 0 : n < a ? n : a,
                                d = s > o ? o : s > c ? s : c,
                                p = u > a ? a : u > l ? u : l;
                            return {
                                winWidth: o,
                                winHeight: a,
                                left: c,
                                top: l,
                                width: d - c,
                                height: p - l
                            }
                        }, e.getAreaRatio = function(e, t) {
                            return e.width * e.height / (t.width * t.height)
                        }, e.getElemintVisibility = function(t, r) {
                            for (var n = e.getElementRelativeCoordinades(t), i = e.sliceExtraSpace(n), o = e.getAreaRatio(i, n); o > r;) {
                                try {
                                    t = t.ownerDocument.defaultView.frameElement
                                } catch (a) {
                                    return o > r
                                }
                                if (!t) return o > r;
                                var s = e.getElementRelativeCoordinades(t),
                                    u = e.getDifferenceBetweenCoordinates(i, s);
                                i = e.sliceExtraSpace(u), o = e.getAreaRatio(i, n)
                            }
                            return o > r
                        }, e.prototype.getDocumentHeight = function() {
                            var e = this.el.ownerDocument,
                                t = e.body,
                                r = e.documentElement;
                            return Math.max(t.scrollHeight, t.offsetHeight, r.clientHeight, r.scrollHeight, r.offsetHeight)
                        }, e.prototype.whenShow = function() {
                            return this.getVisibility() ? Promise.resolve() : this.onShow.promise()
                        }, e.prototype.isFullScrolledElement = function(e) {
                            var t = this.el.ownerDocument,
                                r = t.defaultView,
                                n = t.documentElement;
                            if (e === n || e === t.body) {
                                var i = (r.pageYOffset || n.scrollTop) - (n.clientTop || 0);
                                return this.getDocumentHeight() - (i + r.innerHeight) < 40
                            }
                            return !(e.scrollHeight > e.clientHeight && e.scrollHeight - (e.scrollTop + e.clientHeight) > 40)
                        }, e.prototype.whenCanShow = function() {
                            var e = this;
                            return this.getVisibility() ? Promise.resolve() : this.getTheEndOfTheBody() && this.getIsAfterBody() ? Promise.resolve() : new Promise(function(t) {
                                e.onShow.promise().then(t), e.onDocumentFullScroll.add(function() {
                                    e.getIsAfterBody() && t()
                                })
                            })
                        }, e.prototype.getVisibility = function() {
                            var t = this.el.ownerDocument;
                            return !!e.getDocumentVisibility(t) && e.getElemintVisibility(this.el, this.threshold)
                        }, e.prototype.getTheEndOfTheBody = function() {
                            if (!this.el.parentElement || !this.el.parentElement.parentElement) return !1;
                            for (var e = this.el.parentElement.parentElement, t = e; t; t = t.parentElement)
                                if (!this.isFullScrolledElement(t)) return !1;
                            return !0
                        }, e.prototype.getIsAfterBody = function() {
                            return this.el.getBoundingClientRect().bottom > this.el.ownerDocument.body.getBoundingClientRect().bottom
                        }, e
                    }();
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t["default"] = a
            }.apply(t, n), !(void 0 !== i && (e.exports = i))
        }, function(e, t, r) {
            var n, i, o = this && this.__extends || function(e, t) {
                function r() {
                    this.constructor = e
                }
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            };
            n = [r, t, r(44), r(45), r(37), r(10), r(1)], i = function(e, t, n, i, a, s, u) {
                "use strict";
                var c = r(46),
                    l = function(e) {
                        function t(t, r) {
                            var n = this;
                            e.call(this, t, r), this.adParameters = r.vastAd.adParameters, this.on({
                                firstQuartile: function() {
                                    return n.trackEvent(u.TrackingEventType.FIRST_QUARTILE)
                                },
                                midpoint: function() {
                                    return n.trackEvent(u.TrackingEventType.MIDPOINT)
                                },
                                thirdQuartile: function() {
                                    return n.trackEvent(u.TrackingEventType.THIRD_QUARTILE)
                                },
                                pause: function() {
                                    return n.trackEvent(u.TrackingEventType.PAUSE)
                                },
                                resume: function() {
                                    return n.trackEvent(u.TrackingEventType.RESUME)
                                },
                                skip: function() {
                                    return n.trackEvent(u.TrackingEventType.SKIP)
                                },
                                close: function() {
                                    return n.trackEvent(u.TrackingEventType.CLOSE)
                                },
                                start: function() {
                                    return n.trackEvent(u.TrackingEventType.CREATIVE_VIEW)
                                },
                                videoStart: function() {
                                    return n.trackEvent(u.TrackingEventType.START)
                                },
                                complete: function() {
                                    return n.trackEvent(u.TrackingEventType.COMPLETE)
                                },
                                clickThrough: function() {
                                    return n.trackEvent(u.TrackingEventType.CLICK_THROUGH)
                                },
                                impression: function() {
                                    var e = setInterval(function() {
                                        n.getCurrentTime() + .1 > n.impressionTrackOffset && (clearInterval(e), n.trackEvent(u.TrackingEventType.IMPRESSION))
                                    }, .1)
                                },
                                error: function(e) {
                                    return n.trackError(e)
                                }
                            }), this.videoNodeCallbacks = {
                                muteChange: function(e) {
                                    return n.emit("muteChange", e)
                                }
                            }, this.once({
                                error: function(e) {
                                    return n.onStop.trigger("string" == typeof e ? new Error("AdSDK Js Error: Error from VPAID: " + e) : e ? e : new Error("AdSDK error: unknown error from VPAID creative"))
                                },
                                start: function() {
                                    n.isStarted = !0, n.updatePositionInterval = setInterval(n.updatePosition.bind(n), 500)
                                },
                                stop: function() {
                                    clearInterval(n.updatePositionInterval)
                                }
                            })
                        }
                        return o(t, e), t.checkVPAIDInterface = function(e) {
                            return e.handshakeVersion && "function" == typeof e.handshakeVersion && e.initAd && "function" == typeof e.initAd && e.startAd && "function" == typeof e.startAd && e.stopAd && "function" == typeof e.stopAd && e.skipAd && "function" == typeof e.skipAd && e.resizeAd && "function" == typeof e.resizeAd && e.pauseAd && "function" == typeof e.pauseAd && e.resumeAd && "function" == typeof e.resumeAd && e.expandAd && "function" == typeof e.expandAd && e.collapseAd && "function" == typeof e.collapseAd && e.subscribe && "function" == typeof e.subscribe && e.unsubscribe && "function" == typeof e.unsubscribe
                        }, t.prototype.play = function(e) {
                            var t = this;
                            return void 0 === e && (e = !0), this.preload().then(function() {
                                e && (t.containerNode.style.display = "block", t.isStarted ? t.creative.resumeAd() : (t.isStarted = !0, t.creative.startAd()))
                            }), this.onStop.promise().then(function(e) {
                                if (e) return Promise.reject(e)
                            })
                        }, t.prototype.getCurrentTime = function() {
                            var e = this.creative && "function" == typeof this.creative.getAdRemainingTime && this.creative.getAdRemainingTime() || 0;
                            return this.duration - e
                        }, t.prototype.pause = function() {
                            this.creative.pauseAd()
                        }, t.prototype.resume = function() {
                            this.creative.resumeAd()
                        }, t.prototype.skip = function() {
                            this.getSkippable() ? this.creative.skipAd() : s.log("AdSDK ==> Creative is not skippable: ", this.creative)
                        }, t.prototype.getSkippable = function() {
                            return this.creative && "function" == typeof this.creative.getAdSkippableState && this.creative.getAdSkippableState()
                        }, t.prototype.getDuration = function() {
                            return this.creative && "function" == typeof this.creative.getAdDuration && this.creative.getAdDuration() || this.mediaAd.duration || 0
                        }, t.prototype.getAdDimensions = function() {
                            return this.creative && "function" == typeof this.creative.getAdDimensions ? this.creative.getAdDimensions() : null
                        }, t.prototype.getSrc = function() {
                            return this.getScriptSrc()
                        }, t.prototype.destroy = function() {
                            this.videoNodeController.off(this.videoNodeCallbacks), this.removeControls()
                        }, t.prototype.preload = function() {
                            var e = this;
                            return this.videoNodeController.on(this.videoNodeCallbacks), this.isPreloaded ? Promise.resolve() : new Promise(function(t, r) {
                                e.load()["catch"](r), e.when("loaded").then(function() {
                                    e.isPreloaded = !0, t(), e.emit("ready")
                                })
                            })
                        }, t.prototype.load = function() {
                            var e = this;
                            return this.createControls().then(function() {
                                return e.putScriptInIFrame()
                            }).then(function() {
                                return e.initIFrame()
                            }).then(function() {
                                return e.initAd()
                            })
                        }, t.prototype.createControls = function() {
                            var e = this;
                            return new Promise(function(t) {
                                var r = e.videoWrapperNode,
                                    n = e.containerNode = document.createElement("div");
                                n.className = "yaAdSdkVpaidContainer", n.style.display = "none", r.style.position = "relative";
                                var i = e.style = document.createElement("style");
                                i.type = "text/css", i.innerHTML = c, n.appendChild(i);
                                var o = e.iframe = document.createElement("iframe");
                                o.scrolling = "no", n.appendChild(o), o.addEventListener("load", function() {
                                    o.contentDocument.body.style.margin = "0", t()
                                }), r.appendChild(n)
                            })
                        }, t.prototype.putScriptInIFrame = function() {
                            var e = this;
                            return new Promise(function(t, r) {
                                var n = e.iframe.contentWindow.document,
                                    i = n.createElement("script");
                                i.type = "text/javascript", i.src = e.getScriptSrc(), i.onload = t, i.onerror = r, n.head.appendChild(i)
                            })
                        }, t.prototype.initIFrame = function() {
                            if ("function" != typeof this.iframe.contentWindow.getVPAIDAd) throw new Error("VPAID does not provide getVPAIDAd function: " + this.getScriptSrc());
                            if (this.creative = this.iframe.contentWindow.getVPAIDAd(), !t.checkVPAIDInterface(this.creative)) throw new Error("VPAID does not implement all of the required functions: " + this.getScriptSrc())
                        }, t.prototype.initAd = function() {
                            var e = this.videoNodeController.videoNode,
                                t = e.clientWidth,
                                r = e.clientHeight,
                                n = i["default"].NORMAL,
                                o = this.adDisplayController.desiredBitrate || 700,
                                a = {
                                    AdParameters: this.adParameters
                                },
                                s = {
                                    slot: this.iframe.contentDocument.body,
                                    videoSlot: this.videoNodeController.videoNode,
                                    videoSlotCanAutoPlay: !0
                                };
                            this.subscribeCreativeEvents(), this.creative.initAd(t, r, n, o, a, s)
                        }, t.prototype.removeControls = function() {
                            this.videoWrapperNode.removeChild(this.containerNode)
                        }, t.prototype.getScriptSrc = function() {
                            return this.getCurrentSource().src
                        }, t.prototype.getCurrentSource = function() {
                            return this.mediaAd.sources.filter(function(e) {
                                return "application/javascript" === e.type
                            })[0]
                        }, t.prototype.subscribeCreativeEvents = function() {
                            var e = this;
                            for (var t in n.RevertTable) n.RevertTable.hasOwnProperty(t) && this.subscribeCreativeEvent(t, n.RevertTable[t]);
                            this.creative.subscribe(function() {
                                for (var t = [], r = 0; r < arguments.length; r++) t[r - 0] = arguments[r];
                                return e.onStop.trigger(t.length > 1 ? t : t[0])
                            }, "AdStopped")
                        }, t.prototype.subscribeCreativeEvent = function(e, t) {
                            var r = this;
                            this.creative.subscribe(function() {
                                for (var e = [], n = 0; n < arguments.length; n++) e[n - 0] = arguments[n];
                                return r.emit(t, e.length > 1 ? e : e[0])
                            }, e)
                        }, t.prototype.updatePosition = function() {
                            this.emit("currentPositionChange", {
                                currentTime: this.getCurrentTime(),
                                duration: this.getDuration()
                            })
                        }, Object.defineProperty(t.prototype, "videoWrapperNode", {
                            get: function() {
                                return this.adDisplayController.wrapperNode
                            },
                            enumerable: !0,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "videoNodeController", {
                            get: function() {
                                return this.adDisplayController.videoNodeController
                            },
                            enumerable: !0,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "config", {
                            get: function() {
                                return this.adDisplayController.config
                            },
                            enumerable: !0,
                            configurable: !0
                        }), t
                    }(a.Viewer);
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t["default"] = l
            }.apply(t, n), !(void 0 !== i && (e.exports = i))
        }, function(e, t, r) {
            var n, i;
            n = [r, t], i = function(e, t) {
                "use strict";
                t.LookupTable = {
                    start: "AdStarted",
                    stop: "AdStopped",
                    close: "AdUserClose",
                    videoStart: "AdVideoStart",
                    firstQuartile: "AdVideoFirstQuartile",
                    midpoint: "AdVideoMidpoint",
                    thirdQuartile: "AdVideoThirdQuartile",
                    complete: "AdVideoComplete",
                    pause: "AdPaused",
                    resume: ["AdPlaying", "AdResumed"],
                    loaded: "AdLoaded",
                    clickThrough: "AdClickThru",
                    volumeChange: ["AdVolumeChanged", "AdVolumeChange"],
                    sizeChange: "AdSizeChange",
                    expanded: "AdExpanded",
                    skip: "AdSkipped",
                    error: "AdError",
                    impression: "AdImpression",
                    finish: "AdFinished",
                    bufferFull: "AdBufferFull",
                    bufferEmpty: "AdBufferEmpty"
                }, t.RevertTable = function() {
                    function e(e, t) {
                        r[e] ? r[e].push(t) : r[e] = [t]
                    }
                    var r = {},
                        n = function(r) {
                            if (t.LookupTable.hasOwnProperty(r)) {
                                var n = t.LookupTable[r];
                                "string" == typeof n ? e(n, r) : n instanceof Array && n.forEach(function(t) {
                                    return e(t, r)
                                })
                            }
                        };
                    for (var i in t.LookupTable) n(i);
                    return r
                }()
            }.apply(t, n), !(void 0 !== i && (e.exports = i))
        }, function(e, t, r) {
            var n, i;
            n = [r, t], i = function(e, t) {
                "use strict";
                var r = {
                    NORMAL: "normal",
                    THUMBNAIL: "thumbnail",
                    FULLSCREEN: "fullscreen"
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t["default"] = r
            }.apply(t, n), !(void 0 !== i && (e.exports = i))
        }, function(e, t) {
            e.exports = ".yaAdSdkVpaidContainer{position:absolute;top:0;right:0;bottom:0;left:0}.yaAdSdkVpaidContainer>iframe{position:absolute;top:0;left:0;width:100%;height:100%;margin:0;padding:0;border:0}"
        }, function(e, t, r) {
            var n, i, o = this && this.__extends || function(e, t) {
                function r() {
                    this.constructor = e
                }
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            };
            n = [r, t, r(9), r(10), r(38), r(48), r(1)], i = function(e, t, r, n, i, a, s) {
                "use strict";
                var u = function(e) {
                        function t(t, r) {
                            var i = this;
                            e.call(this, "unmuteInviter", null, null, t);
                            var o = n.createDiv("unmuteInviterWrapper"),
                                a = n.createDiv("unmuteInviterIcon");
                            o.appendChild(a);
                            var s = n.createDiv("unmuteInviterText", "&#1053;&#1072;&#1074;&#1077;&#1076;&#1080;&#1090;&#1077; &#1082;&#1091;&#1088;&#1089;&#1086;&#1088;,<br>&#1095;&#1090;&#1086;&#1073;&#1099; &#1074;&#1082;&#1083;&#1102;&#1095;&#1080;&#1090;&#1100; &#1079;&#1074;&#1091;&#1082;");
                            o.appendChild(s), this.el.appendChild(o), n.createHoverE(this.el).add(function(e) {
                                if (e) {
                                    if (i.timeout) return;
                                    i.timeout = setTimeout(function() {
                                        i.hide(), r()
                                    }, 1e3)
                                } else clearTimeout(i.timeout), i.timeout = 0
                            }), a.addEventListener("click", function(e) {
                                return e.preventDefault()
                            }), s.addEventListener("click", function(e) {
                                return e.preventDefault()
                            })
                        }
                        return o(t, e), t.prototype.remove = function() {
                            clearTimeout(this.timeout), this.hide()
                        }, t
                    }(a["default"]),
                    c = function(e) {
                        function t(t) {
                            e.call(this), this.container = t, this.controls = {};
                            var r = this.wrapper = new a["default"]("yaAdSdkGui", null, null, t, (!1));
                            t.style.position && "static" !== t.style.position || (t.style.position = "relative"), n.isIOS7() && (r.el.style.display = "none"), this.createControls()
                        }
                        return o(t, e), t.prototype.addSkin = function(e) {
                            if (!e) {
                                if (s.ENVIRONMENT.DEFAULT_CSS) return void n.addBuiltinSkin();
                                e = "//" + s.ENVIRONMENT.getActualDomain() + "/awaps-ad-sdk-js/" + s.ENVIRONMENT.getVersioningURL() + "/skin.css"
                            }
                            for (var t = this.container.ownerDocument, i = t.querySelectorAll("link"), o = 0; o < i.length; o++)
                                if (i[o].href === e) return;
                            var a = t.createElement("link");
                            a.type = "text/css", a.rel = "stylesheet", a.href = r.fixUrlSheme(e);
                            var u = t.querySelector('head link[rel="stylesheet"]');
                            u ? t.querySelector("head").insertBefore(a, u) : t.querySelector("head").appendChild(a)
                        }, t.prototype.setMute = function(e) {
                            this.controls.mute.setClasses(e ? "unMute" : "mute")
                        }, t.prototype.show = function() {
                            this.wrapper.show()
                        }, t.prototype.hide = function() {
                            this.wrapper.hide()
                        }, t.prototype.destroy = function() {
                            this.hide(), this.wrapper = null
                        }, t.prototype.createControls = function() {
                            var e = this,
                                t = this.topRightBlock = n.createDiv("topRightBlock"),
                                r = this.wrapper;
                            r.appendChild(t), this.controls.timeLeft = new a["default"]("timeLeft", null, "Реклама 00", r.el), this.controls.timeLeft.el.style.zIndex = "10";
                            var i = n.createDiv("visitSiteWrapper");
                            r.appendChild(i), this.controls.visitSite = new a["default"]("visitSite pointer", function() {
                                return e.emit("click")
                            }, "Перейти на сайт рекламодателя", i, (!1)), this.controls.play = new a["default"]("play", function() {
                                return e.emit("play")
                            }, null, r.el), this.controls.play.el.style.zIndex = "10", this.controls.pause = new a["default"]("pause", function() {
                                return e.emit("pause")
                            }, null, r.el).hide(), this.controls.mute = new a["default"]("mute", function() {
                                return e.emit("changeMute")
                            }, null, t), this.controls.mute.el.style.zIndex = "10", this.controls.skipTimeLeft = new a["default"]("skipTimeLeft", null, "&#1055;&#1088;&#1086;&#1087;&#1091;&#1089;&#1090;&#1080;&#1090;&#1100; &#1088;&#1077;&#1082;&#1083;&#1072;&#1084;&#1091;: 5 &#1089;&#1077;&#1082;", t), this.controls.skip = new a["default"]("skip", function() {
                                return e.emit("skip")
                            }, "&#1055;&#1088;&#1086;&#1087;&#1091;&#1089;&#1090;&#1080;&#1090;&#1100;", t), this.controls.skip.hide(), this.controls.skip.el.style.zIndex = "10", this.controls.title = new a["default"]("title", function() {
                                return e.emit("click")
                            }, null, r.el), this.controls.title.el.style.zIndex = "10", this.controls.unmuteInviter = new u(r.el, function() {
                                e.emit("changeMute", !0)
                            }), this.controls.unmuteInviter.el.style.zIndex = "9"
                        }, t
                    }(i["default"]);
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t["default"] = c
            }.apply(t, n), !(void 0 !== i && (e.exports = i))
        }, function(e, t, r) {
            var n, i;
            n = [r, t, r(10)], i = function(e, t, r) {
                "use strict";
                var n = function() {
                    function e(e, t, n, i, o) {
                        void 0 === o && (o = !0), this.elementClass = e, this.clickHandler = t, this.text = n, this.parent = i, this.blocked = !1, this.el = r.createDiv(e, n), this.el.addEventListener("click", function(e) {
                            o && e.stopPropagation(), "function" == typeof t && t()
                        })
                    }
                    return e.prototype.setText = function(e) {
                        return this.el.innerHTML = e.trim() || "", this
                    }, e.prototype.setVisible = function(e) {
                        return this.blocked || this.isVisible === !!e || (e ? this.parent.appendChild(this.el) : this.parent.removeChild(this.el)), this
                    }, e.prototype.getClasses = function() {
                        return this.el.className.split(/\s+/)
                    }, e.prototype.hasClass = function(e) {
                        return this.getClasses().indexOf(e) > -1
                    }, e.prototype.addClass = function(e) {
                        return this.hasClass(e) || (this.el.className += " " + e), this
                    }, e.prototype.removeClass = function(e) {
                        if (this.hasClass(e)) {
                            var t = this.getClasses();
                            t.splice(t.indexOf(e), 1), this.el.className = t.join(" ")
                        }
                        return this
                    }, e.prototype.setClasses = function(e) {
                        return this.el.className = e, this
                    }, e.prototype.hide = function() {
                        return this.setVisible(!1)
                    }, e.prototype.show = function() {
                        return this.setVisible(!0)
                    }, e.prototype.setBlocked = function(e) {
                        return e && this.hide(), this.blocked = e, this
                    }, e.prototype.block = function() {
                        return this.setBlocked(!0)
                    }, e.prototype.unBlock = function() {
                        return this.setBlocked(!1)
                    }, e.prototype.appendChild = function(e) {
                        return this.el.appendChild(e), this
                    }, e.prototype.removeChild = function(e) {
                        return this.el.removeChild(e), this
                    }, Object.defineProperty(e.prototype, "isVisible", {
                        get: function() {
                            return this.el.parentElement === this.parent
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e
                }();
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t["default"] = n
            }.apply(t, n), !(void 0 !== i && (e.exports = i))
        }, function(e, t, r) {
            var n, i, o = this && this.__extends || function(e, t) {
                function r() {
                    this.constructor = e
                }
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            };
            n = [r, t, r(37), r(10), r(50), r(14)], i = function(e, t, r, n, i, a) {
                "use strict";
                var s = function(e) {
                    function t(t, r) {
                        e.call(this, t, r), this.wrapperNode = t.wrapperNode
                    }
                    return o(t, e), t.prototype.play = function(e) {
                        var t = this;
                        return this.preload().then(function(r) {
                            t.isPreloaded || (t.flashDisplayController = r, t.reemit(r, ["ready", "start", "resume"]), t.flashDisplayController.on("afterEndAd", function(e) {
                                return t.onStop.trigger(e)
                            })), t.isPreloaded = !0, e && t.flashDisplayController.play()
                        })["catch"](function(e) {
                            return t.onStop.trigger(e)
                        }), this.onStop.promise().then(function(e) {
                            if (e) return Promise.reject(e)
                        })
                    }, t.prototype.skip = function(e) {}, t.prototype.pause = function() {
                        this.flashDisplayController && this.flashDisplayController.pause()
                    }, t.prototype.resume = function() {
                        this.flashDisplayController && this.flashDisplayController.play()
                    }, t.prototype.getCurrentTime = function() {
                        return 0
                    }, t.prototype.getDuration = function() {
                        return 0
                    }, t.prototype.getAdDimensions = function() {
                        return this.flashDisplayController.getAdDimensions()
                    }, t.prototype.getSkippable = function() {
                        return !1
                    }, t.prototype.getSrc = function() {
                        var e = this.getMediaSource();
                        return e ? e.src : ""
                    }, t.prototype.destroy = function() {
                        this.containerElement && this.containerElement.parentElement && this.containerElement.parentElement.removeChild(this.containerElement)
                    }, t.prototype.preload = function() {
                        var e = this;
                        return this.isPreloaded ? Promise.resolve() : a.checkForFlashPlayer().then(function(t) {
                            if (t) {
                                e.createPlayerContainer();
                                var r = e.mediaAd.toXMLString(),
                                    n = e.adDisplayController.getPartnerIdAndCategory();
                                return n.xml = r, i.createSwfAdPlayer(e.playerElement, n)
                            }
                            throw new Error("AdSDK Js Error: cannot play FLASH Ad: FlashPlayer is not available")
                        })
                    }, t.prototype.createPlayerContainer = function() {
                        var e = {
                            position: "absolute",
                            top: "0",
                            left: "0",
                            width: "100%",
                            height: "100%"
                        };
                        this.containerElement = document.createElement("div"), n.applyStyles(this.containerElement, e), this.playerElement = document.createElement("div"), this.playerElement.id = "yandex_flash_vpaid_" + Math.floor(1e9 * Math.random()), n.applyStyles(this.playerElement, e), this.containerElement.appendChild(this.playerElement), this.wrapperNode.insertBefore(this.containerElement, this.adDisplayController.gui.wrapper.el)
                    }, t.prototype.getMediaSource = function() {
                        return this.mediaAd.sources.filter(function(e) {
                            return e.isVpaid && "application/x-shockwave-flash" === e.type
                        })[0]
                    }, t
                }(r.Viewer);
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t["default"] = s
            }.apply(t, n), !(void 0 !== i && (e.exports = i))
        }, function(e, t, r) {
            var n, i;
            n = [r, t, r(14), r(51)], i = function(e, t, r, n) {
                "use strict";

                function i(e, t, n, i) {
                    return new Promise(function(o) {
                        ya.mediaAd.inPage[t] || (ya.mediaAd.inPage[t] = {});
                        var a = {
                                onStateChange: "window.ya.mediaAd.inPage." + t + ".onStateChange",
                                onError: "window.ya.mediaAd.inPage." + t + ".onError",
                                "hide-ui": "true",
                                autostart: "false",
                                inpage: i.switchVolumeOnRollOver ? "true" : "false",
                                "switch-volume-on-roll-over": i.switchVolumeOnRollOver ? "true" : "false",
                                awapsXMLProvider: i.xml ? function() {
                                    return ya.mediaAd.inPage[t].awapsXMLProvider = function() {
                                        return i.xml
                                    }, "window.ya.mediaAd.inPage." + t + ".awapsXMLProvider"
                                }() : ""
                            },
                            s = {
                                id: e.id,
                                name: e.id,
                                bgcolor: "#000000",
                                background: "#000000",
                                width: "100%",
                                height: "100%"
                            },
                            c = {
                                movie: n,
                                allowfullscreen: "true",
                                bgcolor: "#000000",
                                allowscriptaccess: "always",
                                wmode: "opaque"
                            };
                        r.adConfigToFlashvars(i, a), swfobject.embedSWF(n, e.id, "100%", "100%", u, null, a, c, s, o)
                    })
                }

                function o(e, t) {
                    var o = r.sanitizeId(e.id);
                    return r.loadSWFUrlByPackageAndBuild(a, s).then(function(r) {
                        var a = document.createElement("div");
                        return e.appendChild(a), a.id = e.id + "swf", e.style.overflow = "hidden", i(a, o, r, t).then(function(t) {
                            return t instanceof Error ? Promise.reject(t) : t.ref ? new Promise(function(r, i) {
                                var o = t.ref,
                                    a = new n["default"](o, e),
                                    s = setTimeout(function() {
                                        return i(new Error("AdSDK error: FlashDisplayController ready timeout"))
                                    }, 5e3);
                                a.on({
                                    ready: function() {
                                        clearTimeout(s), r(a)
                                    },
                                    afterEndAd: function(e) {
                                        e && i(e)
                                    }
                                })
                            }) : Promise.reject(new Error("Error creating object element"))
                        })
                    })
                }
                var a = "adplayer",
                    s = "1_2",
                    u = "10.2";
                t.createSwfAdPlayer = o
            }.apply(t, n), !(void 0 !== i && (e.exports = i))
        }, function(e, t, r) {
            var n, i, o = this && this.__extends || function(e, t) {
                function r() {
                    this.constructor = e
                }
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            };
            n = [r, t, r(41), r(14), r(35)], i = function(e, t, r, n, i) {
                "use strict";
                var a = function(e) {
                    function t(t, r) {
                        var i = this;
                        e.call(this, r), this.adPlayer = t, this.isStarted = !1;
                        var o = ya.mediaAd.inPage,
                            a = n.sanitizeId(r.id);
                        o[a].onStateChange = function(e) {
                            "stop" === e && i.emit("afterEndAd"), "ready" === e && i.emit("ready"), "play" === e && i.emit("start")
                        }, o[a].onError = function(e) {
                            i.emit("afterEndAd", new Error("AdSDK Js Error: FlashDisplayController Error: " + e))
                        }
                    }
                    return o(t, e), t.prototype.getAdDimensions = function() {
                        var e, t;
                        try {
                            e = this.adPlayer.getMediaWidth(), t = this.adPlayer.getMediaHeight()
                        } catch (r) {
                            return null
                        }
                        return {
                            width: e,
                            height: t
                        }
                    }, t.prototype.pause = function() {
                        "function" == typeof this.adPlayer.pause && this.adPlayer.pause()
                    }, t.prototype.loadAndShowAd = function() {
                        return this.play(), this.when("afterEndAd")
                    }, t.prototype.play = function() {
                        this.isStarted ? this.adPlayer.resume() : (this.adPlayer.start(), this.isStarted = !0), this.emit("resume")
                    }, t.prototype.setMute = function(e, t) {}, t.prototype.getCurrentTime = function() {
                        return 0
                    }, t.prototype.getDuration = function() {
                        return 0
                    }, t.prototype.getPaused = function() {
                        return !1
                    }, t.prototype.getMuted = function() {
                        return !1
                    }, t.prototype.skip = function() {}, t.prototype.getCurrentContentType = function() {
                        return i.AdSourceType.flash
                    }, t
                }(r.DisplayController);
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t["default"] = a
            }.apply(t, n), !(void 0 !== i && (e.exports = i))
        }, function(e, t) {
            ! function() {
                var e = "encodeURIComponent",
                    t = "decodeURIComponent",
                    r = "createElement",
                    n = "location",
                    i = "getElementsByTagName",
                    o = "getElementById",
                    a = "length",
                    s = "script",
                    u = "indexOf",
                    c = "charAt",
                    l = "href",
                    d = "replace",
                    p = "split",
                    f = "substr",
                    h = "src",
                    v = "http",
                    m = "addEventListener",
                    y = "queryParams",
                    g = "optionalParams",
                    E = "ns_ad_",
                    T = E + "pcd",
                    w = E + "vs",
                    A = "defaultTrackingURL",
                    k = "handlerForVCECallback",
                    S = "loader",
                    b = "playerNode",
                    P = "playerId",
                    C = "partnerId",
                    _ = "notInited",
                    I = window,
                    O = document;
                ns_ = I.ns_ || {}, ns_.vce_vh = ns_.vce_vh || {}, ns_.vce_vh.player_cache = ns_.vce_vh.player_cache || {}, ns_.vce_vh.Loader = ns_.vce_vh.Loader || function(E) {
                    function A(e) {
                        return e ? e[d](/\s+/g, "") : e
                    }

                    function k() {
                        try {
                            return E.ns_.vce_v.R && E.ns_.vce_v && E.ns_
                        } catch (e) {
                            return !1
                        }
                    }

                    function S() {
                        var e = A(ce);
                        return e = e + "#cs_vp_sv=" + J + "&ns_ad_pa=" + B + "&ns_swfid=" + $
                    }

                    function b(e) {
                        var t = X[r](s);
                        t.type = "text/javascript", t[h] = e, t.async = !0;
                        try {
                            var n = X[o](q);
                            if (!n) return;
                            n[m]("loadedmetadata", function(e) {
                                n.duration && (ee[T] = Math.floor(n.duration)), n.volume && (ee[w] = 0 !== n.volume)
                            }, !1), n.parentNode.insertBefore(t, n.nextSibling)
                        } catch (i) {}
                    }

                    function P(e) {
                        var t = {};
                        return t = V(e), !t[T] && ee[T] && (t[T] = ee[T]), !t[w] && ee[w] && (t[w] = ee[w]), t
                    }

                    function C(e, t, r) {
                        t || (t = W), e && t && (r ? G.push({
                            eventType: e,
                            eventURL: t,
                            optionalParams: r
                        }) : G.push({
                            eventType: e,
                            eventURL: t,
                            optionalParams: {}
                        }), setTimeout(_, 0))
                    }

                    function _() {
                        var e = 0,
                            t = G[a],
                            r = {},
                            n = "",
                            i = {};
                        if (z > Y) {
                            for (e = 0; e < t; ++e) I(G[e]);
                            return void(G[a] = 0)
                        }
                        if (!k()) return z += K, void setTimeout(_, K);
                        if (0 !== t) {
                            for (e = 0; e < t; ++e) {
                                try {
                                    r = R(G[e].eventURL), n = r.url + "?" + N(r[y]), D(), i = P(G[e][g]), i.bufferTime = z
                                } catch (o) {}
                                try {
                                    E.ns_.vce_v.Tr($, G[e].eventType, n, N(i))
                                } catch (o) {}
                            }
                            G[a] = 0
                        }
                    }

                    function I(e) {
                        var t, r, n = {},
                            i = "",
                            o = {},
                            a = "v_" + e.eventType,
                            s = e[g],
                            u = {},
                            c = "";
                        try {
                            n = R(e.eventURL), i = n.url;
                            for (t in n[y]) o[t] = n[y][t];
                            if (r = o.c2 + "" + o.c3, o.ns__t = (new Date).getTime(), r in le ? (o.ns__p = le[r], Z = le[r]) : le[r] = o.ns__t, o.ns_ad_vevent = a, o.ns_ad_event = "video", o.ns_ad_pa = B, Z)
                                for (var l = ["c3", "ca3", "cb3", "cc3", "cd3", "ce3", "cf3", "cg3", "ch3", "ci3", "cj3", "ck3", "cl3"], d = 0; d < l.length; d++) {
                                    var p = l[d],
                                        f = p.replace(/3/gi, 1);
                                    o.hasOwnProperty(p) && 3 == o[f] && (o[p] = "_e0_" + o[p])
                                }
                            if (o.cs_vp_sv = J, o.ns_ad_wt = z, s) {
                                D(), u = P(s);
                                for (var h in u) o[h] = u[h]
                            }
                            c = i + "?" + N(o), x(c)
                        } catch (v) {}
                    }

                    function O(e) {
                        var t, r = 0;
                        for (t in e) e[t] && r++;
                        return r
                    }

                    function N(e) {
                        var t = "";
                        for (var r in e) "" !== t && (t += "&"), t += r + "=" + ie(e[r]).replace(/-/g, "%2D").replace(/@/g, "%40").replace(/\*/g, "%2A");
                        return t
                    }

                    function R(e) {
                        var r = "",
                            n = {},
                            i = "",
                            o = 0,
                            s = [];
                        if (!e) return {
                            url: null,
                            queryParams: null
                        };
                        if (e = A(e), 0 !== e[u](v) && (e = v + "://" + e), ae[c](4) != e[c](4) && (e = ae + ("s" == ae[c](4) ? e[f](7) : e[f](9))), e[u]("?") != -1) {
                            if (r = e[f](0, e[u]("?")), i = e[f](e[u]("?") + 1), i[u]("&") != -1) {
                                n = {}, i = i.replace(/&amp;/gi, "&").replace(/amp;/gi, "");
                                var l = i[p]("&");
                                for (o = 0; o < l[a]; ++o)
                                    if (s = l[o][p]("="), 2 == s[a]) try {
                                        n[E[t](s[0])] = E[t](s[1])
                                    } catch (d) {
                                        n[s[0]] = s[1]
                                    }
                            } else if (s = i[p]("="), 2 == s[a]) {
                                n = {};
                                try {
                                    n[E[t](s[0])] = E[t](s[1])
                                } catch (d) {
                                    n[s[0]] = s[1]
                                }
                            }
                        } else r = e;
                        return {
                            url: r,
                            queryParams: n
                        }
                    }

                    function V(e) {
                        var r, n = {};
                        if (!e) return {};
                        if (0 === O(e)) return {};
                        for (r in e) try {
                            n[E[t](r)] = E[t](e[r])
                        } catch (i) {
                            r = E[t](r), n[r] = e[r]
                        }
                        return n
                    }

                    function D() {
                        if (q) {
                            var e = X[o](q);
                            !ee[T] && e.duration && (ee[T] = e.duration), !ee[w] && e.volume && (ee[w] = 0 !== e.volume)
                        }
                    }

                    function x(e) {
                        var t = new Image;
                        t.src = e
                    }

                    function M() {
                        var e = X[o](q),
                            t = !1;
                        if (!e) return !1;
                        for (var r = 0, n = ne[a]; r < n; ++r) t = t || e == X[ne[r]], X[ne[r]] && (t = t || e == X[ne[r]][i]("video")[0]), t = t || te;
                        return t
                    }

                    function L(e, t) {
                        H && H(e, t)
                    }

                    function U() {
                        var e, t = Q + "evt",
                            r = Q + "fs";
                        q && (e = X[o](q)), e && (e[t] = L, e[r] = M)
                    }

                    function F(e) {
                        H = e
                    }

                    function j(e, t, r) {
                        B = e;
                        var n = X[o](t);
                        n && (n[$] = function() {
                            return !0
                        }, q = t, b(S()), U(), r && (W = r), n[m]("webkitbeginfullscreen", function() {
                            te = !0
                        }, !1), n[m]("webkitendfullscreen", function() {
                            te = !1
                        }, !1))
                    }
                    var B, q, H, W, X = E.document,
                        G = [],
                        z = 0,
                        Y = 5e3,
                        K = 500,
                        Q = "cs_",
                        J = "1.1601.05h",
                        $ = Q + Math.floor(1e13 * Math.random() + 1),
                        Z = 0,
                        ee = {},
                        te = !1,
                        re = "FullscreenElement",
                        ne = ["ms" + re, "webkit" + re, "mozFullScreenElement", "fullscreenElement", "o" + re, "khtml" + re],
                        ie = E[e] ? E[e] : escape,
                        oe = ie(X[n] && X[n][l] ? X[n][l] : X.URL),
                        ae = "http" + ("s" == oe[c](4) ? "s://s" : "://"),
                        se = ae + "b.scorecardresearch.com",
                        ue = "/c2/vce4v/",
                        ce = se + ue + "rs.js",
                        le = {};
                    return {
                        init: j,
                        addCallback: F,
                        trackEvent: C
                    }
                }, ns_.vce_vh.boot = ns_.vce_vh.boot || function() {
                    function e(e) {
                        if (e.length < 2) return !1;
                        var t = e[0];
                        if ("string" == typeof t && t.trim().length > 0) {
                            for (var r = 1, n = e.length; r < n; ++r) {
                                var i = e[r];
                                if (i.constructor !== Object || !i[b] && !i[P]) break
                            }
                            if (r === n) return !0
                        }
                        return !1
                    }

                    function t() {
                        if (e(arguments)) {
                            for (var t = arguments, r = t[0].trim(), a = 1, s = t.length; a < s; ++a) {
                                var u, c, l, d = t[a],
                                    p = !!(d[P] && d[P].trim().length > 0);
                                if (p ? (u = d[P].trim(), l = I, c = O[o][u]) : (c = d[b], l = c.ownerDocument.defaultView || c.ownerDocument.parentWindow, u = c.id), u.trim().length <= 0) return;
                                var f = new i(l);
                                n[u] = {}, c && (n[u][b] = c), n[u][S] = f, n[u][C] = r, n[u][A] = d[A] ? d[A].trim() : null, n[u][k] = d[k], n[u][_] = !0
                            }
                            for (var h in n)
                                if (n.hasOwnProperty(h)) {
                                    var v = n[h],
                                        m = v[C];
                                    if (v[_]) {
                                        var y = v[k];
                                        y && y instanceof Function && v[S].addCallback(y), v[S].init(m, h, v[A]), v[_] = !1
                                    }
                                }
                        }
                    }

                    function r(e, t, r, i) {
                        var o = "",
                            a = "";
                        if (i) o = "string" == typeof i ? i.trim() : i.id;
                        else
                            for (var s in n)
                                if (n.hasOwnProperty(s)) {
                                    o = s;
                                    break
                                }
                        o && n[o] && (a = t ? t : n[o][A], n[o][S].trackEvent(e, a, r))
                    }
                    var n = ns_.vce_vh.player_cache,
                        i = ns_.vce_vh.Loader;
                    return {
                        init: t,
                        redirect: r
                    }
                }(), I.cs_vce_ = I.cs_vce_ || {
                    init: ns_.vce_vh.boot.init,
                    trackEvent: ns_.vce_vh.boot.redirect
                }
            }()
        }, function(e, t) {
            ! function(e) {
                "use strict";

                function t(t, r) {
                    var n = e.createEvent("Event");
                    n.initEvent(t, !0, !1), r.dispatchEvent(n)
                }

                function r(r) {
                    e[u.enabled] = e[i.enabled], e[u.element] = e[i.element], t(u.events.change, r.target)
                }

                function n(e) {
                    t(u.events.error, e.target)
                }
                var i, o, a = !0,
                    s = {
                        w3: {
                            enabled: "fullscreenEnabled",
                            element: "fullscreenElement",
                            request: "requestFullscreen",
                            exit: "exitFullscreen",
                            events: {
                                change: "fullscreenchange",
                                error: "fullscreenerror"
                            }
                        },
                        webkit: {
                            enabled: "webkitIsFullScreen",
                            element: "webkitCurrentFullScreenElement",
                            request: "webkitRequestFullScreen",
                            exit: "webkitCancelFullScreen",
                            events: {
                                change: "webkitfullscreenchange",
                                error: "webkitfullscreenerror"
                            }
                        },
                        moz: {
                            enabled: "mozFullScreen",
                            element: "mozFullScreenElement",
                            request: "mozRequestFullScreen",
                            exit: "mozCancelFullScreen",
                            events: {
                                change: "mozfullscreenchange",
                                error: "mozfullscreenerror"
                            }
                        },
                        ms: {
                            enabled: "msFullscreenEnabled",
                            element: "msFullscreenElement",
                            request: "msRequestFullscreen",
                            exit: "msExitFullscreen",
                            events: {
                                change: "MSFullscreenChange",
                                error: "MSFullscreenError"
                            }
                        }
                    },
                    u = s.w3;
                for (o in s)
                    if (s[o].enabled in e) {
                        i = s[o];
                        break
                    }
                return !a || u.enabled in e || !i || (e.addEventListener(i.events.change, r, !1), e.addEventListener(i.events.error, n, !1), e[u.enabled] = e[i.enabled], e[u.element] = e[i.element], e[u.exit] = e[i.exit], Element.prototype[u.request] = function() {
                    return this[i.request].apply(this, arguments)
                }), i
            }(document)
        }]);

    }
})();