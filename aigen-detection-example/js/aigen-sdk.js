/*! For license information please see aigen-sdk.js.LICENSE.txt */
!(function (t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define([], e)
    : 'object' == typeof exports
    ? (exports.AIGEN = e())
    : (t.AIGEN = e());
})(this, () =>
  (() => {
    var t = {
        392: (t, e, n) => {
          'use strict';
          function r(t) {
            return (
              (r =
                'function' == typeof Symbol &&
                'symbol' == typeof Symbol.iterator
                  ? function (t) {
                      return typeof t;
                    }
                  : function (t) {
                      return t &&
                        'function' == typeof Symbol &&
                        t.constructor === Symbol &&
                        t !== Symbol.prototype
                        ? 'symbol'
                        : typeof t;
                    }),
              r(t)
            );
          }
          function i() {
            i = function () {
              return e;
            };
            var t,
              e = {},
              n = Object.prototype,
              o = n.hasOwnProperty,
              s =
                Object.defineProperty ||
                function (t, e, n) {
                  t[e] = n.value;
                },
              a = 'function' == typeof Symbol ? Symbol : {},
              c = a.iterator || '@@iterator',
              h = a.asyncIterator || '@@asyncIterator',
              u = a.toStringTag || '@@toStringTag';
            function l(t, e, n) {
              return (
                Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                }),
                t[e]
              );
            }
            try {
              l({}, '');
            } catch (t) {
              l = function (t, e, n) {
                return (t[e] = n);
              };
            }
            function f(t, e, n, r) {
              var i = e && e.prototype instanceof _ ? e : _,
                o = Object.create(i.prototype),
                a = new M(r || []);
              return s(o, '_invoke', { value: S(t, n, a) }), o;
            }
            function d(t, e, n) {
              try {
                return { type: 'normal', arg: t.call(e, n) };
              } catch (t) {
                return { type: 'throw', arg: t };
              }
            }
            e.wrap = f;
            var p = 'suspendedStart',
              g = 'suspendedYield',
              m = 'executing',
              y = 'completed',
              v = {};
            function _() {}
            function w() {}
            function b() {}
            var E = {};
            l(E, c, function () {
              return this;
            });
            var T = Object.getPrototypeOf,
              A = T && T(T(R([])));
            A && A !== n && o.call(A, c) && (E = A);
            var x = (b.prototype = _.prototype = Object.create(E));
            function k(t) {
              ['next', 'throw', 'return'].forEach(function (e) {
                l(t, e, function (t) {
                  return this._invoke(e, t);
                });
              });
            }
            function L(t, e) {
              function n(i, s, a, c) {
                var h = d(t[i], t, s);
                if ('throw' !== h.type) {
                  var u = h.arg,
                    l = u.value;
                  return l && 'object' == r(l) && o.call(l, '__await')
                    ? e.resolve(l.__await).then(
                        function (t) {
                          n('next', t, a, c);
                        },
                        function (t) {
                          n('throw', t, a, c);
                        },
                      )
                    : e.resolve(l).then(
                        function (t) {
                          (u.value = t), a(u);
                        },
                        function (t) {
                          return n('throw', t, a, c);
                        },
                      );
                }
                c(h.arg);
              }
              var i;
              s(this, '_invoke', {
                value: function (t, r) {
                  function o() {
                    return new e(function (e, i) {
                      n(t, r, e, i);
                    });
                  }
                  return (i = i ? i.then(o, o) : o());
                },
              });
            }
            function S(e, n, r) {
              var i = p;
              return function (o, s) {
                if (i === m) throw Error('Generator is already running');
                if (i === y) {
                  if ('throw' === o) throw s;
                  return { value: t, done: !0 };
                }
                for (r.method = o, r.arg = s; ; ) {
                  var a = r.delegate;
                  if (a) {
                    var c = O(a, r);
                    if (c) {
                      if (c === v) continue;
                      return c;
                    }
                  }
                  if ('next' === r.method) r.sent = r._sent = r.arg;
                  else if ('throw' === r.method) {
                    if (i === p) throw ((i = y), r.arg);
                    r.dispatchException(r.arg);
                  } else 'return' === r.method && r.abrupt('return', r.arg);
                  i = m;
                  var h = d(e, n, r);
                  if ('normal' === h.type) {
                    if (((i = r.done ? y : g), h.arg === v)) continue;
                    return { value: h.arg, done: r.done };
                  }
                  'throw' === h.type &&
                    ((i = y), (r.method = 'throw'), (r.arg = h.arg));
                }
              };
            }
            function O(e, n) {
              var r = n.method,
                i = e.iterator[r];
              if (i === t)
                return (
                  (n.delegate = null),
                  ('throw' === r &&
                    e.iterator.return &&
                    ((n.method = 'return'),
                    (n.arg = t),
                    O(e, n),
                    'throw' === n.method)) ||
                    ('return' !== r &&
                      ((n.method = 'throw'),
                      (n.arg = new TypeError(
                        "The iterator does not provide a '" + r + "' method",
                      )))),
                  v
                );
              var o = d(i, e.iterator, n.arg);
              if ('throw' === o.type)
                return (
                  (n.method = 'throw'), (n.arg = o.arg), (n.delegate = null), v
                );
              var s = o.arg;
              return s
                ? s.done
                  ? ((n[e.resultName] = s.value),
                    (n.next = e.nextLoc),
                    'return' !== n.method && ((n.method = 'next'), (n.arg = t)),
                    (n.delegate = null),
                    v)
                  : s
                : ((n.method = 'throw'),
                  (n.arg = new TypeError('iterator result is not an object')),
                  (n.delegate = null),
                  v);
            }
            function F(t) {
              var e = { tryLoc: t[0] };
              1 in t && (e.catchLoc = t[1]),
                2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
                this.tryEntries.push(e);
            }
            function P(t) {
              var e = t.completion || {};
              (e.type = 'normal'), delete e.arg, (t.completion = e);
            }
            function M(t) {
              (this.tryEntries = [{ tryLoc: 'root' }]),
                t.forEach(F, this),
                this.reset(!0);
            }
            function R(e) {
              if (e || '' === e) {
                var n = e[c];
                if (n) return n.call(e);
                if ('function' == typeof e.next) return e;
                if (!isNaN(e.length)) {
                  var i = -1,
                    s = function n() {
                      for (; ++i < e.length; )
                        if (o.call(e, i))
                          return (n.value = e[i]), (n.done = !1), n;
                      return (n.value = t), (n.done = !0), n;
                    };
                  return (s.next = s);
                }
              }
              throw new TypeError(r(e) + ' is not iterable');
            }
            return (
              (w.prototype = b),
              s(x, 'constructor', { value: b, configurable: !0 }),
              s(b, 'constructor', { value: w, configurable: !0 }),
              (w.displayName = l(b, u, 'GeneratorFunction')),
              (e.isGeneratorFunction = function (t) {
                var e = 'function' == typeof t && t.constructor;
                return (
                  !!e &&
                  (e === w || 'GeneratorFunction' === (e.displayName || e.name))
                );
              }),
              (e.mark = function (t) {
                return (
                  Object.setPrototypeOf
                    ? Object.setPrototypeOf(t, b)
                    : ((t.__proto__ = b), l(t, u, 'GeneratorFunction')),
                  (t.prototype = Object.create(x)),
                  t
                );
              }),
              (e.awrap = function (t) {
                return { __await: t };
              }),
              k(L.prototype),
              l(L.prototype, h, function () {
                return this;
              }),
              (e.AsyncIterator = L),
              (e.async = function (t, n, r, i, o) {
                void 0 === o && (o = Promise);
                var s = new L(f(t, n, r, i), o);
                return e.isGeneratorFunction(n)
                  ? s
                  : s.next().then(function (t) {
                      return t.done ? t.value : s.next();
                    });
              }),
              k(x),
              l(x, u, 'Generator'),
              l(x, c, function () {
                return this;
              }),
              l(x, 'toString', function () {
                return '[object Generator]';
              }),
              (e.keys = function (t) {
                var e = Object(t),
                  n = [];
                for (var r in e) n.push(r);
                return (
                  n.reverse(),
                  function t() {
                    for (; n.length; ) {
                      var r = n.pop();
                      if (r in e) return (t.value = r), (t.done = !1), t;
                    }
                    return (t.done = !0), t;
                  }
                );
              }),
              (e.values = R),
              (M.prototype = {
                constructor: M,
                reset: function (e) {
                  if (
                    ((this.prev = 0),
                    (this.next = 0),
                    (this.sent = this._sent = t),
                    (this.done = !1),
                    (this.delegate = null),
                    (this.method = 'next'),
                    (this.arg = t),
                    this.tryEntries.forEach(P),
                    !e)
                  )
                    for (var n in this)
                      't' === n.charAt(0) &&
                        o.call(this, n) &&
                        !isNaN(+n.slice(1)) &&
                        (this[n] = t);
                },
                stop: function () {
                  this.done = !0;
                  var t = this.tryEntries[0].completion;
                  if ('throw' === t.type) throw t.arg;
                  return this.rval;
                },
                dispatchException: function (e) {
                  if (this.done) throw e;
                  var n = this;
                  function r(r, i) {
                    return (
                      (a.type = 'throw'),
                      (a.arg = e),
                      (n.next = r),
                      i && ((n.method = 'next'), (n.arg = t)),
                      !!i
                    );
                  }
                  for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                    var s = this.tryEntries[i],
                      a = s.completion;
                    if ('root' === s.tryLoc) return r('end');
                    if (s.tryLoc <= this.prev) {
                      var c = o.call(s, 'catchLoc'),
                        h = o.call(s, 'finallyLoc');
                      if (c && h) {
                        if (this.prev < s.catchLoc) return r(s.catchLoc, !0);
                        if (this.prev < s.finallyLoc) return r(s.finallyLoc);
                      } else if (c) {
                        if (this.prev < s.catchLoc) return r(s.catchLoc, !0);
                      } else {
                        if (!h)
                          throw Error('try statement without catch or finally');
                        if (this.prev < s.finallyLoc) return r(s.finallyLoc);
                      }
                    }
                  }
                },
                abrupt: function (t, e) {
                  for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var r = this.tryEntries[n];
                    if (
                      r.tryLoc <= this.prev &&
                      o.call(r, 'finallyLoc') &&
                      this.prev < r.finallyLoc
                    ) {
                      var i = r;
                      break;
                    }
                  }
                  i &&
                    ('break' === t || 'continue' === t) &&
                    i.tryLoc <= e &&
                    e <= i.finallyLoc &&
                    (i = null);
                  var s = i ? i.completion : {};
                  return (
                    (s.type = t),
                    (s.arg = e),
                    i
                      ? ((this.method = 'next'), (this.next = i.finallyLoc), v)
                      : this.complete(s)
                  );
                },
                complete: function (t, e) {
                  if ('throw' === t.type) throw t.arg;
                  return (
                    'break' === t.type || 'continue' === t.type
                      ? (this.next = t.arg)
                      : 'return' === t.type
                      ? ((this.rval = this.arg = t.arg),
                        (this.method = 'return'),
                        (this.next = 'end'))
                      : 'normal' === t.type && e && (this.next = e),
                    v
                  );
                },
                finish: function (t) {
                  for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var n = this.tryEntries[e];
                    if (n.finallyLoc === t)
                      return this.complete(n.completion, n.afterLoc), P(n), v;
                  }
                },
                catch: function (t) {
                  for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var n = this.tryEntries[e];
                    if (n.tryLoc === t) {
                      var r = n.completion;
                      if ('throw' === r.type) {
                        var i = r.arg;
                        P(n);
                      }
                      return i;
                    }
                  }
                  throw Error('illegal catch attempt');
                },
                delegateYield: function (e, n, r) {
                  return (
                    (this.delegate = {
                      iterator: R(e),
                      resultName: n,
                      nextLoc: r,
                    }),
                    'next' === this.method && (this.arg = t),
                    v
                  );
                },
              }),
              e
            );
          }
          function o(t, e, n, r, i, o, s) {
            try {
              var a = t[o](s),
                c = a.value;
            } catch (t) {
              return void n(t);
            }
            a.done ? e(c) : Promise.resolve(c).then(r, i);
          }
          function s(t) {
            return function () {
              var e = this,
                n = arguments;
              return new Promise(function (r, i) {
                var s = t.apply(e, n);
                function a(t) {
                  o(s, r, i, a, c, 'next', t);
                }
                function c(t) {
                  o(s, r, i, a, c, 'throw', t);
                }
                a(void 0);
              });
            };
          }
          n.r(e),
            n.d(e, {
              actions: () => m,
              initializefaceDetector: () => v,
              livenessTest: () => y,
              pitch: () => w,
              startLivenessDetection: () => u,
              yaw: () => b,
            });
          var a = n(848),
            c = a.FaceDetector,
            h = a.FilesetResolver;
          function u(t) {
            return l.apply(this, arguments);
          }
          function l() {
            return (l = s(
              i().mark(function t(e) {
                var n, r, o, a;
                return i().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (n = 0), (r = 3), (t.next = 4), p(3e3);
                      case 4:
                        (o = e.camera),
                          (a = g(o)),
                          s(
                            i().mark(function t() {
                              var o;
                              return i().wrap(function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      if (!(n < r)) {
                                        t.next = 11;
                                        break;
                                      }
                                      return n++, (t.next = 4), f(e);
                                    case 4:
                                      if (
                                        (((o = t.sent).attempt = n),
                                        (o.face = a),
                                        !o.isAlive)
                                      ) {
                                        t.next = 9;
                                        break;
                                      }
                                      return t.abrupt('break', 11);
                                    case 9:
                                      t.next = 0;
                                      break;
                                    case 11:
                                      e.finishCallback(o);
                                    case 12:
                                    case 'end':
                                      return t.stop();
                                  }
                              }, t);
                            }),
                          )();
                      case 7:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              }),
            )).apply(this, arguments);
          }
          function f(t) {
            return d.apply(this, arguments);
          }
          function d() {
            return (d = s(
              i().mark(function t(e) {
                var n, r, o, s, a, c, h, u, l, f, d, m, y, v, _, w, b, E;
                return i().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (y = function (t) {
                              d = t;
                            }),
                            (m = function () {
                              l = 0;
                            }),
                            (n = e.getSequence),
                            (r = e.postLiveness),
                            (o = e.faceTracing),
                            (s = e.sequenceCallback),
                            (a = e.camera),
                            (t.next = 5),
                            n()
                          );
                        case 5:
                          (c = t.sent),
                            (h = c.request_id),
                            (u = c.next_choice),
                            o(u),
                            (l = 0),
                            (f = 10),
                            (d = !1);
                        case 12:
                          if (!(l < f)) {
                            t.next = 45;
                            break;
                          }
                          return (
                            (v = g(a)),
                            (t.prev = 14),
                            (t.next = 17),
                            r({ image: v, request_id: h })
                          );
                        case 17:
                          if (
                            ((_ = t.sent),
                            (w = _.result),
                            (b = _.status),
                            (E = _.next_choice),
                            'completed' !== b)
                          ) {
                            t.next = 24;
                            break;
                          }
                          return y(!0), t.abrupt('break', 45);
                        case 24:
                          if ('uncompleted' !== b) {
                            t.next = 27;
                            break;
                          }
                          return y(!1), t.abrupt('break', 45);
                        case 27:
                          if ('Yes' !== w || 'processing' !== b) {
                            t.next = 33;
                            break;
                          }
                          return (
                            m(),
                            s({ result: w, status: b }),
                            o(E),
                            (t.next = 33),
                            p(5e3)
                          );
                        case 33:
                          if ('No' !== w || 'processing' !== b) {
                            t.next = 37;
                            break;
                          }
                          return o(E), (t.next = 37), p(1500);
                        case 37:
                          t.next = 42;
                          break;
                        case 39:
                          throw ((t.prev = 39), (t.t0 = t.catch(14)), t.t0);
                        case 42:
                          l++, (t.next = 12);
                          break;
                        case 45:
                          return t.abrupt('return', { isAlive: d });
                        case 46:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[14, 39]],
                );
              }),
            )).apply(this, arguments);
          }
          function p(t) {
            return new Promise(function (e) {
              return setTimeout(e, t);
            });
          }
          function g(t) {
            var e = document.createElement('canvas');
            return (
              (e.width = width),
              (e.height = height),
              e.getContext('2d').drawImage(t, 0, 0, e.width, e.height),
              e.toDataURL('image/jpeg').replace(/^data:image\/jpeg;base64,/, '')
            );
          }
          var m = {
            Turn_left: { text: 'หันหน้าด้านซ้าย', emo: '🧑' },
            Turn_right: { text: 'หันหน้าด้านขวา', emo: '🧑' },
            Look_up: { text: 'หันหน้าขึ้นด้านบน', emo: '🧑' },
            Look_down: { text: 'หันหน้าลงด้านล่าง', emo: '🧑' },
            Open_mouth: { text: 'กรุณาอ้าปาก', emo: '👄' },
            Smile: { text: 'แสดงใบหน้ายิ้ม', emo: '😃' },
            Like_right_hand: { text: 'ยกนิ้วให้ด้วยมือขวา', emo: '👍' },
            Like_left_hand: { text: 'ยกนิ้วให้ด้วยมือซ้าย', emo: '👍' },
            I_love_you_right_hand: {
              text: 'แสดงว่าฉันรักคุณด้วยมือขวา',
              emo: '🤟',
            },
            I_love_you_left_hand: {
              text: 'แสดงว่าฉันรักคุณด้วยมือซ้าย',
              emo: '🤟',
            },
            Ok_right_hand: { text: 'แสดงเครื่องหมายโอเคด้วยมือขวา', emo: '👌' },
            Ok_left_hand: { text: 'แสดงเครื่องหมายโอเคด้วยมือขวา', emo: '👌' },
            Handful_right_hand: { text: 'แสดงกำปั้นขวา', emo: '✊' },
            Handful_left_hand: { text: 'แสดงกำปั้นซ้าย', emo: '✊' },
            One_right_hand: { text: 'แสดงหนึ่งนิ้วด้วยมือขวา', emo: '☝️' },
            One_left_hand: { text: 'แสดงหนึ่งนิ้วด้วยมือซ้าย', emo: '☝️' },
            Two_right_hand: { text: 'แสดงสองนิ้วด้วยมือขวา', emo: '✌️' },
            Two_left_hand: { text: 'แสดงสองนิ้วด้วยมือซ้าย', emo: '✌️' },
            Three_right_hand: { text: 'แสดงสามนิ้วด้วยมือขวา', emo: '✋' },
            Three_left_hand: { text: 'แสดงสามนิ้วด้วยมือซ้าย', emo: '✋' },
            Four_right_hand: { text: 'แสดงสี่นิ้วด้วยมือขวา', emo: '✋' },
            Four_left_hand: { text: 'แสดงสี่นิ้วด้วยมือซ้าย', emo: '✋' },
            Forehand_right_hand: { text: 'แสดงด้านหน้าของมือขวา', emo: '✋' },
            Forehand_left_hand: { text: 'แสดงด้านหน้าของมือซ้าย', emo: '✋' },
            Backhand_right_hand: { text: 'แสดงหลังมือขวา', emo: '🤚' },
            Backhand_left_hand: { text: 'แสดงหลังมือซ้าย', emo: '🤚' },
            Victory_right_hand: {
              text: 'แสดงสัญลักษณ์สองนิ้วด้วยมือขวา',
              emo: '✌️',
            },
            Victory_left_hand: {
              text: 'แสดงสัญลักษณ์สองนิ้วด้วยมือซ้าย',
              emo: '✌️',
            },
            Right_hand: { text: 'ยกมือขวา', emo: '🤚' },
            Left_hand: { text: 'ยกมือซ้าย', emo: '🤚' },
          };
          function y() {
            return 'liveness test';
          }
          function v() {
            return _.apply(this, arguments);
          }
          function _() {
            return (_ = s(
              i().mark(function t() {
                var e, n;
                return i().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.next = 2),
                          h.forVisionTasks(
                            'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm',
                          )
                        );
                      case 2:
                        return (
                          (e = t.sent),
                          (t.next = 5),
                          c.createFromOptions(e, {
                            baseOptions: {
                              modelAssetPath:
                                'https://storage.googleapis.com/mediapipe-models/face_detector/blaze_face_short_range/float16/1/blaze_face_short_range.tflite',
                              delegate: 'GPU',
                            },
                            runningMode: 'VIDEO',
                            minDetectionConfidence: 0.9,
                          })
                        );
                      case 5:
                        return (n = t.sent), t.abrupt('return', n);
                      case 7:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              }),
            )).apply(this, arguments);
          }
          function w(t, e, n) {
            t.x, e.x;
            var r = (t.y + e.y) / 2 - n.y - (e.x - t.x) / 10,
              i = Math.abs((t.x - e.x) / 2);
            return Math.atan2(r, i) * (180 / Math.PI);
          }
          function b(t, e, n) {
            var r = (t.x + e.x) / 2,
              i = (t.y, e.y, r - n.x),
              o = Math.abs((t.x - e.x) / 2);
            return Math.atan2(i, o) * (180 / Math.PI);
          }
        },
        497: (t, e, n) => {
          var r = n(392),
            i = n(375);
          t.exports = function () {
            (this.FR = r),
              (this.ObjectDetection = i),
              (this.add = function (t, e) {
                return t + e;
              }),
              (this.sub = function (t, e) {
                return t - e;
              });
          };
        },
        375: (t, e, n) => {
          'use strict';
          function r(t) {
            return (
              (r =
                'function' == typeof Symbol &&
                'symbol' == typeof Symbol.iterator
                  ? function (t) {
                      return typeof t;
                    }
                  : function (t) {
                      return t &&
                        'function' == typeof Symbol &&
                        t.constructor === Symbol &&
                        t !== Symbol.prototype
                        ? 'symbol'
                        : typeof t;
                    }),
              r(t)
            );
          }
          function i() {
            i = function () {
              return e;
            };
            var t,
              e = {},
              n = Object.prototype,
              o = n.hasOwnProperty,
              s =
                Object.defineProperty ||
                function (t, e, n) {
                  t[e] = n.value;
                },
              a = 'function' == typeof Symbol ? Symbol : {},
              c = a.iterator || '@@iterator',
              h = a.asyncIterator || '@@asyncIterator',
              u = a.toStringTag || '@@toStringTag';
            function l(t, e, n) {
              return (
                Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                }),
                t[e]
              );
            }
            try {
              l({}, '');
            } catch (t) {
              l = function (t, e, n) {
                return (t[e] = n);
              };
            }
            function f(t, e, n, r) {
              var i = e && e.prototype instanceof _ ? e : _,
                o = Object.create(i.prototype),
                a = new M(r || []);
              return s(o, '_invoke', { value: S(t, n, a) }), o;
            }
            function d(t, e, n) {
              try {
                return { type: 'normal', arg: t.call(e, n) };
              } catch (t) {
                return { type: 'throw', arg: t };
              }
            }
            e.wrap = f;
            var p = 'suspendedStart',
              g = 'suspendedYield',
              m = 'executing',
              y = 'completed',
              v = {};
            function _() {}
            function w() {}
            function b() {}
            var E = {};
            l(E, c, function () {
              return this;
            });
            var T = Object.getPrototypeOf,
              A = T && T(T(R([])));
            A && A !== n && o.call(A, c) && (E = A);
            var x = (b.prototype = _.prototype = Object.create(E));
            function k(t) {
              ['next', 'throw', 'return'].forEach(function (e) {
                l(t, e, function (t) {
                  return this._invoke(e, t);
                });
              });
            }
            function L(t, e) {
              function n(i, s, a, c) {
                var h = d(t[i], t, s);
                if ('throw' !== h.type) {
                  var u = h.arg,
                    l = u.value;
                  return l && 'object' == r(l) && o.call(l, '__await')
                    ? e.resolve(l.__await).then(
                        function (t) {
                          n('next', t, a, c);
                        },
                        function (t) {
                          n('throw', t, a, c);
                        },
                      )
                    : e.resolve(l).then(
                        function (t) {
                          (u.value = t), a(u);
                        },
                        function (t) {
                          return n('throw', t, a, c);
                        },
                      );
                }
                c(h.arg);
              }
              var i;
              s(this, '_invoke', {
                value: function (t, r) {
                  function o() {
                    return new e(function (e, i) {
                      n(t, r, e, i);
                    });
                  }
                  return (i = i ? i.then(o, o) : o());
                },
              });
            }
            function S(e, n, r) {
              var i = p;
              return function (o, s) {
                if (i === m) throw Error('Generator is already running');
                if (i === y) {
                  if ('throw' === o) throw s;
                  return { value: t, done: !0 };
                }
                for (r.method = o, r.arg = s; ; ) {
                  var a = r.delegate;
                  if (a) {
                    var c = O(a, r);
                    if (c) {
                      if (c === v) continue;
                      return c;
                    }
                  }
                  if ('next' === r.method) r.sent = r._sent = r.arg;
                  else if ('throw' === r.method) {
                    if (i === p) throw ((i = y), r.arg);
                    r.dispatchException(r.arg);
                  } else 'return' === r.method && r.abrupt('return', r.arg);
                  i = m;
                  var h = d(e, n, r);
                  if ('normal' === h.type) {
                    if (((i = r.done ? y : g), h.arg === v)) continue;
                    return { value: h.arg, done: r.done };
                  }
                  'throw' === h.type &&
                    ((i = y), (r.method = 'throw'), (r.arg = h.arg));
                }
              };
            }
            function O(e, n) {
              var r = n.method,
                i = e.iterator[r];
              if (i === t)
                return (
                  (n.delegate = null),
                  ('throw' === r &&
                    e.iterator.return &&
                    ((n.method = 'return'),
                    (n.arg = t),
                    O(e, n),
                    'throw' === n.method)) ||
                    ('return' !== r &&
                      ((n.method = 'throw'),
                      (n.arg = new TypeError(
                        "The iterator does not provide a '" + r + "' method",
                      )))),
                  v
                );
              var o = d(i, e.iterator, n.arg);
              if ('throw' === o.type)
                return (
                  (n.method = 'throw'), (n.arg = o.arg), (n.delegate = null), v
                );
              var s = o.arg;
              return s
                ? s.done
                  ? ((n[e.resultName] = s.value),
                    (n.next = e.nextLoc),
                    'return' !== n.method && ((n.method = 'next'), (n.arg = t)),
                    (n.delegate = null),
                    v)
                  : s
                : ((n.method = 'throw'),
                  (n.arg = new TypeError('iterator result is not an object')),
                  (n.delegate = null),
                  v);
            }
            function F(t) {
              var e = { tryLoc: t[0] };
              1 in t && (e.catchLoc = t[1]),
                2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
                this.tryEntries.push(e);
            }
            function P(t) {
              var e = t.completion || {};
              (e.type = 'normal'), delete e.arg, (t.completion = e);
            }
            function M(t) {
              (this.tryEntries = [{ tryLoc: 'root' }]),
                t.forEach(F, this),
                this.reset(!0);
            }
            function R(e) {
              if (e || '' === e) {
                var n = e[c];
                if (n) return n.call(e);
                if ('function' == typeof e.next) return e;
                if (!isNaN(e.length)) {
                  var i = -1,
                    s = function n() {
                      for (; ++i < e.length; )
                        if (o.call(e, i))
                          return (n.value = e[i]), (n.done = !1), n;
                      return (n.value = t), (n.done = !0), n;
                    };
                  return (s.next = s);
                }
              }
              throw new TypeError(r(e) + ' is not iterable');
            }
            return (
              (w.prototype = b),
              s(x, 'constructor', { value: b, configurable: !0 }),
              s(b, 'constructor', { value: w, configurable: !0 }),
              (w.displayName = l(b, u, 'GeneratorFunction')),
              (e.isGeneratorFunction = function (t) {
                var e = 'function' == typeof t && t.constructor;
                return (
                  !!e &&
                  (e === w || 'GeneratorFunction' === (e.displayName || e.name))
                );
              }),
              (e.mark = function (t) {
                return (
                  Object.setPrototypeOf
                    ? Object.setPrototypeOf(t, b)
                    : ((t.__proto__ = b), l(t, u, 'GeneratorFunction')),
                  (t.prototype = Object.create(x)),
                  t
                );
              }),
              (e.awrap = function (t) {
                return { __await: t };
              }),
              k(L.prototype),
              l(L.prototype, h, function () {
                return this;
              }),
              (e.AsyncIterator = L),
              (e.async = function (t, n, r, i, o) {
                void 0 === o && (o = Promise);
                var s = new L(f(t, n, r, i), o);
                return e.isGeneratorFunction(n)
                  ? s
                  : s.next().then(function (t) {
                      return t.done ? t.value : s.next();
                    });
              }),
              k(x),
              l(x, u, 'Generator'),
              l(x, c, function () {
                return this;
              }),
              l(x, 'toString', function () {
                return '[object Generator]';
              }),
              (e.keys = function (t) {
                var e = Object(t),
                  n = [];
                for (var r in e) n.push(r);
                return (
                  n.reverse(),
                  function t() {
                    for (; n.length; ) {
                      var r = n.pop();
                      if (r in e) return (t.value = r), (t.done = !1), t;
                    }
                    return (t.done = !0), t;
                  }
                );
              }),
              (e.values = R),
              (M.prototype = {
                constructor: M,
                reset: function (e) {
                  if (
                    ((this.prev = 0),
                    (this.next = 0),
                    (this.sent = this._sent = t),
                    (this.done = !1),
                    (this.delegate = null),
                    (this.method = 'next'),
                    (this.arg = t),
                    this.tryEntries.forEach(P),
                    !e)
                  )
                    for (var n in this)
                      't' === n.charAt(0) &&
                        o.call(this, n) &&
                        !isNaN(+n.slice(1)) &&
                        (this[n] = t);
                },
                stop: function () {
                  this.done = !0;
                  var t = this.tryEntries[0].completion;
                  if ('throw' === t.type) throw t.arg;
                  return this.rval;
                },
                dispatchException: function (e) {
                  if (this.done) throw e;
                  var n = this;
                  function r(r, i) {
                    return (
                      (a.type = 'throw'),
                      (a.arg = e),
                      (n.next = r),
                      i && ((n.method = 'next'), (n.arg = t)),
                      !!i
                    );
                  }
                  for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                    var s = this.tryEntries[i],
                      a = s.completion;
                    if ('root' === s.tryLoc) return r('end');
                    if (s.tryLoc <= this.prev) {
                      var c = o.call(s, 'catchLoc'),
                        h = o.call(s, 'finallyLoc');
                      if (c && h) {
                        if (this.prev < s.catchLoc) return r(s.catchLoc, !0);
                        if (this.prev < s.finallyLoc) return r(s.finallyLoc);
                      } else if (c) {
                        if (this.prev < s.catchLoc) return r(s.catchLoc, !0);
                      } else {
                        if (!h)
                          throw Error('try statement without catch or finally');
                        if (this.prev < s.finallyLoc) return r(s.finallyLoc);
                      }
                    }
                  }
                },
                abrupt: function (t, e) {
                  for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var r = this.tryEntries[n];
                    if (
                      r.tryLoc <= this.prev &&
                      o.call(r, 'finallyLoc') &&
                      this.prev < r.finallyLoc
                    ) {
                      var i = r;
                      break;
                    }
                  }
                  i &&
                    ('break' === t || 'continue' === t) &&
                    i.tryLoc <= e &&
                    e <= i.finallyLoc &&
                    (i = null);
                  var s = i ? i.completion : {};
                  return (
                    (s.type = t),
                    (s.arg = e),
                    i
                      ? ((this.method = 'next'), (this.next = i.finallyLoc), v)
                      : this.complete(s)
                  );
                },
                complete: function (t, e) {
                  if ('throw' === t.type) throw t.arg;
                  return (
                    'break' === t.type || 'continue' === t.type
                      ? (this.next = t.arg)
                      : 'return' === t.type
                      ? ((this.rval = this.arg = t.arg),
                        (this.method = 'return'),
                        (this.next = 'end'))
                      : 'normal' === t.type && e && (this.next = e),
                    v
                  );
                },
                finish: function (t) {
                  for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var n = this.tryEntries[e];
                    if (n.finallyLoc === t)
                      return this.complete(n.completion, n.afterLoc), P(n), v;
                  }
                },
                catch: function (t) {
                  for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var n = this.tryEntries[e];
                    if (n.tryLoc === t) {
                      var r = n.completion;
                      if ('throw' === r.type) {
                        var i = r.arg;
                        P(n);
                      }
                      return i;
                    }
                  }
                  throw Error('illegal catch attempt');
                },
                delegateYield: function (e, n, r) {
                  return (
                    (this.delegate = {
                      iterator: R(e),
                      resultName: n,
                      nextLoc: r,
                    }),
                    'next' === this.method && (this.arg = t),
                    v
                  );
                },
              }),
              e
            );
          }
          function o(t, e, n, r, i, o, s) {
            try {
              var a = t[o](s),
                c = a.value;
            } catch (t) {
              return void n(t);
            }
            a.done ? e(c) : Promise.resolve(c).then(r, i);
          }
          n.r(e), n.d(e, { initializeObjectDetector: () => l });
          var s = n(848),
            a = s.FilesetResolver,
            c = s.ObjectDetector,
            h =
              'https://aigen-sysdev-solution.s3.ap-southeast-1.amazonaws.com/model/wasm',
            u =
              'https://aigen-sysdev-solution.s3.ap-southeast-1.amazonaws.com/model/int_qat_idcardfilp.tflite';
          function l() {
            return f.apply(this, arguments);
          }
          function f() {
            var t;
            return (
              (t = i().mark(function t() {
                var e;
                return i().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), a.forVisionTasks(h);
                      case 2:
                        return (
                          (e = t.sent),
                          (t.next = 5),
                          c.createFromOptions(e, {
                            baseOptions: { modelAssetPath: u },
                            scoreThreshold: 0.5,
                            runningMode: 'VIDEO',
                          })
                        );
                      case 5:
                        return t.abrupt('return', t.sent);
                      case 6:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              })),
              (f = function () {
                var e = this,
                  n = arguments;
                return new Promise(function (r, i) {
                  var s = t.apply(e, n);
                  function a(t) {
                    o(s, r, i, a, c, 'next', t);
                  }
                  function c(t) {
                    o(s, r, i, a, c, 'throw', t);
                  }
                  a(void 0);
                });
              }),
              f.apply(this, arguments)
            );
          }
        },
        848: (t, e) => {
          'use strict';
          Object.defineProperty(e, '__esModule', { value: !0 });
          var n = 'undefined' != typeof self ? self : {};
          function r(t) {
            t: {
              for (var e = ['CLOSURE_FLAGS'], r = n, i = 0; i < e.length; i++)
                if (null == (r = r[e[i]])) {
                  e = null;
                  break t;
                }
              e = r;
            }
            return null != (t = e && e[t]) && t;
          }
          function i() {
            throw Error('Invalid UTF8');
          }
          function o(t, e) {
            return (
              (e = String.fromCharCode.apply(null, e)), null == t ? e : t + e
            );
          }
          let s, a;
          const c = 'undefined' != typeof TextDecoder;
          let h;
          const u = 'undefined' != typeof TextEncoder;
          function l(t) {
            if (u) t = (h ||= new TextEncoder()).encode(t);
            else {
              let n = 0;
              const r = new Uint8Array(3 * t.length);
              for (let i = 0; i < t.length; i++) {
                var e = t.charCodeAt(i);
                if (128 > e) r[n++] = e;
                else {
                  if (2048 > e) r[n++] = (e >> 6) | 192;
                  else {
                    if (55296 <= e && 57343 >= e) {
                      if (56319 >= e && i < t.length) {
                        const o = t.charCodeAt(++i);
                        if (56320 <= o && 57343 >= o) {
                          (e = 1024 * (e - 55296) + o - 56320 + 65536),
                            (r[n++] = (e >> 18) | 240),
                            (r[n++] = ((e >> 12) & 63) | 128),
                            (r[n++] = ((e >> 6) & 63) | 128),
                            (r[n++] = (63 & e) | 128);
                          continue;
                        }
                        i--;
                      }
                      e = 65533;
                    }
                    (r[n++] = (e >> 12) | 224),
                      (r[n++] = ((e >> 6) & 63) | 128);
                  }
                  r[n++] = (63 & e) | 128;
                }
              }
              t = n === r.length ? r : r.subarray(0, n);
            }
            return t;
          }
          var f,
            d = r(610401301),
            p = r(188588736);
          const g = n.navigator;
          function m(t) {
            return (
              !!d &&
              !!f &&
              f.brands.some(({ brand: e }) => e && -1 != e.indexOf(t))
            );
          }
          function y(t) {
            var e;
            return (
              ((e = n.navigator) && (e = e.userAgent)) || (e = ''),
              -1 != e.indexOf(t)
            );
          }
          function v() {
            return !!d && !!f && 0 < f.brands.length;
          }
          function _() {
            return v()
              ? m('Chromium')
              : ((y('Chrome') || y('CriOS')) && !(!v() && y('Edge'))) ||
                  y('Silk');
          }
          function w(t) {
            return w[' '](t), t;
          }
          (f = (g && g.userAgentData) || null), (w[' '] = function () {});
          var b = !v() && (y('Trident') || y('MSIE'));
          !y('Android') || _(),
            _(),
            y('Safari') &&
              (_() ||
                (!v() && y('Coast')) ||
                (!v() && y('Opera')) ||
                (!v() && y('Edge')) ||
                (v() ? m('Microsoft Edge') : y('Edg/')) ||
                (v() && m('Opera')));
          var E = {},
            T = null;
          function A() {
            if (!T) {
              T = {};
              for (
                var t =
                    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split(
                      '',
                    ),
                  e = ['+/=', '+/', '-_=', '-_.', '-_'],
                  n = 0;
                5 > n;
                n++
              ) {
                var r = t.concat(e[n].split(''));
                E[n] = r;
                for (var i = 0; i < r.length; i++) {
                  var o = r[i];
                  void 0 === T[o] && (T[o] = i);
                }
              }
            }
          }
          var x = 'undefined' != typeof Uint8Array,
            k = !b && 'function' == typeof btoa;
          function L(t) {
            if (!k) {
              var e;
              void 0 === e && (e = 0), A(), (e = E[e]);
              var n = Array(Math.floor(t.length / 3)),
                r = e[64] || '';
              let c = 0,
                h = 0;
              for (; c < t.length - 2; c += 3) {
                var i = t[c],
                  o = t[c + 1],
                  s = t[c + 2],
                  a = e[i >> 2];
                (i = e[((3 & i) << 4) | (o >> 4)]),
                  (o = e[((15 & o) << 2) | (s >> 6)]),
                  (s = e[63 & s]),
                  (n[h++] = a + i + o + s);
              }
              switch (((a = 0), (s = r), t.length - c)) {
                case 2:
                  s = e[(15 & (a = t[c + 1])) << 2] || r;
                case 1:
                  (t = t[c]),
                    (n[h] = e[t >> 2] + e[((3 & t) << 4) | (a >> 4)] + s + r);
              }
              return n.join('');
            }
            for (e = '', n = 0, r = t.length - 10240; n < r; )
              e += String.fromCharCode.apply(null, t.subarray(n, (n += 10240)));
            return (
              (e += String.fromCharCode.apply(null, n ? t.subarray(n) : t)),
              btoa(e)
            );
          }
          const S = /[-_.]/g,
            O = { '-': '+', _: '/', '.': '=' };
          function F(t) {
            return O[t] || '';
          }
          function P(t) {
            if (!k)
              return (function (t) {
                var e = t.length,
                  n = (3 * e) / 4;
                n % 3
                  ? (n = Math.floor(n))
                  : -1 != '=.'.indexOf(t[e - 1]) &&
                    (n = -1 != '=.'.indexOf(t[e - 2]) ? n - 2 : n - 1);
                var r = new Uint8Array(n),
                  i = 0;
                return (
                  (function (t, e) {
                    function n(e) {
                      for (; r < t.length; ) {
                        var n = t.charAt(r++),
                          i = T[n];
                        if (null != i) return i;
                        if (!/^[\s\xa0]*$/.test(n))
                          throw Error('Unknown base64 encoding at char: ' + n);
                      }
                      return e;
                    }
                    A();
                    for (var r = 0; ; ) {
                      var i = n(-1),
                        o = n(0),
                        s = n(64),
                        a = n(64);
                      if (64 === a && -1 === i) break;
                      e((i << 2) | (o >> 4)),
                        64 != s &&
                          (e(((o << 4) & 240) | (s >> 2)),
                          64 != a && e(((s << 6) & 192) | a));
                    }
                  })(t, function (t) {
                    r[i++] = t;
                  }),
                  i !== n ? r.subarray(0, i) : r
                );
              })(t);
            S.test(t) && (t = t.replace(S, F)), (t = atob(t));
            const e = new Uint8Array(t.length);
            for (let n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);
            return e;
          }
          function M(t) {
            return x && null != t && t instanceof Uint8Array;
          }
          let R;
          function I() {
            return (R ||= new Uint8Array(0));
          }
          var C = {};
          let D;
          function U(t) {
            if (t !== C) throw Error('illegal external caller');
          }
          function N() {
            return (D ||= new G(null, C));
          }
          function B(t) {
            U(C);
            var e = t.g;
            return null ==
              (e = null == e || M(e) ? e : 'string' == typeof e ? P(e) : null)
              ? e
              : (t.g = e);
          }
          var G = class {
            constructor(t, e) {
              if ((U(e), (this.g = t), null != t && 0 === t.length))
                throw Error(
                  'ByteString should be constructed with non-empty values',
                );
            }
            h() {
              const t = B(this);
              return t ? new Uint8Array(t) : I();
            }
          };
          function j(t, e) {
            return Error(`Invalid wire type: ${t} (at position ${e})`);
          }
          function V() {
            return Error('Failed to read varint, encoding is invalid.');
          }
          function H(t, e) {
            return Error(`Tried to read past the end of the data ${e} > ${t}`);
          }
          function X(t) {
            if ('string' == typeof t) return { buffer: P(t), P: !1 };
            if (Array.isArray(t)) return { buffer: new Uint8Array(t), P: !1 };
            if (t.constructor === Uint8Array) return { buffer: t, P: !1 };
            if (t.constructor === ArrayBuffer)
              return { buffer: new Uint8Array(t), P: !1 };
            if (t.constructor === G) return { buffer: B(t) || I(), P: !0 };
            if (t instanceof Uint8Array)
              return {
                buffer: new Uint8Array(t.buffer, t.byteOffset, t.byteLength),
                P: !1,
              };
            throw Error(
              'Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers',
            );
          }
          function z() {
            return 'function' == typeof BigInt;
          }
          const W = 'function' == typeof Uint8Array.prototype.slice;
          let K,
            Y = 0,
            q = 0;
          function $(t) {
            const e = 0 > t;
            let n = (t = Math.abs(t)) >>> 0;
            if (((t = Math.floor((t - n) / 4294967296)), e)) {
              const [e, r] = it(n, t);
              (t = r), (n = e);
            }
            (Y = n >>> 0), (q = t >>> 0);
          }
          function J(t) {
            const e = (K ||= new DataView(new ArrayBuffer(8)));
            e.setFloat32(0, +t, !0), (q = 0), (Y = e.getUint32(0, !0));
          }
          function Z(t, e) {
            return 4294967296 * e + (t >>> 0);
          }
          function Q(t, e) {
            const n = 2147483648 & e;
            return (
              n &&
                ((e = ~e >>> 0),
                0 == (t = (1 + ~t) >>> 0) && (e = (e + 1) >>> 0)),
              (t = Z(t, e)),
              n ? -t : t
            );
          }
          function tt(t, e) {
            if (((t >>>= 0), 2097151 >= (e >>>= 0)))
              var n = '' + (4294967296 * e + t);
            else
              z()
                ? (n = '' + ((BigInt(e) << BigInt(32)) | BigInt(t)))
                : ((t =
                    (16777215 & t) +
                    6777216 * (n = 16777215 & ((t >>> 24) | (e << 8))) +
                    6710656 * (e = (e >> 16) & 65535)),
                  (n += 8147497 * e),
                  (e *= 2),
                  1e7 <= t && ((n += Math.floor(t / 1e7)), (t %= 1e7)),
                  1e7 <= n && ((e += Math.floor(n / 1e7)), (n %= 1e7)),
                  (n = e + et(n) + et(t)));
            return n;
          }
          function et(t) {
            return (t = String(t)), '0000000'.slice(t.length) + t;
          }
          function nt() {
            var t = Y,
              e = q;
            if (2147483648 & e)
              if (z())
                t = '' + ((BigInt(0 | e) << BigInt(32)) | BigInt(t >>> 0));
              else {
                const [n, r] = it(t, e);
                t = '-' + tt(n, r);
              }
            else t = tt(t, e);
            return t;
          }
          function rt(t) {
            if (16 > t.length) $(Number(t));
            else if (z())
              (t = BigInt(t)),
                (Y = Number(t & BigInt(4294967295)) >>> 0),
                (q = Number((t >> BigInt(32)) & BigInt(4294967295)));
            else {
              const e = +('-' === t[0]);
              q = Y = 0;
              const n = t.length;
              for (let r = e, i = ((n - e) % 6) + e; i <= n; r = i, i += 6) {
                const e = Number(t.slice(r, i));
                (q *= 1e6),
                  (Y = 1e6 * Y + e),
                  4294967296 <= Y &&
                    ((q += Math.trunc(Y / 4294967296)), (q >>>= 0), (Y >>>= 0));
              }
              if (e) {
                const [t, e] = it(Y, q);
                (Y = t), (q = e);
              }
            }
          }
          function it(t, e) {
            return (e = ~e), t ? (t = 1 + ~t) : (e += 1), [t, e];
          }
          function ot(t, e) {
            let n,
              r = 0,
              i = 0,
              o = 0;
            const s = t.h;
            let a = t.g;
            do {
              (n = s[a++]), (r |= (127 & n) << o), (o += 7);
            } while (32 > o && 128 & n);
            for (
              32 < o && (i |= (127 & n) >> 4), o = 3;
              32 > o && 128 & n;
              o += 7
            )
              (n = s[a++]), (i |= (127 & n) << o);
            if ((dt(t, a), 128 > n)) return e(r >>> 0, i >>> 0);
            throw V();
          }
          function st(t) {
            let e = 0,
              n = t.g;
            const r = n + 10,
              i = t.h;
            for (; n < r; ) {
              const r = i[n++];
              if (((e |= r), !(128 & r))) return dt(t, n), !!(127 & e);
            }
            throw V();
          }
          function at(t) {
            const e = t.h;
            let n = t.g,
              r = e[n++],
              i = 127 & r;
            if (
              128 & r &&
              ((r = e[n++]),
              (i |= (127 & r) << 7),
              128 & r &&
                ((r = e[n++]),
                (i |= (127 & r) << 14),
                128 & r &&
                  ((r = e[n++]),
                  (i |= (127 & r) << 21),
                  128 & r &&
                    ((r = e[n++]),
                    (i |= r << 28),
                    128 & r &&
                      128 & e[n++] &&
                      128 & e[n++] &&
                      128 & e[n++] &&
                      128 & e[n++] &&
                      128 & e[n++]))))
            )
              throw V();
            return dt(t, n), i;
          }
          function ct(t) {
            return at(t) >>> 0;
          }
          function ht(t) {
            var e = t.h;
            const n = t.g,
              r = e[n],
              i = e[n + 1],
              o = e[n + 2];
            return (
              (e = e[n + 3]),
              dt(t, t.g + 4),
              (r | (i << 8) | (o << 16) | (e << 24)) >>> 0
            );
          }
          function ut(t) {
            var e = ht(t);
            t = 2 * (e >> 31) + 1;
            const n = (e >>> 23) & 255;
            return (
              (e &= 8388607),
              255 == n
                ? e
                  ? NaN
                  : (1 / 0) * t
                : 0 == n
                ? t * Math.pow(2, -149) * e
                : t * Math.pow(2, n - 150) * (e + Math.pow(2, 23))
            );
          }
          function lt(t) {
            return at(t);
          }
          function ft(t, e, { ca: n = !1 } = {}) {
            (t.ca = n),
              e &&
                ((e = X(e)),
                (t.h = e.buffer),
                (t.m = e.P),
                (t.j = 0),
                (t.l = t.h.length),
                (t.g = t.j));
          }
          function dt(t, e) {
            if (((t.g = e), e > t.l)) throw H(t.l, e);
          }
          function pt(t, e) {
            if (0 > e)
              throw Error(`Tried to read a negative byte length: ${e}`);
            const n = t.g,
              r = n + e;
            if (r > t.l) throw H(e, t.l - n);
            return (t.g = r), n;
          }
          function gt(t, e) {
            if (0 == e) return N();
            var n = pt(t, e);
            return (
              t.ca && t.m
                ? (n = t.h.subarray(n, n + e))
                : ((t = t.h),
                  (n =
                    n === (e = n + e)
                      ? I()
                      : W
                      ? t.slice(n, e)
                      : new Uint8Array(t.subarray(n, e)))),
              0 == n.length ? N() : new G(n, C)
            );
          }
          var mt = [];
          function yt(t) {
            var e = t.g;
            if (e.g == e.l) return !1;
            t.l = t.g.g;
            var n = ct(t.g);
            if (((e = n >>> 3), !(0 <= (n &= 7) && 5 >= n))) throw j(n, t.l);
            if (1 > e)
              throw Error(`Invalid field number: ${e} (at position ${t.l})`);
            return (t.m = e), (t.h = n), !0;
          }
          function vt(t) {
            switch (t.h) {
              case 0:
                0 != t.h ? vt(t) : st(t.g);
                break;
              case 1:
                dt((t = t.g), t.g + 8);
                break;
              case 2:
                if (2 != t.h) vt(t);
                else {
                  var e = ct(t.g);
                  dt((t = t.g), t.g + e);
                }
                break;
              case 5:
                dt((t = t.g), t.g + 4);
                break;
              case 3:
                for (e = t.m; ; ) {
                  if (!yt(t))
                    throw Error('Unmatched start-group tag: stream EOF');
                  if (4 == t.h) {
                    if (t.m != e) throw Error('Unmatched end-group tag');
                    break;
                  }
                  vt(t);
                }
                break;
              default:
                throw j(t.h, t.l);
            }
          }
          function _t(t, e, n) {
            const r = t.g.l,
              i = ct(t.g),
              o = t.g.g + i;
            let s = o - r;
            if (
              (0 >= s &&
                ((t.g.l = o), n(e, t, void 0, void 0, void 0), (s = o - t.g.g)),
              s)
            )
              throw Error(
                `Message parsing ended unexpectedly. Expected to read ${i} bytes, instead read ${
                  i - s
                } bytes, either the data ended unexpectedly or the message misreported its own length`,
              );
            return (t.g.g = o), (t.g.l = r), e;
          }
          function wt(t) {
            var e = ct(t.g),
              n = pt((t = t.g), e);
            if (((t = t.h), c)) {
              var r,
                h = t;
              (r = a) || (r = a = new TextDecoder('utf-8', { fatal: !0 })),
                (e = n + e),
                (h = 0 === n && e === h.length ? h : h.subarray(n, e));
              try {
                var u = r.decode(h);
              } catch (t) {
                if (void 0 === s) {
                  try {
                    r.decode(new Uint8Array([128]));
                  } catch (t) {}
                  try {
                    r.decode(new Uint8Array([97])), (s = !0);
                  } catch (t) {
                    s = !1;
                  }
                }
                throw (!s && (a = void 0), t);
              }
            } else {
              (e = (u = n) + e), (n = []);
              let s,
                a = null;
              for (; u < e; ) {
                var l = t[u++];
                128 > l
                  ? n.push(l)
                  : 224 > l
                  ? u >= e
                    ? i()
                    : ((s = t[u++]),
                      194 > l || 128 != (192 & s)
                        ? (u--, i())
                        : n.push(((31 & l) << 6) | (63 & s)))
                  : 240 > l
                  ? u >= e - 1
                    ? i()
                    : ((s = t[u++]),
                      128 != (192 & s) ||
                      (224 === l && 160 > s) ||
                      (237 === l && 160 <= s) ||
                      128 != (192 & (r = t[u++]))
                        ? (u--, i())
                        : n.push(((15 & l) << 12) | ((63 & s) << 6) | (63 & r)))
                  : 244 >= l
                  ? u >= e - 2
                    ? i()
                    : ((s = t[u++]),
                      128 != (192 & s) ||
                      (s - 144 + (l << 28)) >> 30 ||
                      128 != (192 & (r = t[u++])) ||
                      128 != (192 & (h = t[u++]))
                        ? (u--, i())
                        : ((l =
                            ((7 & l) << 18) |
                            ((63 & s) << 12) |
                            ((63 & r) << 6) |
                            (63 & h)),
                          (l -= 65536),
                          n.push(
                            55296 + ((l >> 10) & 1023),
                            56320 + (1023 & l),
                          )))
                  : i(),
                  8192 <= n.length && ((a = o(a, n)), (n.length = 0));
              }
              u = o(a, n);
            }
            return u;
          }
          function bt(t) {
            const e = ct(t.g);
            return gt(t.g, e);
          }
          function Et(t, e, n) {
            var r = ct(t.g);
            for (r = t.g.g + r; t.g.g < r; ) n.push(e(t.g));
          }
          var Tt = [];
          function At(t) {
            return t
              ? /^\d+$/.test(t)
                ? (rt(t), new xt(Y, q))
                : null
              : (kt ||= new xt(0, 0));
          }
          var xt = class {
            constructor(t, e) {
              (this.h = t >>> 0), (this.g = e >>> 0);
            }
          };
          let kt;
          function Lt(t) {
            return t
              ? /^-?\d+$/.test(t)
                ? (rt(t), new St(Y, q))
                : null
              : (Ot ||= new St(0, 0));
          }
          var St = class {
            constructor(t, e) {
              (this.h = t >>> 0), (this.g = e >>> 0);
            }
          };
          let Ot;
          function Ft(t, e, n) {
            for (; 0 < n || 127 < e; )
              t.g.push((127 & e) | 128),
                (e = ((e >>> 7) | (n << 25)) >>> 0),
                (n >>>= 7);
            t.g.push(e);
          }
          function Pt(t, e) {
            for (; 127 < e; ) t.g.push((127 & e) | 128), (e >>>= 7);
            t.g.push(e);
          }
          function Mt(t, e) {
            if (0 <= e) Pt(t, e);
            else {
              for (let n = 0; 9 > n; n++) t.g.push((127 & e) | 128), (e >>= 7);
              t.g.push(1);
            }
          }
          function Rt(t, e) {
            t.g.push((e >>> 0) & 255),
              t.g.push((e >>> 8) & 255),
              t.g.push((e >>> 16) & 255),
              t.g.push((e >>> 24) & 255);
          }
          function It(t, e) {
            0 !== e.length && (t.l.push(e), (t.h += e.length));
          }
          function Ct(t, e, n) {
            Pt(t.g, 8 * e + n);
          }
          function Dt(t, e) {
            return Ct(t, e, 2), (e = t.g.end()), It(t, e), e.push(t.h), e;
          }
          function Ut(t, e) {
            var n = e.pop();
            for (n = t.h + t.g.length() - n; 127 < n; )
              e.push((127 & n) | 128), (n >>>= 7), t.h++;
            e.push(n), t.h++;
          }
          function Nt(t, e, n) {
            Ct(t, e, 2), Pt(t.g, n.length), It(t, t.g.end()), It(t, n);
          }
          function Bt(t, e, n, r) {
            null != n && ((e = Dt(t, e)), r(n, t), Ut(t, e));
          }
          class Gt {
            constructor(t, e, n, r) {
              (this.g = t), (this.h = e), (this.l = n), (this.pa = r);
            }
          }
          function jt(t) {
            return Array.prototype.slice.call(t);
          }
          function Vt(t) {
            return 'function' == typeof Symbol && 'symbol' == typeof Symbol()
              ? Symbol()
              : t;
          }
          var Ht = Vt(),
            Xt = Vt('0di'),
            zt = Vt('2ex'),
            Wt = Vt('0dg'),
            Kt = Ht
              ? (t, e) => {
                  t[Ht] |= e;
                }
              : (t, e) => {
                  void 0 !== t.g
                    ? (t.g |= e)
                    : Object.defineProperties(t, {
                        g: {
                          value: e,
                          configurable: !0,
                          writable: !0,
                          enumerable: !1,
                        },
                      });
                },
            Yt = Ht
              ? (t, e) => {
                  t[Ht] &= ~e;
                }
              : (t, e) => {
                  void 0 !== t.g && (t.g &= ~e);
                };
          function qt(t, e, n) {
            return n ? t | e : t & ~e;
          }
          var $t = Ht ? (t) => 0 | t[Ht] : (t) => 0 | t.g,
            Jt = Ht ? (t) => t[Ht] : (t) => t.g,
            Zt = Ht
              ? (t, e) => ((t[Ht] = e), t)
              : (t, e) => (
                  void 0 !== t.g
                    ? (t.g = e)
                    : Object.defineProperties(t, {
                        g: {
                          value: e,
                          configurable: !0,
                          writable: !0,
                          enumerable: !1,
                        },
                      }),
                  t
                );
          function Qt(t) {
            return Kt(t, 34), t;
          }
          function te(t, e) {
            Zt(e, -14591 & t);
          }
          function ee(t, e) {
            Zt(e, (-14557 & t) | 34);
          }
          function ne(t) {
            return 0 == (t = (t >> 14) & 1023) ? 536870912 : t;
          }
          var re,
            ie = {},
            oe = {};
          function se(t) {
            return !(!t || 'object' != typeof t || t.Ja !== oe);
          }
          function ae(t) {
            return (
              null !== t &&
              'object' == typeof t &&
              !Array.isArray(t) &&
              t.constructor === Object
            );
          }
          function ce(t, e, n) {
            if (null != t)
              if ('string' == typeof t) t = t ? new G(t, C) : N();
              else if (t.constructor !== G)
                if (M(t))
                  t = t.length ? new G(n ? t : new Uint8Array(t), C) : N();
                else {
                  if (!e) throw Error();
                  t = void 0;
                }
            return t;
          }
          function he(t, e, n) {
            if (!Array.isArray(t) || t.length) return !1;
            const r = $t(t);
            return (
              !!(1 & r) ||
              (!(!e || !(Array.isArray(e) ? e.includes(n) : e.has(n))) &&
                (Zt(t, 1 | r), !0))
            );
          }
          const ue = [];
          function le(t) {
            if (2 & t) throw Error();
          }
          Zt(ue, 55), (re = Object.freeze(ue));
          class fe {
            constructor(t, e, n) {
              (this.l = 0), (this.g = t), (this.h = e), (this.m = n);
            }
            next() {
              if (this.l < this.g.length) {
                const t = this.g[this.l++];
                return { done: !1, value: this.h ? this.h.call(this.m, t) : t };
              }
              return { done: !0, value: void 0 };
            }
            [Symbol.iterator]() {
              return new fe(this.g, this.h, this.m);
            }
          }
          let de, pe, ge;
          function me(t, e) {
            (e = de ? e[de] : void 0) && (t[de] = jt(e));
          }
          function ye(t, e) {
            t.__closure__error__context__984382 ||
              (t.__closure__error__context__984382 = {}),
              (t.__closure__error__context__984382.severity = e);
          }
          function ve() {
            const t = Error();
            ye(t, 'incident'),
              (function (t) {
                n.setTimeout(() => {
                  throw t;
                }, 0);
              })(t);
          }
          function _e(t) {
            return ye((t = Error(t)), 'warning'), t;
          }
          function we(t) {
            return null == t || 'number' == typeof t
              ? t
              : 'NaN' === t || 'Infinity' === t || '-Infinity' === t
              ? Number(t)
              : void 0;
          }
          function be(t) {
            return null == t || 'boolean' == typeof t
              ? t
              : 'number' == typeof t
              ? !!t
              : void 0;
          }
          Object.freeze(new (class {})()), Object.freeze(new (class {})());
          const Ee = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
          function Te(t) {
            const e = typeof t;
            return 'number' === e
              ? Number.isFinite(t)
              : 'string' === e && Ee.test(t);
          }
          function Ae(t) {
            if (null == t) return t;
            if ('string' == typeof t) {
              if (!t) return;
              t = +t;
            }
            return 'number' == typeof t && Number.isFinite(t) ? 0 | t : void 0;
          }
          function xe(t) {
            if (null == t) return t;
            if ('string' == typeof t) {
              if (!t) return;
              t = +t;
            }
            return 'number' == typeof t && Number.isFinite(t)
              ? t >>> 0
              : void 0;
          }
          function ke(t) {
            return (
              '-' !== t[0] &&
              (20 > t.length ||
                (20 === t.length && 184467 > Number(t.substring(0, 6))))
            );
          }
          function Le(t) {
            return '-' === t[0]
              ? 20 > t.length ||
                  (20 === t.length && -922337 < Number(t.substring(0, 7)))
              : 19 > t.length ||
                  (19 === t.length && 922337 > Number(t.substring(0, 6)));
          }
          function Se(t) {
            return (
              (t = Math.trunc(t)),
              Number.isSafeInteger(t) || ($(t), (t = Q(Y, q))),
              t
            );
          }
          function Oe(t) {
            var e = Math.trunc(Number(t));
            return Number.isSafeInteger(e)
              ? String(e)
              : (-1 !== (e = t.indexOf('.')) && (t = t.substring(0, e)),
                Le(t) || (rt(t), (t = nt())),
                t);
          }
          function Fe(t) {
            return null == t
              ? t
              : Te(t)
              ? 'number' == typeof t
                ? Se(t)
                : Oe(t)
              : void 0;
          }
          function Pe(t) {
            if ('string' != typeof t) throw Error();
            return t;
          }
          function Me(t) {
            if (null != t && 'string' != typeof t) throw Error();
            return t;
          }
          function Re(t) {
            return null == t || 'string' == typeof t ? t : void 0;
          }
          function Ie(t, e, n, r) {
            if (null != t && 'object' == typeof t && t.X === ie) return t;
            if (!Array.isArray(t))
              return (
                n
                  ? 2 & r
                    ? (t = e[Xt])
                      ? (e = t)
                      : (Qt((t = new e()).s), (e = e[Xt] = t))
                    : (e = new e())
                  : (e = void 0),
                e
              );
            let i = (n = $t(t));
            return (
              0 === i && (i |= 32 & r),
              (i |= 2 & r),
              i !== n && Zt(t, i),
              new e(t)
            );
          }
          function Ce(t, e, n) {
            if (e) {
              var r = !!r;
              if (!Te((e = t))) throw _e('int64');
              'string' == typeof e
                ? (r = Oe(e))
                : r
                ? ((r = Math.trunc(e)),
                  Number.isSafeInteger(r)
                    ? (r = String(r))
                    : Le((e = String(r)))
                    ? (r = e)
                    : ($(r), (r = nt())))
                : (r = Se(e));
            } else r = Fe(t);
            return 'string' ==
              typeof (n = null == (t = r) ? (n ? 0 : void 0) : t) &&
              ((r = +n), Number.isSafeInteger(r))
              ? r
              : n;
          }
          let De, Ue, Ne;
          function Be(t) {
            switch (typeof t) {
              case 'boolean':
                return (Ue ||= [0, void 0, !0]);
              case 'number':
                return 0 < t
                  ? void 0
                  : 0 === t
                  ? (Ne ||= [0, void 0])
                  : [-t, void 0];
              case 'string':
                return [0, t];
              case 'object':
                return t;
            }
          }
          function Ge(t, e) {
            return je(t, e[0], e[1]);
          }
          function je(t, e, n) {
            if ((null == t && (t = De), (De = void 0), null == t)) {
              var r = 96;
              n ? ((t = [n]), (r |= 512)) : (t = []),
                e && (r = (-16760833 & r) | ((1023 & e) << 14));
            } else {
              if (!Array.isArray(t)) throw Error('narr');
              if (2048 & (r = $t(t))) throw Error('farr');
              if (64 & r) return t;
              if (((r |= 64), n && ((r |= 512), n !== t[0])))
                throw Error('mid');
              t: {
                const i = (n = t).length;
                if (i) {
                  const t = i - 1;
                  if (ae(n[t])) {
                    if (1024 <= (e = t - (+!!(512 & (r |= 256)) - 1)))
                      throw Error('pvtlmt');
                    r = (-16760833 & r) | ((1023 & e) << 14);
                    break t;
                  }
                }
                if (e) {
                  if (1024 < (e = Math.max(e, i - (+!!(512 & r) - 1))))
                    throw Error('spvt');
                  r = (-16760833 & r) | ((1023 & e) << 14);
                }
              }
            }
            return Zt(t, r), t;
          }
          const Ve = {};
          let He = (function () {
            try {
              return (
                w(
                  new (class extends Map {
                    constructor() {
                      super();
                    }
                  })(),
                ),
                !1
              );
            } catch {
              return !0;
            }
          })();
          class Xe {
            constructor() {
              this.g = new Map();
            }
            get(t) {
              return this.g.get(t);
            }
            set(t, e) {
              return this.g.set(t, e), (this.size = this.g.size), this;
            }
            delete(t) {
              return (t = this.g.delete(t)), (this.size = this.g.size), t;
            }
            clear() {
              this.g.clear(), (this.size = this.g.size);
            }
            has(t) {
              return this.g.has(t);
            }
            entries() {
              return this.g.entries();
            }
            keys() {
              return this.g.keys();
            }
            values() {
              return this.g.values();
            }
            forEach(t, e) {
              return this.g.forEach(t, e);
            }
            [Symbol.iterator]() {
              return this.entries();
            }
          }
          const ze = He
            ? (Object.setPrototypeOf(Xe.prototype, Map.prototype),
              Object.defineProperties(Xe.prototype, {
                size: {
                  value: 0,
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                },
              }),
              Xe)
            : class extends Map {
                constructor() {
                  super();
                }
              };
          function We(t) {
            return t;
          }
          function Ke(t) {
            if (2 & t.N) throw Error('Cannot mutate an immutable Map');
          }
          var Ye = class extends ze {
            constructor(t, e, n = We, r = We) {
              super();
              let i = $t(t);
              (i |= 64),
                Zt(t, i),
                (this.N = i),
                (this.U = e),
                (this.S = n),
                (this.Z = this.U ? qe : r);
              for (let o = 0; o < t.length; o++) {
                const s = t[o],
                  a = n(s[0], !1, !0);
                let c = s[1];
                e
                  ? void 0 === c && (c = null)
                  : (c = r(s[1], !1, !0, void 0, void 0, i)),
                  super.set(a, c);
              }
            }
            oa(t = $e) {
              if (0 !== this.size) return this.Y(t);
            }
            Y(t = $e) {
              const e = [],
                n = super.entries();
              for (var r; !(r = n.next()).done; )
                ((r = r.value)[0] = t(r[0])), (r[1] = t(r[1])), e.push(r);
              return e;
            }
            clear() {
              Ke(this), super.clear();
            }
            delete(t) {
              return Ke(this), super.delete(this.S(t, !0, !1));
            }
            entries() {
              var t = this.na();
              return new fe(t, Je, this);
            }
            keys() {
              return this.Ia();
            }
            values() {
              var t = this.na();
              return new fe(t, Ye.prototype.get, this);
            }
            forEach(t, e) {
              super.forEach((n, r) => {
                t.call(e, this.get(r), r, this);
              });
            }
            set(t, e) {
              return (
                Ke(this),
                null == (t = this.S(t, !0, !1))
                  ? this
                  : null == e
                  ? (super.delete(t), this)
                  : super.set(t, this.Z(e, !0, !0, this.U, !1, this.N))
              );
            }
            Oa(t) {
              const e = this.S(t[0], !1, !0);
              (t = t[1]),
                (t = this.U
                  ? void 0 === t
                    ? null
                    : t
                  : this.Z(t, !1, !0, void 0, !1, this.N)),
                super.set(e, t);
            }
            has(t) {
              return super.has(this.S(t, !1, !1));
            }
            get(t) {
              t = this.S(t, !1, !1);
              const e = super.get(t);
              if (void 0 !== e) {
                var n = this.U;
                return n
                  ? ((n = this.Z(e, !1, !0, n, this.ta, this.N)) !== e &&
                      super.set(t, n),
                    n)
                  : e;
              }
            }
            na() {
              return Array.from(super.keys());
            }
            Ia() {
              return super.keys();
            }
            [Symbol.iterator]() {
              return this.entries();
            }
          };
          function qe(t, e, n, r, i, o) {
            return (t = Ie(t, r, n, o)), i && (t = cn(t)), t;
          }
          function $e(t) {
            return t;
          }
          function Je(t) {
            return [t, this.get(t)];
          }
          let Ze;
          function Qe() {
            return (Ze ||= new Ye(Qt([]), void 0, void 0, void 0, Ve));
          }
          function tn(t, e, n, r, i) {
            if (null != t) {
              if (Array.isArray(t))
                t = he(t, void 0, 0)
                  ? void 0
                  : i && 2 & $t(t)
                  ? t
                  : en(t, e, n, void 0 !== r, i);
              else if (ae(t)) {
                const o = {};
                for (let s in t) o[s] = tn(t[s], e, n, r, i);
                t = o;
              } else t = e(t, r);
              return t;
            }
          }
          function en(t, e, n, r, i) {
            const o = r || n ? $t(t) : 0;
            r = r ? !!(32 & o) : void 0;
            const s = jt(t);
            for (let t = 0; t < s.length; t++) s[t] = tn(s[t], e, n, r, i);
            return n && (me(s, t), n(o, s)), s;
          }
          function nn(t) {
            return tn(t, rn, void 0, void 0, !1);
          }
          function rn(t) {
            return t.X === ie
              ? t.toJSON()
              : t instanceof Ye
              ? t.oa(nn)
              : (function (t) {
                  switch (typeof t) {
                    case 'number':
                      return isFinite(t) ? t : String(t);
                    case 'boolean':
                      return t ? 1 : 0;
                    case 'object':
                      if (t)
                        if (Array.isArray(t)) {
                          if (he(t, void 0, 0)) return;
                        } else {
                          if (M(t)) return L(t);
                          if (t instanceof G) {
                            const e = t.g;
                            return null == e
                              ? ''
                              : 'string' == typeof e
                              ? e
                              : (t.g = L(e));
                          }
                          if (t instanceof Ye) return t.oa();
                        }
                  }
                  return t;
                })(t);
          }
          function on(t, e, n = ee) {
            if (null != t) {
              if (x && t instanceof Uint8Array)
                return e ? t : new Uint8Array(t);
              if (Array.isArray(t)) {
                var r = $t(t);
                return (
                  2 & r ||
                    ((e &&= 0 === r || (!!(32 & r) && !(64 & r || !(16 & r)))),
                    (t = e
                      ? Zt(t, (-12293 & r) | 34)
                      : en(t, on, 4 & r ? ee : n, !0, !0))),
                  t
                );
              }
              return (
                t.X === ie
                  ? ((n = t.s), (t = 2 & (r = Jt(n)) ? t : sn(t, n, r, !0)))
                  : t instanceof Ye &&
                    !(2 & t.N) &&
                    ((n = Qt(t.Y(on))), (t = new Ye(n, t.U, t.S, t.Z))),
                t
              );
            }
          }
          function sn(t, e, n, r) {
            return (
              (t = t.constructor),
              (De = e = an(e, n, r)),
              (e = new t(e)),
              (De = void 0),
              e
            );
          }
          function an(t, e, n) {
            const r = n || 2 & e ? ee : te,
              i = !!(32 & e);
            return (
              (t = (function (t, e, n) {
                const r = jt(t);
                var i = r.length;
                const o = 256 & e ? r[i - 1] : void 0;
                for (i += o ? -1 : 0, e = 512 & e ? 1 : 0; e < i; e++)
                  r[e] = n(r[e]);
                if (o) {
                  e = r[e] = {};
                  for (const t in o) e[t] = n(o[t]);
                }
                return me(r, t), r;
              })(t, e, (t) => on(t, i, r))),
              Kt(t, 32 | (n ? 2 : 0)),
              t
            );
          }
          function cn(t) {
            const e = t.s,
              n = Jt(e);
            return 2 & n ? sn(t, e, n, !1) : t;
          }
          function hn(t, e, n, r) {
            return !(
              4 & e &&
              (null == n ||
                (!r &&
                  0 === n &&
                  (4096 & e || 8192 & e) &&
                  5 > (t.constructor[Wt] = 1 + (0 | t.constructor[Wt])) &&
                  ve(),
                0 === n || n & e))
            );
          }
          function un(t, e) {
            return fn((t = t.s), Jt(t), e);
          }
          function ln(t, e, n, r) {
            if (!(0 > (e = r + (+!!(512 & e) - 1)) || e >= t.length || e >= n))
              return t[e];
          }
          function fn(t, e, n, r) {
            if (-1 === n) return null;
            const i = ne(e);
            if (!(n >= i)) {
              var o = t.length;
              return r && 256 & e && null != (r = t[o - 1][n])
                ? (ln(t, e, i, n) &&
                    null != zt &&
                    (4 <= (e = (t = ge ??= {})[zt] || 0) ||
                      ((t[zt] = e + 1), ve())),
                  r)
                : ln(t, e, i, n);
            }
            return 256 & e ? t[t.length - 1][n] : void 0;
          }
          function dn(t, e, n, r) {
            const i = t.s;
            let o = Jt(i);
            return le(o), pn(i, o, e, n, r), t;
          }
          function pn(t, e, n, r, i) {
            const o = ne(e);
            if (n >= o || i) {
              let s = e;
              if (256 & e) i = t[t.length - 1];
              else {
                if (null == r) return s;
                (i = t[o + (+!!(512 & e) - 1)] = {}), (s |= 256);
              }
              return (
                (i[n] = r),
                n < o && (t[n + (+!!(512 & e) - 1)] = void 0),
                s !== e && Zt(t, s),
                s
              );
            }
            return (
              (t[n + (+!!(512 & e) - 1)] = r),
              256 & e && n in (t = t[t.length - 1]) && delete t[n],
              e
            );
          }
          function gn(t, e, n, r, i) {
            var o = 2 & e;
            let s = fn(t, e, n, i);
            Array.isArray(s) || (s = re);
            const a = !(2 & r);
            r = !(1 & r);
            const c = !!(32 & e);
            let h = $t(s);
            return (
              0 !== h || !c || o || a
                ? 1 & h || ((h |= 1), Zt(s, h))
                : ((h |= 33), Zt(s, h)),
              o
                ? ((t = !1),
                  2 & h || (Qt(s), (t = !!(4 & h))),
                  (r || t) && Object.freeze(s))
                : ((o = !!(2 & h) || !!(2048 & h)),
                  r && o
                    ? ((s = jt(s)),
                      (r = 1),
                      c && !a && (r |= 32),
                      Zt(s, r),
                      pn(t, e, n, s, i))
                    : a && 32 & h && !o && Yt(s, 32)),
              s
            );
          }
          function mn(t, e) {
            t = t.s;
            let n = Jt(t);
            const r = fn(t, n, e),
              i = we(r);
            return null != i && i !== r && pn(t, n, e, i), i;
          }
          function yn(t) {
            t = t.s;
            let e = Jt(t);
            const n = fn(t, e, 1),
              r = ce(n, !0, !!(34 & e));
            return null != r && r !== n && pn(t, e, 1, r), r;
          }
          function vn(t, e, n) {
            const r = t.s;
            let i = Jt(r);
            const o = 2 & i ? 1 : 2;
            let s = _n(r, i, e);
            var a = $t(s);
            if (hn(t, a, void 0, !1)) {
              (4 & a || Object.isFrozen(s)) &&
                ((s = jt(s)), (a = Dn(a, i)), (i = pn(r, i, e, s)));
              let o = (t = 0);
              for (; t < s.length; t++) {
                const e = n(s[t]);
                null != e && (s[o++] = e);
              }
              o < t && (s.length = o),
                (a = qt((a = wn(a, i)), 20, !0)),
                (a = qt(a, 4096, !1)),
                (a = qt(a, 8192, !1)),
                Zt(s, a),
                2 & a && Object.freeze(s);
            }
            return (
              bn(a) ||
                ((n = a),
                (a = (t = 1 === o || (4 === o && !!(32 & a)))
                  ? qt(a, 2, !0)
                  : Un(a, i, !1)) !== n && Zt(s, a),
                t && Object.freeze(s)),
              2 === o &&
                bn(a) &&
                ((s = jt(s)),
                (a = Un((a = Dn(a, i)), i, !1)),
                Zt(s, a),
                pn(r, i, e, s)),
              s
            );
          }
          function _n(t, e, n) {
            return (t = fn(t, e, n)), Array.isArray(t) ? t : re;
          }
          function wn(t, e) {
            return 0 === t && (t = Dn(t, e)), qt(t, 1, !0);
          }
          function bn(t) {
            return (!!(2 & t) && !!(4 & t)) || !!(2048 & t);
          }
          function En(t) {
            t = jt(t);
            for (let e = 0; e < t.length; e++) {
              const n = (t[e] = jt(t[e]));
              Array.isArray(n[1]) && (n[1] = Qt(n[1]));
            }
            return t;
          }
          function Tn(t, e, n) {
            {
              const a = t.s;
              let c = Jt(a);
              if ((le(c), null == n)) pn(a, c, e);
              else {
                var r,
                  i = $t(n),
                  o = i,
                  s = !!(2 & i) || Object.isFrozen(n);
                if (((r = !s) && (r = !1), hn(t, i)))
                  for (
                    i = 21,
                      s &&
                        ((n = jt(n)), (o = 0), (i = Un((i = Dn(i, c)), c, !0))),
                      t = 0;
                    t < n.length;
                    t++
                  )
                    n[t] = Pe(n[t]);
                r && ((n = jt(n)), (o = 0), (i = Un((i = Dn(i, c)), c, !0))),
                  i !== o && Zt(n, i),
                  pn(a, c, e, n);
              }
            }
          }
          function An(t, e, n, r) {
            t = t.s;
            let i = Jt(t);
            le(i),
              pn(t, i, e, ('0' === r ? 0 === Number(n) : n === r) ? void 0 : n);
          }
          function xn(t, e, n, r) {
            const i = Jt(t);
            le(i),
              (t = gn(t, i, e, 2)),
              (r = n(r, !!(4 & (e = $t(t))) && !!(4096 & e))),
              t.push(r);
          }
          function kn(t) {
            return t;
          }
          function Ln(t, e) {
            return Sn((t = t.s), Jt(t), To) === e ? e : -1;
          }
          function Sn(t, e, n) {
            let r = 0;
            for (let i = 0; i < n.length; i++) {
              const o = n[i];
              null != fn(t, e, o) && (0 !== r && (e = pn(t, e, r)), (r = o));
            }
            return r;
          }
          function On(t, e, n, r) {
            let i = Jt(t);
            le(i);
            const o = fn(t, i, n, r);
            let s;
            if (null != o && o.X === ie)
              return (e = cn(o)) !== o && pn(t, i, n, e, r), e.s;
            if (Array.isArray(o)) {
              const t = $t(o);
              (s = 2 & t ? an(o, t, !1) : o), (s = Ge(s, e));
            } else s = Ge(void 0, e);
            return s !== o && pn(t, i, n, s, r), s;
          }
          function Fn(t, e, n, r) {
            t = t.s;
            let i = Jt(t);
            const o = fn(t, i, n, r);
            return (
              (e = Ie(o, e, !1, i)) !== o && null != e && pn(t, i, n, e, r), e
            );
          }
          function Pn(t, e, n, r = !1) {
            if (null == (e = Fn(t, e, n, r))) return e;
            t = t.s;
            let i = Jt(t);
            if (!(2 & i)) {
              const o = cn(e);
              o !== e && pn(t, i, n, (e = o), r);
            }
            return e;
          }
          function Mn(t, e, n, r, i, o) {
            var s = 2,
              a = !!(2 & e);
            (s = a ? 1 : s), (i = !!i), (o &&= !a), (a = _n(t, e, r));
            var c = $t(a);
            const h = !!(4 & c);
            if (!h) {
              var u = a,
                l = e;
              const t = !!(2 & (c = wn(c, e)));
              t && (l = qt(l, 2, !0));
              let r = !t,
                i = !0,
                o = 0,
                s = 0;
              for (; o < u.length; o++) {
                const e = Ie(u[o], n, !1, l);
                if (e instanceof n) {
                  if (!t) {
                    const t = !!(2 & $t(e.s));
                    (r &&= !t), (i &&= t);
                  }
                  u[s++] = e;
                }
              }
              s < o && (u.length = s),
                (c = qt(c, 4, !0)),
                (c = qt(c, 16, i)),
                (c = qt(c, 8, r)),
                Zt(u, c),
                t && Object.freeze(u);
            }
            if (
              o &&
              !(8 & c || (!a.length && (1 === s || (4 === s && 32 & c))))
            ) {
              for (
                bn(c) && ((a = jt(a)), (c = Dn(c, e)), (e = pn(t, e, r, a))),
                  n = a,
                  o = c,
                  u = 0;
                u < n.length;
                u++
              )
                (c = n[u]) !== (l = cn(c)) && (n[u] = l);
              (o = qt(o, 8, !0)), (o = qt(o, 16, !n.length)), Zt(n, o), (c = o);
            }
            return (
              bn(c) ||
                ((n = c),
                (c = (o = 1 === s || (4 === s && !!(32 & c)))
                  ? qt(
                      c,
                      !a.length || (16 & c && (!h || 32 & c)) ? 2 : 2048,
                      !0,
                    )
                  : Un(c, e, i)) !== n && Zt(a, c),
                o && Object.freeze(a)),
              2 === s &&
                bn(c) &&
                ((a = jt(a)),
                (c = Un((c = Dn(c, e)), e, i)),
                Zt(a, c),
                pn(t, e, r, a)),
              a
            );
          }
          function Rn(t, e, n) {
            t = t.s;
            const r = Jt(t);
            return Mn(t, r, e, n, !1, !(2 & r));
          }
          function In(t, e, n, r, i) {
            return null == r && (r = void 0), dn(t, n, r, i);
          }
          function Cn(t, e, n, r) {
            null == r && (r = void 0), (t = t.s);
            let i = Jt(t);
            le(i),
              (n = Sn(t, i, n)) && n !== e && null != r && (i = pn(t, i, n)),
              pn(t, i, e, r);
          }
          function Dn(t, e) {
            return (
              (t = qt(t, 2, !!(2 & e))), (t = qt(t, 32, !0)), qt(t, 2048, !1)
            );
          }
          function Un(t, e, n) {
            return (32 & e && n) || (t = qt(t, 32, !1)), t;
          }
          function Nn(t, e, n, r) {
            t = t.s;
            const i = Jt(t);
            le(i),
              (e = Mn(t, i, n, e, !0)),
              (n = null != r ? r : new n()),
              e.push(n),
              2 & $t(n.s) ? Yt(e, 8) : Yt(e, 16);
          }
          function Bn(t, e) {
            return Ae(un(t, e));
          }
          function Gn(t, e) {
            return t ?? e;
          }
          function jn(t, e) {
            return Gn(mn(t, e), 0);
          }
          function Vn(t, e) {
            return Gn(Re(un(t, e)), '');
          }
          function Hn(t, e, n) {
            if (null != n && 'boolean' != typeof n)
              throw (
                ((t = typeof n),
                Error(
                  `Expected boolean but got ${
                    'object' != t
                      ? t
                      : n
                      ? Array.isArray(n)
                        ? 'array'
                        : t
                      : 'null'
                  }: ${n}`,
                ))
              );
            dn(t, e, n);
          }
          function Xn(t, e, n) {
            if (null != n) {
              if ('number' != typeof n) throw _e('int32');
              if (!Number.isFinite(n)) throw _e('int32');
              n |= 0;
            }
            dn(t, e, n);
          }
          function zn(t, e, n) {
            if (null != n && 'number' != typeof n)
              throw Error(
                `Value of float/double field must be a number, found ${typeof n}: ${n}`,
              );
            dn(t, e, n);
          }
          function Wn(t, e, n) {
            e.g ? e.m(t, e.g, e.h, n, !0) : e.m(t, e.h, n, !0);
          }
          (Ye.prototype.toJSON = void 0), (Ye.prototype.Ja = oe);
          var Kn = class {
            constructor(t, e) {
              this.s = je(t, e);
            }
            toJSON() {
              return Yn(this, en(this.s, rn, void 0, void 0, !1), !0);
            }
            l() {
              var t = ks;
              return t.g
                ? t.l(this, t.g, t.h, !0)
                : t.l(this, t.h, t.defaultValue, !0);
            }
            clone() {
              const t = this.s;
              return sn(this, t, Jt(t), !1);
            }
            P() {
              return !!(2 & $t(this.s));
            }
          };
          function Yn(t, e, n) {
            var r = p ? void 0 : t.constructor.B;
            const i = Jt(n ? t.s : e);
            if (!(t = e.length)) return e;
            let o, s;
            if (ae((n = e[t - 1]))) {
              t: {
                var a = n;
                let t = {},
                  e = !1;
                for (var c in a) {
                  let n = a[c];
                  if (Array.isArray(n)) {
                    let t = n;
                    (he(n, r, +c) || (se(n) && 0 === n.size)) && (n = null),
                      n != t && (e = !0);
                  }
                  null != n ? (t[c] = n) : (e = !0);
                }
                if (e) {
                  for (var h in t) {
                    a = t;
                    break t;
                  }
                  a = null;
                }
              }
              a != n && (o = !0), t--;
            }
            for (
              c = +!!(512 & i) - 1;
              0 < t &&
              ((n = e[(h = t - 1)]),
              (h -= c),
              null == n || he(n, r, h) || (se(n) && 0 === n.size));
              t--
            )
              s = !0;
            return o || s
              ? ((e = Array.prototype.slice.call(e, 0, t)), a && e.push(a), e)
              : e;
          }
          function qn(t) {
            return Array.isArray(t)
              ? t[0] instanceof Gt
                ? t
                : [$r, t]
              : [t, void 0];
          }
          function $n(t, e) {
            if (Array.isArray(e)) {
              var n = $t(e);
              if (4 & n) return e;
              for (var r = 0, i = 0; r < e.length; r++) {
                const n = t(e[r]);
                null != n && (e[i++] = n);
              }
              return (
                i < r && (e.length = i),
                Zt(e, (-12289 & n) | 5),
                2 & n && Object.freeze(e),
                e
              );
            }
          }
          (Kn.prototype.X = ie),
            (Kn.prototype.toString = function () {
              return Yn(this, this.s, !1).toString();
            });
          const Jn = Symbol();
          function Zn(t) {
            let e = t[Jn];
            if (!e) {
              const n = sr(t),
                r = vr(t),
                i = r.l;
              (e = i
                ? (t, e) => i(t, e, r)
                : (t, e) => {
                    for (; yt(e) && 4 != e.h; ) {
                      var i = e.m,
                        o = r[i];
                      if (!o) {
                        var s = r.ea;
                        s && (s = s[i]) && (o = r[i] = Qn(s));
                      }
                      (o && o(e, t, i)) ||
                        ((i = (o = e).l),
                        vt(o),
                        o.ia
                          ? (o = void 0)
                          : ((s = o.g.g - i), (o.g.g = i), (o = gt(o.g, s))),
                        (i = t),
                        o &&
                          ((de ||= Symbol()),
                          (s = i[de]) ? s.push(o) : (i[de] = [o])));
                    }
                    n === er || n === nr || n.j || (t[(pe ||= Symbol())] = n);
                  }),
                (t[Jn] = e);
            }
            return e;
          }
          function Qn(t) {
            const e = (t = qn(t))[0].g;
            if ((t = t[1])) {
              const n = Zn(t),
                r = vr(t).T;
              return (t, i, o) => e(t, i, o, r, n);
            }
            return e;
          }
          class tr {}
          let er, nr;
          const rr = Symbol();
          function ir(t, e, n) {
            const r = n[1];
            let i;
            if (r) {
              const n = r[rr];
              (i = n ? n.T : Be(r[0])), (t[e] = n ?? r);
            }
            i && i === Ue
              ? (t.g || (t.g = new Set())).add(e)
              : n[0] && (t.h || (t.h = new Set())).add(e);
          }
          function or(t, e) {
            return [t.l, !e || 0 < e[0] ? void 0 : e];
          }
          function sr(t) {
            var e = t[rr];
            if (e) return e;
            if (
              !(e = cr(t, (t[rr] = new tr()), or, or, ir)).ea &&
              !e.h &&
              !e.g
            ) {
              let n = !0;
              for (let t in e) isNaN(t) || (n = !1);
              n
                ? (Be(t[0]) === Ue
                    ? nr
                      ? (e = nr)
                      : (((e = new tr()).T = Be(!0)), (e = nr = e))
                    : (e = er ||= new tr()),
                  (e = t[rr] = e))
                : (e.j = !0);
            }
            return e;
          }
          function ar(t, e, n) {
            t[e] = n;
          }
          function cr(t, e, n, r, i = ar) {
            e.T = Be(t[0]);
            let o = 0;
            var s = t[++o];
            s &&
              s.constructor === Object &&
              ((e.ea = s),
              'function' == typeof (s = t[++o]) &&
                ((e.l = s), (e.m = t[++o]), (s = t[++o])));
            const a = {};
            for (; Array.isArray(s) && 'number' == typeof s[0] && 0 < s[0]; ) {
              for (var c = 0; c < s.length; c++) a[s[c]] = s;
              s = t[++o];
            }
            for (c = 1; void 0 !== s; ) {
              let l;
              'number' == typeof s && ((c += s), (s = t[++o]));
              var h = void 0;
              if ((s instanceof Gt ? (l = s) : ((l = Jr), o--), l.pa)) {
                (s = t[++o]), (h = t);
                var u = o;
                'function' == typeof s && ((s = s()), (h[u] = s)), (h = s);
              }
              for (
                u = c + 1,
                  'number' == typeof (s = t[++o]) &&
                    0 > s &&
                    ((u -= s), (s = t[++o]));
                c < u;
                c++
              ) {
                const t = a[c];
                i(e, c, h ? r(l, h, t) : n(l, t));
              }
            }
            return e;
          }
          const hr = Symbol();
          function ur(t) {
            let e = t[hr];
            if (!e) {
              const n = pr(t);
              (e = (t, e) => br(t, e, n)), (t[hr] = e);
            }
            return e;
          }
          const lr = Symbol();
          function fr(t) {
            return t.h;
          }
          function dr(t, e) {
            let n, r;
            const i = t.h;
            return (t, o, s) => i(t, o, s, (r ||= pr(e).T), (n ||= ur(e)));
          }
          function pr(t) {
            let e = t[lr];
            return e || ((e = cr(t, (t[lr] = {}), fr, dr)), _r(t), e);
          }
          const gr = Symbol();
          function mr(t, e) {
            const n = t.g;
            return e ? (t, r, i) => n(t, r, i, e) : n;
          }
          function yr(t, e, n) {
            const r = t.g;
            let i, o;
            return (t, s, a) => r(t, s, a, (o ||= vr(e).T), (i ||= Zn(e)), n);
          }
          function vr(t) {
            let e = t[gr];
            return e || (sr(t), (e = cr(t, (t[gr] = {}), mr, yr)), _r(t), e);
          }
          function _r(t) {
            gr in t && rr in t && lr in t && (t.length = 0);
          }
          function wr(t, e) {
            var n = t[e];
            if (n) return n;
            if ((n = t.ea) && (n = n[e])) {
              var r = (n = qn(n))[0].h;
              if ((n = n[1])) {
                const e = ur(n),
                  i = pr(n).T;
                n = (n = t.m) ? n(i, e) : (t, n, o) => r(t, n, o, i, e);
              } else n = r;
              return (t[e] = n);
            }
          }
          function br(t, e, n) {
            for (
              var r = Jt(t),
                i = +!!(512 & r) - 1,
                o = t.length,
                s = 512 & r ? 1 : 0,
                a = o + (256 & r ? -1 : 0);
              s < a;
              s++
            ) {
              const r = t[s];
              if (null == r) continue;
              const o = s - i,
                a = wr(n, o);
              a && a(e, r, o);
            }
            if (256 & r) {
              r = t[o - 1];
              for (let t in r)
                (i = +t),
                  Number.isNaN(i) ||
                    (null != (o = r[t]) && (a = wr(n, i)) && a(e, o, i));
            }
            if ((t = de ? t[de] : void 0))
              for (It(e, e.g.end()), n = 0; n < t.length; n++)
                It(e, B(t[n]) || I());
          }
          function Er(t, e) {
            return new Gt(t, e, !1, !1);
          }
          function Tr(t, e) {
            return new Gt(t, e, !0, !1);
          }
          function Ar(t, e) {
            return new Gt(t, e, !1, !0);
          }
          function xr(t, e, n) {
            pn(t, Jt(t), e, n);
          }
          var kr = Ar(
            function (t, e, n, r, i) {
              return (
                2 === t.h &&
                ((t = _t(t, Ge([void 0, void 0], r), i)),
                le((r = Jt(e))),
                (i = fn(e, r, n)) instanceof Ye
                  ? 2 & i.N
                    ? ((i = i.Y()).push(t), pn(e, r, n, i))
                    : i.Oa(t)
                  : Array.isArray(i)
                  ? (2 & $t(i) && pn(e, r, n, (i = En(i))), i.push(t))
                  : pn(e, r, n, [t]),
                !0)
              );
            },
            function (t, e, n, r, i) {
              if (e instanceof Ye)
                e.forEach((e, o) => {
                  Bt(t, n, Ge([o, e], r), i);
                });
              else if (Array.isArray(e))
                for (let o = 0; o < e.length; o++) {
                  const s = e[o];
                  Array.isArray(s) && Bt(t, n, Ge(s, r), i);
                }
            },
          );
          function Lr(t, e, n) {
            t: if (null != e) {
              if (Te(e)) {
                if ('string' == typeof e) {
                  e = Oe(e);
                  break t;
                }
                if ('number' == typeof e) {
                  e = Se(e);
                  break t;
                }
              }
              e = void 0;
            }
            null != e &&
              ('string' == typeof e && Lt(e),
              null != e &&
                (Ct(t, n, 0),
                'number' == typeof e
                  ? ((t = t.g), $(e), Ft(t, Y, q))
                  : ((n = Lt(e)), Ft(t.g, n.h, n.g))));
          }
          function Sr(t, e, n) {
            null != (e = Ae(e)) && null != e && (Ct(t, n, 0), Mt(t.g, e));
          }
          function Or(t, e, n) {
            null != (e = be(e)) && (Ct(t, n, 0), t.g.g.push(e ? 1 : 0));
          }
          function Fr(t, e, n) {
            null != (e = Re(e)) && Nt(t, n, l(e));
          }
          function Pr(t, e, n, r, i) {
            Bt(
              t,
              n,
              e instanceof Kn ? e.s : Array.isArray(e) ? Ge(e, r) : void 0,
              i,
            );
          }
          function Mr(t, e, n) {
            null !=
              (e =
                null == e || 'string' == typeof e || M(e) || e instanceof G
                  ? e
                  : void 0) && Nt(t, n, X(e).buffer);
          }
          function Rr(t, e, n) {
            return (
              (5 === t.h || 2 === t.h) &&
              ((e = gn(e, Jt(e), n, 2, !1)),
              2 == t.h ? Et(t, ut, e) : e.push(ut(t.g)),
              !0)
            );
          }
          var Ir,
            Cr = Er(
              function (t, e, n) {
                if (1 !== t.h) return !1;
                var r = t.g;
                t = ht(r);
                const i = ht(r);
                r = 2 * (i >> 31) + 1;
                const o = (i >>> 20) & 2047;
                return (
                  (t = 4294967296 * (1048575 & i) + t),
                  xr(
                    e,
                    n,
                    2047 == o
                      ? t
                        ? NaN
                        : (1 / 0) * r
                      : 0 == o
                      ? r * Math.pow(2, -1074) * t
                      : r * Math.pow(2, o - 1075) * (t + 4503599627370496),
                  ),
                  !0
                );
              },
              function (t, e, n) {
                null != (e = we(e)) &&
                  (Ct(t, n, 1),
                  (t = t.g),
                  (n = K ||= new DataView(new ArrayBuffer(8))).setFloat64(
                    0,
                    +e,
                    !0,
                  ),
                  (Y = n.getUint32(0, !0)),
                  (q = n.getUint32(4, !0)),
                  Rt(t, Y),
                  Rt(t, q));
              },
            ),
            Dr = Er(
              function (t, e, n) {
                return 5 === t.h && (xr(e, n, ut(t.g)), !0);
              },
              function (t, e, n) {
                null != (e = we(e)) && (Ct(t, n, 5), (t = t.g), J(e), Rt(t, Y));
              },
            ),
            Ur = Tr(Rr, function (t, e, n) {
              if (null != (e = $n(we, e)))
                for (let s = 0; s < e.length; s++) {
                  var r = t,
                    i = n,
                    o = e[s];
                  null != o && (Ct(r, i, 5), (r = r.g), J(o), Rt(r, Y));
                }
            }),
            Nr = Tr(Rr, function (t, e, n) {
              if (null != (e = $n(we, e)) && e.length) {
                Ct(t, n, 2), Pt(t.g, 4 * e.length);
                for (let r = 0; r < e.length; r++) (n = t.g), J(e[r]), Rt(n, Y);
              }
            }),
            Br = Er(function (t, e, n) {
              return 0 === t.h && (xr(e, n, ot(t.g, Q)), !0);
            }, Lr),
            Gr = Er(function (t, e, n) {
              return (
                0 === t.h && (xr(e, n, 0 === (t = ot(t.g, Q)) ? void 0 : t), !0)
              );
            }, Lr),
            jr = Er(
              function (t, e, n) {
                return 0 === t.h && (xr(e, n, ot(t.g, Z)), !0);
              },
              function (t, e, n) {
                t: if (null != e) {
                  if (Te(e)) {
                    if ('string' == typeof e) {
                      var r = Math.trunc(Number(e));
                      Number.isSafeInteger(r) && 0 <= r
                        ? (e = String(r))
                        : (-1 !== (r = e.indexOf('.')) &&
                            (e = e.substring(0, r)),
                          ke(e) || (rt(e), (e = tt(Y, q))));
                      break t;
                    }
                    if ('number' == typeof e) {
                      e =
                        0 <= (e = Math.trunc(e)) && Number.isSafeInteger(e)
                          ? e
                          : (function (t) {
                              if (0 > t) {
                                $(t);
                                const e = tt(Y, q);
                                return (
                                  (t = Number(e)),
                                  Number.isSafeInteger(t) ? t : e
                                );
                              }
                              return ke(String(t)) ? t : ($(t), Z(Y, q));
                            })(e);
                      break t;
                    }
                  }
                  e = void 0;
                }
                null != e &&
                  ('string' == typeof e && At(e),
                  null != e &&
                    (Ct(t, n, 0),
                    'number' == typeof e
                      ? ((t = t.g), $(e), Ft(t, Y, q))
                      : ((n = At(e)), Ft(t.g, n.h, n.g))));
              },
            ),
            Vr = Er(function (t, e, n) {
              return 0 === t.h && (xr(e, n, at(t.g)), !0);
            }, Sr),
            Hr = Tr(
              function (t, e, n) {
                return (
                  (0 === t.h || 2 === t.h) &&
                  ((e = gn(e, Jt(e), n, 2, !1)),
                  2 == t.h ? Et(t, at, e) : e.push(at(t.g)),
                  !0)
                );
              },
              function (t, e, n) {
                if (null != (e = $n(Ae, e)) && e.length) {
                  n = Dt(t, n);
                  for (let n = 0; n < e.length; n++) Mt(t.g, e[n]);
                  Ut(t, n);
                }
              },
            ),
            Xr = Er(function (t, e, n) {
              return (
                0 === t.h && (xr(e, n, 0 === (t = at(t.g)) ? void 0 : t), !0)
              );
            }, Sr),
            zr = Er(function (t, e, n) {
              return 0 === t.h && (xr(e, n, st(t.g)), !0);
            }, Or),
            Wr = Er(function (t, e, n) {
              return (
                0 === t.h && (xr(e, n, !1 === (t = st(t.g)) ? void 0 : t), !0)
              );
            }, Or),
            Kr = Tr(
              function (t, e, n) {
                return 2 === t.h && (xn(e, n, kn, (t = wt(t))), !0);
              },
              function (t, e, n) {
                if (null != (e = $n(Re, e)))
                  for (let s = 0; s < e.length; s++) {
                    var r = t,
                      i = n,
                      o = e[s];
                    null != o && Nt(r, i, l(o));
                  }
              },
            ),
            Yr = Er(function (t, e, n) {
              return (
                2 === t.h && (xr(e, n, '' === (t = wt(t)) ? void 0 : t), !0)
              );
            }, Fr),
            qr = Er(function (t, e, n) {
              return 2 === t.h && (xr(e, n, wt(t)), !0);
            }, Fr),
            $r = Ar(function (t, e, n, r, i) {
              return 2 === t.h && (_t(t, On(e, r, n, !0), i), !0);
            }, Pr),
            Jr = Ar(function (t, e, n, r, i) {
              return 2 === t.h && (_t(t, On(e, r, n), i), !0);
            }, Pr);
          Ir = new Gt(
            function (t, e, n, r, i) {
              if (2 !== t.h) return !1;
              r = Ge(void 0, r);
              let o = Jt(e);
              le(o);
              let s = gn(e, o, n, 3);
              return (
                (o = Jt(e)),
                4 & $t(s) &&
                  ((s = jt(s)), Zt(s, (-2079 & $t(s)) | 1), pn(e, o, n, s)),
                s.push(r),
                _t(t, r, i),
                !0
              );
            },
            function (t, e, n, r, i) {
              if (Array.isArray(e))
                for (let o = 0; o < e.length; o++) Pr(t, e[o], n, r, i);
            },
            !0,
            !0,
          );
          var Zr = Ar(function (t, e, n, r, i, o) {
              if (2 !== t.h) return !1;
              let s = Jt(e);
              return (
                le(s),
                (o = Sn(e, s, o)) && n !== o && pn(e, s, o),
                _t(t, (e = On(e, r, n)), i),
                !0
              );
            }, Pr),
            Qr = Er(function (t, e, n) {
              return 2 === t.h && (xr(e, n, bt(t)), !0);
            }, Mr),
            ti = Tr(
              function (t, e, n) {
                return (
                  (0 === t.h || 2 === t.h) &&
                  ((e = gn(e, Jt(e), n, 2, !1)),
                  2 == t.h ? Et(t, ct, e) : e.push(ct(t.g)),
                  !0)
                );
              },
              function (t, e, n) {
                if (null != (e = $n(xe, e)))
                  for (let s = 0; s < e.length; s++) {
                    var r = t,
                      i = n,
                      o = e[s];
                    null != o && (Ct(r, i, 0), Pt(r.g, o));
                  }
              },
            ),
            ei = Er(
              function (t, e, n) {
                return 0 === t.h && (xr(e, n, at(t.g)), !0);
              },
              function (t, e, n) {
                null != (e = Ae(e)) &&
                  ((e = parseInt(e, 10)), Ct(t, n, 0), Mt(t.g, e));
              },
            ),
            ni = Tr(
              function (t, e, n) {
                return (
                  (0 === t.h || 2 === t.h) &&
                  ((e = gn(e, Jt(e), n, 2, !1)),
                  2 == t.h ? Et(t, lt, e) : e.push(at(t.g)),
                  !0)
                );
              },
              function (t, e, n) {
                if (null != (e = $n(Ae, e)) && e.length) {
                  n = Dt(t, n);
                  for (let n = 0; n < e.length; n++) Mt(t.g, e[n]);
                  Ut(t, n);
                }
              },
            );
          class ri {
            constructor(t, e) {
              (this.h = t),
                (this.g = e),
                (this.l = Pn),
                (this.m = In),
                (this.defaultValue = void 0);
            }
          }
          function ii(t, e) {
            return new ri(t, e);
          }
          function oi(t, e) {
            return (n, r) => {
              if (Tt.length) {
                const t = Tt.pop();
                t.o(r), ft(t.g, n, r), (n = t);
              } else
                n = new (class {
                  constructor(t, e) {
                    if (mt.length) {
                      const n = mt.pop();
                      ft(n, t, e), (t = n);
                    } else
                      t = new (class {
                        constructor(t, e) {
                          (this.h = null),
                            (this.m = !1),
                            (this.g = this.l = this.j = 0),
                            ft(this, t, e);
                        }
                        clear() {
                          (this.h = null),
                            (this.m = !1),
                            (this.g = this.l = this.j = 0),
                            (this.ca = !1);
                        }
                      })(t, e);
                    (this.g = t),
                      (this.l = this.g.g),
                      (this.h = this.m = -1),
                      this.o(e);
                  }
                  o({ ia: t = !1 } = {}) {
                    this.ia = t;
                  }
                })(n, r);
              try {
                const r = new t(),
                  o = r.s;
                Zn(e)(o, n);
                var i = r;
              } finally {
                n.g.clear(),
                  (n.m = -1),
                  (n.h = -1),
                  100 > Tt.length && Tt.push(n);
              }
              return i;
            };
          }
          function si(t) {
            return function () {
              const e = new (class {
                constructor() {
                  (this.l = []),
                    (this.h = 0),
                    (this.g = new (class {
                      constructor() {
                        this.g = [];
                      }
                      length() {
                        return this.g.length;
                      }
                      end() {
                        const t = this.g;
                        return (this.g = []), t;
                      }
                    })());
                }
              })();
              br(this.s, e, pr(t)), It(e, e.g.end());
              const n = new Uint8Array(e.h),
                r = e.l,
                i = r.length;
              let o = 0;
              for (let t = 0; t < i; t++) {
                const e = r[t];
                n.set(e, o), (o += e.length);
              }
              return (e.l = [n]), n;
            };
          }
          var ai = class extends Kn {
              constructor(t) {
                super(t);
              }
            },
            ci = [
              0,
              Yr,
              Er(
                function (t, e, n) {
                  return (
                    2 === t.h &&
                    (xr(e, n, (t = bt(t)) === N() ? void 0 : t), !0)
                  );
                },
                function (t, e, n) {
                  if (null != e) {
                    if (e instanceof Kn) {
                      const r = e.Qa;
                      return void (
                        r && ((e = r(e)), null != e && Nt(t, n, X(e).buffer))
                      );
                    }
                    if (Array.isArray(e)) return;
                  }
                  Mr(t, e, n);
                },
              ),
            ],
            hi = [0, qr],
            ui = [0, Vr, ei, zr, -1, Hr, ei, -1],
            li = [0, zr, -1],
            fi = class extends Kn {
              constructor() {
                super();
              }
            };
          fi.B = [6];
          var di = [0, zr, qr, zr, ei, -1, ni, qr, -1, li, ei],
            pi = [0, qr, -2],
            gi = class extends Kn {
              constructor() {
                super();
              }
            },
            mi = [0],
            yi = [0, Vr, zr, -4],
            vi = class extends Kn {
              constructor(t) {
                super(t, 2);
              }
            },
            _i = {},
            wi = [-2, _i, zr];
          _i[336783863] = [
            0,
            qr,
            zr,
            -1,
            Vr,
            [
              0,
              [1, 2, 3, 4, 5, 6],
              Zr,
              mi,
              Zr,
              di,
              Zr,
              pi,
              Zr,
              yi,
              Zr,
              ui,
              Zr,
              [0, qr],
            ],
            hi,
            zr,
            [
              0,
              [1, 3],
              [2, 4],
              Zr,
              [0, Hr],
              -1,
              Zr,
              [0, Kr],
              -1,
              Ir,
              [0, qr, -1],
            ],
            qr,
          ];
          var bi = [0, Yr, Wr],
            Ei = [
              0,
              Gr,
              -1,
              Wr,
              -3,
              Gr,
              Hr,
              Yr,
              Xr,
              Gr,
              -1,
              Wr,
              Xr,
              Wr,
              -2,
              Yr,
            ],
            Ti = [-1, {}],
            Ai = [0, qr, 1, Ti],
            xi = [0, qr, Kr, Ti];
          function ki(t, e) {
            An(t, 2, Me(e), '');
          }
          function Li(t, e) {
            xn(t.s, 3, Pe, e);
          }
          function Si(t, e) {
            xn(t.s, 4, Pe, e);
          }
          var Oi = class extends Kn {
            constructor(t) {
              super(t, 500);
            }
            o(t) {
              return In(this, 0, 7, t);
            }
          };
          Oi.B = [3, 4, 5, 6, 8, 13, 17, 1005];
          var Fi = [
              -500,
              Yr,
              -1,
              Kr,
              -3,
              wi,
              Ir,
              ci,
              Xr,
              -1,
              Ai,
              xi,
              Ir,
              bi,
              Yr,
              Ei,
              Xr,
              Kr,
              987,
              Kr,
            ],
            Pi = [0, Yr, -1, Ti],
            Mi = [-500, qr, -1, [-1, {}], 998, qr],
            Ri = [-500, qr, Kr, -1, [-2, {}, zr], 997, Kr, -1],
            Ii = [-500, qr, Kr, Ti, 998, Kr];
          function Ci(t, e) {
            Nn(t, 1, Oi, e);
          }
          function Di(t, e) {
            xn(t.s, 10, Pe, e);
          }
          function Ui(t, e) {
            xn(t.s, 15, Pe, e);
          }
          var Ni = class extends Kn {
            constructor(t) {
              super(t, 500);
            }
            o(t) {
              return In(this, 0, 1001, t);
            }
          };
          Ni.B = [1, 6, 7, 9, 10, 15, 16, 17, 14, 1002];
          var Bi = [
              -500,
              Ir,
              Fi,
              4,
              Ir,
              Mi,
              Ir,
              Ri,
              Xr,
              Ir,
              Ii,
              Kr,
              Xr,
              Ai,
              xi,
              Ir,
              Pi,
              Kr,
              -2,
              Ei,
              Yr,
              -1,
              Wr,
              979,
              Ti,
              Ir,
              ci,
            ],
            Gi = oi(Ni, Bi);
          Ni.prototype.g = si(Bi);
          var ji = [0, Ir, [0, Vr, -2]],
            Vi = class extends Kn {
              constructor(t) {
                super(t);
              }
            },
            Hi = [0, Vr, Dr, qr, -1],
            Xi = class extends Kn {
              constructor(t) {
                super(t);
              }
              g() {
                return Rn(this, Vi, 1);
              }
            };
          Xi.B = [1];
          var zi = [0, Ir, Hi],
            Wi = oi(Xi, zi),
            Ki = [0, Vr, Dr],
            Yi = [0, Vr, -1, ji],
            qi = class extends Kn {
              constructor(t) {
                super(t);
              }
            },
            $i = [0, Vr, -3],
            Ji = [0, Dr, -3],
            Zi = class extends Kn {
              constructor(t) {
                super(t);
              }
            },
            Qi = [0, Dr, -1, qr, Dr],
            to = class extends Kn {
              constructor(t) {
                super(t);
              }
              h() {
                return Pn(this, qi, 2);
              }
              g() {
                return Rn(this, Zi, 5);
              }
            };
          to.B = [5];
          var eo = [0, ei, $i, Ji, Yi, Ir, Qi],
            no = class extends Kn {
              constructor(t) {
                super(t);
              }
            };
          no.B = [1, 2, 3, 8, 9];
          var ro = oi(no, [0, Kr, Hr, Nr, eo, qr, -1, Br, Ir, Ki, Kr, Br]),
            io = class extends Kn {
              constructor(t) {
                super(t);
              }
            },
            oo = [0, Dr, -4],
            so = class extends Kn {
              constructor(t) {
                super(t);
              }
            };
          so.B = [1];
          var ao = oi(so, [0, Ir, oo]),
            co = class extends Kn {
              constructor(t) {
                super(t);
              }
            },
            ho = [0, Dr, -4],
            uo = class extends Kn {
              constructor(t) {
                super(t);
              }
            };
          uo.B = [1];
          var lo = oi(uo, [0, Ir, ho]),
            fo = class extends Kn {
              constructor(t) {
                super(t);
              }
            };
          fo.B = [3];
          var po = [0, Vr, -1, Nr, ei],
            go = class extends Kn {
              constructor() {
                super();
              }
            };
          go.prototype.g = si([0, Dr, -4, Br]);
          var mo = class extends Kn {
              constructor(t) {
                super(t);
              }
            },
            yo = [0, 1, Vr, qr, zi],
            vo = class extends Kn {
              constructor(t) {
                super(t);
              }
            };
          vo.B = [1];
          var _o = oi(vo, [0, Ir, yo, Br]),
            wo = class extends Kn {
              constructor(t) {
                super(t);
              }
            };
          wo.B = [1];
          var bo = class extends Kn {
              constructor(t) {
                super(t);
              }
              qa() {
                const t = yn(this);
                return null == t ? N() : t;
              }
            },
            Eo = class extends Kn {
              constructor(t) {
                super(t);
              }
            },
            To = [1, 2],
            Ao = [0, To, Zr, [0, Nr], Zr, [0, Qr], Vr, qr],
            xo = class extends Kn {
              constructor(t) {
                super(t);
              }
            };
          xo.B = [1];
          var ko = oi(xo, [0, Ir, Ao, Br]),
            Lo = class extends Kn {
              constructor(t) {
                super(t);
              }
            };
          Lo.B = [4, 5];
          var So = [0, qr, Vr, Dr, Kr, -1],
            Oo = class extends Kn {
              constructor(t) {
                super(t);
              }
            },
            Fo = [0, zr, -1],
            Po = class extends Kn {
              constructor(t) {
                super(t);
              }
            },
            Mo = [1, 2, 3, 4, 5],
            Ro = class extends Kn {
              constructor(t) {
                super(t);
              }
              g() {
                return null != yn(this);
              }
              h() {
                return null != Re(un(this, 2));
              }
            },
            Io = [0, Qr, qr, [0, Vr, Br, -1], [0, jr, Br]],
            Co = class extends Kn {
              constructor(t) {
                super(t);
              }
              g() {
                return be(un(this, 2)) ?? !1;
              }
            },
            Do = [
              0,
              Io,
              zr,
              [0, Mo, Zr, yi, Zr, di, Zr, ui, Zr, mi, Zr, pi],
              ei,
            ],
            Uo = class extends Kn {
              constructor(t) {
                super(t);
              }
            },
            No = [0, Do, Dr, -1, Vr],
            Bo = ii(502141897, Uo);
          _i[502141897] = No;
          var Go = [0, Io];
          _i[512499200] = Go;
          var jo = [0, Go];
          _i[515723506] = jo;
          var Vo = oi(
              class extends Kn {
                constructor(t) {
                  super(t);
                }
              },
              [0, [0, ei, -1, Ur, ti], po],
            ),
            Ho = [0, Do];
          _i[508981768] = Ho;
          var Xo = class extends Kn {
              constructor(t) {
                super(t);
              }
            },
            zo = [0, Do, Dr, Ho, zr],
            Wo = class extends Kn {
              constructor(t) {
                super(t);
              }
            },
            Ko = [0, Do, No, zo, Dr, jo];
          _i[508968149] = zo;
          var Yo = ii(508968150, Wo);
          _i[508968150] = Ko;
          var qo = class extends Kn {
              constructor(t) {
                super(t);
              }
            },
            $o = ii(513916220, qo);
          _i[513916220] = [0, Do, Ko, Vr];
          var Jo = class extends Kn {
              constructor(t) {
                super(t);
              }
              h() {
                return Pn(this, Lo, 2);
              }
              g() {
                dn(this, 2);
              }
            },
            Zo = [0, Do, So];
          _i[478825465] = Zo;
          var Qo = [0, Do];
          _i[478825422] = Qo;
          var ts = class extends Kn {
              constructor(t) {
                super(t);
              }
            },
            es = [0, Do, Qo, Zo, -1],
            ns = class extends Kn {
              constructor(t) {
                super(t);
              }
            },
            rs = [0, Do, Dr, Vr],
            is = class extends Kn {
              constructor(t) {
                super(t);
              }
            },
            os = [0, Do, Dr],
            ss = class extends Kn {
              constructor(t) {
                super(t);
              }
            },
            as = [0, Do, rs, os, Dr],
            cs = class extends Kn {
              constructor(t) {
                super(t);
              }
            },
            hs = [0, Do, as, es];
          (_i[463370452] = es), (_i[464864288] = rs), (_i[474472470] = os);
          var us = ii(462713202, ss);
          _i[462713202] = as;
          var ls = ii(479097054, cs);
          _i[479097054] = hs;
          var fs = class extends Kn {
              constructor(t) {
                super(t);
              }
            },
            ds = [0, Do],
            ps = class extends Kn {
              constructor(t) {
                super(t);
              }
            },
            gs = [0, Do, Dr, -1, Vr];
          _i[514774813] = gs;
          var ms = class extends Kn {
              constructor(t) {
                super(t);
              }
            },
            ys = [0, Do, Dr, zr];
          _i[518928384] = ys;
          var vs = class extends Kn {
            constructor() {
              super();
            }
          };
          vs.prototype.g = si([0, Do, os, ds, No, zo, gs, ys]);
          var _s = class extends Kn {
              constructor(t) {
                super(t);
              }
            },
            ws = ii(456383383, _s);
          _i[456383383] = [0, Do, So];
          var bs = class extends Kn {
              constructor(t) {
                super(t);
              }
            },
            Es = ii(476348187, bs);
          _i[476348187] = [0, Do, Fo];
          var Ts = class extends Kn {
              constructor(t) {
                super(t);
              }
            },
            As = [0, ei, -1],
            xs = class extends Kn {
              constructor(t) {
                super(t);
              }
            };
          xs.B = [3];
          var ks = ii(
            458105876,
            class extends Kn {
              constructor(t) {
                super(t);
              }
              g() {
                var t = this.s;
                const e = Jt(t);
                var n = 2 & e;
                return (
                  (t = (function (t, e, n) {
                    var r = xs;
                    const i = 2 & e;
                    let o = !1;
                    if (null == n) {
                      if (i) return Qe();
                      n = [];
                    } else if (n.constructor === Ye) {
                      if (!(2 & n.N) || i) return n;
                      n = n.Y();
                    } else Array.isArray(n) ? (o = !!(2 & $t(n))) : (n = []);
                    if (i) {
                      if (!n.length) return Qe();
                      o || ((o = !0), Qt(n));
                    } else o && ((o = !1), (n = En(n)));
                    return (
                      o || (64 & $t(n) ? Yt(n, 32) : 32 & e && Kt(n, 32)),
                      pn(t, e, 2, (r = new Ye(n, r, Ce, void 0)), !1),
                      r
                    );
                  })(t, e, fn(t, e, 2))),
                  null == t || (!n && xs && (t.ta = !0)),
                  t
                );
              }
            },
          );
          _i[458105876] = [0, As, kr, [!0, Br, [0, qr, -1, Kr]]];
          var Ls = class extends Kn {
              constructor(t) {
                super(t);
              }
            },
            Ss = ii(458105758, Ls);
          _i[458105758] = [0, Do, qr, As];
          var Os = class extends Kn {
            constructor(t) {
              super(t);
            }
          };
          Os.B = [5, 6];
          var Fs = ii(443442058, Os);
          _i[443442058] = [0, Do, qr, Vr, Dr, Kr, -1];
          var Ps = class extends Kn {
              constructor(t) {
                super(t);
              }
            },
            Ms = ii(516587230, Ps);
          function Rs(t, e) {
            return (
              (e = e ? e.clone() : new Lo()),
              void 0 !== t.displayNamesLocale
                ? dn(e, 1, Me(t.displayNamesLocale))
                : void 0 === t.displayNamesLocale && dn(e, 1),
              void 0 !== t.maxResults
                ? Xn(e, 2, t.maxResults)
                : 'maxResults' in t && dn(e, 2),
              void 0 !== t.scoreThreshold
                ? zn(e, 3, t.scoreThreshold)
                : 'scoreThreshold' in t && dn(e, 3),
              void 0 !== t.categoryAllowlist
                ? Tn(e, 4, t.categoryAllowlist)
                : 'categoryAllowlist' in t && dn(e, 4),
              void 0 !== t.categoryDenylist
                ? Tn(e, 5, t.categoryDenylist)
                : 'categoryDenylist' in t && dn(e, 5),
              e
            );
          }
          function Is(t, e = -1, n = '') {
            return {
              categories: t.map((t) => ({
                index: Gn(Bn(t, 1), 0) ?? -1,
                score: jn(t, 2) ?? 0,
                categoryName: Vn(t, 3) ?? '',
                displayName: Vn(t, 4) ?? '',
              })),
              headIndex: e,
              headName: n,
            };
          }
          function Cs(t) {
            var e = vn(t, 3, we),
              n = vn(t, 2, Ae),
              r = vn(t, 1, Re),
              i = vn(t, 9, Re);
            const o = { categories: [], keypoints: [] };
            for (let t = 0; t < e.length; t++)
              o.categories.push({
                score: e[t],
                index: n[t] ?? -1,
                categoryName: r[t] ?? '',
                displayName: i[t] ?? '',
              });
            if (
              ((e = Pn(t, to, 4)?.h()) &&
                (o.boundingBox = {
                  originX: Bn(e, 1) ?? 0,
                  originY: Bn(e, 2) ?? 0,
                  width: Bn(e, 3) ?? 0,
                  height: Bn(e, 4) ?? 0,
                  angle: 0,
                }),
              Pn(t, to, 4)?.g().length)
            )
              for (const e of Pn(t, to, 4).g())
                o.keypoints.push({
                  x: mn(e, 1) ?? 0,
                  y: mn(e, 2) ?? 0,
                  score: mn(e, 4) ?? 0,
                  label: Re(un(e, 3)) ?? '',
                });
            return o;
          }
          function Ds(t) {
            const e = [];
            for (const n of Rn(t, co, 1))
              e.push({
                x: jn(n, 1) ?? 0,
                y: jn(n, 2) ?? 0,
                z: jn(n, 3) ?? 0,
                visibility: jn(n, 4) ?? 0,
              });
            return e;
          }
          function Us(t) {
            const e = [];
            for (const n of Rn(t, io, 1))
              e.push({
                x: jn(n, 1) ?? 0,
                y: jn(n, 2) ?? 0,
                z: jn(n, 3) ?? 0,
                visibility: jn(n, 4) ?? 0,
              });
            return e;
          }
          function Ns(t) {
            return Array.from(t, (t) => (127 < t ? t - 256 : t));
          }
          function Bs(t, e) {
            if (t.length !== e.length)
              throw Error(
                `Cannot compute cosine similarity between embeddings of different sizes (${t.length} vs. ${e.length}).`,
              );
            let n = 0,
              r = 0,
              i = 0;
            for (let o = 0; o < t.length; o++)
              (n += t[o] * e[o]), (r += t[o] * t[o]), (i += e[o] * e[o]);
            if (0 >= r || 0 >= i)
              throw Error(
                'Cannot compute cosine similarity on embedding with 0 norm.',
              );
            return n / Math.sqrt(r * i);
          }
          let Gs;
          _i[516587230] = [0, Do, gs, ys, Dr];
          const js = new Uint8Array([
            0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 123, 3, 2, 1, 0, 10,
            10, 1, 8, 0, 65, 0, 253, 15, 253, 98, 11,
          ]);
          async function Vs() {
            if (void 0 === Gs)
              try {
                await WebAssembly.instantiate(js), (Gs = !0);
              } catch {
                Gs = !1;
              }
            return Gs;
          }
          async function Hs(t, e = '') {
            const n = (await Vs()) ? 'wasm_internal' : 'wasm_nosimd_internal';
            return {
              wasmLoaderPath: `${e}/${t}_${n}.js`,
              wasmBinaryPath: `${e}/${t}_${n}.wasm`,
            };
          }
          var Xs = class {};
          function zs() {
            var t = navigator;
            return !(
              'undefined' == typeof OffscreenCanvas ||
              ((function (t = navigator) {
                return (
                  (t = t.userAgent).includes('Safari') && !t.includes('Chrome')
                );
              })(t) &&
                !(
                  (t = t.userAgent.match(/Version\/([\d]+).*Safari/)) &&
                  1 <= t.length &&
                  17 <= Number(t[1])
                ))
            );
          }
          async function Ws(t) {
            if ('function' != typeof importScripts) {
              const e = document.createElement('script');
              return (
                (e.src = t.toString()),
                (e.crossOrigin = 'anonymous'),
                new Promise((t, n) => {
                  e.addEventListener(
                    'load',
                    () => {
                      t();
                    },
                    !1,
                  ),
                    e.addEventListener(
                      'error',
                      (t) => {
                        n(t);
                      },
                      !1,
                    ),
                    document.body.appendChild(e);
                })
              );
            }
            importScripts(t.toString());
          }
          function Ks(t) {
            return void 0 !== t.videoWidth
              ? [t.videoWidth, t.videoHeight]
              : void 0 !== t.naturalWidth
              ? [t.naturalWidth, t.naturalHeight]
              : void 0 !== t.displayWidth
              ? [t.displayWidth, t.displayHeight]
              : [t.width, t.height];
          }
          function Ys(t, e, n) {
            t.m ||
              console.error(
                'No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target',
              ),
              n((e = t.i.stringToNewUTF8(e))),
              t.i._free(e);
          }
          function qs(t, e, n) {
            if (!t.i.canvas) throw Error('No OpenGL canvas configured.');
            if (
              (n ? t.i._bindTextureToStream(n) : t.i._bindTextureToCanvas(),
              !(n =
                t.i.canvas.getContext('webgl2') ||
                t.i.canvas.getContext('webgl')))
            )
              throw Error(
                'Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.',
              );
            t.i.gpuOriginForWebTexturesIsBottomLeft &&
              n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, !0),
              n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, e),
              t.i.gpuOriginForWebTexturesIsBottomLeft &&
                n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, !1);
            const [r, i] = Ks(e);
            return (
              !t.l ||
                (r === t.i.canvas.width && i === t.i.canvas.height) ||
                ((t.i.canvas.width = r), (t.i.canvas.height = i)),
              [r, i]
            );
          }
          function $s(t, e, n) {
            t.m ||
              console.error(
                'No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target',
              );
            const r = new Uint32Array(e.length);
            for (let n = 0; n < e.length; n++) r[n] = t.i.stringToNewUTF8(e[n]);
            (e = t.i._malloc(4 * r.length)), t.i.HEAPU32.set(r, e >> 2), n(e);
            for (const e of r) t.i._free(e);
            t.i._free(e);
          }
          function Js(t, e, n) {
            (t.i.simpleListeners = t.i.simpleListeners || {}),
              (t.i.simpleListeners[e] = n);
          }
          function Zs(t, e, n) {
            let r = [];
            (t.i.simpleListeners = t.i.simpleListeners || {}),
              (t.i.simpleListeners[e] = (t, e, i) => {
                e ? (n(r, i), (r = [])) : r.push(t);
              });
          }
          function Qs(t, e) {
            const n = Pn(t.baseOptions, Ro, 1) || new Ro();
            'string' == typeof e
              ? (dn(n, 2, Me(e)), dn(n, 1))
              : e instanceof Uint8Array && (dn(n, 1, ce(e, !1, !1)), dn(n, 2)),
              In(t.baseOptions, 0, 1, n);
          }
          function ta(t) {
            try {
              const e = t.K.length;
              if (1 === e) throw Error(t.K[0].message);
              if (1 < e)
                throw Error(
                  'Encountered multiple errors: ' +
                    t.K.map((t) => t.message).join(', '),
                );
            } finally {
              t.K = [];
            }
          }
          function ea(t, e) {
            t.J = Math.max(t.J, e);
          }
          function na(t, e) {
            (t.C = new Oi()),
              ki(t.C, 'PassThroughCalculator'),
              Li(t.C, 'free_memory'),
              Si(t.C, 'free_memory_unused_out'),
              Di(e, 'free_memory'),
              Ci(e, t.C);
          }
          function ra(t, e) {
            Li(t.C, e), Si(t.C, e + '_unused_out');
          }
          function ia(t) {
            t.g.addBoolToStream(!0, 'free_memory', t.J);
          }
          (Xs.forVisionTasks = function (t) {
            return Hs('vision', t);
          }),
            (Xs.forTextTasks = function (t) {
              return Hs('text', t);
            }),
            (Xs.forGenAiExperimentalTasks = function (t) {
              return Hs('genai_experimental', t);
            }),
            (Xs.forGenAiTasks = function (t) {
              return Hs('genai', t);
            }),
            (Xs.forAudioTasks = function (t) {
              return Hs('audio', t);
            }),
            (Xs.isSimdSupported = function () {
              return Vs();
            });
          var oa = class {
            constructor(t) {
              (this.g = t),
                (this.K = []),
                (this.J = 0),
                this.g.setAutoRenderToScreen(!1);
            }
            l(t, e = !0) {
              if (e) {
                const e = t.baseOptions || {};
                if (
                  t.baseOptions?.modelAssetBuffer &&
                  t.baseOptions?.modelAssetPath
                )
                  throw Error(
                    'Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer',
                  );
                if (
                  !(
                    Pn(this.baseOptions, Ro, 1)?.g() ||
                    Pn(this.baseOptions, Ro, 1)?.h() ||
                    t.baseOptions?.modelAssetBuffer ||
                    t.baseOptions?.modelAssetPath
                  )
                )
                  throw Error(
                    'Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set',
                  );
                if (
                  ((function (t, e) {
                    let n = Pn(t.baseOptions, Po, 3);
                    if (!n) {
                      var r = (n = new Po()),
                        i = new gi();
                      Cn(r, 4, Mo, i);
                    }
                    'delegate' in e &&
                      ('GPU' === e.delegate
                        ? ((e = n), (r = new fi()), Cn(e, 2, Mo, r))
                        : ((e = n), (r = new gi()), Cn(e, 4, Mo, r))),
                      In(t.baseOptions, 0, 3, n);
                  })(this, e),
                  e.modelAssetPath)
                )
                  return fetch(e.modelAssetPath.toString())
                    .then((t) => {
                      if (t.ok) return t.arrayBuffer();
                      throw Error(
                        `Failed to fetch model: ${e.modelAssetPath} (${t.status})`,
                      );
                    })
                    .then((t) => {
                      try {
                        this.g.i.FS_unlink('/model.dat');
                      } catch {}
                      this.g.i.FS_createDataFile(
                        '/',
                        'model.dat',
                        new Uint8Array(t),
                        !0,
                        !1,
                        !1,
                      ),
                        Qs(this, '/model.dat'),
                        this.m(),
                        this.L();
                    });
                if (e.modelAssetBuffer instanceof Uint8Array)
                  Qs(this, e.modelAssetBuffer);
                else if (e.modelAssetBuffer)
                  return (async function (t) {
                    const e = [];
                    for (var n = 0; ; ) {
                      const { done: r, value: i } = await t.read();
                      if (r) break;
                      e.push(i), (n += i.length);
                    }
                    if (0 === e.length) return new Uint8Array(0);
                    if (1 === e.length) return e[0];
                    (t = new Uint8Array(n)), (n = 0);
                    for (const r of e) t.set(r, n), (n += r.length);
                    return t;
                  })(e.modelAssetBuffer).then((t) => {
                    Qs(this, t), this.m(), this.L();
                  });
              }
              return this.m(), this.L(), Promise.resolve();
            }
            L() {}
            fa() {
              let t;
              if (
                (this.g.fa((e) => {
                  t = Gi(e);
                }),
                !t)
              )
                throw Error('Failed to retrieve CalculatorGraphConfig');
              return t;
            }
            setGraph(t, e) {
              this.g.attachErrorListener((t, e) => {
                this.K.push(Error(e));
              }),
                this.g.Ma(),
                this.g.setGraph(t, e),
                (this.C = void 0),
                ta(this);
            }
            finishProcessing() {
              this.g.finishProcessing(), ta(this);
            }
            close() {
              (this.C = void 0), this.g.closeGraph();
            }
          };
          function sa(t, e) {
            if (!t)
              throw Error(`Unable to obtain required WebGL resource: ${e}`);
            return t;
          }
          (oa.prototype.close = oa.prototype.close),
            (function (t, e) {
              t = t.split('.');
              var r,
                i = n;
              t[0] in i ||
                void 0 === i.execScript ||
                i.execScript('var ' + t[0]);
              for (; t.length && (r = t.shift()); )
                t.length || void 0 === e
                  ? (i =
                      i[r] && i[r] !== Object.prototype[r] ? i[r] : (i[r] = {}))
                  : (i[r] = e);
            })('TaskRunner', oa);
          class aa {
            constructor(t, e, n, r) {
              (this.g = t), (this.h = e), (this.m = n), (this.l = r);
            }
            bind() {
              this.g.bindVertexArray(this.h);
            }
            close() {
              this.g.deleteVertexArray(this.h),
                this.g.deleteBuffer(this.m),
                this.g.deleteBuffer(this.l);
            }
          }
          function ca(t, e, n) {
            const r = t.g;
            if (
              ((n = sa(r.createShader(n), 'Failed to create WebGL shader')),
              r.shaderSource(n, e),
              r.compileShader(n),
              !r.getShaderParameter(n, r.COMPILE_STATUS))
            )
              throw Error(
                `Could not compile WebGL shader: ${r.getShaderInfoLog(n)}`,
              );
            return r.attachShader(t.h, n), n;
          }
          function ha(t, e) {
            const n = t.g,
              r = sa(n.createVertexArray(), 'Failed to create vertex array');
            n.bindVertexArray(r);
            const i = sa(n.createBuffer(), 'Failed to create buffer');
            n.bindBuffer(n.ARRAY_BUFFER, i),
              n.enableVertexAttribArray(t.K),
              n.vertexAttribPointer(t.K, 2, n.FLOAT, !1, 0, 0),
              n.bufferData(
                n.ARRAY_BUFFER,
                new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]),
                n.STATIC_DRAW,
              );
            const o = sa(n.createBuffer(), 'Failed to create buffer');
            return (
              n.bindBuffer(n.ARRAY_BUFFER, o),
              n.enableVertexAttribArray(t.J),
              n.vertexAttribPointer(t.J, 2, n.FLOAT, !1, 0, 0),
              n.bufferData(
                n.ARRAY_BUFFER,
                new Float32Array(
                  e ? [0, 1, 0, 0, 1, 0, 1, 1] : [0, 0, 0, 1, 1, 1, 1, 0],
                ),
                n.STATIC_DRAW,
              ),
              n.bindBuffer(n.ARRAY_BUFFER, null),
              n.bindVertexArray(null),
              new aa(n, r, i, o)
            );
          }
          function ua(t, e) {
            if (t.g) {
              if (e !== t.g)
                throw Error('Cannot change GL context once initialized');
            } else t.g = e;
          }
          function la(t, e, n, r) {
            return (
              ua(t, e),
              t.h || (t.m(), t.D()),
              n
                ? (t.v || (t.v = ha(t, !0)), (n = t.v))
                : (t.A || (t.A = ha(t, !1)), (n = t.A)),
              e.useProgram(t.h),
              n.bind(),
              t.l(),
              (t = r()),
              n.g.bindVertexArray(null),
              t
            );
          }
          function fa(t, e, n) {
            return (
              ua(t, e),
              (t = sa(e.createTexture(), 'Failed to create texture')),
              e.bindTexture(e.TEXTURE_2D, t),
              e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
              e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE),
              e.texParameteri(
                e.TEXTURE_2D,
                e.TEXTURE_MIN_FILTER,
                n ?? e.LINEAR,
              ),
              e.texParameteri(
                e.TEXTURE_2D,
                e.TEXTURE_MAG_FILTER,
                n ?? e.LINEAR,
              ),
              e.bindTexture(e.TEXTURE_2D, null),
              t
            );
          }
          function da(t, e, n) {
            ua(t, e),
              t.u ||
                (t.u = sa(
                  e.createFramebuffer(),
                  'Failed to create framebuffe.',
                )),
              e.bindFramebuffer(e.FRAMEBUFFER, t.u),
              e.framebufferTexture2D(
                e.FRAMEBUFFER,
                e.COLOR_ATTACHMENT0,
                e.TEXTURE_2D,
                n,
                0,
              );
          }
          function pa(t) {
            t.g?.bindFramebuffer(t.g.FRAMEBUFFER, null);
          }
          var ga = class {
              H() {
                return '\n  precision mediump float;\n  varying vec2 vTex;\n  uniform sampler2D inputTexture;\n  void main() {\n    gl_FragColor = texture2D(inputTexture, vTex);\n  }\n ';
              }
              m() {
                const t = this.g;
                if (
                  ((this.h = sa(
                    t.createProgram(),
                    'Failed to create WebGL program',
                  )),
                  (this.ba = ca(
                    this,
                    '\n  attribute vec2 aVertex;\n  attribute vec2 aTex;\n  varying vec2 vTex;\n  void main(void) {\n    gl_Position = vec4(aVertex, 0.0, 1.0);\n    vTex = aTex;\n  }',
                    t.VERTEX_SHADER,
                  )),
                  (this.aa = ca(this, this.H(), t.FRAGMENT_SHADER)),
                  t.linkProgram(this.h),
                  !t.getProgramParameter(this.h, t.LINK_STATUS))
                )
                  throw Error(
                    `Error during program linking: ${t.getProgramInfoLog(
                      this.h,
                    )}`,
                  );
                (this.K = t.getAttribLocation(this.h, 'aVertex')),
                  (this.J = t.getAttribLocation(this.h, 'aTex'));
              }
              D() {}
              l() {}
              close() {
                if (this.h) {
                  const t = this.g;
                  t.deleteProgram(this.h),
                    t.deleteShader(this.ba),
                    t.deleteShader(this.aa);
                }
                this.u && this.g.deleteFramebuffer(this.u),
                  this.A && this.A.close(),
                  this.v && this.v.close();
              }
            },
            ma = class extends ga {
              H() {
                return '\n  precision mediump float;\n  uniform sampler2D backgroundTexture;\n  uniform sampler2D maskTexture;\n  uniform sampler2D colorMappingTexture;\n  varying vec2 vTex;\n  void main() {\n    vec4 backgroundColor = texture2D(backgroundTexture, vTex);\n    float category = texture2D(maskTexture, vTex).r;\n    vec4 categoryColor = texture2D(colorMappingTexture, vec2(category, 0.0));\n    gl_FragColor = mix(backgroundColor, categoryColor, categoryColor.a);\n  }\n ';
              }
              D() {
                const t = this.g;
                t.activeTexture(t.TEXTURE1),
                  (this.C = fa(this, t, t.LINEAR)),
                  t.activeTexture(t.TEXTURE2),
                  (this.j = fa(this, t, t.NEAREST));
              }
              m() {
                super.m();
                const t = this.g;
                (this.M = sa(
                  t.getUniformLocation(this.h, 'backgroundTexture'),
                  'Uniform location',
                )),
                  (this.V = sa(
                    t.getUniformLocation(this.h, 'colorMappingTexture'),
                    'Uniform location',
                  )),
                  (this.L = sa(
                    t.getUniformLocation(this.h, 'maskTexture'),
                    'Uniform location',
                  ));
              }
              l() {
                super.l();
                const t = this.g;
                t.uniform1i(this.L, 0),
                  t.uniform1i(this.M, 1),
                  t.uniform1i(this.V, 2);
              }
              close() {
                this.C && this.g.deleteTexture(this.C),
                  this.j && this.g.deleteTexture(this.j),
                  super.close();
              }
            },
            ya = class extends ga {
              H() {
                return '\n  precision mediump float;\n  uniform sampler2D maskTexture;\n  uniform sampler2D defaultTexture;\n  uniform sampler2D overlayTexture;\n  varying vec2 vTex;\n  void main() {\n    float confidence = texture2D(maskTexture, vTex).r;\n    vec4 defaultColor = texture2D(defaultTexture, vTex);\n    vec4 overlayColor = texture2D(overlayTexture, vTex);\n    // Apply the alpha from the overlay and merge in the default color\n    overlayColor = mix(defaultColor, overlayColor, overlayColor.a);\n    gl_FragColor = mix(defaultColor, overlayColor, confidence);\n  }\n ';
              }
              D() {
                const t = this.g;
                t.activeTexture(t.TEXTURE1),
                  (this.j = fa(this, t)),
                  t.activeTexture(t.TEXTURE2),
                  (this.C = fa(this, t));
              }
              m() {
                super.m();
                const t = this.g;
                (this.L = sa(
                  t.getUniformLocation(this.h, 'defaultTexture'),
                  'Uniform location',
                )),
                  (this.M = sa(
                    t.getUniformLocation(this.h, 'overlayTexture'),
                    'Uniform location',
                  )),
                  (this.I = sa(
                    t.getUniformLocation(this.h, 'maskTexture'),
                    'Uniform location',
                  ));
              }
              l() {
                super.l();
                const t = this.g;
                t.uniform1i(this.I, 0),
                  t.uniform1i(this.L, 1),
                  t.uniform1i(this.M, 2);
              }
              close() {
                this.j && this.g.deleteTexture(this.j),
                  this.C && this.g.deleteTexture(this.C),
                  super.close();
              }
            };
          function va(t, e) {
            switch (e) {
              case 0:
                return t.g.find((t) => t instanceof Uint8Array);
              case 1:
                return t.g.find((t) => t instanceof Float32Array);
              case 2:
                return t.g.find(
                  (t) =>
                    'undefined' != typeof WebGLTexture &&
                    t instanceof WebGLTexture,
                );
              default:
                throw Error(`Type is not supported: ${e}`);
            }
          }
          function _a(t) {
            var e = va(t, 1);
            if (!e) {
              if ((e = va(t, 0))) e = new Float32Array(e).map((t) => t / 255);
              else {
                e = new Float32Array(t.width * t.height);
                const r = ba(t);
                var n = Ta(t);
                if (
                  (da(n, r, wa(t)),
                  'iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod'
                    .split(';')
                    .includes(navigator.platform) ||
                    (navigator.userAgent.includes('Mac') &&
                      'ontouchend' in self.document))
                ) {
                  (n = new Float32Array(t.width * t.height * 4)),
                    r.readPixels(0, 0, t.width, t.height, r.RGBA, r.FLOAT, n);
                  for (let t = 0, r = 0; t < e.length; ++t, r += 4) e[t] = n[r];
                } else r.readPixels(0, 0, t.width, t.height, r.RED, r.FLOAT, e);
              }
              t.g.push(e);
            }
            return e;
          }
          function wa(t) {
            let e = va(t, 2);
            if (!e) {
              const n = ba(t);
              e = Aa(t);
              const r = _a(t),
                i = Ea(t);
              n.texImage2D(
                n.TEXTURE_2D,
                0,
                i,
                t.width,
                t.height,
                0,
                n.RED,
                n.FLOAT,
                r,
              ),
                xa(t);
            }
            return e;
          }
          function ba(t) {
            if (!t.canvas)
              throw Error(
                'Conversion to different image formats require that a canvas is passed when initializing the image.',
              );
            return (
              t.h ||
                (t.h = sa(
                  t.canvas.getContext('webgl2'),
                  'You cannot use a canvas that is already bound to a different type of rendering context.',
                )),
              t.h
            );
          }
          function Ea(t) {
            if (((t = ba(t)), !ka))
              if (
                t.getExtension('EXT_color_buffer_float') &&
                t.getExtension('OES_texture_float_linear') &&
                t.getExtension('EXT_float_blend')
              )
                ka = t.R32F;
              else {
                if (!t.getExtension('EXT_color_buffer_half_float'))
                  throw Error(
                    'GPU does not fully support 4-channel float32 or float16 formats',
                  );
                ka = t.R16F;
              }
            return ka;
          }
          function Ta(t) {
            return t.l || (t.l = new ga()), t.l;
          }
          function Aa(t) {
            const e = ba(t);
            e.viewport(0, 0, t.width, t.height), e.activeTexture(e.TEXTURE0);
            let n = va(t, 2);
            return (
              n ||
                ((n = fa(Ta(t), e, t.m ? e.LINEAR : e.NEAREST)),
                t.g.push(n),
                (t.j = !0)),
              e.bindTexture(e.TEXTURE_2D, n),
              n
            );
          }
          function xa(t) {
            t.h.bindTexture(t.h.TEXTURE_2D, null);
          }
          var ka,
            La = class {
              constructor(t, e, n, r, i, o, s) {
                (this.g = t),
                  (this.m = e),
                  (this.j = n),
                  (this.canvas = r),
                  (this.l = i),
                  (this.width = o),
                  (this.height = s),
                  this.j &&
                    0 == --Sa &&
                    console.error(
                      'You seem to be creating MPMask instances without invoking .close(). This leaks resources.',
                    );
              }
              Ha() {
                return !!va(this, 0);
              }
              la() {
                return !!va(this, 1);
              }
              R() {
                return !!va(this, 2);
              }
              ka() {
                return (
                  (t = va(this, 0)) ||
                    ((t = _a(this)),
                    (t = new Uint8Array(t.map((t) => 255 * t))),
                    this.g.push(t)),
                  t
                );
                var t;
              }
              ja() {
                return _a(this);
              }
              O() {
                return wa(this);
              }
              clone() {
                const t = [];
                for (const e of this.g) {
                  let n;
                  if (e instanceof Uint8Array) n = new Uint8Array(e);
                  else if (e instanceof Float32Array) n = new Float32Array(e);
                  else {
                    if (!(e instanceof WebGLTexture))
                      throw Error(`Type is not supported: ${e}`);
                    {
                      const t = ba(this),
                        e = Ta(this);
                      t.activeTexture(t.TEXTURE1),
                        (n = fa(e, t, this.m ? t.LINEAR : t.NEAREST)),
                        t.bindTexture(t.TEXTURE_2D, n);
                      const r = Ea(this);
                      t.texImage2D(
                        t.TEXTURE_2D,
                        0,
                        r,
                        this.width,
                        this.height,
                        0,
                        t.RED,
                        t.FLOAT,
                        null,
                      ),
                        t.bindTexture(t.TEXTURE_2D, null),
                        da(e, t, n),
                        la(e, t, !1, () => {
                          Aa(this),
                            t.clearColor(0, 0, 0, 0),
                            t.clear(t.COLOR_BUFFER_BIT),
                            t.drawArrays(t.TRIANGLE_FAN, 0, 4),
                            xa(this);
                        }),
                        pa(e),
                        xa(this);
                    }
                  }
                  t.push(n);
                }
                return new La(
                  t,
                  this.m,
                  this.R(),
                  this.canvas,
                  this.l,
                  this.width,
                  this.height,
                );
              }
              close() {
                this.j && ba(this).deleteTexture(va(this, 2)), (Sa = -1);
              }
            };
          (La.prototype.close = La.prototype.close),
            (La.prototype.clone = La.prototype.clone),
            (La.prototype.getAsWebGLTexture = La.prototype.O),
            (La.prototype.getAsFloat32Array = La.prototype.ja),
            (La.prototype.getAsUint8Array = La.prototype.ka),
            (La.prototype.hasWebGLTexture = La.prototype.R),
            (La.prototype.hasFloat32Array = La.prototype.la),
            (La.prototype.hasUint8Array = La.prototype.Ha);
          var Sa = 250;
          const Oa = { color: 'white', lineWidth: 4, radius: 6 };
          function Fa(t) {
            return { ...Oa, fillColor: (t = t || {}).color, ...t };
          }
          function Pa(t, e) {
            return t instanceof Function ? t(e) : t;
          }
          function Ma(t, e, n) {
            return Math.max(Math.min(e, n), Math.min(Math.max(e, n), t));
          }
          function Ra(t) {
            if (!t.l)
              throw Error(
                'CPU rendering requested but CanvasRenderingContext2D not provided.',
              );
            return t.l;
          }
          function Ia(t) {
            if (!t.j)
              throw Error(
                'GPU rendering requested but WebGL2RenderingContext not provided.',
              );
            return t.j;
          }
          function Ca(t, e, n) {
            if (e.R()) n(e.O());
            else {
              const r = e.la() ? e.ja() : e.ka();
              t.m = t.m ?? new ga();
              const i = Ia(t);
              n(
                (t = new La(
                  [r],
                  e.m,
                  !1,
                  i.canvas,
                  t.m,
                  e.width,
                  e.height,
                )).O(),
              ),
                t.close();
            }
          }
          function Da(t, e, n, r) {
            const i = (function (t) {
                return t.g || (t.g = new ma()), t.g;
              })(t),
              o = Ia(t),
              s = Array.isArray(n)
                ? new ImageData(new Uint8ClampedArray(n), 1, 1)
                : n;
            la(i, o, !0, () => {
              !(function (t, e, n, r) {
                const i = t.g;
                if (
                  (i.activeTexture(i.TEXTURE0),
                  i.bindTexture(i.TEXTURE_2D, e),
                  i.activeTexture(i.TEXTURE1),
                  i.bindTexture(i.TEXTURE_2D, t.C),
                  i.texImage2D(
                    i.TEXTURE_2D,
                    0,
                    i.RGBA,
                    i.RGBA,
                    i.UNSIGNED_BYTE,
                    n,
                  ),
                  t.I &&
                    (function (t, e) {
                      if (t !== e) return !1;
                      (t = t.entries()), (e = e.entries());
                      for (const [r, i] of t) {
                        t = r;
                        const o = i;
                        var n = e.next();
                        if (n.done) return !1;
                        const [s, a] = n.value;
                        if (
                          ((n = a),
                          t !== s ||
                            o[0] !== n[0] ||
                            o[1] !== n[1] ||
                            o[2] !== n[2] ||
                            o[3] !== n[3])
                        )
                          return !1;
                      }
                      return !!e.next().done;
                    })(t.I, r))
                )
                  i.activeTexture(i.TEXTURE2), i.bindTexture(i.TEXTURE_2D, t.j);
                else {
                  t.I = r;
                  const e = Array(1024).fill(0);
                  r.forEach((t, n) => {
                    if (4 !== t.length)
                      throw Error(
                        `Color at index ${n} is not a four-channel value.`,
                      );
                    (e[4 * n] = t[0]),
                      (e[4 * n + 1] = t[1]),
                      (e[4 * n + 2] = t[2]),
                      (e[4 * n + 3] = t[3]);
                  }),
                    i.activeTexture(i.TEXTURE2),
                    i.bindTexture(i.TEXTURE_2D, t.j),
                    i.texImage2D(
                      i.TEXTURE_2D,
                      0,
                      i.RGBA,
                      256,
                      1,
                      0,
                      i.RGBA,
                      i.UNSIGNED_BYTE,
                      new Uint8Array(e),
                    );
                }
              })(i, e, s, r),
                o.clearColor(0, 0, 0, 0),
                o.clear(o.COLOR_BUFFER_BIT),
                o.drawArrays(o.TRIANGLE_FAN, 0, 4);
              const t = i.g;
              t.activeTexture(t.TEXTURE0),
                t.bindTexture(t.TEXTURE_2D, null),
                t.activeTexture(t.TEXTURE1),
                t.bindTexture(t.TEXTURE_2D, null),
                t.activeTexture(t.TEXTURE2),
                t.bindTexture(t.TEXTURE_2D, null);
            });
          }
          function Ua(t, e, n, r) {
            const i = Ia(t),
              o = (function (t) {
                return t.h || (t.h = new ya()), t.h;
              })(t),
              s = Array.isArray(n)
                ? new ImageData(new Uint8ClampedArray(n), 1, 1)
                : n,
              a = Array.isArray(r)
                ? new ImageData(new Uint8ClampedArray(r), 1, 1)
                : r;
            la(o, i, !0, () => {
              var t = o.g;
              t.activeTexture(t.TEXTURE0),
                t.bindTexture(t.TEXTURE_2D, e),
                t.activeTexture(t.TEXTURE1),
                t.bindTexture(t.TEXTURE_2D, o.j),
                t.texImage2D(
                  t.TEXTURE_2D,
                  0,
                  t.RGBA,
                  t.RGBA,
                  t.UNSIGNED_BYTE,
                  s,
                ),
                t.activeTexture(t.TEXTURE2),
                t.bindTexture(t.TEXTURE_2D, o.C),
                t.texImage2D(
                  t.TEXTURE_2D,
                  0,
                  t.RGBA,
                  t.RGBA,
                  t.UNSIGNED_BYTE,
                  a,
                ),
                i.clearColor(0, 0, 0, 0),
                i.clear(i.COLOR_BUFFER_BIT),
                i.drawArrays(i.TRIANGLE_FAN, 0, 4),
                i.bindTexture(i.TEXTURE_2D, null),
                (t = o.g).activeTexture(t.TEXTURE0),
                t.bindTexture(t.TEXTURE_2D, null),
                t.activeTexture(t.TEXTURE1),
                t.bindTexture(t.TEXTURE_2D, null),
                t.activeTexture(t.TEXTURE2),
                t.bindTexture(t.TEXTURE_2D, null);
            });
          }
          var Na = class {
            constructor(t, e) {
              t instanceof CanvasRenderingContext2D ||
              t instanceof OffscreenCanvasRenderingContext2D
                ? ((this.l = t), (this.j = e))
                : (this.j = t);
            }
            Aa(t, e) {
              if (t) {
                var n = Ra(this);
                (e = Fa(e)), n.save();
                var r = n.canvas,
                  i = 0;
                for (const o of t)
                  (n.fillStyle = Pa(e.fillColor, { index: i, from: o })),
                    (n.strokeStyle = Pa(e.color, { index: i, from: o })),
                    (n.lineWidth = Pa(e.lineWidth, { index: i, from: o })),
                    (t = new Path2D()).arc(
                      o.x * r.width,
                      o.y * r.height,
                      Pa(e.radius, { index: i, from: o }),
                      0,
                      2 * Math.PI,
                    ),
                    n.fill(t),
                    n.stroke(t),
                    ++i;
                n.restore();
              }
            }
            za(t, e, n) {
              if (t && e) {
                var r = Ra(this);
                (n = Fa(n)), r.save();
                var i = r.canvas,
                  o = 0;
                for (const s of e) {
                  r.beginPath(), (e = t[s.start]);
                  const a = t[s.end];
                  e &&
                    a &&
                    ((r.strokeStyle = Pa(n.color, {
                      index: o,
                      from: e,
                      to: a,
                    })),
                    (r.lineWidth = Pa(n.lineWidth, {
                      index: o,
                      from: e,
                      to: a,
                    })),
                    r.moveTo(e.x * i.width, e.y * i.height),
                    r.lineTo(a.x * i.width, a.y * i.height)),
                    ++o,
                    r.stroke();
                }
                r.restore();
              }
            }
            wa(t, e) {
              const n = Ra(this);
              (e = Fa(e)),
                n.save(),
                n.beginPath(),
                (n.lineWidth = Pa(e.lineWidth, {})),
                (n.strokeStyle = Pa(e.color, {})),
                (n.fillStyle = Pa(e.fillColor, {})),
                n.moveTo(t.originX, t.originY),
                n.lineTo(t.originX + t.width, t.originY),
                n.lineTo(t.originX + t.width, t.originY + t.height),
                n.lineTo(t.originX, t.originY + t.height),
                n.lineTo(t.originX, t.originY),
                n.stroke(),
                n.fill(),
                n.restore();
            }
            xa(t, e, n = [0, 0, 0, 255]) {
              this.l
                ? (function (t, e, n, r) {
                    const i = Ia(t);
                    Ca(t, e, (e) => {
                      Da(t, e, n, r),
                        (e = Ra(t)).drawImage(
                          i.canvas,
                          0,
                          0,
                          e.canvas.width,
                          e.canvas.height,
                        );
                    });
                  })(this, t, n, e)
                : Da(this, t.O(), n, e);
            }
            ya(t, e, n) {
              this.l
                ? (function (t, e, n, r) {
                    const i = Ia(t);
                    Ca(t, e, (e) => {
                      Ua(t, e, n, r),
                        (e = Ra(t)).drawImage(
                          i.canvas,
                          0,
                          0,
                          e.canvas.width,
                          e.canvas.height,
                        );
                    });
                  })(this, t, e, n)
                : Ua(this, t.O(), e, n);
            }
            close() {
              this.g?.close(),
                (this.g = void 0),
                this.h?.close(),
                (this.h = void 0),
                this.m?.close(),
                (this.m = void 0);
            }
          };
          function Ba(t, e) {
            switch (e) {
              case 0:
                return t.g.find((t) => t instanceof ImageData);
              case 1:
                return t.g.find(
                  (t) =>
                    'undefined' != typeof ImageBitmap &&
                    t instanceof ImageBitmap,
                );
              case 2:
                return t.g.find(
                  (t) =>
                    'undefined' != typeof WebGLTexture &&
                    t instanceof WebGLTexture,
                );
              default:
                throw Error(`Type is not supported: ${e}`);
            }
          }
          function Ga(t) {
            var e = Ba(t, 0);
            if (!e) {
              e = Va(t);
              const n = Ha(t),
                r = new Uint8Array(t.width * t.height * 4);
              da(n, e, ja(t)),
                e.readPixels(
                  0,
                  0,
                  t.width,
                  t.height,
                  e.RGBA,
                  e.UNSIGNED_BYTE,
                  r,
                ),
                pa(n),
                (e = new ImageData(
                  new Uint8ClampedArray(r.buffer),
                  t.width,
                  t.height,
                )),
                t.g.push(e);
            }
            return e;
          }
          function ja(t) {
            let e = Ba(t, 2);
            if (!e) {
              const n = Va(t);
              e = Xa(t);
              const r = Ba(t, 1) || Ga(t);
              n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, r),
                za(t);
            }
            return e;
          }
          function Va(t) {
            if (!t.canvas)
              throw Error(
                'Conversion to different image formats require that a canvas is passed when iniitializing the image.',
              );
            return (
              t.h ||
                (t.h = sa(
                  t.canvas.getContext('webgl2'),
                  'You cannot use a canvas that is already bound to a different type of rendering context.',
                )),
              t.h
            );
          }
          function Ha(t) {
            return t.l || (t.l = new ga()), t.l;
          }
          function Xa(t) {
            const e = Va(t);
            e.viewport(0, 0, t.width, t.height), e.activeTexture(e.TEXTURE0);
            let n = Ba(t, 2);
            return (
              n || ((n = fa(Ha(t), e)), t.g.push(n), (t.m = !0)),
              e.bindTexture(e.TEXTURE_2D, n),
              n
            );
          }
          function za(t) {
            t.h.bindTexture(t.h.TEXTURE_2D, null);
          }
          function Wa(t) {
            const e = Va(t);
            return la(Ha(t), e, !0, () =>
              (function (t, e) {
                const n = t.canvas;
                if (n.width === t.width && n.height === t.height) return e();
                const r = n.width,
                  i = n.height;
                return (
                  (n.width = t.width),
                  (n.height = t.height),
                  (t = e()),
                  (n.width = r),
                  (n.height = i),
                  t
                );
              })(t, () => {
                if (
                  (e.bindFramebuffer(e.FRAMEBUFFER, null),
                  e.clearColor(0, 0, 0, 0),
                  e.clear(e.COLOR_BUFFER_BIT),
                  e.drawArrays(e.TRIANGLE_FAN, 0, 4),
                  !(t.canvas instanceof OffscreenCanvas))
                )
                  throw Error(
                    'Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas',
                  );
                return t.canvas.transferToImageBitmap();
              }),
            );
          }
          (Na.prototype.close = Na.prototype.close),
            (Na.prototype.drawConfidenceMask = Na.prototype.ya),
            (Na.prototype.drawCategoryMask = Na.prototype.xa),
            (Na.prototype.drawBoundingBox = Na.prototype.wa),
            (Na.prototype.drawConnectors = Na.prototype.za),
            (Na.prototype.drawLandmarks = Na.prototype.Aa),
            (Na.lerp = function (t, e, n, r, i) {
              return Ma(
                r * (1 - (t - e) / (n - e)) + i * (1 - (n - t) / (n - e)),
                r,
                i,
              );
            }),
            (Na.clamp = Ma);
          var Ka = class {
            constructor(t, e, n, r, i, o, s) {
              (this.g = t),
                (this.j = e),
                (this.m = n),
                (this.canvas = r),
                (this.l = i),
                (this.width = o),
                (this.height = s),
                (this.j || this.m) &&
                  0 == --Ya &&
                  console.error(
                    'You seem to be creating MPImage instances without invoking .close(). This leaks resources.',
                  );
            }
            Ga() {
              return !!Ba(this, 0);
            }
            ma() {
              return !!Ba(this, 1);
            }
            R() {
              return !!Ba(this, 2);
            }
            Ea() {
              return Ga(this);
            }
            Da() {
              var t = Ba(this, 1);
              return (
                t ||
                  (ja(this),
                  Xa(this),
                  (t = Wa(this)),
                  za(this),
                  this.g.push(t),
                  (this.j = !0)),
                t
              );
            }
            O() {
              return ja(this);
            }
            clone() {
              const t = [];
              for (const e of this.g) {
                let n;
                if (e instanceof ImageData)
                  n = new ImageData(e.data, this.width, this.height);
                else if (e instanceof WebGLTexture) {
                  const t = Va(this),
                    e = Ha(this);
                  t.activeTexture(t.TEXTURE1),
                    (n = fa(e, t)),
                    t.bindTexture(t.TEXTURE_2D, n),
                    t.texImage2D(
                      t.TEXTURE_2D,
                      0,
                      t.RGBA,
                      this.width,
                      this.height,
                      0,
                      t.RGBA,
                      t.UNSIGNED_BYTE,
                      null,
                    ),
                    t.bindTexture(t.TEXTURE_2D, null),
                    da(e, t, n),
                    la(e, t, !1, () => {
                      Xa(this),
                        t.clearColor(0, 0, 0, 0),
                        t.clear(t.COLOR_BUFFER_BIT),
                        t.drawArrays(t.TRIANGLE_FAN, 0, 4),
                        za(this);
                    }),
                    pa(e),
                    za(this);
                } else {
                  if (!(e instanceof ImageBitmap))
                    throw Error(`Type is not supported: ${e}`);
                  ja(this), Xa(this), (n = Wa(this)), za(this);
                }
                t.push(n);
              }
              return new Ka(
                t,
                this.ma(),
                this.R(),
                this.canvas,
                this.l,
                this.width,
                this.height,
              );
            }
            close() {
              this.j && Ba(this, 1).close(),
                this.m && Va(this).deleteTexture(Ba(this, 2)),
                (Ya = -1);
            }
          };
          (Ka.prototype.close = Ka.prototype.close),
            (Ka.prototype.clone = Ka.prototype.clone),
            (Ka.prototype.getAsWebGLTexture = Ka.prototype.O),
            (Ka.prototype.getAsImageBitmap = Ka.prototype.Da),
            (Ka.prototype.getAsImageData = Ka.prototype.Ea),
            (Ka.prototype.hasWebGLTexture = Ka.prototype.R),
            (Ka.prototype.hasImageBitmap = Ka.prototype.ma),
            (Ka.prototype.hasImageData = Ka.prototype.Ga);
          var Ya = 250;
          function qa(...t) {
            return t.map(([t, e]) => ({ start: t, end: e }));
          }
          const $a = (function (t) {
            return class extends t {
              Ma() {
                this.i._registerModelResourcesGraphService();
              }
            };
          })(
            ((Ja = class {
              constructor(t, e) {
                (this.l = !0),
                  (this.i = t),
                  (this.g = null),
                  (this.h = 0),
                  (this.m = 'function' == typeof this.i._addIntToInputStream),
                  void 0 !== e
                    ? (this.i.canvas = e)
                    : zs()
                    ? (this.i.canvas = new OffscreenCanvas(1, 1))
                    : (console.warn(
                        'OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas.',
                      ),
                      (this.i.canvas = document.createElement('canvas')));
              }
              async initializeGraph(t) {
                const e = await (await fetch(t)).arrayBuffer();
                (t = !(t.endsWith('.pbtxt') || t.endsWith('.textproto'))),
                  this.setGraph(new Uint8Array(e), t);
              }
              setGraphFromString(t) {
                this.setGraph(new TextEncoder().encode(t), !1);
              }
              setGraph(t, e) {
                const n = t.length,
                  r = this.i._malloc(n);
                this.i.HEAPU8.set(t, r),
                  e
                    ? this.i._changeBinaryGraph(n, r)
                    : this.i._changeTextGraph(n, r),
                  this.i._free(r);
              }
              configureAudio(t, e, n, r, i) {
                this.i._configureAudio ||
                  console.warn(
                    'Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?',
                  ),
                  Ys(this, r || 'input_audio', (r) => {
                    Ys(this, (i = i || 'audio_header'), (i) => {
                      this.i._configureAudio(r, i, t, e, n);
                    });
                  });
              }
              setAutoResizeCanvas(t) {
                this.l = t;
              }
              setAutoRenderToScreen(t) {
                this.i._setAutoRenderToScreen(t);
              }
              setGpuBufferVerticalFlip(t) {
                this.i.gpuOriginForWebTexturesIsBottomLeft = t;
              }
              fa(t) {
                Js(this, '__graph_config__', (e) => {
                  t(e);
                }),
                  Ys(this, '__graph_config__', (t) => {
                    this.i._getGraphConfig(t, void 0);
                  }),
                  delete this.i.simpleListeners.__graph_config__;
              }
              attachErrorListener(t) {
                this.i.errorListener = t;
              }
              attachEmptyPacketListener(t, e) {
                (this.i.emptyPacketListeners =
                  this.i.emptyPacketListeners || {}),
                  (this.i.emptyPacketListeners[t] = e);
              }
              addAudioToStream(t, e, n) {
                this.addAudioToStreamWithShape(t, 0, 0, e, n);
              }
              addAudioToStreamWithShape(t, e, n, r, i) {
                const o = 4 * t.length;
                this.h !== o &&
                  (this.g && this.i._free(this.g),
                  (this.g = this.i._malloc(o)),
                  (this.h = o)),
                  this.i.HEAPF32.set(t, this.g / 4),
                  Ys(this, r, (t) => {
                    this.i._addAudioToInputStream(this.g, e, n, t, i);
                  });
              }
              addGpuBufferToStream(t, e, n) {
                Ys(this, e, (e) => {
                  const [r, i] = qs(this, t, e);
                  this.i._addBoundTextureToStream(e, r, i, n);
                });
              }
              addBoolToStream(t, e, n) {
                Ys(this, e, (e) => {
                  this.i._addBoolToInputStream(t, e, n);
                });
              }
              addDoubleToStream(t, e, n) {
                Ys(this, e, (e) => {
                  this.i._addDoubleToInputStream(t, e, n);
                });
              }
              addFloatToStream(t, e, n) {
                Ys(this, e, (e) => {
                  this.i._addFloatToInputStream(t, e, n);
                });
              }
              addIntToStream(t, e, n) {
                Ys(this, e, (e) => {
                  this.i._addIntToInputStream(t, e, n);
                });
              }
              addUintToStream(t, e, n) {
                Ys(this, e, (e) => {
                  this.i._addUintToInputStream(t, e, n);
                });
              }
              addStringToStream(t, e, n) {
                Ys(this, e, (e) => {
                  Ys(this, t, (t) => {
                    this.i._addStringToInputStream(t, e, n);
                  });
                });
              }
              addStringRecordToStream(t, e, n) {
                Ys(this, e, (e) => {
                  $s(this, Object.keys(t), (r) => {
                    $s(this, Object.values(t), (i) => {
                      this.i._addFlatHashMapToInputStream(
                        r,
                        i,
                        Object.keys(t).length,
                        e,
                        n,
                      );
                    });
                  });
                });
              }
              addProtoToStream(t, e, n, r) {
                Ys(this, n, (n) => {
                  Ys(this, e, (e) => {
                    const i = this.i._malloc(t.length);
                    this.i.HEAPU8.set(t, i),
                      this.i._addProtoToInputStream(i, t.length, e, n, r),
                      this.i._free(i);
                  });
                });
              }
              addEmptyPacketToStream(t, e) {
                Ys(this, t, (t) => {
                  this.i._addEmptyPacketToInputStream(t, e);
                });
              }
              addBoolVectorToStream(t, e, n) {
                Ys(this, e, (e) => {
                  const r = this.i._allocateBoolVector(t.length);
                  if (!r)
                    throw Error('Unable to allocate new bool vector on heap.');
                  for (const e of t) this.i._addBoolVectorEntry(r, e);
                  this.i._addBoolVectorToInputStream(r, e, n);
                });
              }
              addDoubleVectorToStream(t, e, n) {
                Ys(this, e, (e) => {
                  const r = this.i._allocateDoubleVector(t.length);
                  if (!r)
                    throw Error(
                      'Unable to allocate new double vector on heap.',
                    );
                  for (const e of t) this.i._addDoubleVectorEntry(r, e);
                  this.i._addDoubleVectorToInputStream(r, e, n);
                });
              }
              addFloatVectorToStream(t, e, n) {
                Ys(this, e, (e) => {
                  const r = this.i._allocateFloatVector(t.length);
                  if (!r)
                    throw Error('Unable to allocate new float vector on heap.');
                  for (const e of t) this.i._addFloatVectorEntry(r, e);
                  this.i._addFloatVectorToInputStream(r, e, n);
                });
              }
              addIntVectorToStream(t, e, n) {
                Ys(this, e, (e) => {
                  const r = this.i._allocateIntVector(t.length);
                  if (!r)
                    throw Error('Unable to allocate new int vector on heap.');
                  for (const e of t) this.i._addIntVectorEntry(r, e);
                  this.i._addIntVectorToInputStream(r, e, n);
                });
              }
              addUintVectorToStream(t, e, n) {
                Ys(this, e, (e) => {
                  const r = this.i._allocateUintVector(t.length);
                  if (!r)
                    throw Error(
                      'Unable to allocate new unsigned int vector on heap.',
                    );
                  for (const e of t) this.i._addUintVectorEntry(r, e);
                  this.i._addUintVectorToInputStream(r, e, n);
                });
              }
              addStringVectorToStream(t, e, n) {
                Ys(this, e, (e) => {
                  const r = this.i._allocateStringVector(t.length);
                  if (!r)
                    throw Error(
                      'Unable to allocate new string vector on heap.',
                    );
                  for (const e of t)
                    Ys(this, e, (t) => {
                      this.i._addStringVectorEntry(r, t);
                    });
                  this.i._addStringVectorToInputStream(r, e, n);
                });
              }
              addBoolToInputSidePacket(t, e) {
                Ys(this, e, (e) => {
                  this.i._addBoolToInputSidePacket(t, e);
                });
              }
              addDoubleToInputSidePacket(t, e) {
                Ys(this, e, (e) => {
                  this.i._addDoubleToInputSidePacket(t, e);
                });
              }
              addFloatToInputSidePacket(t, e) {
                Ys(this, e, (e) => {
                  this.i._addFloatToInputSidePacket(t, e);
                });
              }
              addIntToInputSidePacket(t, e) {
                Ys(this, e, (e) => {
                  this.i._addIntToInputSidePacket(t, e);
                });
              }
              addUintToInputSidePacket(t, e) {
                Ys(this, e, (e) => {
                  this.i._addUintToInputSidePacket(t, e);
                });
              }
              addStringToInputSidePacket(t, e) {
                Ys(this, e, (e) => {
                  Ys(this, t, (t) => {
                    this.i._addStringToInputSidePacket(t, e);
                  });
                });
              }
              addProtoToInputSidePacket(t, e, n) {
                Ys(this, n, (n) => {
                  Ys(this, e, (e) => {
                    const r = this.i._malloc(t.length);
                    this.i.HEAPU8.set(t, r),
                      this.i._addProtoToInputSidePacket(r, t.length, e, n),
                      this.i._free(r);
                  });
                });
              }
              addBoolVectorToInputSidePacket(t, e) {
                Ys(this, e, (e) => {
                  const n = this.i._allocateBoolVector(t.length);
                  if (!n)
                    throw Error('Unable to allocate new bool vector on heap.');
                  for (const e of t) this.i._addBoolVectorEntry(n, e);
                  this.i._addBoolVectorToInputSidePacket(n, e);
                });
              }
              addDoubleVectorToInputSidePacket(t, e) {
                Ys(this, e, (e) => {
                  const n = this.i._allocateDoubleVector(t.length);
                  if (!n)
                    throw Error(
                      'Unable to allocate new double vector on heap.',
                    );
                  for (const e of t) this.i._addDoubleVectorEntry(n, e);
                  this.i._addDoubleVectorToInputSidePacket(n, e);
                });
              }
              addFloatVectorToInputSidePacket(t, e) {
                Ys(this, e, (e) => {
                  const n = this.i._allocateFloatVector(t.length);
                  if (!n)
                    throw Error('Unable to allocate new float vector on heap.');
                  for (const e of t) this.i._addFloatVectorEntry(n, e);
                  this.i._addFloatVectorToInputSidePacket(n, e);
                });
              }
              addIntVectorToInputSidePacket(t, e) {
                Ys(this, e, (e) => {
                  const n = this.i._allocateIntVector(t.length);
                  if (!n)
                    throw Error('Unable to allocate new int vector on heap.');
                  for (const e of t) this.i._addIntVectorEntry(n, e);
                  this.i._addIntVectorToInputSidePacket(n, e);
                });
              }
              addUintVectorToInputSidePacket(t, e) {
                Ys(this, e, (e) => {
                  const n = this.i._allocateUintVector(t.length);
                  if (!n)
                    throw Error(
                      'Unable to allocate new unsigned int vector on heap.',
                    );
                  for (const e of t) this.i._addUintVectorEntry(n, e);
                  this.i._addUintVectorToInputSidePacket(n, e);
                });
              }
              addStringVectorToInputSidePacket(t, e) {
                Ys(this, e, (e) => {
                  const n = this.i._allocateStringVector(t.length);
                  if (!n)
                    throw Error(
                      'Unable to allocate new string vector on heap.',
                    );
                  for (const e of t)
                    Ys(this, e, (t) => {
                      this.i._addStringVectorEntry(n, t);
                    });
                  this.i._addStringVectorToInputSidePacket(n, e);
                });
              }
              attachBoolListener(t, e) {
                Js(this, t, e),
                  Ys(this, t, (t) => {
                    this.i._attachBoolListener(t);
                  });
              }
              attachBoolVectorListener(t, e) {
                Zs(this, t, e),
                  Ys(this, t, (t) => {
                    this.i._attachBoolVectorListener(t);
                  });
              }
              attachIntListener(t, e) {
                Js(this, t, e),
                  Ys(this, t, (t) => {
                    this.i._attachIntListener(t);
                  });
              }
              attachIntVectorListener(t, e) {
                Zs(this, t, e),
                  Ys(this, t, (t) => {
                    this.i._attachIntVectorListener(t);
                  });
              }
              attachUintListener(t, e) {
                Js(this, t, e),
                  Ys(this, t, (t) => {
                    this.i._attachUintListener(t);
                  });
              }
              attachUintVectorListener(t, e) {
                Zs(this, t, e),
                  Ys(this, t, (t) => {
                    this.i._attachUintVectorListener(t);
                  });
              }
              attachDoubleListener(t, e) {
                Js(this, t, e),
                  Ys(this, t, (t) => {
                    this.i._attachDoubleListener(t);
                  });
              }
              attachDoubleVectorListener(t, e) {
                Zs(this, t, e),
                  Ys(this, t, (t) => {
                    this.i._attachDoubleVectorListener(t);
                  });
              }
              attachFloatListener(t, e) {
                Js(this, t, e),
                  Ys(this, t, (t) => {
                    this.i._attachFloatListener(t);
                  });
              }
              attachFloatVectorListener(t, e) {
                Zs(this, t, e),
                  Ys(this, t, (t) => {
                    this.i._attachFloatVectorListener(t);
                  });
              }
              attachStringListener(t, e) {
                Js(this, t, e),
                  Ys(this, t, (t) => {
                    this.i._attachStringListener(t);
                  });
              }
              attachStringVectorListener(t, e) {
                Zs(this, t, e),
                  Ys(this, t, (t) => {
                    this.i._attachStringVectorListener(t);
                  });
              }
              attachProtoListener(t, e, n) {
                Js(this, t, e),
                  Ys(this, t, (t) => {
                    this.i._attachProtoListener(t, n || !1);
                  });
              }
              attachProtoVectorListener(t, e, n) {
                Zs(this, t, e),
                  Ys(this, t, (t) => {
                    this.i._attachProtoVectorListener(t, n || !1);
                  });
              }
              attachAudioListener(t, e, n) {
                this.i._attachAudioListener ||
                  console.warn(
                    'Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?',
                  ),
                  Js(this, t, (t, n) => {
                    (t = new Float32Array(
                      t.buffer,
                      t.byteOffset,
                      t.length / 4,
                    )),
                      e(t, n);
                  }),
                  Ys(this, t, (t) => {
                    this.i._attachAudioListener(t, n || !1);
                  });
              }
              finishProcessing() {
                this.i._waitUntilIdle();
              }
              closeGraph() {
                this.i._closeGraph(),
                  (this.i.simpleListeners = void 0),
                  (this.i.emptyPacketListeners = void 0);
              }
            }),
            class extends Ja {
              get ha() {
                return this.i;
              }
              sa(t, e, n) {
                Ys(this, e, (e) => {
                  const [r, i] = qs(this, t, e);
                  this.ha._addBoundTextureAsImageToStream(e, r, i, n);
                });
              }
              W(t, e) {
                Js(this, t, e),
                  Ys(this, t, (t) => {
                    this.ha._attachImageListener(t);
                  });
              }
              da(t, e) {
                Zs(this, t, e),
                  Ys(this, t, (t) => {
                    this.ha._attachImageVectorListener(t);
                  });
              }
            }),
          );
          var Ja,
            Za = class extends $a {};
          async function Qa(t, e, n) {
            return (async function (t, e, n, r) {
              return (async function (t, e, n, r) {
                return (
                  (t = await (async (t, e, n, r, i) => {
                    if ((e && (await Ws(e)), !self.ModuleFactory))
                      throw Error('ModuleFactory not set.');
                    if (n && (await Ws(n), !self.ModuleFactory))
                      throw Error('ModuleFactory not set.');
                    return (
                      self.Module &&
                        i &&
                        (((e = self.Module).locateFile = i.locateFile),
                        i.mainScriptUrlOrBlob &&
                          (e.mainScriptUrlOrBlob = i.mainScriptUrlOrBlob)),
                      (i = await self.ModuleFactory(self.Module || i)),
                      (self.ModuleFactory = self.Module = void 0),
                      new t(i, r)
                    );
                  })(t, n.wasmLoaderPath, n.assetLoaderPath, e, {
                    locateFile: (t) =>
                      t.endsWith('.wasm')
                        ? n.wasmBinaryPath.toString()
                        : n.assetBinaryPath && t.endsWith('.data')
                        ? n.assetBinaryPath.toString()
                        : t,
                  })),
                  await t.o(r),
                  t
                );
              })(t, e, n, r);
            })(
              t,
              n.canvas ?? (zs() ? void 0 : document.createElement('canvas')),
              e,
              n,
            );
          }
          function tc(t, e, n, r) {
            if (t.V) {
              const o = new go();
              if (n?.regionOfInterest) {
                if (!t.ra)
                  throw Error("This task doesn't support region-of-interest.");
                var i = n.regionOfInterest;
                if (i.left >= i.right || i.top >= i.bottom)
                  throw Error(
                    'Expected RectF with left < right and top < bottom.',
                  );
                if (0 > i.left || 0 > i.top || 1 < i.right || 1 < i.bottom)
                  throw Error('Expected RectF values to be in [0,1].');
                zn(o, 1, (i.left + i.right) / 2),
                  zn(o, 2, (i.top + i.bottom) / 2),
                  zn(o, 4, i.right - i.left),
                  zn(o, 3, i.bottom - i.top);
              } else zn(o, 1, 0.5), zn(o, 2, 0.5), zn(o, 4, 1), zn(o, 3, 1);
              if (n?.rotationDegrees) {
                if (0 != n?.rotationDegrees % 90)
                  throw Error('Expected rotation to be a multiple of 90°.');
                if (
                  (zn(o, 5, (-Math.PI * n.rotationDegrees) / 180),
                  0 != n?.rotationDegrees % 180)
                ) {
                  const [t, r] = Ks(e);
                  (n = (jn(o, 3) * r) / t),
                    (i = (jn(o, 4) * t) / r),
                    zn(o, 4, n),
                    zn(o, 3, i);
                }
              }
              t.g.addProtoToStream(o.g(), 'mediapipe.NormalizedRect', t.V, r);
            }
            t.g.sa(e, t.ba, r ?? performance.now()), t.finishProcessing();
          }
          function ec(t, e, n) {
            if (t.baseOptions?.g())
              throw Error(
                "Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.",
              );
            tc(t, e, n, t.J + 1);
          }
          function nc(t, e, n, r) {
            if (!t.baseOptions?.g())
              throw Error(
                "Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.",
              );
            tc(t, e, n, r);
          }
          function rc(t, e, n, r) {
            var i = e.data;
            const o = e.width,
              s = o * (e = e.height);
            if (
              (i instanceof Uint8Array || i instanceof Float32Array) &&
              i.length !== s
            )
              throw Error('Unsupported channel count: ' + i.length / s);
            return (
              (t = new La([i], n, !1, t.g.i.canvas, t.M, o, e)),
              r ? t.clone() : t
            );
          }
          var ic = class extends oa {
            constructor(t, e, n, r) {
              super(t),
                (this.g = t),
                (this.ba = e),
                (this.V = n),
                (this.ra = r),
                (this.M = new ga());
            }
            l(t, e = !0) {
              if (
                ('runningMode' in t &&
                  Hn(
                    this.baseOptions,
                    2,
                    !!t.runningMode && 'IMAGE' !== t.runningMode,
                  ),
                void 0 !== t.canvas && this.g.i.canvas !== t.canvas)
              )
                throw Error('You must create a new task to reset the canvas.');
              return super.l(t, e);
            }
            close() {
              this.M.close(), super.close();
            }
          };
          ic.prototype.close = ic.prototype.close;
          var oc = class extends ic {
            constructor(t, e) {
              super(new Za(t, e), 'image_in', 'norm_rect_in', !1),
                (this.j = { detections: [] }),
                In((t = this.h = new Uo()), 0, 1, (e = new Co())),
                zn(this.h, 2, 0.5),
                zn(this.h, 3, 0.3);
            }
            get baseOptions() {
              return Pn(this.h, Co, 1);
            }
            set baseOptions(t) {
              In(this.h, 0, 1, t);
            }
            o(t) {
              return (
                'minDetectionConfidence' in t &&
                  zn(this.h, 2, t.minDetectionConfidence ?? 0.5),
                'minSuppressionThreshold' in t &&
                  zn(this.h, 3, t.minSuppressionThreshold ?? 0.3),
                this.l(t)
              );
            }
            F(t, e) {
              return (this.j = { detections: [] }), ec(this, t, e), this.j;
            }
            G(t, e, n) {
              return (this.j = { detections: [] }), nc(this, t, n, e), this.j;
            }
            m() {
              var t = new Ni();
              Di(t, 'image_in'), Di(t, 'norm_rect_in'), Ui(t, 'detections');
              const e = new vi();
              Wn(e, Bo, this.h);
              const n = new Oi();
              ki(n, 'mediapipe.tasks.vision.face_detector.FaceDetectorGraph'),
                Li(n, 'IMAGE:image_in'),
                Li(n, 'NORM_RECT:norm_rect_in'),
                Si(n, 'DETECTIONS:detections'),
                n.o(e),
                Ci(t, n),
                this.g.attachProtoVectorListener('detections', (t, e) => {
                  for (const e of t) (t = ro(e)), this.j.detections.push(Cs(t));
                  ea(this, e);
                }),
                this.g.attachEmptyPacketListener('detections', (t) => {
                  ea(this, t);
                }),
                (t = t.g()),
                this.setGraph(new Uint8Array(t), !0);
            }
          };
          (oc.prototype.detectForVideo = oc.prototype.G),
            (oc.prototype.detect = oc.prototype.F),
            (oc.prototype.setOptions = oc.prototype.o),
            (oc.createFromModelPath = async function (t, e) {
              return Qa(oc, t, { baseOptions: { modelAssetPath: e } });
            }),
            (oc.createFromModelBuffer = function (t, e) {
              return Qa(oc, t, { baseOptions: { modelAssetBuffer: e } });
            }),
            (oc.createFromOptions = function (t, e) {
              return Qa(oc, t, e);
            });
          var sc = qa(
              [61, 146],
              [146, 91],
              [91, 181],
              [181, 84],
              [84, 17],
              [17, 314],
              [314, 405],
              [405, 321],
              [321, 375],
              [375, 291],
              [61, 185],
              [185, 40],
              [40, 39],
              [39, 37],
              [37, 0],
              [0, 267],
              [267, 269],
              [269, 270],
              [270, 409],
              [409, 291],
              [78, 95],
              [95, 88],
              [88, 178],
              [178, 87],
              [87, 14],
              [14, 317],
              [317, 402],
              [402, 318],
              [318, 324],
              [324, 308],
              [78, 191],
              [191, 80],
              [80, 81],
              [81, 82],
              [82, 13],
              [13, 312],
              [312, 311],
              [311, 310],
              [310, 415],
              [415, 308],
            ),
            ac = qa(
              [263, 249],
              [249, 390],
              [390, 373],
              [373, 374],
              [374, 380],
              [380, 381],
              [381, 382],
              [382, 362],
              [263, 466],
              [466, 388],
              [388, 387],
              [387, 386],
              [386, 385],
              [385, 384],
              [384, 398],
              [398, 362],
            ),
            cc = qa(
              [276, 283],
              [283, 282],
              [282, 295],
              [295, 285],
              [300, 293],
              [293, 334],
              [334, 296],
              [296, 336],
            ),
            hc = qa([474, 475], [475, 476], [476, 477], [477, 474]),
            uc = qa(
              [33, 7],
              [7, 163],
              [163, 144],
              [144, 145],
              [145, 153],
              [153, 154],
              [154, 155],
              [155, 133],
              [33, 246],
              [246, 161],
              [161, 160],
              [160, 159],
              [159, 158],
              [158, 157],
              [157, 173],
              [173, 133],
            ),
            lc = qa(
              [46, 53],
              [53, 52],
              [52, 65],
              [65, 55],
              [70, 63],
              [63, 105],
              [105, 66],
              [66, 107],
            ),
            fc = qa([469, 470], [470, 471], [471, 472], [472, 469]),
            dc = qa(
              [10, 338],
              [338, 297],
              [297, 332],
              [332, 284],
              [284, 251],
              [251, 389],
              [389, 356],
              [356, 454],
              [454, 323],
              [323, 361],
              [361, 288],
              [288, 397],
              [397, 365],
              [365, 379],
              [379, 378],
              [378, 400],
              [400, 377],
              [377, 152],
              [152, 148],
              [148, 176],
              [176, 149],
              [149, 150],
              [150, 136],
              [136, 172],
              [172, 58],
              [58, 132],
              [132, 93],
              [93, 234],
              [234, 127],
              [127, 162],
              [162, 21],
              [21, 54],
              [54, 103],
              [103, 67],
              [67, 109],
              [109, 10],
            ),
            pc = [...sc, ...ac, ...cc, ...uc, ...lc, ...dc],
            gc = qa(
              [127, 34],
              [34, 139],
              [139, 127],
              [11, 0],
              [0, 37],
              [37, 11],
              [232, 231],
              [231, 120],
              [120, 232],
              [72, 37],
              [37, 39],
              [39, 72],
              [128, 121],
              [121, 47],
              [47, 128],
              [232, 121],
              [121, 128],
              [128, 232],
              [104, 69],
              [69, 67],
              [67, 104],
              [175, 171],
              [171, 148],
              [148, 175],
              [118, 50],
              [50, 101],
              [101, 118],
              [73, 39],
              [39, 40],
              [40, 73],
              [9, 151],
              [151, 108],
              [108, 9],
              [48, 115],
              [115, 131],
              [131, 48],
              [194, 204],
              [204, 211],
              [211, 194],
              [74, 40],
              [40, 185],
              [185, 74],
              [80, 42],
              [42, 183],
              [183, 80],
              [40, 92],
              [92, 186],
              [186, 40],
              [230, 229],
              [229, 118],
              [118, 230],
              [202, 212],
              [212, 214],
              [214, 202],
              [83, 18],
              [18, 17],
              [17, 83],
              [76, 61],
              [61, 146],
              [146, 76],
              [160, 29],
              [29, 30],
              [30, 160],
              [56, 157],
              [157, 173],
              [173, 56],
              [106, 204],
              [204, 194],
              [194, 106],
              [135, 214],
              [214, 192],
              [192, 135],
              [203, 165],
              [165, 98],
              [98, 203],
              [21, 71],
              [71, 68],
              [68, 21],
              [51, 45],
              [45, 4],
              [4, 51],
              [144, 24],
              [24, 23],
              [23, 144],
              [77, 146],
              [146, 91],
              [91, 77],
              [205, 50],
              [50, 187],
              [187, 205],
              [201, 200],
              [200, 18],
              [18, 201],
              [91, 106],
              [106, 182],
              [182, 91],
              [90, 91],
              [91, 181],
              [181, 90],
              [85, 84],
              [84, 17],
              [17, 85],
              [206, 203],
              [203, 36],
              [36, 206],
              [148, 171],
              [171, 140],
              [140, 148],
              [92, 40],
              [40, 39],
              [39, 92],
              [193, 189],
              [189, 244],
              [244, 193],
              [159, 158],
              [158, 28],
              [28, 159],
              [247, 246],
              [246, 161],
              [161, 247],
              [236, 3],
              [3, 196],
              [196, 236],
              [54, 68],
              [68, 104],
              [104, 54],
              [193, 168],
              [168, 8],
              [8, 193],
              [117, 228],
              [228, 31],
              [31, 117],
              [189, 193],
              [193, 55],
              [55, 189],
              [98, 97],
              [97, 99],
              [99, 98],
              [126, 47],
              [47, 100],
              [100, 126],
              [166, 79],
              [79, 218],
              [218, 166],
              [155, 154],
              [154, 26],
              [26, 155],
              [209, 49],
              [49, 131],
              [131, 209],
              [135, 136],
              [136, 150],
              [150, 135],
              [47, 126],
              [126, 217],
              [217, 47],
              [223, 52],
              [52, 53],
              [53, 223],
              [45, 51],
              [51, 134],
              [134, 45],
              [211, 170],
              [170, 140],
              [140, 211],
              [67, 69],
              [69, 108],
              [108, 67],
              [43, 106],
              [106, 91],
              [91, 43],
              [230, 119],
              [119, 120],
              [120, 230],
              [226, 130],
              [130, 247],
              [247, 226],
              [63, 53],
              [53, 52],
              [52, 63],
              [238, 20],
              [20, 242],
              [242, 238],
              [46, 70],
              [70, 156],
              [156, 46],
              [78, 62],
              [62, 96],
              [96, 78],
              [46, 53],
              [53, 63],
              [63, 46],
              [143, 34],
              [34, 227],
              [227, 143],
              [123, 117],
              [117, 111],
              [111, 123],
              [44, 125],
              [125, 19],
              [19, 44],
              [236, 134],
              [134, 51],
              [51, 236],
              [216, 206],
              [206, 205],
              [205, 216],
              [154, 153],
              [153, 22],
              [22, 154],
              [39, 37],
              [37, 167],
              [167, 39],
              [200, 201],
              [201, 208],
              [208, 200],
              [36, 142],
              [142, 100],
              [100, 36],
              [57, 212],
              [212, 202],
              [202, 57],
              [20, 60],
              [60, 99],
              [99, 20],
              [28, 158],
              [158, 157],
              [157, 28],
              [35, 226],
              [226, 113],
              [113, 35],
              [160, 159],
              [159, 27],
              [27, 160],
              [204, 202],
              [202, 210],
              [210, 204],
              [113, 225],
              [225, 46],
              [46, 113],
              [43, 202],
              [202, 204],
              [204, 43],
              [62, 76],
              [76, 77],
              [77, 62],
              [137, 123],
              [123, 116],
              [116, 137],
              [41, 38],
              [38, 72],
              [72, 41],
              [203, 129],
              [129, 142],
              [142, 203],
              [64, 98],
              [98, 240],
              [240, 64],
              [49, 102],
              [102, 64],
              [64, 49],
              [41, 73],
              [73, 74],
              [74, 41],
              [212, 216],
              [216, 207],
              [207, 212],
              [42, 74],
              [74, 184],
              [184, 42],
              [169, 170],
              [170, 211],
              [211, 169],
              [170, 149],
              [149, 176],
              [176, 170],
              [105, 66],
              [66, 69],
              [69, 105],
              [122, 6],
              [6, 168],
              [168, 122],
              [123, 147],
              [147, 187],
              [187, 123],
              [96, 77],
              [77, 90],
              [90, 96],
              [65, 55],
              [55, 107],
              [107, 65],
              [89, 90],
              [90, 180],
              [180, 89],
              [101, 100],
              [100, 120],
              [120, 101],
              [63, 105],
              [105, 104],
              [104, 63],
              [93, 137],
              [137, 227],
              [227, 93],
              [15, 86],
              [86, 85],
              [85, 15],
              [129, 102],
              [102, 49],
              [49, 129],
              [14, 87],
              [87, 86],
              [86, 14],
              [55, 8],
              [8, 9],
              [9, 55],
              [100, 47],
              [47, 121],
              [121, 100],
              [145, 23],
              [23, 22],
              [22, 145],
              [88, 89],
              [89, 179],
              [179, 88],
              [6, 122],
              [122, 196],
              [196, 6],
              [88, 95],
              [95, 96],
              [96, 88],
              [138, 172],
              [172, 136],
              [136, 138],
              [215, 58],
              [58, 172],
              [172, 215],
              [115, 48],
              [48, 219],
              [219, 115],
              [42, 80],
              [80, 81],
              [81, 42],
              [195, 3],
              [3, 51],
              [51, 195],
              [43, 146],
              [146, 61],
              [61, 43],
              [171, 175],
              [175, 199],
              [199, 171],
              [81, 82],
              [82, 38],
              [38, 81],
              [53, 46],
              [46, 225],
              [225, 53],
              [144, 163],
              [163, 110],
              [110, 144],
              [52, 65],
              [65, 66],
              [66, 52],
              [229, 228],
              [228, 117],
              [117, 229],
              [34, 127],
              [127, 234],
              [234, 34],
              [107, 108],
              [108, 69],
              [69, 107],
              [109, 108],
              [108, 151],
              [151, 109],
              [48, 64],
              [64, 235],
              [235, 48],
              [62, 78],
              [78, 191],
              [191, 62],
              [129, 209],
              [209, 126],
              [126, 129],
              [111, 35],
              [35, 143],
              [143, 111],
              [117, 123],
              [123, 50],
              [50, 117],
              [222, 65],
              [65, 52],
              [52, 222],
              [19, 125],
              [125, 141],
              [141, 19],
              [221, 55],
              [55, 65],
              [65, 221],
              [3, 195],
              [195, 197],
              [197, 3],
              [25, 7],
              [7, 33],
              [33, 25],
              [220, 237],
              [237, 44],
              [44, 220],
              [70, 71],
              [71, 139],
              [139, 70],
              [122, 193],
              [193, 245],
              [245, 122],
              [247, 130],
              [130, 33],
              [33, 247],
              [71, 21],
              [21, 162],
              [162, 71],
              [170, 169],
              [169, 150],
              [150, 170],
              [188, 174],
              [174, 196],
              [196, 188],
              [216, 186],
              [186, 92],
              [92, 216],
              [2, 97],
              [97, 167],
              [167, 2],
              [141, 125],
              [125, 241],
              [241, 141],
              [164, 167],
              [167, 37],
              [37, 164],
              [72, 38],
              [38, 12],
              [12, 72],
              [38, 82],
              [82, 13],
              [13, 38],
              [63, 68],
              [68, 71],
              [71, 63],
              [226, 35],
              [35, 111],
              [111, 226],
              [101, 50],
              [50, 205],
              [205, 101],
              [206, 92],
              [92, 165],
              [165, 206],
              [209, 198],
              [198, 217],
              [217, 209],
              [165, 167],
              [167, 97],
              [97, 165],
              [220, 115],
              [115, 218],
              [218, 220],
              [133, 112],
              [112, 243],
              [243, 133],
              [239, 238],
              [238, 241],
              [241, 239],
              [214, 135],
              [135, 169],
              [169, 214],
              [190, 173],
              [173, 133],
              [133, 190],
              [171, 208],
              [208, 32],
              [32, 171],
              [125, 44],
              [44, 237],
              [237, 125],
              [86, 87],
              [87, 178],
              [178, 86],
              [85, 86],
              [86, 179],
              [179, 85],
              [84, 85],
              [85, 180],
              [180, 84],
              [83, 84],
              [84, 181],
              [181, 83],
              [201, 83],
              [83, 182],
              [182, 201],
              [137, 93],
              [93, 132],
              [132, 137],
              [76, 62],
              [62, 183],
              [183, 76],
              [61, 76],
              [76, 184],
              [184, 61],
              [57, 61],
              [61, 185],
              [185, 57],
              [212, 57],
              [57, 186],
              [186, 212],
              [214, 207],
              [207, 187],
              [187, 214],
              [34, 143],
              [143, 156],
              [156, 34],
              [79, 239],
              [239, 237],
              [237, 79],
              [123, 137],
              [137, 177],
              [177, 123],
              [44, 1],
              [1, 4],
              [4, 44],
              [201, 194],
              [194, 32],
              [32, 201],
              [64, 102],
              [102, 129],
              [129, 64],
              [213, 215],
              [215, 138],
              [138, 213],
              [59, 166],
              [166, 219],
              [219, 59],
              [242, 99],
              [99, 97],
              [97, 242],
              [2, 94],
              [94, 141],
              [141, 2],
              [75, 59],
              [59, 235],
              [235, 75],
              [24, 110],
              [110, 228],
              [228, 24],
              [25, 130],
              [130, 226],
              [226, 25],
              [23, 24],
              [24, 229],
              [229, 23],
              [22, 23],
              [23, 230],
              [230, 22],
              [26, 22],
              [22, 231],
              [231, 26],
              [112, 26],
              [26, 232],
              [232, 112],
              [189, 190],
              [190, 243],
              [243, 189],
              [221, 56],
              [56, 190],
              [190, 221],
              [28, 56],
              [56, 221],
              [221, 28],
              [27, 28],
              [28, 222],
              [222, 27],
              [29, 27],
              [27, 223],
              [223, 29],
              [30, 29],
              [29, 224],
              [224, 30],
              [247, 30],
              [30, 225],
              [225, 247],
              [238, 79],
              [79, 20],
              [20, 238],
              [166, 59],
              [59, 75],
              [75, 166],
              [60, 75],
              [75, 240],
              [240, 60],
              [147, 177],
              [177, 215],
              [215, 147],
              [20, 79],
              [79, 166],
              [166, 20],
              [187, 147],
              [147, 213],
              [213, 187],
              [112, 233],
              [233, 244],
              [244, 112],
              [233, 128],
              [128, 245],
              [245, 233],
              [128, 114],
              [114, 188],
              [188, 128],
              [114, 217],
              [217, 174],
              [174, 114],
              [131, 115],
              [115, 220],
              [220, 131],
              [217, 198],
              [198, 236],
              [236, 217],
              [198, 131],
              [131, 134],
              [134, 198],
              [177, 132],
              [132, 58],
              [58, 177],
              [143, 35],
              [35, 124],
              [124, 143],
              [110, 163],
              [163, 7],
              [7, 110],
              [228, 110],
              [110, 25],
              [25, 228],
              [356, 389],
              [389, 368],
              [368, 356],
              [11, 302],
              [302, 267],
              [267, 11],
              [452, 350],
              [350, 349],
              [349, 452],
              [302, 303],
              [303, 269],
              [269, 302],
              [357, 343],
              [343, 277],
              [277, 357],
              [452, 453],
              [453, 357],
              [357, 452],
              [333, 332],
              [332, 297],
              [297, 333],
              [175, 152],
              [152, 377],
              [377, 175],
              [347, 348],
              [348, 330],
              [330, 347],
              [303, 304],
              [304, 270],
              [270, 303],
              [9, 336],
              [336, 337],
              [337, 9],
              [278, 279],
              [279, 360],
              [360, 278],
              [418, 262],
              [262, 431],
              [431, 418],
              [304, 408],
              [408, 409],
              [409, 304],
              [310, 415],
              [415, 407],
              [407, 310],
              [270, 409],
              [409, 410],
              [410, 270],
              [450, 348],
              [348, 347],
              [347, 450],
              [422, 430],
              [430, 434],
              [434, 422],
              [313, 314],
              [314, 17],
              [17, 313],
              [306, 307],
              [307, 375],
              [375, 306],
              [387, 388],
              [388, 260],
              [260, 387],
              [286, 414],
              [414, 398],
              [398, 286],
              [335, 406],
              [406, 418],
              [418, 335],
              [364, 367],
              [367, 416],
              [416, 364],
              [423, 358],
              [358, 327],
              [327, 423],
              [251, 284],
              [284, 298],
              [298, 251],
              [281, 5],
              [5, 4],
              [4, 281],
              [373, 374],
              [374, 253],
              [253, 373],
              [307, 320],
              [320, 321],
              [321, 307],
              [425, 427],
              [427, 411],
              [411, 425],
              [421, 313],
              [313, 18],
              [18, 421],
              [321, 405],
              [405, 406],
              [406, 321],
              [320, 404],
              [404, 405],
              [405, 320],
              [315, 16],
              [16, 17],
              [17, 315],
              [426, 425],
              [425, 266],
              [266, 426],
              [377, 400],
              [400, 369],
              [369, 377],
              [322, 391],
              [391, 269],
              [269, 322],
              [417, 465],
              [465, 464],
              [464, 417],
              [386, 257],
              [257, 258],
              [258, 386],
              [466, 260],
              [260, 388],
              [388, 466],
              [456, 399],
              [399, 419],
              [419, 456],
              [284, 332],
              [332, 333],
              [333, 284],
              [417, 285],
              [285, 8],
              [8, 417],
              [346, 340],
              [340, 261],
              [261, 346],
              [413, 441],
              [441, 285],
              [285, 413],
              [327, 460],
              [460, 328],
              [328, 327],
              [355, 371],
              [371, 329],
              [329, 355],
              [392, 439],
              [439, 438],
              [438, 392],
              [382, 341],
              [341, 256],
              [256, 382],
              [429, 420],
              [420, 360],
              [360, 429],
              [364, 394],
              [394, 379],
              [379, 364],
              [277, 343],
              [343, 437],
              [437, 277],
              [443, 444],
              [444, 283],
              [283, 443],
              [275, 440],
              [440, 363],
              [363, 275],
              [431, 262],
              [262, 369],
              [369, 431],
              [297, 338],
              [338, 337],
              [337, 297],
              [273, 375],
              [375, 321],
              [321, 273],
              [450, 451],
              [451, 349],
              [349, 450],
              [446, 342],
              [342, 467],
              [467, 446],
              [293, 334],
              [334, 282],
              [282, 293],
              [458, 461],
              [461, 462],
              [462, 458],
              [276, 353],
              [353, 383],
              [383, 276],
              [308, 324],
              [324, 325],
              [325, 308],
              [276, 300],
              [300, 293],
              [293, 276],
              [372, 345],
              [345, 447],
              [447, 372],
              [352, 345],
              [345, 340],
              [340, 352],
              [274, 1],
              [1, 19],
              [19, 274],
              [456, 248],
              [248, 281],
              [281, 456],
              [436, 427],
              [427, 425],
              [425, 436],
              [381, 256],
              [256, 252],
              [252, 381],
              [269, 391],
              [391, 393],
              [393, 269],
              [200, 199],
              [199, 428],
              [428, 200],
              [266, 330],
              [330, 329],
              [329, 266],
              [287, 273],
              [273, 422],
              [422, 287],
              [250, 462],
              [462, 328],
              [328, 250],
              [258, 286],
              [286, 384],
              [384, 258],
              [265, 353],
              [353, 342],
              [342, 265],
              [387, 259],
              [259, 257],
              [257, 387],
              [424, 431],
              [431, 430],
              [430, 424],
              [342, 353],
              [353, 276],
              [276, 342],
              [273, 335],
              [335, 424],
              [424, 273],
              [292, 325],
              [325, 307],
              [307, 292],
              [366, 447],
              [447, 345],
              [345, 366],
              [271, 303],
              [303, 302],
              [302, 271],
              [423, 266],
              [266, 371],
              [371, 423],
              [294, 455],
              [455, 460],
              [460, 294],
              [279, 278],
              [278, 294],
              [294, 279],
              [271, 272],
              [272, 304],
              [304, 271],
              [432, 434],
              [434, 427],
              [427, 432],
              [272, 407],
              [407, 408],
              [408, 272],
              [394, 430],
              [430, 431],
              [431, 394],
              [395, 369],
              [369, 400],
              [400, 395],
              [334, 333],
              [333, 299],
              [299, 334],
              [351, 417],
              [417, 168],
              [168, 351],
              [352, 280],
              [280, 411],
              [411, 352],
              [325, 319],
              [319, 320],
              [320, 325],
              [295, 296],
              [296, 336],
              [336, 295],
              [319, 403],
              [403, 404],
              [404, 319],
              [330, 348],
              [348, 349],
              [349, 330],
              [293, 298],
              [298, 333],
              [333, 293],
              [323, 454],
              [454, 447],
              [447, 323],
              [15, 16],
              [16, 315],
              [315, 15],
              [358, 429],
              [429, 279],
              [279, 358],
              [14, 15],
              [15, 316],
              [316, 14],
              [285, 336],
              [336, 9],
              [9, 285],
              [329, 349],
              [349, 350],
              [350, 329],
              [374, 380],
              [380, 252],
              [252, 374],
              [318, 402],
              [402, 403],
              [403, 318],
              [6, 197],
              [197, 419],
              [419, 6],
              [318, 319],
              [319, 325],
              [325, 318],
              [367, 364],
              [364, 365],
              [365, 367],
              [435, 367],
              [367, 397],
              [397, 435],
              [344, 438],
              [438, 439],
              [439, 344],
              [272, 271],
              [271, 311],
              [311, 272],
              [195, 5],
              [5, 281],
              [281, 195],
              [273, 287],
              [287, 291],
              [291, 273],
              [396, 428],
              [428, 199],
              [199, 396],
              [311, 271],
              [271, 268],
              [268, 311],
              [283, 444],
              [444, 445],
              [445, 283],
              [373, 254],
              [254, 339],
              [339, 373],
              [282, 334],
              [334, 296],
              [296, 282],
              [449, 347],
              [347, 346],
              [346, 449],
              [264, 447],
              [447, 454],
              [454, 264],
              [336, 296],
              [296, 299],
              [299, 336],
              [338, 10],
              [10, 151],
              [151, 338],
              [278, 439],
              [439, 455],
              [455, 278],
              [292, 407],
              [407, 415],
              [415, 292],
              [358, 371],
              [371, 355],
              [355, 358],
              [340, 345],
              [345, 372],
              [372, 340],
              [346, 347],
              [347, 280],
              [280, 346],
              [442, 443],
              [443, 282],
              [282, 442],
              [19, 94],
              [94, 370],
              [370, 19],
              [441, 442],
              [442, 295],
              [295, 441],
              [248, 419],
              [419, 197],
              [197, 248],
              [263, 255],
              [255, 359],
              [359, 263],
              [440, 275],
              [275, 274],
              [274, 440],
              [300, 383],
              [383, 368],
              [368, 300],
              [351, 412],
              [412, 465],
              [465, 351],
              [263, 467],
              [467, 466],
              [466, 263],
              [301, 368],
              [368, 389],
              [389, 301],
              [395, 378],
              [378, 379],
              [379, 395],
              [412, 351],
              [351, 419],
              [419, 412],
              [436, 426],
              [426, 322],
              [322, 436],
              [2, 164],
              [164, 393],
              [393, 2],
              [370, 462],
              [462, 461],
              [461, 370],
              [164, 0],
              [0, 267],
              [267, 164],
              [302, 11],
              [11, 12],
              [12, 302],
              [268, 12],
              [12, 13],
              [13, 268],
              [293, 300],
              [300, 301],
              [301, 293],
              [446, 261],
              [261, 340],
              [340, 446],
              [330, 266],
              [266, 425],
              [425, 330],
              [426, 423],
              [423, 391],
              [391, 426],
              [429, 355],
              [355, 437],
              [437, 429],
              [391, 327],
              [327, 326],
              [326, 391],
              [440, 457],
              [457, 438],
              [438, 440],
              [341, 382],
              [382, 362],
              [362, 341],
              [459, 457],
              [457, 461],
              [461, 459],
              [434, 430],
              [430, 394],
              [394, 434],
              [414, 463],
              [463, 362],
              [362, 414],
              [396, 369],
              [369, 262],
              [262, 396],
              [354, 461],
              [461, 457],
              [457, 354],
              [316, 403],
              [403, 402],
              [402, 316],
              [315, 404],
              [404, 403],
              [403, 315],
              [314, 405],
              [405, 404],
              [404, 314],
              [313, 406],
              [406, 405],
              [405, 313],
              [421, 418],
              [418, 406],
              [406, 421],
              [366, 401],
              [401, 361],
              [361, 366],
              [306, 408],
              [408, 407],
              [407, 306],
              [291, 409],
              [409, 408],
              [408, 291],
              [287, 410],
              [410, 409],
              [409, 287],
              [432, 436],
              [436, 410],
              [410, 432],
              [434, 416],
              [416, 411],
              [411, 434],
              [264, 368],
              [368, 383],
              [383, 264],
              [309, 438],
              [438, 457],
              [457, 309],
              [352, 376],
              [376, 401],
              [401, 352],
              [274, 275],
              [275, 4],
              [4, 274],
              [421, 428],
              [428, 262],
              [262, 421],
              [294, 327],
              [327, 358],
              [358, 294],
              [433, 416],
              [416, 367],
              [367, 433],
              [289, 455],
              [455, 439],
              [439, 289],
              [462, 370],
              [370, 326],
              [326, 462],
              [2, 326],
              [326, 370],
              [370, 2],
              [305, 460],
              [460, 455],
              [455, 305],
              [254, 449],
              [449, 448],
              [448, 254],
              [255, 261],
              [261, 446],
              [446, 255],
              [253, 450],
              [450, 449],
              [449, 253],
              [252, 451],
              [451, 450],
              [450, 252],
              [256, 452],
              [452, 451],
              [451, 256],
              [341, 453],
              [453, 452],
              [452, 341],
              [413, 464],
              [464, 463],
              [463, 413],
              [441, 413],
              [413, 414],
              [414, 441],
              [258, 442],
              [442, 441],
              [441, 258],
              [257, 443],
              [443, 442],
              [442, 257],
              [259, 444],
              [444, 443],
              [443, 259],
              [260, 445],
              [445, 444],
              [444, 260],
              [467, 342],
              [342, 445],
              [445, 467],
              [459, 458],
              [458, 250],
              [250, 459],
              [289, 392],
              [392, 290],
              [290, 289],
              [290, 328],
              [328, 460],
              [460, 290],
              [376, 433],
              [433, 435],
              [435, 376],
              [250, 290],
              [290, 392],
              [392, 250],
              [411, 416],
              [416, 433],
              [433, 411],
              [341, 463],
              [463, 464],
              [464, 341],
              [453, 464],
              [464, 465],
              [465, 453],
              [357, 465],
              [465, 412],
              [412, 357],
              [343, 412],
              [412, 399],
              [399, 343],
              [360, 363],
              [363, 440],
              [440, 360],
              [437, 399],
              [399, 456],
              [456, 437],
              [420, 456],
              [456, 363],
              [363, 420],
              [401, 435],
              [435, 288],
              [288, 401],
              [372, 383],
              [383, 353],
              [353, 372],
              [339, 255],
              [255, 249],
              [249, 339],
              [448, 261],
              [261, 255],
              [255, 448],
              [133, 243],
              [243, 190],
              [190, 133],
              [133, 155],
              [155, 112],
              [112, 133],
              [33, 246],
              [246, 247],
              [247, 33],
              [33, 130],
              [130, 25],
              [25, 33],
              [398, 384],
              [384, 286],
              [286, 398],
              [362, 398],
              [398, 414],
              [414, 362],
              [362, 463],
              [463, 341],
              [341, 362],
              [263, 359],
              [359, 467],
              [467, 263],
              [263, 249],
              [249, 255],
              [255, 263],
              [466, 467],
              [467, 260],
              [260, 466],
              [75, 60],
              [60, 166],
              [166, 75],
              [238, 239],
              [239, 79],
              [79, 238],
              [162, 127],
              [127, 139],
              [139, 162],
              [72, 11],
              [11, 37],
              [37, 72],
              [121, 232],
              [232, 120],
              [120, 121],
              [73, 72],
              [72, 39],
              [39, 73],
              [114, 128],
              [128, 47],
              [47, 114],
              [233, 232],
              [232, 128],
              [128, 233],
              [103, 104],
              [104, 67],
              [67, 103],
              [152, 175],
              [175, 148],
              [148, 152],
              [119, 118],
              [118, 101],
              [101, 119],
              [74, 73],
              [73, 40],
              [40, 74],
              [107, 9],
              [9, 108],
              [108, 107],
              [49, 48],
              [48, 131],
              [131, 49],
              [32, 194],
              [194, 211],
              [211, 32],
              [184, 74],
              [74, 185],
              [185, 184],
              [191, 80],
              [80, 183],
              [183, 191],
              [185, 40],
              [40, 186],
              [186, 185],
              [119, 230],
              [230, 118],
              [118, 119],
              [210, 202],
              [202, 214],
              [214, 210],
              [84, 83],
              [83, 17],
              [17, 84],
              [77, 76],
              [76, 146],
              [146, 77],
              [161, 160],
              [160, 30],
              [30, 161],
              [190, 56],
              [56, 173],
              [173, 190],
              [182, 106],
              [106, 194],
              [194, 182],
              [138, 135],
              [135, 192],
              [192, 138],
              [129, 203],
              [203, 98],
              [98, 129],
              [54, 21],
              [21, 68],
              [68, 54],
              [5, 51],
              [51, 4],
              [4, 5],
              [145, 144],
              [144, 23],
              [23, 145],
              [90, 77],
              [77, 91],
              [91, 90],
              [207, 205],
              [205, 187],
              [187, 207],
              [83, 201],
              [201, 18],
              [18, 83],
              [181, 91],
              [91, 182],
              [182, 181],
              [180, 90],
              [90, 181],
              [181, 180],
              [16, 85],
              [85, 17],
              [17, 16],
              [205, 206],
              [206, 36],
              [36, 205],
              [176, 148],
              [148, 140],
              [140, 176],
              [165, 92],
              [92, 39],
              [39, 165],
              [245, 193],
              [193, 244],
              [244, 245],
              [27, 159],
              [159, 28],
              [28, 27],
              [30, 247],
              [247, 161],
              [161, 30],
              [174, 236],
              [236, 196],
              [196, 174],
              [103, 54],
              [54, 104],
              [104, 103],
              [55, 193],
              [193, 8],
              [8, 55],
              [111, 117],
              [117, 31],
              [31, 111],
              [221, 189],
              [189, 55],
              [55, 221],
              [240, 98],
              [98, 99],
              [99, 240],
              [142, 126],
              [126, 100],
              [100, 142],
              [219, 166],
              [166, 218],
              [218, 219],
              [112, 155],
              [155, 26],
              [26, 112],
              [198, 209],
              [209, 131],
              [131, 198],
              [169, 135],
              [135, 150],
              [150, 169],
              [114, 47],
              [47, 217],
              [217, 114],
              [224, 223],
              [223, 53],
              [53, 224],
              [220, 45],
              [45, 134],
              [134, 220],
              [32, 211],
              [211, 140],
              [140, 32],
              [109, 67],
              [67, 108],
              [108, 109],
              [146, 43],
              [43, 91],
              [91, 146],
              [231, 230],
              [230, 120],
              [120, 231],
              [113, 226],
              [226, 247],
              [247, 113],
              [105, 63],
              [63, 52],
              [52, 105],
              [241, 238],
              [238, 242],
              [242, 241],
              [124, 46],
              [46, 156],
              [156, 124],
              [95, 78],
              [78, 96],
              [96, 95],
              [70, 46],
              [46, 63],
              [63, 70],
              [116, 143],
              [143, 227],
              [227, 116],
              [116, 123],
              [123, 111],
              [111, 116],
              [1, 44],
              [44, 19],
              [19, 1],
              [3, 236],
              [236, 51],
              [51, 3],
              [207, 216],
              [216, 205],
              [205, 207],
              [26, 154],
              [154, 22],
              [22, 26],
              [165, 39],
              [39, 167],
              [167, 165],
              [199, 200],
              [200, 208],
              [208, 199],
              [101, 36],
              [36, 100],
              [100, 101],
              [43, 57],
              [57, 202],
              [202, 43],
              [242, 20],
              [20, 99],
              [99, 242],
              [56, 28],
              [28, 157],
              [157, 56],
              [124, 35],
              [35, 113],
              [113, 124],
              [29, 160],
              [160, 27],
              [27, 29],
              [211, 204],
              [204, 210],
              [210, 211],
              [124, 113],
              [113, 46],
              [46, 124],
              [106, 43],
              [43, 204],
              [204, 106],
              [96, 62],
              [62, 77],
              [77, 96],
              [227, 137],
              [137, 116],
              [116, 227],
              [73, 41],
              [41, 72],
              [72, 73],
              [36, 203],
              [203, 142],
              [142, 36],
              [235, 64],
              [64, 240],
              [240, 235],
              [48, 49],
              [49, 64],
              [64, 48],
              [42, 41],
              [41, 74],
              [74, 42],
              [214, 212],
              [212, 207],
              [207, 214],
              [183, 42],
              [42, 184],
              [184, 183],
              [210, 169],
              [169, 211],
              [211, 210],
              [140, 170],
              [170, 176],
              [176, 140],
              [104, 105],
              [105, 69],
              [69, 104],
              [193, 122],
              [122, 168],
              [168, 193],
              [50, 123],
              [123, 187],
              [187, 50],
              [89, 96],
              [96, 90],
              [90, 89],
              [66, 65],
              [65, 107],
              [107, 66],
              [179, 89],
              [89, 180],
              [180, 179],
              [119, 101],
              [101, 120],
              [120, 119],
              [68, 63],
              [63, 104],
              [104, 68],
              [234, 93],
              [93, 227],
              [227, 234],
              [16, 15],
              [15, 85],
              [85, 16],
              [209, 129],
              [129, 49],
              [49, 209],
              [15, 14],
              [14, 86],
              [86, 15],
              [107, 55],
              [55, 9],
              [9, 107],
              [120, 100],
              [100, 121],
              [121, 120],
              [153, 145],
              [145, 22],
              [22, 153],
              [178, 88],
              [88, 179],
              [179, 178],
              [197, 6],
              [6, 196],
              [196, 197],
              [89, 88],
              [88, 96],
              [96, 89],
              [135, 138],
              [138, 136],
              [136, 135],
              [138, 215],
              [215, 172],
              [172, 138],
              [218, 115],
              [115, 219],
              [219, 218],
              [41, 42],
              [42, 81],
              [81, 41],
              [5, 195],
              [195, 51],
              [51, 5],
              [57, 43],
              [43, 61],
              [61, 57],
              [208, 171],
              [171, 199],
              [199, 208],
              [41, 81],
              [81, 38],
              [38, 41],
              [224, 53],
              [53, 225],
              [225, 224],
              [24, 144],
              [144, 110],
              [110, 24],
              [105, 52],
              [52, 66],
              [66, 105],
              [118, 229],
              [229, 117],
              [117, 118],
              [227, 34],
              [34, 234],
              [234, 227],
              [66, 107],
              [107, 69],
              [69, 66],
              [10, 109],
              [109, 151],
              [151, 10],
              [219, 48],
              [48, 235],
              [235, 219],
              [183, 62],
              [62, 191],
              [191, 183],
              [142, 129],
              [129, 126],
              [126, 142],
              [116, 111],
              [111, 143],
              [143, 116],
              [118, 117],
              [117, 50],
              [50, 118],
              [223, 222],
              [222, 52],
              [52, 223],
              [94, 19],
              [19, 141],
              [141, 94],
              [222, 221],
              [221, 65],
              [65, 222],
              [196, 3],
              [3, 197],
              [197, 196],
              [45, 220],
              [220, 44],
              [44, 45],
              [156, 70],
              [70, 139],
              [139, 156],
              [188, 122],
              [122, 245],
              [245, 188],
              [139, 71],
              [71, 162],
              [162, 139],
              [149, 170],
              [170, 150],
              [150, 149],
              [122, 188],
              [188, 196],
              [196, 122],
              [206, 216],
              [216, 92],
              [92, 206],
              [164, 2],
              [2, 167],
              [167, 164],
              [242, 141],
              [141, 241],
              [241, 242],
              [0, 164],
              [164, 37],
              [37, 0],
              [11, 72],
              [72, 12],
              [12, 11],
              [12, 38],
              [38, 13],
              [13, 12],
              [70, 63],
              [63, 71],
              [71, 70],
              [31, 226],
              [226, 111],
              [111, 31],
              [36, 101],
              [101, 205],
              [205, 36],
              [203, 206],
              [206, 165],
              [165, 203],
              [126, 209],
              [209, 217],
              [217, 126],
              [98, 165],
              [165, 97],
              [97, 98],
              [237, 220],
              [220, 218],
              [218, 237],
              [237, 239],
              [239, 241],
              [241, 237],
              [210, 214],
              [214, 169],
              [169, 210],
              [140, 171],
              [171, 32],
              [32, 140],
              [241, 125],
              [125, 237],
              [237, 241],
              [179, 86],
              [86, 178],
              [178, 179],
              [180, 85],
              [85, 179],
              [179, 180],
              [181, 84],
              [84, 180],
              [180, 181],
              [182, 83],
              [83, 181],
              [181, 182],
              [194, 201],
              [201, 182],
              [182, 194],
              [177, 137],
              [137, 132],
              [132, 177],
              [184, 76],
              [76, 183],
              [183, 184],
              [185, 61],
              [61, 184],
              [184, 185],
              [186, 57],
              [57, 185],
              [185, 186],
              [216, 212],
              [212, 186],
              [186, 216],
              [192, 214],
              [214, 187],
              [187, 192],
              [139, 34],
              [34, 156],
              [156, 139],
              [218, 79],
              [79, 237],
              [237, 218],
              [147, 123],
              [123, 177],
              [177, 147],
              [45, 44],
              [44, 4],
              [4, 45],
              [208, 201],
              [201, 32],
              [32, 208],
              [98, 64],
              [64, 129],
              [129, 98],
              [192, 213],
              [213, 138],
              [138, 192],
              [235, 59],
              [59, 219],
              [219, 235],
              [141, 242],
              [242, 97],
              [97, 141],
              [97, 2],
              [2, 141],
              [141, 97],
              [240, 75],
              [75, 235],
              [235, 240],
              [229, 24],
              [24, 228],
              [228, 229],
              [31, 25],
              [25, 226],
              [226, 31],
              [230, 23],
              [23, 229],
              [229, 230],
              [231, 22],
              [22, 230],
              [230, 231],
              [232, 26],
              [26, 231],
              [231, 232],
              [233, 112],
              [112, 232],
              [232, 233],
              [244, 189],
              [189, 243],
              [243, 244],
              [189, 221],
              [221, 190],
              [190, 189],
              [222, 28],
              [28, 221],
              [221, 222],
              [223, 27],
              [27, 222],
              [222, 223],
              [224, 29],
              [29, 223],
              [223, 224],
              [225, 30],
              [30, 224],
              [224, 225],
              [113, 247],
              [247, 225],
              [225, 113],
              [99, 60],
              [60, 240],
              [240, 99],
              [213, 147],
              [147, 215],
              [215, 213],
              [60, 20],
              [20, 166],
              [166, 60],
              [192, 187],
              [187, 213],
              [213, 192],
              [243, 112],
              [112, 244],
              [244, 243],
              [244, 233],
              [233, 245],
              [245, 244],
              [245, 128],
              [128, 188],
              [188, 245],
              [188, 114],
              [114, 174],
              [174, 188],
              [134, 131],
              [131, 220],
              [220, 134],
              [174, 217],
              [217, 236],
              [236, 174],
              [236, 198],
              [198, 134],
              [134, 236],
              [215, 177],
              [177, 58],
              [58, 215],
              [156, 143],
              [143, 124],
              [124, 156],
              [25, 110],
              [110, 7],
              [7, 25],
              [31, 228],
              [228, 25],
              [25, 31],
              [264, 356],
              [356, 368],
              [368, 264],
              [0, 11],
              [11, 267],
              [267, 0],
              [451, 452],
              [452, 349],
              [349, 451],
              [267, 302],
              [302, 269],
              [269, 267],
              [350, 357],
              [357, 277],
              [277, 350],
              [350, 452],
              [452, 357],
              [357, 350],
              [299, 333],
              [333, 297],
              [297, 299],
              [396, 175],
              [175, 377],
              [377, 396],
              [280, 347],
              [347, 330],
              [330, 280],
              [269, 303],
              [303, 270],
              [270, 269],
              [151, 9],
              [9, 337],
              [337, 151],
              [344, 278],
              [278, 360],
              [360, 344],
              [424, 418],
              [418, 431],
              [431, 424],
              [270, 304],
              [304, 409],
              [409, 270],
              [272, 310],
              [310, 407],
              [407, 272],
              [322, 270],
              [270, 410],
              [410, 322],
              [449, 450],
              [450, 347],
              [347, 449],
              [432, 422],
              [422, 434],
              [434, 432],
              [18, 313],
              [313, 17],
              [17, 18],
              [291, 306],
              [306, 375],
              [375, 291],
              [259, 387],
              [387, 260],
              [260, 259],
              [424, 335],
              [335, 418],
              [418, 424],
              [434, 364],
              [364, 416],
              [416, 434],
              [391, 423],
              [423, 327],
              [327, 391],
              [301, 251],
              [251, 298],
              [298, 301],
              [275, 281],
              [281, 4],
              [4, 275],
              [254, 373],
              [373, 253],
              [253, 254],
              [375, 307],
              [307, 321],
              [321, 375],
              [280, 425],
              [425, 411],
              [411, 280],
              [200, 421],
              [421, 18],
              [18, 200],
              [335, 321],
              [321, 406],
              [406, 335],
              [321, 320],
              [320, 405],
              [405, 321],
              [314, 315],
              [315, 17],
              [17, 314],
              [423, 426],
              [426, 266],
              [266, 423],
              [396, 377],
              [377, 369],
              [369, 396],
              [270, 322],
              [322, 269],
              [269, 270],
              [413, 417],
              [417, 464],
              [464, 413],
              [385, 386],
              [386, 258],
              [258, 385],
              [248, 456],
              [456, 419],
              [419, 248],
              [298, 284],
              [284, 333],
              [333, 298],
              [168, 417],
              [417, 8],
              [8, 168],
              [448, 346],
              [346, 261],
              [261, 448],
              [417, 413],
              [413, 285],
              [285, 417],
              [326, 327],
              [327, 328],
              [328, 326],
              [277, 355],
              [355, 329],
              [329, 277],
              [309, 392],
              [392, 438],
              [438, 309],
              [381, 382],
              [382, 256],
              [256, 381],
              [279, 429],
              [429, 360],
              [360, 279],
              [365, 364],
              [364, 379],
              [379, 365],
              [355, 277],
              [277, 437],
              [437, 355],
              [282, 443],
              [443, 283],
              [283, 282],
              [281, 275],
              [275, 363],
              [363, 281],
              [395, 431],
              [431, 369],
              [369, 395],
              [299, 297],
              [297, 337],
              [337, 299],
              [335, 273],
              [273, 321],
              [321, 335],
              [348, 450],
              [450, 349],
              [349, 348],
              [359, 446],
              [446, 467],
              [467, 359],
              [283, 293],
              [293, 282],
              [282, 283],
              [250, 458],
              [458, 462],
              [462, 250],
              [300, 276],
              [276, 383],
              [383, 300],
              [292, 308],
              [308, 325],
              [325, 292],
              [283, 276],
              [276, 293],
              [293, 283],
              [264, 372],
              [372, 447],
              [447, 264],
              [346, 352],
              [352, 340],
              [340, 346],
              [354, 274],
              [274, 19],
              [19, 354],
              [363, 456],
              [456, 281],
              [281, 363],
              [426, 436],
              [436, 425],
              [425, 426],
              [380, 381],
              [381, 252],
              [252, 380],
              [267, 269],
              [269, 393],
              [393, 267],
              [421, 200],
              [200, 428],
              [428, 421],
              [371, 266],
              [266, 329],
              [329, 371],
              [432, 287],
              [287, 422],
              [422, 432],
              [290, 250],
              [250, 328],
              [328, 290],
              [385, 258],
              [258, 384],
              [384, 385],
              [446, 265],
              [265, 342],
              [342, 446],
              [386, 387],
              [387, 257],
              [257, 386],
              [422, 424],
              [424, 430],
              [430, 422],
              [445, 342],
              [342, 276],
              [276, 445],
              [422, 273],
              [273, 424],
              [424, 422],
              [306, 292],
              [292, 307],
              [307, 306],
              [352, 366],
              [366, 345],
              [345, 352],
              [268, 271],
              [271, 302],
              [302, 268],
              [358, 423],
              [423, 371],
              [371, 358],
              [327, 294],
              [294, 460],
              [460, 327],
              [331, 279],
              [279, 294],
              [294, 331],
              [303, 271],
              [271, 304],
              [304, 303],
              [436, 432],
              [432, 427],
              [427, 436],
              [304, 272],
              [272, 408],
              [408, 304],
              [395, 394],
              [394, 431],
              [431, 395],
              [378, 395],
              [395, 400],
              [400, 378],
              [296, 334],
              [334, 299],
              [299, 296],
              [6, 351],
              [351, 168],
              [168, 6],
              [376, 352],
              [352, 411],
              [411, 376],
              [307, 325],
              [325, 320],
              [320, 307],
              [285, 295],
              [295, 336],
              [336, 285],
              [320, 319],
              [319, 404],
              [404, 320],
              [329, 330],
              [330, 349],
              [349, 329],
              [334, 293],
              [293, 333],
              [333, 334],
              [366, 323],
              [323, 447],
              [447, 366],
              [316, 15],
              [15, 315],
              [315, 316],
              [331, 358],
              [358, 279],
              [279, 331],
              [317, 14],
              [14, 316],
              [316, 317],
              [8, 285],
              [285, 9],
              [9, 8],
              [277, 329],
              [329, 350],
              [350, 277],
              [253, 374],
              [374, 252],
              [252, 253],
              [319, 318],
              [318, 403],
              [403, 319],
              [351, 6],
              [6, 419],
              [419, 351],
              [324, 318],
              [318, 325],
              [325, 324],
              [397, 367],
              [367, 365],
              [365, 397],
              [288, 435],
              [435, 397],
              [397, 288],
              [278, 344],
              [344, 439],
              [439, 278],
              [310, 272],
              [272, 311],
              [311, 310],
              [248, 195],
              [195, 281],
              [281, 248],
              [375, 273],
              [273, 291],
              [291, 375],
              [175, 396],
              [396, 199],
              [199, 175],
              [312, 311],
              [311, 268],
              [268, 312],
              [276, 283],
              [283, 445],
              [445, 276],
              [390, 373],
              [373, 339],
              [339, 390],
              [295, 282],
              [282, 296],
              [296, 295],
              [448, 449],
              [449, 346],
              [346, 448],
              [356, 264],
              [264, 454],
              [454, 356],
              [337, 336],
              [336, 299],
              [299, 337],
              [337, 338],
              [338, 151],
              [151, 337],
              [294, 278],
              [278, 455],
              [455, 294],
              [308, 292],
              [292, 415],
              [415, 308],
              [429, 358],
              [358, 355],
              [355, 429],
              [265, 340],
              [340, 372],
              [372, 265],
              [352, 346],
              [346, 280],
              [280, 352],
              [295, 442],
              [442, 282],
              [282, 295],
              [354, 19],
              [19, 370],
              [370, 354],
              [285, 441],
              [441, 295],
              [295, 285],
              [195, 248],
              [248, 197],
              [197, 195],
              [457, 440],
              [440, 274],
              [274, 457],
              [301, 300],
              [300, 368],
              [368, 301],
              [417, 351],
              [351, 465],
              [465, 417],
              [251, 301],
              [301, 389],
              [389, 251],
              [394, 395],
              [395, 379],
              [379, 394],
              [399, 412],
              [412, 419],
              [419, 399],
              [410, 436],
              [436, 322],
              [322, 410],
              [326, 2],
              [2, 393],
              [393, 326],
              [354, 370],
              [370, 461],
              [461, 354],
              [393, 164],
              [164, 267],
              [267, 393],
              [268, 302],
              [302, 12],
              [12, 268],
              [312, 268],
              [268, 13],
              [13, 312],
              [298, 293],
              [293, 301],
              [301, 298],
              [265, 446],
              [446, 340],
              [340, 265],
              [280, 330],
              [330, 425],
              [425, 280],
              [322, 426],
              [426, 391],
              [391, 322],
              [420, 429],
              [429, 437],
              [437, 420],
              [393, 391],
              [391, 326],
              [326, 393],
              [344, 440],
              [440, 438],
              [438, 344],
              [458, 459],
              [459, 461],
              [461, 458],
              [364, 434],
              [434, 394],
              [394, 364],
              [428, 396],
              [396, 262],
              [262, 428],
              [274, 354],
              [354, 457],
              [457, 274],
              [317, 316],
              [316, 402],
              [402, 317],
              [316, 315],
              [315, 403],
              [403, 316],
              [315, 314],
              [314, 404],
              [404, 315],
              [314, 313],
              [313, 405],
              [405, 314],
              [313, 421],
              [421, 406],
              [406, 313],
              [323, 366],
              [366, 361],
              [361, 323],
              [292, 306],
              [306, 407],
              [407, 292],
              [306, 291],
              [291, 408],
              [408, 306],
              [291, 287],
              [287, 409],
              [409, 291],
              [287, 432],
              [432, 410],
              [410, 287],
              [427, 434],
              [434, 411],
              [411, 427],
              [372, 264],
              [264, 383],
              [383, 372],
              [459, 309],
              [309, 457],
              [457, 459],
              [366, 352],
              [352, 401],
              [401, 366],
              [1, 274],
              [274, 4],
              [4, 1],
              [418, 421],
              [421, 262],
              [262, 418],
              [331, 294],
              [294, 358],
              [358, 331],
              [435, 433],
              [433, 367],
              [367, 435],
              [392, 289],
              [289, 439],
              [439, 392],
              [328, 462],
              [462, 326],
              [326, 328],
              [94, 2],
              [2, 370],
              [370, 94],
              [289, 305],
              [305, 455],
              [455, 289],
              [339, 254],
              [254, 448],
              [448, 339],
              [359, 255],
              [255, 446],
              [446, 359],
              [254, 253],
              [253, 449],
              [449, 254],
              [253, 252],
              [252, 450],
              [450, 253],
              [252, 256],
              [256, 451],
              [451, 252],
              [256, 341],
              [341, 452],
              [452, 256],
              [414, 413],
              [413, 463],
              [463, 414],
              [286, 441],
              [441, 414],
              [414, 286],
              [286, 258],
              [258, 441],
              [441, 286],
              [258, 257],
              [257, 442],
              [442, 258],
              [257, 259],
              [259, 443],
              [443, 257],
              [259, 260],
              [260, 444],
              [444, 259],
              [260, 467],
              [467, 445],
              [445, 260],
              [309, 459],
              [459, 250],
              [250, 309],
              [305, 289],
              [289, 290],
              [290, 305],
              [305, 290],
              [290, 460],
              [460, 305],
              [401, 376],
              [376, 435],
              [435, 401],
              [309, 250],
              [250, 392],
              [392, 309],
              [376, 411],
              [411, 433],
              [433, 376],
              [453, 341],
              [341, 464],
              [464, 453],
              [357, 453],
              [453, 465],
              [465, 357],
              [343, 357],
              [357, 412],
              [412, 343],
              [437, 343],
              [343, 399],
              [399, 437],
              [344, 360],
              [360, 440],
              [440, 344],
              [420, 437],
              [437, 456],
              [456, 420],
              [360, 420],
              [420, 363],
              [363, 360],
              [361, 401],
              [401, 288],
              [288, 361],
              [265, 372],
              [372, 353],
              [353, 265],
              [390, 339],
              [339, 249],
              [249, 390],
              [339, 448],
              [448, 255],
              [255, 339],
            );
          function mc(t) {
            t.u = {
              faceLandmarks: [],
              faceBlendshapes: [],
              facialTransformationMatrixes: [],
            };
          }
          var yc = class extends ic {
            constructor(t, e) {
              super(new Za(t, e), 'image_in', 'norm_rect', !1),
                (this.u = {
                  faceLandmarks: [],
                  faceBlendshapes: [],
                  facialTransformationMatrixes: [],
                }),
                (this.outputFacialTransformationMatrixes =
                  this.outputFaceBlendshapes =
                    !1),
                In((t = this.h = new Wo()), 0, 1, (e = new Co())),
                (this.H = new Xo()),
                In(this.h, 0, 3, this.H),
                (this.j = new Uo()),
                In(this.h, 0, 2, this.j),
                Xn(this.j, 4, 1),
                zn(this.j, 2, 0.5),
                zn(this.H, 2, 0.5),
                zn(this.h, 4, 0.5);
            }
            get baseOptions() {
              return Pn(this.h, Co, 1);
            }
            set baseOptions(t) {
              In(this.h, 0, 1, t);
            }
            o(t) {
              return (
                'numFaces' in t && Xn(this.j, 4, t.numFaces ?? 1),
                'minFaceDetectionConfidence' in t &&
                  zn(this.j, 2, t.minFaceDetectionConfidence ?? 0.5),
                'minTrackingConfidence' in t &&
                  zn(this.h, 4, t.minTrackingConfidence ?? 0.5),
                'minFacePresenceConfidence' in t &&
                  zn(this.H, 2, t.minFacePresenceConfidence ?? 0.5),
                'outputFaceBlendshapes' in t &&
                  (this.outputFaceBlendshapes = !!t.outputFaceBlendshapes),
                'outputFacialTransformationMatrixes' in t &&
                  (this.outputFacialTransformationMatrixes =
                    !!t.outputFacialTransformationMatrixes),
                this.l(t)
              );
            }
            F(t, e) {
              return mc(this), ec(this, t, e), this.u;
            }
            G(t, e, n) {
              return mc(this), nc(this, t, n, e), this.u;
            }
            m() {
              var t = new Ni();
              Di(t, 'image_in'), Di(t, 'norm_rect'), Ui(t, 'face_landmarks');
              const e = new vi();
              Wn(e, Yo, this.h);
              const n = new Oi();
              ki(
                n,
                'mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph',
              ),
                Li(n, 'IMAGE:image_in'),
                Li(n, 'NORM_RECT:norm_rect'),
                Si(n, 'NORM_LANDMARKS:face_landmarks'),
                n.o(e),
                Ci(t, n),
                this.g.attachProtoVectorListener('face_landmarks', (t, e) => {
                  for (const e of t)
                    (t = lo(e)), this.u.faceLandmarks.push(Ds(t));
                  ea(this, e);
                }),
                this.g.attachEmptyPacketListener('face_landmarks', (t) => {
                  ea(this, t);
                }),
                this.outputFaceBlendshapes &&
                  (Ui(t, 'blendshapes'),
                  Si(n, 'BLENDSHAPES:blendshapes'),
                  this.g.attachProtoVectorListener('blendshapes', (t, e) => {
                    if (this.outputFaceBlendshapes)
                      for (const e of t)
                        (t = Wi(e)),
                          this.u.faceBlendshapes.push(Is(t.g() ?? []));
                    ea(this, e);
                  }),
                  this.g.attachEmptyPacketListener('blendshapes', (t) => {
                    ea(this, t);
                  })),
                this.outputFacialTransformationMatrixes &&
                  (Ui(t, 'face_geometry'),
                  Si(n, 'FACE_GEOMETRY:face_geometry'),
                  this.g.attachProtoVectorListener('face_geometry', (t, e) => {
                    if (this.outputFacialTransformationMatrixes)
                      for (const e of t)
                        (t = Pn(Vo(e), fo, 2)) &&
                          this.u.facialTransformationMatrixes.push({
                            rows: Gn(Bn(t, 1), 0) ?? 0,
                            columns: Gn(Bn(t, 2), 0) ?? 0,
                            data: vn(t, 3, we).slice() ?? [],
                          });
                    ea(this, e);
                  }),
                  this.g.attachEmptyPacketListener('face_geometry', (t) => {
                    ea(this, t);
                  })),
                (t = t.g()),
                this.setGraph(new Uint8Array(t), !0);
            }
          };
          (yc.prototype.detectForVideo = yc.prototype.G),
            (yc.prototype.detect = yc.prototype.F),
            (yc.prototype.setOptions = yc.prototype.o),
            (yc.createFromModelPath = function (t, e) {
              return Qa(yc, t, { baseOptions: { modelAssetPath: e } });
            }),
            (yc.createFromModelBuffer = function (t, e) {
              return Qa(yc, t, { baseOptions: { modelAssetBuffer: e } });
            }),
            (yc.createFromOptions = function (t, e) {
              return Qa(yc, t, e);
            }),
            (yc.FACE_LANDMARKS_LIPS = sc),
            (yc.FACE_LANDMARKS_LEFT_EYE = ac),
            (yc.FACE_LANDMARKS_LEFT_EYEBROW = cc),
            (yc.FACE_LANDMARKS_LEFT_IRIS = hc),
            (yc.FACE_LANDMARKS_RIGHT_EYE = uc),
            (yc.FACE_LANDMARKS_RIGHT_EYEBROW = lc),
            (yc.FACE_LANDMARKS_RIGHT_IRIS = fc),
            (yc.FACE_LANDMARKS_FACE_OVAL = dc),
            (yc.FACE_LANDMARKS_CONTOURS = pc),
            (yc.FACE_LANDMARKS_TESSELATION = gc);
          var vc = class extends ic {
            constructor(t, e) {
              super(new Za(t, e), 'image_in', 'norm_rect', !0),
                In((t = this.j = new qo()), 0, 1, (e = new Co()));
            }
            get baseOptions() {
              return Pn(this.j, Co, 1);
            }
            set baseOptions(t) {
              In(this.j, 0, 1, t);
            }
            o(t) {
              return super.l(t);
            }
            Pa(t, e, n) {
              const r = 'function' != typeof e ? e : {};
              if (
                ((this.h = 'function' == typeof e ? e : n),
                ec(this, t, r ?? {}),
                !this.h)
              )
                return this.u;
            }
            m() {
              var t = new Ni();
              Di(t, 'image_in'), Di(t, 'norm_rect'), Ui(t, 'stylized_image');
              const e = new vi();
              Wn(e, $o, this.j);
              const n = new Oi();
              ki(n, 'mediapipe.tasks.vision.face_stylizer.FaceStylizerGraph'),
                Li(n, 'IMAGE:image_in'),
                Li(n, 'NORM_RECT:norm_rect'),
                Si(n, 'STYLIZED_IMAGE:stylized_image'),
                n.o(e),
                Ci(t, n),
                this.g.W('stylized_image', (t, e) => {
                  var n = !this.h,
                    r = t.data,
                    i = t.width;
                  const o = i * (t = t.height);
                  if (r instanceof Uint8Array)
                    if (r.length === 3 * o) {
                      const e = new Uint8ClampedArray(4 * o);
                      for (let t = 0; t < o; ++t)
                        (e[4 * t] = r[3 * t]),
                          (e[4 * t + 1] = r[3 * t + 1]),
                          (e[4 * t + 2] = r[3 * t + 2]),
                          (e[4 * t + 3] = 255);
                      r = new ImageData(e, i, t);
                    } else {
                      if (r.length !== 4 * o)
                        throw Error(
                          'Unsupported channel count: ' + r.length / o,
                        );
                      r = new ImageData(
                        new Uint8ClampedArray(r.buffer, r.byteOffset, r.length),
                        i,
                        t,
                      );
                    }
                  else if (!(r instanceof WebGLTexture))
                    throw Error(`Unsupported format: ${r.constructor.name}`);
                  (i = new Ka([r], !1, !1, this.g.i.canvas, this.M, i, t)),
                    (this.u = n = n ? i.clone() : i),
                    this.h && this.h(n),
                    ea(this, e);
                }),
                this.g.attachEmptyPacketListener('stylized_image', (t) => {
                  (this.u = null), this.h && this.h(null), ea(this, t);
                }),
                (t = t.g()),
                this.setGraph(new Uint8Array(t), !0);
            }
          };
          (vc.prototype.stylize = vc.prototype.Pa),
            (vc.prototype.setOptions = vc.prototype.o),
            (vc.createFromModelPath = function (t, e) {
              return Qa(vc, t, { baseOptions: { modelAssetPath: e } });
            }),
            (vc.createFromModelBuffer = function (t, e) {
              return Qa(vc, t, { baseOptions: { modelAssetBuffer: e } });
            }),
            (vc.createFromOptions = function (t, e) {
              return Qa(vc, t, e);
            });
          var _c = qa(
            [0, 1],
            [1, 2],
            [2, 3],
            [3, 4],
            [0, 5],
            [5, 6],
            [6, 7],
            [7, 8],
            [5, 9],
            [9, 10],
            [10, 11],
            [11, 12],
            [9, 13],
            [13, 14],
            [14, 15],
            [15, 16],
            [13, 17],
            [0, 17],
            [17, 18],
            [18, 19],
            [19, 20],
          );
          function wc(t) {
            (t.gestures = []),
              (t.landmarks = []),
              (t.worldLandmarks = []),
              (t.handedness = []);
          }
          function bc(t) {
            return 0 === t.gestures.length
              ? {
                  gestures: [],
                  landmarks: [],
                  worldLandmarks: [],
                  handedness: [],
                  handednesses: [],
                }
              : {
                  gestures: t.gestures,
                  landmarks: t.landmarks,
                  worldLandmarks: t.worldLandmarks,
                  handedness: t.handedness,
                  handednesses: t.handedness,
                };
          }
          function Ec(t, e = !0) {
            const n = [];
            for (const i of t) {
              var r = Wi(i);
              t = [];
              for (const n of r.g())
                (r = e && null != Bn(n, 1) ? Gn(Bn(n, 1), 0) : -1),
                  t.push({
                    score: jn(n, 2) ?? 0,
                    index: r,
                    categoryName: Vn(n, 3) ?? '',
                    displayName: Vn(n, 4) ?? '',
                  });
              n.push(t);
            }
            return n;
          }
          var Tc = class extends ic {
            constructor(t, e) {
              super(new Za(t, e), 'image_in', 'norm_rect', !1),
                (this.gestures = []),
                (this.landmarks = []),
                (this.worldLandmarks = []),
                (this.handedness = []),
                In((t = this.v = new cs()), 0, 1, (e = new Co())),
                (this.A = new ss()),
                In(this.v, 0, 2, this.A),
                (this.u = new is()),
                In(this.A, 0, 3, this.u),
                (this.h = new ns()),
                In(this.A, 0, 2, this.h),
                (this.j = new ts()),
                In(this.v, 0, 3, this.j),
                zn(this.h, 2, 0.5),
                zn(this.A, 4, 0.5),
                zn(this.u, 2, 0.5);
            }
            get baseOptions() {
              return Pn(this.v, Co, 1);
            }
            set baseOptions(t) {
              In(this.v, 0, 1, t);
            }
            o(t) {
              if (
                (Xn(this.h, 3, t.numHands ?? 1),
                'minHandDetectionConfidence' in t &&
                  zn(this.h, 2, t.minHandDetectionConfidence ?? 0.5),
                'minTrackingConfidence' in t &&
                  zn(this.A, 4, t.minTrackingConfidence ?? 0.5),
                'minHandPresenceConfidence' in t &&
                  zn(this.u, 2, t.minHandPresenceConfidence ?? 0.5),
                t.cannedGesturesClassifierOptions)
              ) {
                var e = new Jo(),
                  n = e,
                  r = Rs(
                    t.cannedGesturesClassifierOptions,
                    Pn(this.j, Jo, 3)?.h(),
                  );
                In(n, 0, 2, r), In(this.j, 0, 3, e);
              } else
                void 0 === t.cannedGesturesClassifierOptions &&
                  Pn(this.j, Jo, 3)?.g();
              return (
                t.customGesturesClassifierOptions
                  ? (In(
                      (n = e = new Jo()),
                      0,
                      2,
                      (r = Rs(
                        t.customGesturesClassifierOptions,
                        Pn(this.j, Jo, 4)?.h(),
                      )),
                    ),
                    In(this.j, 0, 4, e))
                  : void 0 === t.customGesturesClassifierOptions &&
                    Pn(this.j, Jo, 4)?.g(),
                this.l(t)
              );
            }
            Ka(t, e) {
              return wc(this), ec(this, t, e), bc(this);
            }
            La(t, e, n) {
              return wc(this), nc(this, t, n, e), bc(this);
            }
            m() {
              var t = new Ni();
              Di(t, 'image_in'),
                Di(t, 'norm_rect'),
                Ui(t, 'hand_gestures'),
                Ui(t, 'hand_landmarks'),
                Ui(t, 'world_hand_landmarks'),
                Ui(t, 'handedness');
              const e = new vi();
              Wn(e, ls, this.v);
              const n = new Oi();
              ki(
                n,
                'mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph',
              ),
                Li(n, 'IMAGE:image_in'),
                Li(n, 'NORM_RECT:norm_rect'),
                Si(n, 'HAND_GESTURES:hand_gestures'),
                Si(n, 'LANDMARKS:hand_landmarks'),
                Si(n, 'WORLD_LANDMARKS:world_hand_landmarks'),
                Si(n, 'HANDEDNESS:handedness'),
                n.o(e),
                Ci(t, n),
                this.g.attachProtoVectorListener('hand_landmarks', (t, e) => {
                  for (const e of t) {
                    t = lo(e);
                    const n = [];
                    for (const e of Rn(t, co, 1))
                      n.push({
                        x: jn(e, 1) ?? 0,
                        y: jn(e, 2) ?? 0,
                        z: jn(e, 3) ?? 0,
                        visibility: jn(e, 4) ?? 0,
                      });
                    this.landmarks.push(n);
                  }
                  ea(this, e);
                }),
                this.g.attachEmptyPacketListener('hand_landmarks', (t) => {
                  ea(this, t);
                }),
                this.g.attachProtoVectorListener(
                  'world_hand_landmarks',
                  (t, e) => {
                    for (const e of t) {
                      t = ao(e);
                      const n = [];
                      for (const e of Rn(t, io, 1))
                        n.push({
                          x: jn(e, 1) ?? 0,
                          y: jn(e, 2) ?? 0,
                          z: jn(e, 3) ?? 0,
                          visibility: jn(e, 4) ?? 0,
                        });
                      this.worldLandmarks.push(n);
                    }
                    ea(this, e);
                  },
                ),
                this.g.attachEmptyPacketListener(
                  'world_hand_landmarks',
                  (t) => {
                    ea(this, t);
                  },
                ),
                this.g.attachProtoVectorListener('hand_gestures', (t, e) => {
                  this.gestures.push(...Ec(t, !1)), ea(this, e);
                }),
                this.g.attachEmptyPacketListener('hand_gestures', (t) => {
                  ea(this, t);
                }),
                this.g.attachProtoVectorListener('handedness', (t, e) => {
                  this.handedness.push(...Ec(t)), ea(this, e);
                }),
                this.g.attachEmptyPacketListener('handedness', (t) => {
                  ea(this, t);
                }),
                (t = t.g()),
                this.setGraph(new Uint8Array(t), !0);
            }
          };
          function Ac(t) {
            return {
              landmarks: t.landmarks,
              worldLandmarks: t.worldLandmarks,
              handednesses: t.handedness,
              handedness: t.handedness,
            };
          }
          (Tc.prototype.recognizeForVideo = Tc.prototype.La),
            (Tc.prototype.recognize = Tc.prototype.Ka),
            (Tc.prototype.setOptions = Tc.prototype.o),
            (Tc.createFromModelPath = function (t, e) {
              return Qa(Tc, t, { baseOptions: { modelAssetPath: e } });
            }),
            (Tc.createFromModelBuffer = function (t, e) {
              return Qa(Tc, t, { baseOptions: { modelAssetBuffer: e } });
            }),
            (Tc.createFromOptions = function (t, e) {
              return Qa(Tc, t, e);
            }),
            (Tc.HAND_CONNECTIONS = _c);
          var xc = class extends ic {
            constructor(t, e) {
              super(new Za(t, e), 'image_in', 'norm_rect', !1),
                (this.landmarks = []),
                (this.worldLandmarks = []),
                (this.handedness = []),
                In((t = this.j = new ss()), 0, 1, (e = new Co())),
                (this.u = new is()),
                In(this.j, 0, 3, this.u),
                (this.h = new ns()),
                In(this.j, 0, 2, this.h),
                Xn(this.h, 3, 1),
                zn(this.h, 2, 0.5),
                zn(this.u, 2, 0.5),
                zn(this.j, 4, 0.5);
            }
            get baseOptions() {
              return Pn(this.j, Co, 1);
            }
            set baseOptions(t) {
              In(this.j, 0, 1, t);
            }
            o(t) {
              return (
                'numHands' in t && Xn(this.h, 3, t.numHands ?? 1),
                'minHandDetectionConfidence' in t &&
                  zn(this.h, 2, t.minHandDetectionConfidence ?? 0.5),
                'minTrackingConfidence' in t &&
                  zn(this.j, 4, t.minTrackingConfidence ?? 0.5),
                'minHandPresenceConfidence' in t &&
                  zn(this.u, 2, t.minHandPresenceConfidence ?? 0.5),
                this.l(t)
              );
            }
            F(t, e) {
              return (
                (this.landmarks = []),
                (this.worldLandmarks = []),
                (this.handedness = []),
                ec(this, t, e),
                Ac(this)
              );
            }
            G(t, e, n) {
              return (
                (this.landmarks = []),
                (this.worldLandmarks = []),
                (this.handedness = []),
                nc(this, t, n, e),
                Ac(this)
              );
            }
            m() {
              var t = new Ni();
              Di(t, 'image_in'),
                Di(t, 'norm_rect'),
                Ui(t, 'hand_landmarks'),
                Ui(t, 'world_hand_landmarks'),
                Ui(t, 'handedness');
              const e = new vi();
              Wn(e, us, this.j);
              const n = new Oi();
              ki(
                n,
                'mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph',
              ),
                Li(n, 'IMAGE:image_in'),
                Li(n, 'NORM_RECT:norm_rect'),
                Si(n, 'LANDMARKS:hand_landmarks'),
                Si(n, 'WORLD_LANDMARKS:world_hand_landmarks'),
                Si(n, 'HANDEDNESS:handedness'),
                n.o(e),
                Ci(t, n),
                this.g.attachProtoVectorListener('hand_landmarks', (t, e) => {
                  for (const e of t) (t = lo(e)), this.landmarks.push(Ds(t));
                  ea(this, e);
                }),
                this.g.attachEmptyPacketListener('hand_landmarks', (t) => {
                  ea(this, t);
                }),
                this.g.attachProtoVectorListener(
                  'world_hand_landmarks',
                  (t, e) => {
                    for (const e of t)
                      (t = ao(e)), this.worldLandmarks.push(Us(t));
                    ea(this, e);
                  },
                ),
                this.g.attachEmptyPacketListener(
                  'world_hand_landmarks',
                  (t) => {
                    ea(this, t);
                  },
                ),
                this.g.attachProtoVectorListener('handedness', (t, e) => {
                  var n = this.handedness,
                    r = n.push;
                  const i = [];
                  for (const e of t) {
                    t = Wi(e);
                    const n = [];
                    for (const e of t.g())
                      n.push({
                        score: jn(e, 2) ?? 0,
                        index: Gn(Bn(e, 1), 0) ?? -1,
                        categoryName: Vn(e, 3) ?? '',
                        displayName: Vn(e, 4) ?? '',
                      });
                    i.push(n);
                  }
                  r.call(n, ...i), ea(this, e);
                }),
                this.g.attachEmptyPacketListener('handedness', (t) => {
                  ea(this, t);
                }),
                (t = t.g()),
                this.setGraph(new Uint8Array(t), !0);
            }
          };
          (xc.prototype.detectForVideo = xc.prototype.G),
            (xc.prototype.detect = xc.prototype.F),
            (xc.prototype.setOptions = xc.prototype.o),
            (xc.createFromModelPath = function (t, e) {
              return Qa(xc, t, { baseOptions: { modelAssetPath: e } });
            }),
            (xc.createFromModelBuffer = function (t, e) {
              return Qa(xc, t, { baseOptions: { modelAssetBuffer: e } });
            }),
            (xc.createFromOptions = function (t, e) {
              return Qa(xc, t, e);
            }),
            (xc.HAND_CONNECTIONS = _c);
          var kc = qa(
            [0, 1],
            [1, 2],
            [2, 3],
            [3, 7],
            [0, 4],
            [4, 5],
            [5, 6],
            [6, 8],
            [9, 10],
            [11, 12],
            [11, 13],
            [13, 15],
            [15, 17],
            [15, 19],
            [15, 21],
            [17, 19],
            [12, 14],
            [14, 16],
            [16, 18],
            [16, 20],
            [16, 22],
            [18, 20],
            [11, 23],
            [12, 24],
            [23, 24],
            [23, 25],
            [24, 26],
            [25, 27],
            [26, 28],
            [27, 29],
            [28, 30],
            [29, 31],
            [30, 32],
            [27, 31],
            [28, 32],
          );
          function Lc(t) {
            t.h = {
              faceLandmarks: [],
              faceBlendshapes: [],
              poseLandmarks: [],
              poseWorldLandmarks: [],
              poseSegmentationMasks: [],
              leftHandLandmarks: [],
              leftHandWorldLandmarks: [],
              rightHandLandmarks: [],
              rightHandWorldLandmarks: [],
            };
          }
          function Sc(t) {
            try {
              if (!t.I) return t.h;
              t.I(t.h);
            } finally {
              ia(t);
            }
          }
          function Oc(t, e) {
            (t = lo(t)), e.push(Ds(t));
          }
          var Fc = class extends ic {
            constructor(t, e) {
              super(new Za(t, e), 'input_frames_image', null, !1),
                (this.h = {
                  faceLandmarks: [],
                  faceBlendshapes: [],
                  poseLandmarks: [],
                  poseWorldLandmarks: [],
                  poseSegmentationMasks: [],
                  leftHandLandmarks: [],
                  leftHandWorldLandmarks: [],
                  rightHandLandmarks: [],
                  rightHandWorldLandmarks: [],
                }),
                (this.outputPoseSegmentationMasks = this.outputFaceBlendshapes =
                  !1),
                In((t = this.A = new vs()), 0, 1, (e = new Co())),
                (this.u = new is()),
                In(this.A, 0, 2, this.u),
                (this.aa = new fs()),
                In(this.A, 0, 3, this.aa),
                (this.j = new Uo()),
                In(this.A, 0, 4, this.j),
                (this.H = new Xo()),
                In(this.A, 0, 5, this.H),
                (this.v = new ps()),
                In(this.A, 0, 6, this.v),
                (this.D = new ms()),
                In(this.A, 0, 7, this.D),
                zn(this.j, 2, 0.5),
                zn(this.j, 3, 0.3),
                zn(this.H, 2, 0.5),
                zn(this.v, 2, 0.5),
                zn(this.v, 3, 0.3),
                zn(this.D, 2, 0.5),
                zn(this.u, 2, 0.5);
            }
            get baseOptions() {
              return Pn(this.A, Co, 1);
            }
            set baseOptions(t) {
              In(this.A, 0, 1, t);
            }
            o(t) {
              return (
                'minFaceDetectionConfidence' in t &&
                  zn(this.j, 2, t.minFaceDetectionConfidence ?? 0.5),
                'minFaceSuppressionThreshold' in t &&
                  zn(this.j, 3, t.minFaceSuppressionThreshold ?? 0.3),
                'minFacePresenceConfidence' in t &&
                  zn(this.H, 2, t.minFacePresenceConfidence ?? 0.5),
                'outputFaceBlendshapes' in t &&
                  (this.outputFaceBlendshapes = !!t.outputFaceBlendshapes),
                'minPoseDetectionConfidence' in t &&
                  zn(this.v, 2, t.minPoseDetectionConfidence ?? 0.5),
                'minPoseSuppressionThreshold' in t &&
                  zn(this.v, 3, t.minPoseSuppressionThreshold ?? 0.3),
                'minPosePresenceConfidence' in t &&
                  zn(this.D, 2, t.minPosePresenceConfidence ?? 0.5),
                'outputPoseSegmentationMasks' in t &&
                  (this.outputPoseSegmentationMasks =
                    !!t.outputPoseSegmentationMasks),
                'minHandLandmarksConfidence' in t &&
                  zn(this.u, 2, t.minHandLandmarksConfidence ?? 0.5),
                this.l(t)
              );
            }
            F(t, e, n) {
              const r = 'function' != typeof e ? e : {};
              return (
                (this.I = 'function' == typeof e ? e : n),
                Lc(this),
                ec(this, t, r),
                Sc(this)
              );
            }
            G(t, e, n, r) {
              const i = 'function' != typeof n ? n : {};
              return (
                (this.I = 'function' == typeof n ? n : r),
                Lc(this),
                nc(this, t, i, e),
                Sc(this)
              );
            }
            m() {
              var t = new Ni();
              Di(t, 'input_frames_image'),
                Ui(t, 'pose_landmarks'),
                Ui(t, 'pose_world_landmarks'),
                Ui(t, 'face_landmarks'),
                Ui(t, 'left_hand_landmarks'),
                Ui(t, 'left_hand_world_landmarks'),
                Ui(t, 'right_hand_landmarks'),
                Ui(t, 'right_hand_world_landmarks');
              const e = new vi(),
                n = new ai();
              An(
                n,
                1,
                Me(
                  'type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions',
                ),
                '',
              ),
                (function (t, e) {
                  if (null != e)
                    if (Array.isArray(e))
                      dn(t, 2, en(e, rn, void 0, void 0, !1));
                    else {
                      if (!('string' == typeof e || e instanceof G || M(e)))
                        throw Error(
                          'invalid value in Any.value field: ' +
                            e +
                            ' expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array',
                        );
                      An(t, 2, ce(e, !1, !1), N());
                    }
                })(n, this.A.g());
              const r = new Oi();
              ki(
                r,
                'mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph',
              ),
                Nn(r, 8, ai, n),
                Li(r, 'IMAGE:input_frames_image'),
                Si(r, 'POSE_LANDMARKS:pose_landmarks'),
                Si(r, 'POSE_WORLD_LANDMARKS:pose_world_landmarks'),
                Si(r, 'FACE_LANDMARKS:face_landmarks'),
                Si(r, 'LEFT_HAND_LANDMARKS:left_hand_landmarks'),
                Si(r, 'LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks'),
                Si(r, 'RIGHT_HAND_LANDMARKS:right_hand_landmarks'),
                Si(r, 'RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks'),
                r.o(e),
                Ci(t, r),
                na(this, t),
                this.g.attachProtoListener('pose_landmarks', (t, e) => {
                  Oc(t, this.h.poseLandmarks), ea(this, e);
                }),
                this.g.attachEmptyPacketListener('pose_landmarks', (t) => {
                  ea(this, t);
                }),
                this.g.attachProtoListener('pose_world_landmarks', (t, e) => {
                  var n = this.h.poseWorldLandmarks;
                  (t = ao(t)), n.push(Us(t)), ea(this, e);
                }),
                this.g.attachEmptyPacketListener(
                  'pose_world_landmarks',
                  (t) => {
                    ea(this, t);
                  },
                ),
                this.outputPoseSegmentationMasks &&
                  (Si(r, 'POSE_SEGMENTATION_MASK:pose_segmentation_mask'),
                  ra(this, 'pose_segmentation_mask'),
                  this.g.W('pose_segmentation_mask', (t, e) => {
                    (this.h.poseSegmentationMasks = [rc(this, t, !0, !this.I)]),
                      ea(this, e);
                  }),
                  this.g.attachEmptyPacketListener(
                    'pose_segmentation_mask',
                    (t) => {
                      (this.h.poseSegmentationMasks = []), ea(this, t);
                    },
                  )),
                this.g.attachProtoListener('face_landmarks', (t, e) => {
                  Oc(t, this.h.faceLandmarks), ea(this, e);
                }),
                this.g.attachEmptyPacketListener('face_landmarks', (t) => {
                  ea(this, t);
                }),
                this.outputFaceBlendshapes &&
                  (Ui(t, 'extra_blendshapes'),
                  Si(r, 'FACE_BLENDSHAPES:extra_blendshapes'),
                  this.g.attachProtoListener('extra_blendshapes', (t, e) => {
                    var n = this.h.faceBlendshapes;
                    this.outputFaceBlendshapes &&
                      ((t = Wi(t)), n.push(Is(t.g() ?? []))),
                      ea(this, e);
                  }),
                  this.g.attachEmptyPacketListener('extra_blendshapes', (t) => {
                    ea(this, t);
                  })),
                this.g.attachProtoListener('left_hand_landmarks', (t, e) => {
                  Oc(t, this.h.leftHandLandmarks), ea(this, e);
                }),
                this.g.attachEmptyPacketListener('left_hand_landmarks', (t) => {
                  ea(this, t);
                }),
                this.g.attachProtoListener(
                  'left_hand_world_landmarks',
                  (t, e) => {
                    var n = this.h.leftHandWorldLandmarks;
                    (t = ao(t)), n.push(Us(t)), ea(this, e);
                  },
                ),
                this.g.attachEmptyPacketListener(
                  'left_hand_world_landmarks',
                  (t) => {
                    ea(this, t);
                  },
                ),
                this.g.attachProtoListener('right_hand_landmarks', (t, e) => {
                  Oc(t, this.h.rightHandLandmarks), ea(this, e);
                }),
                this.g.attachEmptyPacketListener(
                  'right_hand_landmarks',
                  (t) => {
                    ea(this, t);
                  },
                ),
                this.g.attachProtoListener(
                  'right_hand_world_landmarks',
                  (t, e) => {
                    var n = this.h.rightHandWorldLandmarks;
                    (t = ao(t)), n.push(Us(t)), ea(this, e);
                  },
                ),
                this.g.attachEmptyPacketListener(
                  'right_hand_world_landmarks',
                  (t) => {
                    ea(this, t);
                  },
                ),
                (t = t.g()),
                this.setGraph(new Uint8Array(t), !0);
            }
          };
          (Fc.prototype.detectForVideo = Fc.prototype.G),
            (Fc.prototype.detect = Fc.prototype.F),
            (Fc.prototype.setOptions = Fc.prototype.o),
            (Fc.createFromModelPath = function (t, e) {
              return Qa(Fc, t, { baseOptions: { modelAssetPath: e } });
            }),
            (Fc.createFromModelBuffer = function (t, e) {
              return Qa(Fc, t, { baseOptions: { modelAssetBuffer: e } });
            }),
            (Fc.createFromOptions = function (t, e) {
              return Qa(Fc, t, e);
            }),
            (Fc.HAND_CONNECTIONS = _c),
            (Fc.POSE_CONNECTIONS = kc),
            (Fc.FACE_LANDMARKS_LIPS = sc),
            (Fc.FACE_LANDMARKS_LEFT_EYE = ac),
            (Fc.FACE_LANDMARKS_LEFT_EYEBROW = cc),
            (Fc.FACE_LANDMARKS_LEFT_IRIS = hc),
            (Fc.FACE_LANDMARKS_RIGHT_EYE = uc),
            (Fc.FACE_LANDMARKS_RIGHT_EYEBROW = lc),
            (Fc.FACE_LANDMARKS_RIGHT_IRIS = fc),
            (Fc.FACE_LANDMARKS_FACE_OVAL = dc),
            (Fc.FACE_LANDMARKS_CONTOURS = pc),
            (Fc.FACE_LANDMARKS_TESSELATION = gc);
          var Pc = class extends ic {
            constructor(t, e) {
              super(new Za(t, e), 'input_image', 'norm_rect', !0),
                (this.j = { classifications: [] }),
                In((t = this.h = new _s()), 0, 1, (e = new Co()));
            }
            get baseOptions() {
              return Pn(this.h, Co, 1);
            }
            set baseOptions(t) {
              In(this.h, 0, 1, t);
            }
            o(t) {
              return In(this.h, 0, 2, Rs(t, Pn(this.h, Lo, 2))), this.l(t);
            }
            ua(t, e) {
              return (this.j = { classifications: [] }), ec(this, t, e), this.j;
            }
            va(t, e, n) {
              return (
                (this.j = { classifications: [] }), nc(this, t, n, e), this.j
              );
            }
            m() {
              var t = new Ni();
              Di(t, 'input_image'),
                Di(t, 'norm_rect'),
                Ui(t, 'classifications');
              const e = new vi();
              Wn(e, ws, this.h);
              const n = new Oi();
              ki(
                n,
                'mediapipe.tasks.vision.image_classifier.ImageClassifierGraph',
              ),
                Li(n, 'IMAGE:input_image'),
                Li(n, 'NORM_RECT:norm_rect'),
                Si(n, 'CLASSIFICATIONS:classifications'),
                n.o(e),
                Ci(t, n),
                this.g.attachProtoListener('classifications', (t, e) => {
                  (this.j = (function (t) {
                    const e = {
                      classifications: Rn(t, mo, 1).map((t) =>
                        Is(Pn(t, Xi, 4)?.g() ?? [], Gn(Bn(t, 2), 0), Vn(t, 3)),
                      ),
                    };
                    return (
                      null != Fe(un(t, 2)) &&
                        (e.timestampMs = Gn(Fe(un(t, 2)), 0)),
                      e
                    );
                  })(_o(t))),
                    ea(this, e);
                }),
                this.g.attachEmptyPacketListener('classifications', (t) => {
                  ea(this, t);
                }),
                (t = t.g()),
                this.setGraph(new Uint8Array(t), !0);
            }
          };
          (Pc.prototype.classifyForVideo = Pc.prototype.va),
            (Pc.prototype.classify = Pc.prototype.ua),
            (Pc.prototype.setOptions = Pc.prototype.o),
            (Pc.createFromModelPath = function (t, e) {
              return Qa(Pc, t, { baseOptions: { modelAssetPath: e } });
            }),
            (Pc.createFromModelBuffer = function (t, e) {
              return Qa(Pc, t, { baseOptions: { modelAssetBuffer: e } });
            }),
            (Pc.createFromOptions = function (t, e) {
              return Qa(Pc, t, e);
            });
          var Mc = class extends ic {
            constructor(t, e) {
              super(new Za(t, e), 'image_in', 'norm_rect', !0),
                (this.h = new bs()),
                (this.embeddings = { embeddings: [] }),
                In((t = this.h), 0, 1, (e = new Co()));
            }
            get baseOptions() {
              return Pn(this.h, Co, 1);
            }
            set baseOptions(t) {
              In(this.h, 0, 1, t);
            }
            o(t) {
              var e = this.h,
                n = Pn(this.h, Oo, 2);
              return (
                (n = n ? n.clone() : new Oo()),
                void 0 !== t.l2Normalize
                  ? Hn(n, 1, t.l2Normalize)
                  : 'l2Normalize' in t && dn(n, 1),
                void 0 !== t.quantize
                  ? Hn(n, 2, t.quantize)
                  : 'quantize' in t && dn(n, 2),
                In(e, 0, 2, n),
                this.l(t)
              );
            }
            Ba(t, e) {
              return ec(this, t, e), this.embeddings;
            }
            Ca(t, e, n) {
              return nc(this, t, n, e), this.embeddings;
            }
            m() {
              var t = new Ni();
              Di(t, 'image_in'), Di(t, 'norm_rect'), Ui(t, 'embeddings_out');
              const e = new vi();
              Wn(e, Es, this.h);
              const n = new Oi();
              ki(n, 'mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph'),
                Li(n, 'IMAGE:image_in'),
                Li(n, 'NORM_RECT:norm_rect'),
                Si(n, 'EMBEDDINGS:embeddings_out'),
                n.o(e),
                Ci(t, n),
                this.g.attachProtoListener('embeddings_out', (t, e) => {
                  (t = ko(t)),
                    (this.embeddings = (function (t) {
                      return {
                        embeddings: Rn(t, Eo, 1).map((t) => {
                          const e = {
                            headIndex: Gn(Bn(t, 3), 0) ?? -1,
                            headName: Vn(t, 4) ?? '',
                          };
                          if (void 0 !== Fn(t, wo, Ln(t, 1)))
                            (t = vn((t = Pn(t, wo, Ln(t, 1))), 1, we)),
                              (e.floatEmbedding = t.slice());
                          else {
                            const n = new Uint8Array(0);
                            e.quantizedEmbedding =
                              Pn(t, bo, Ln(t, 2))?.qa()?.h() ?? n;
                          }
                          return e;
                        }),
                        timestampMs: Gn(Fe(un(t, 2)), 0),
                      };
                    })(t)),
                    ea(this, e);
                }),
                this.g.attachEmptyPacketListener('embeddings_out', (t) => {
                  ea(this, t);
                }),
                (t = t.g()),
                this.setGraph(new Uint8Array(t), !0);
            }
          };
          (Mc.cosineSimilarity = function (t, e) {
            if (t.floatEmbedding && e.floatEmbedding)
              t = Bs(t.floatEmbedding, e.floatEmbedding);
            else {
              if (!t.quantizedEmbedding || !e.quantizedEmbedding)
                throw Error(
                  'Cannot compute cosine similarity between quantized and float embeddings.',
                );
              t = Bs(Ns(t.quantizedEmbedding), Ns(e.quantizedEmbedding));
            }
            return t;
          }),
            (Mc.prototype.embedForVideo = Mc.prototype.Ca),
            (Mc.prototype.embed = Mc.prototype.Ba),
            (Mc.prototype.setOptions = Mc.prototype.o),
            (Mc.createFromModelPath = function (t, e) {
              return Qa(Mc, t, { baseOptions: { modelAssetPath: e } });
            }),
            (Mc.createFromModelBuffer = function (t, e) {
              return Qa(Mc, t, { baseOptions: { modelAssetBuffer: e } });
            }),
            (Mc.createFromOptions = function (t, e) {
              return Qa(Mc, t, e);
            });
          var Rc = class {
            constructor(t, e, n) {
              (this.confidenceMasks = t),
                (this.categoryMask = e),
                (this.qualityScores = n);
            }
            close() {
              this.confidenceMasks?.forEach((t) => {
                t.close();
              }),
                this.categoryMask?.close();
            }
          };
          function Ic(t) {
            (t.categoryMask = void 0),
              (t.confidenceMasks = void 0),
              (t.qualityScores = void 0);
          }
          function Cc(t) {
            try {
              const e = new Rc(
                t.confidenceMasks,
                t.categoryMask,
                t.qualityScores,
              );
              if (!t.j) return e;
              t.j(e);
            } finally {
              ia(t);
            }
          }
          Rc.prototype.close = Rc.prototype.close;
          var Dc = class extends ic {
            constructor(t, e) {
              super(new Za(t, e), 'image_in', 'norm_rect', !1),
                (this.u = []),
                (this.outputCategoryMask = !1),
                (this.outputConfidenceMasks = !0),
                (this.h = new Ls()),
                (this.v = new Ts()),
                In(this.h, 0, 3, this.v),
                In((t = this.h), 0, 1, (e = new Co()));
            }
            get baseOptions() {
              return Pn(this.h, Co, 1);
            }
            set baseOptions(t) {
              In(this.h, 0, 1, t);
            }
            o(t) {
              return (
                void 0 !== t.displayNamesLocale
                  ? dn(this.h, 2, Me(t.displayNamesLocale))
                  : 'displayNamesLocale' in t && dn(this.h, 2),
                'outputCategoryMask' in t &&
                  (this.outputCategoryMask = t.outputCategoryMask ?? !1),
                'outputConfidenceMasks' in t &&
                  (this.outputConfidenceMasks = t.outputConfidenceMasks ?? !0),
                super.l(t)
              );
            }
            L() {
              !(function (t) {
                const e = Rn(t.fa(), Oi, 1).filter((t) =>
                  Vn(t, 1).includes(
                    'mediapipe.tasks.TensorsToSegmentationCalculator',
                  ),
                );
                if (((t.u = []), 1 < e.length))
                  throw Error(
                    'The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.',
                  );
                1 === e.length &&
                  (Pn(e[0], vi, 7)?.l()?.g() ?? new Map()).forEach((e, n) => {
                    t.u[Number(n)] = Vn(e, 1);
                  });
              })(this);
            }
            ga(t, e, n) {
              const r = 'function' != typeof e ? e : {};
              return (
                (this.j = 'function' == typeof e ? e : n),
                Ic(this),
                ec(this, t, r),
                Cc(this)
              );
            }
            Na(t, e, n, r) {
              const i = 'function' != typeof n ? n : {};
              return (
                (this.j = 'function' == typeof n ? n : r),
                Ic(this),
                nc(this, t, i, e),
                Cc(this)
              );
            }
            Fa() {
              return this.u;
            }
            m() {
              var t = new Ni();
              Di(t, 'image_in'), Di(t, 'norm_rect');
              const e = new vi();
              Wn(e, Ss, this.h);
              const n = new Oi();
              ki(
                n,
                'mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph',
              ),
                Li(n, 'IMAGE:image_in'),
                Li(n, 'NORM_RECT:norm_rect'),
                n.o(e),
                Ci(t, n),
                na(this, t),
                this.outputConfidenceMasks &&
                  (Ui(t, 'confidence_masks'),
                  Si(n, 'CONFIDENCE_MASKS:confidence_masks'),
                  ra(this, 'confidence_masks'),
                  this.g.da('confidence_masks', (t, e) => {
                    (this.confidenceMasks = t.map((t) =>
                      rc(this, t, !0, !this.j),
                    )),
                      ea(this, e);
                  }),
                  this.g.attachEmptyPacketListener('confidence_masks', (t) => {
                    (this.confidenceMasks = []), ea(this, t);
                  })),
                this.outputCategoryMask &&
                  (Ui(t, 'category_mask'),
                  Si(n, 'CATEGORY_MASK:category_mask'),
                  ra(this, 'category_mask'),
                  this.g.W('category_mask', (t, e) => {
                    (this.categoryMask = rc(this, t, !1, !this.j)), ea(this, e);
                  }),
                  this.g.attachEmptyPacketListener('category_mask', (t) => {
                    (this.categoryMask = void 0), ea(this, t);
                  })),
                Ui(t, 'quality_scores'),
                Si(n, 'QUALITY_SCORES:quality_scores'),
                this.g.attachFloatVectorListener('quality_scores', (t, e) => {
                  (this.qualityScores = t), ea(this, e);
                }),
                this.g.attachEmptyPacketListener('quality_scores', (t) => {
                  (this.categoryMask = void 0), ea(this, t);
                }),
                (t = t.g()),
                this.setGraph(new Uint8Array(t), !0);
            }
          };
          (Dc.prototype.getLabels = Dc.prototype.Fa),
            (Dc.prototype.segmentForVideo = Dc.prototype.Na),
            (Dc.prototype.segment = Dc.prototype.ga),
            (Dc.prototype.setOptions = Dc.prototype.o),
            (Dc.createFromModelPath = function (t, e) {
              return Qa(Dc, t, { baseOptions: { modelAssetPath: e } });
            }),
            (Dc.createFromModelBuffer = function (t, e) {
              return Qa(Dc, t, { baseOptions: { modelAssetBuffer: e } });
            }),
            (Dc.createFromOptions = function (t, e) {
              return Qa(Dc, t, e);
            });
          var Uc = class {
            constructor(t, e, n) {
              (this.confidenceMasks = t),
                (this.categoryMask = e),
                (this.qualityScores = n);
            }
            close() {
              this.confidenceMasks?.forEach((t) => {
                t.close();
              }),
                this.categoryMask?.close();
            }
          };
          Uc.prototype.close = Uc.prototype.close;
          var Nc = class extends Kn {
              constructor(t) {
                super(t);
              }
            },
            Bc = [0, Vr, -2],
            Gc = [0, Cr, -3, zr],
            jc = [0, Cr, -3, zr, Cr, -1],
            Vc = [0, jc],
            Hc = [0, Vc, Bc],
            Xc = [0, jc, Bc],
            zc = [0, jc, Vr, -1],
            Wc = [0, zc, Bc],
            Kc = [0, Cr, -3, zr, Bc, -1],
            Yc = [0, Cr, -3, zr, ei],
            qc = class extends Kn {
              constructor(t) {
                super(t);
              }
            },
            $c = [0, Cr, -1, zr],
            Jc = class extends Kn {
              constructor() {
                super();
              }
            };
          Jc.B = [1];
          var Zc = class extends Kn {
              constructor(t) {
                super(t);
              }
            },
            Qc = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14, 15],
            th = [
              0,
              Qc,
              Zr,
              jc,
              Zr,
              Xc,
              Zr,
              Vc,
              Zr,
              Hc,
              Zr,
              $c,
              Zr,
              Yc,
              Zr,
              Gc,
              Zr,
              [0, qr, Cr, -2, zr, Vr, zr, -1, 2, Cr, Bc],
              Zr,
              zc,
              Zr,
              Wc,
              Cr,
              Bc,
              qr,
              Zr,
              Kc,
              Zr,
              [0, Ir, $c],
            ],
            eh = [0, qr, Vr, -1, zr],
            nh = class extends Kn {
              constructor() {
                super();
              }
            };
          (nh.B = [1]), (nh.prototype.g = si([0, Ir, th, qr, eh]));
          var rh = class extends ic {
            constructor(t, e) {
              super(new Za(t, e), 'image_in', 'norm_rect_in', !1),
                (this.outputCategoryMask = !1),
                (this.outputConfidenceMasks = !0),
                (this.h = new Ls()),
                (this.v = new Ts()),
                In(this.h, 0, 3, this.v),
                In((t = this.h), 0, 1, (e = new Co()));
            }
            get baseOptions() {
              return Pn(this.h, Co, 1);
            }
            set baseOptions(t) {
              In(this.h, 0, 1, t);
            }
            o(t) {
              return (
                'outputCategoryMask' in t &&
                  (this.outputCategoryMask = t.outputCategoryMask ?? !1),
                'outputConfidenceMasks' in t &&
                  (this.outputConfidenceMasks = t.outputConfidenceMasks ?? !0),
                super.l(t)
              );
            }
            ga(t, e, n, r) {
              const i = 'function' != typeof n ? n : {};
              (this.j = 'function' == typeof n ? n : r),
                (this.qualityScores =
                  this.categoryMask =
                  this.confidenceMasks =
                    void 0),
                (n = this.J + 1),
                (r = new nh());
              const o = new Zc();
              var s = new Nc();
              if ((Xn(s, 1, 255), In(o, 0, 12, s), e.keypoint && e.scribble))
                throw Error('Cannot provide both keypoint and scribble.');
              if (e.keypoint) {
                var a = new qc();
                Hn(a, 3, !0),
                  zn(a, 1, e.keypoint.x),
                  zn(a, 2, e.keypoint.y),
                  Cn(o, 5, Qc, a);
              } else {
                if (!e.scribble)
                  throw Error('Must provide either a keypoint or a scribble.');
                for (a of ((s = new Jc()), e.scribble))
                  Hn((e = new qc()), 3, !0),
                    zn(e, 1, a.x),
                    zn(e, 2, a.y),
                    Nn(s, 1, qc, e);
                Cn(o, 15, Qc, s);
              }
              Nn(r, 1, Zc, o),
                this.g.addProtoToStream(
                  r.g(),
                  'drishti.RenderData',
                  'roi_in',
                  n,
                ),
                ec(this, t, i);
              t: {
                try {
                  const t = new Uc(
                    this.confidenceMasks,
                    this.categoryMask,
                    this.qualityScores,
                  );
                  if (!this.j) {
                    var c = t;
                    break t;
                  }
                  this.j(t);
                } finally {
                  ia(this);
                }
                c = void 0;
              }
              return c;
            }
            m() {
              var t = new Ni();
              Di(t, 'image_in'), Di(t, 'roi_in'), Di(t, 'norm_rect_in');
              const e = new vi();
              Wn(e, Ss, this.h);
              const n = new Oi();
              ki(
                n,
                'mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraph',
              ),
                Li(n, 'IMAGE:image_in'),
                Li(n, 'ROI:roi_in'),
                Li(n, 'NORM_RECT:norm_rect_in'),
                n.o(e),
                Ci(t, n),
                na(this, t),
                this.outputConfidenceMasks &&
                  (Ui(t, 'confidence_masks'),
                  Si(n, 'CONFIDENCE_MASKS:confidence_masks'),
                  ra(this, 'confidence_masks'),
                  this.g.da('confidence_masks', (t, e) => {
                    (this.confidenceMasks = t.map((t) =>
                      rc(this, t, !0, !this.j),
                    )),
                      ea(this, e);
                  }),
                  this.g.attachEmptyPacketListener('confidence_masks', (t) => {
                    (this.confidenceMasks = []), ea(this, t);
                  })),
                this.outputCategoryMask &&
                  (Ui(t, 'category_mask'),
                  Si(n, 'CATEGORY_MASK:category_mask'),
                  ra(this, 'category_mask'),
                  this.g.W('category_mask', (t, e) => {
                    (this.categoryMask = rc(this, t, !1, !this.j)), ea(this, e);
                  }),
                  this.g.attachEmptyPacketListener('category_mask', (t) => {
                    (this.categoryMask = void 0), ea(this, t);
                  })),
                Ui(t, 'quality_scores'),
                Si(n, 'QUALITY_SCORES:quality_scores'),
                this.g.attachFloatVectorListener('quality_scores', (t, e) => {
                  (this.qualityScores = t), ea(this, e);
                }),
                this.g.attachEmptyPacketListener('quality_scores', (t) => {
                  (this.categoryMask = void 0), ea(this, t);
                }),
                (t = t.g()),
                this.setGraph(new Uint8Array(t), !0);
            }
          };
          (rh.prototype.segment = rh.prototype.ga),
            (rh.prototype.setOptions = rh.prototype.o),
            (rh.createFromModelPath = function (t, e) {
              return Qa(rh, t, { baseOptions: { modelAssetPath: e } });
            }),
            (rh.createFromModelBuffer = function (t, e) {
              return Qa(rh, t, { baseOptions: { modelAssetBuffer: e } });
            }),
            (rh.createFromOptions = function (t, e) {
              return Qa(rh, t, e);
            });
          var ih = class extends ic {
            constructor(t, e) {
              super(new Za(t, e), 'input_frame_gpu', 'norm_rect', !1),
                (this.j = { detections: [] }),
                In((t = this.h = new Os()), 0, 1, (e = new Co()));
            }
            get baseOptions() {
              return Pn(this.h, Co, 1);
            }
            set baseOptions(t) {
              In(this.h, 0, 1, t);
            }
            o(t) {
              return (
                void 0 !== t.displayNamesLocale
                  ? dn(this.h, 2, Me(t.displayNamesLocale))
                  : 'displayNamesLocale' in t && dn(this.h, 2),
                void 0 !== t.maxResults
                  ? Xn(this.h, 3, t.maxResults)
                  : 'maxResults' in t && dn(this.h, 3),
                void 0 !== t.scoreThreshold
                  ? zn(this.h, 4, t.scoreThreshold)
                  : 'scoreThreshold' in t && dn(this.h, 4),
                void 0 !== t.categoryAllowlist
                  ? Tn(this.h, 5, t.categoryAllowlist)
                  : 'categoryAllowlist' in t && dn(this.h, 5),
                void 0 !== t.categoryDenylist
                  ? Tn(this.h, 6, t.categoryDenylist)
                  : 'categoryDenylist' in t && dn(this.h, 6),
                this.l(t)
              );
            }
            F(t, e) {
              return (this.j = { detections: [] }), ec(this, t, e), this.j;
            }
            G(t, e, n) {
              return (this.j = { detections: [] }), nc(this, t, n, e), this.j;
            }
            m() {
              var t = new Ni();
              Di(t, 'input_frame_gpu'), Di(t, 'norm_rect'), Ui(t, 'detections');
              const e = new vi();
              Wn(e, Fs, this.h);
              const n = new Oi();
              ki(n, 'mediapipe.tasks.vision.ObjectDetectorGraph'),
                Li(n, 'IMAGE:input_frame_gpu'),
                Li(n, 'NORM_RECT:norm_rect'),
                Si(n, 'DETECTIONS:detections'),
                n.o(e),
                Ci(t, n),
                this.g.attachProtoVectorListener('detections', (t, e) => {
                  for (const e of t) (t = ro(e)), this.j.detections.push(Cs(t));
                  ea(this, e);
                }),
                this.g.attachEmptyPacketListener('detections', (t) => {
                  ea(this, t);
                }),
                (t = t.g()),
                this.setGraph(new Uint8Array(t), !0);
            }
          };
          (ih.prototype.detectForVideo = ih.prototype.G),
            (ih.prototype.detect = ih.prototype.F),
            (ih.prototype.setOptions = ih.prototype.o),
            (ih.createFromModelPath = async function (t, e) {
              return Qa(ih, t, { baseOptions: { modelAssetPath: e } });
            }),
            (ih.createFromModelBuffer = function (t, e) {
              return Qa(ih, t, { baseOptions: { modelAssetBuffer: e } });
            }),
            (ih.createFromOptions = function (t, e) {
              return Qa(ih, t, e);
            });
          var oh = class {
            constructor(t, e, n) {
              (this.landmarks = t),
                (this.worldLandmarks = e),
                (this.segmentationMasks = n);
            }
            close() {
              this.segmentationMasks?.forEach((t) => {
                t.close();
              });
            }
          };
          function sh(t) {
            (t.landmarks = []),
              (t.worldLandmarks = []),
              (t.segmentationMasks = void 0);
          }
          function ah(t) {
            try {
              const e = new oh(
                t.landmarks,
                t.worldLandmarks,
                t.segmentationMasks,
              );
              if (!t.j) return e;
              t.j(e);
            } finally {
              ia(t);
            }
          }
          oh.prototype.close = oh.prototype.close;
          var ch = class extends ic {
            constructor(t, e) {
              super(new Za(t, e), 'image_in', 'norm_rect', !1),
                (this.landmarks = []),
                (this.worldLandmarks = []),
                (this.outputSegmentationMasks = !1),
                In((t = this.h = new Ps()), 0, 1, (e = new Co())),
                (this.D = new ms()),
                In(this.h, 0, 3, this.D),
                (this.v = new ps()),
                In(this.h, 0, 2, this.v),
                Xn(this.v, 4, 1),
                zn(this.v, 2, 0.5),
                zn(this.D, 2, 0.5),
                zn(this.h, 4, 0.5);
            }
            get baseOptions() {
              return Pn(this.h, Co, 1);
            }
            set baseOptions(t) {
              In(this.h, 0, 1, t);
            }
            o(t) {
              return (
                'numPoses' in t && Xn(this.v, 4, t.numPoses ?? 1),
                'minPoseDetectionConfidence' in t &&
                  zn(this.v, 2, t.minPoseDetectionConfidence ?? 0.5),
                'minTrackingConfidence' in t &&
                  zn(this.h, 4, t.minTrackingConfidence ?? 0.5),
                'minPosePresenceConfidence' in t &&
                  zn(this.D, 2, t.minPosePresenceConfidence ?? 0.5),
                'outputSegmentationMasks' in t &&
                  (this.outputSegmentationMasks =
                    t.outputSegmentationMasks ?? !1),
                this.l(t)
              );
            }
            F(t, e, n) {
              const r = 'function' != typeof e ? e : {};
              return (
                (this.j = 'function' == typeof e ? e : n),
                sh(this),
                ec(this, t, r),
                ah(this)
              );
            }
            G(t, e, n, r) {
              const i = 'function' != typeof n ? n : {};
              return (
                (this.j = 'function' == typeof n ? n : r),
                sh(this),
                nc(this, t, i, e),
                ah(this)
              );
            }
            m() {
              var t = new Ni();
              Di(t, 'image_in'),
                Di(t, 'norm_rect'),
                Ui(t, 'normalized_landmarks'),
                Ui(t, 'world_landmarks'),
                Ui(t, 'segmentation_masks');
              const e = new vi();
              Wn(e, Ms, this.h);
              const n = new Oi();
              ki(
                n,
                'mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph',
              ),
                Li(n, 'IMAGE:image_in'),
                Li(n, 'NORM_RECT:norm_rect'),
                Si(n, 'NORM_LANDMARKS:normalized_landmarks'),
                Si(n, 'WORLD_LANDMARKS:world_landmarks'),
                n.o(e),
                Ci(t, n),
                na(this, t),
                this.g.attachProtoVectorListener(
                  'normalized_landmarks',
                  (t, e) => {
                    this.landmarks = [];
                    for (const e of t) (t = lo(e)), this.landmarks.push(Ds(t));
                    ea(this, e);
                  },
                ),
                this.g.attachEmptyPacketListener(
                  'normalized_landmarks',
                  (t) => {
                    (this.landmarks = []), ea(this, t);
                  },
                ),
                this.g.attachProtoVectorListener('world_landmarks', (t, e) => {
                  this.worldLandmarks = [];
                  for (const e of t)
                    (t = ao(e)), this.worldLandmarks.push(Us(t));
                  ea(this, e);
                }),
                this.g.attachEmptyPacketListener('world_landmarks', (t) => {
                  (this.worldLandmarks = []), ea(this, t);
                }),
                this.outputSegmentationMasks &&
                  (Si(n, 'SEGMENTATION_MASK:segmentation_masks'),
                  ra(this, 'segmentation_masks'),
                  this.g.da('segmentation_masks', (t, e) => {
                    (this.segmentationMasks = t.map((t) =>
                      rc(this, t, !0, !this.j),
                    )),
                      ea(this, e);
                  }),
                  this.g.attachEmptyPacketListener(
                    'segmentation_masks',
                    (t) => {
                      (this.segmentationMasks = []), ea(this, t);
                    },
                  )),
                (t = t.g()),
                this.setGraph(new Uint8Array(t), !0);
            }
          };
          (ch.prototype.detectForVideo = ch.prototype.G),
            (ch.prototype.detect = ch.prototype.F),
            (ch.prototype.setOptions = ch.prototype.o),
            (ch.createFromModelPath = function (t, e) {
              return Qa(ch, t, { baseOptions: { modelAssetPath: e } });
            }),
            (ch.createFromModelBuffer = function (t, e) {
              return Qa(ch, t, { baseOptions: { modelAssetBuffer: e } });
            }),
            (ch.createFromOptions = function (t, e) {
              return Qa(ch, t, e);
            }),
            (ch.POSE_CONNECTIONS = kc),
            (e.DrawingUtils = Na),
            (e.FaceDetector = oc),
            (e.FaceLandmarker = yc),
            (e.FaceStylizer = vc),
            (e.FilesetResolver = Xs),
            (e.GestureRecognizer = Tc),
            (e.HandLandmarker = xc),
            (e.HolisticLandmarker = Fc),
            (e.ImageClassifier = Pc),
            (e.ImageEmbedder = Mc),
            (e.ImageSegmenter = Dc),
            (e.ImageSegmenterResult = Rc),
            (e.InteractiveSegmenter = rh),
            (e.InteractiveSegmenterResult = Uc),
            (e.MPImage = Ka),
            (e.MPMask = La),
            (e.ObjectDetector = ih),
            (e.PoseLandmarker = ch),
            (e.VisionTaskRunner = ic);
        },
      },
      e = {};
    function n(r) {
      var i = e[r];
      if (void 0 !== i) return i.exports;
      var o = (e[r] = { exports: {} });
      return t[r](o, o.exports, n), o.exports;
    }
    return (
      (n.d = (t, e) => {
        for (var r in e)
          n.o(e, r) &&
            !n.o(t, r) &&
            Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
      }),
      (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
      (n.r = (t) => {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(t, '__esModule', { value: !0 });
      }),
      n(497)
    );
  })(),
);
