var flattenedInjections = verity.injections;
var injections = [];
for (var i = 0; i < flattenedInjections.length; i += 2) {
  injections.push({
    target: flattenedInjections[i],
    source: flattenedInjections[i + 1]
  });
}
shouldTest({
  url: verity.url,
  boilerplate: boilerplate,
  removeInjection: function (target) {
    var injections = JSON.parse(verity.injections);
    for (var i = 0, stop = injections.length; i < stop; i++) {
      if (injections[i].target == target) {
        injections.splice(i, 1);
        stop--;
      }
    }
    verity.injections = JSON.stringify(injections);
  },
  addInjection: function (source, target) {
    var injections = JSON.parse(verity.injections);
    verity.addInjection(source, target)
  },
  injections: injections.concat({
    target: /jekyllrb.com/.toString(),
    source: "http://dossier:8048/verity/user/landing/index.js"
  }),
  createRequest: createXHRRequest(function () { verity.createXHR() }),
  injector: function (source) { verity.injector(source) })
});
