(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    w2l6: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n("dI71"),
        r = n("q1tI"),
        o = n.n(r),
        c = n("2z+b"),
        l = n("Qs7Y"),
        i = n("ww3E"),
        u = n("dntC"),
        s = n("CcRw"),
        m = (function (e) {
          function t() {
            for (
              var t, n = arguments.length, a = new Array(n), r = 0;
              r < n;
              r++
            )
              a[r] = arguments[r];
            return (
              ((t = e.call.apply(e, [this].concat(a)) || this).onStart =
                function () {
                  t.secuenceElement.exit();
                }),
              t
            );
          }
          return (
            Object(a.a)(t, e),
            (t.prototype.render = function () {
              var e = this,
                t = this.props.classes;
              return o.a.createElement(
                "div",
                { className: t.root },
                o.a.createElement(
                  "main",
                  { className: t.main },
                  o.a.createElement(
                    s.a,
                    {
                      ref: function (t) {
                        return (e.secuenceElement = t);
                      },
                    },
                    o.a.createElement(
                      "h1",
                      null,
                      o.a.createElement(l.a, null, "Not found")
                    ),
                    o.a.createElement(
                      "p",
                      null,
                      o.a.createElement(
                        l.a,
                        null,
                        "The location you are looking for was not found in the system."
                      )
                    ),
                    o.a.createElement(
                      u.a,
                      { href: "/" },
                      o.a.createElement(
                        i.a,
                        { onClick: this.onStart },
                        "Go to Start"
                      )
                    )
                  )
                )
              );
            }),
            t
          );
        })(o.a.PureComponent);
      t.default = Object(c.a)(function (e) {
        return {
          root: { flex: 1, display: "flex", padding: 20 },
          main: { margin: "auto", textAlign: "center" },
        };
      })(m);
    },
  },
]);
//# sourceMappingURL=component---src-pages-404-js-faaff9cab0d3d843d44f.js.map
