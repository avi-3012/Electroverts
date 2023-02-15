(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    RXBc: function (t, a, n) {
      "use strict";
      n.r(a);
      var e = n("dI71"),
        i = n("q1tI"),
        r = n.n(i),
        o = n("2z+b"),
        c = n("CcRw"),
        s = n("a4WX"),
        l = n("2TCc"),
        m = n("rmMi"),
        u = n("bXvd"),
        d = (function (t) {
          function a() {
            for (
              var a, n = arguments.length, e = new Array(n), i = 0;
              i < n;
              i++
            )
              e[i] = arguments[i];
            return (
              ((a = t.call.apply(t, [this].concat(e)) || this).onLinkStart =
                function (t, n) {
                  n.isInternal && a.secuenceElement.exit();
                }),
              a
            );
          }
          return (
            Object(e.a)(a, t),
            (a.prototype.render = function () {
              var t = this,
                a = this.props.classes;
              return r.a.createElement(
                c.a,
                {
                  ref: function (a) {
                    return (t.secuenceElement = a);
                  },
                },
                r.a.createElement(
                  "div",
                  { className: a.root },
                  r.a.createElement(
                    "div",
                    { className: a.content },
                    r.a.createElement(s.a, {
                      className: a.brand,
                      onLinkStart: this.onLinkStart,
                    }),
                    r.a.createElement(l.a, {
                      className: a.menu,
                      animation: { duration: { enter: 400 } },
                      scheme: "expand",
                      onLinkStart: this.onLinkStart,
                    }),
                    r.a.createElement(m.a, {
                      className: a.social,
                      onLinkStart: this.onLinkStart,
                    })
                  ),
                  r.a.createElement(u.a, {
                    className: a.legal,
                    opaque: !0,
                    onLinkStart: this.onLinkStart,
                  })
                )
              );
            }),
            a
          );
        })(r.a.Component);
      a.default = Object(o.a)(function (t) {
        return {
          root: { margin: "auto", width: "100%" },
          content: {
            display: "flex",
            flexDirection: "column",
            margin: [0, "auto"],
            padding: 20,
          },
          brand: {
            margin: [0, "auto", 30],
            padding: [10, 0],
            width: "100%",
            maxWidth: 700,
          },
          menu: { margin: [0, "auto", 20], width: "100%", maxWidth: 600 },
          social: { margin: [0, "auto"], width: "100%", maxWidth: 400 },
          legal: {
            position: "absolute",
            left: "50%",
            bottom: 0,
            transform: "translateX(-50%)",
          },
        };
      })(d);
    },
  },
]);
//# sourceMappingURL=component---src-pages-index-js-b5c6a0e97df7e6ae34fb.js.map
