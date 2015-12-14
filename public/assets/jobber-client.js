"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('jobber-client/adapters/application', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].RESTAdapter.extend({
    namespace: 'api'
  });
});
define('jobber-client/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'jobber-client/config/environment'], function (exports, _ember, _emberResolver, _emberLoadInitializers, _jobberClientConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _jobberClientConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _jobberClientConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _jobberClientConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('jobber-client/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'jobber-client/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _jobberClientConfigEnvironment) {

  var name = _jobberClientConfigEnvironment['default'].APP.name;
  var version = _jobberClientConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('jobber-client/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('jobber-client/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('jobber-client/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'jobber-client/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _jobberClientConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_jobberClientConfigEnvironment['default'].APP.name, _jobberClientConfigEnvironment['default'].APP.version)
  };
});
define('jobber-client/initializers/export-application-global', ['exports', 'ember', 'jobber-client/config/environment'], function (exports, _ember, _jobberClientConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_jobberClientConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _jobberClientConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_jobberClientConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('jobber-client/models/job', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    link: _emberData['default'].attr('string'),
    top_message: _emberData['default'].attr('string'),
    applicant_message: _emberData['default'].attr('string'),
    positions: _emberData['default'].attr('number'),
    title: _emberData['default'].attr('string'),
    working_title: _emberData['default'].attr('string'),
    department: _emberData['default'].attr('string'),
    location: _emberData['default'].attr('string'),
    requisition: _emberData['default'].attr('number'),
    summary: _emberData['default'].attr('string'),
    additional: _emberData['default'].attr('string'),
    screening: _emberData['default'].attr('string'),
    required: _emberData['default'].attr('string'),
    desired: _emberData['default'].attr('string'),
    salary: _emberData['default'].attr('string'),
    time: _emberData['default'].attr('string'),
    duration: _emberData['default'].attr('string'),
    start: _emberData['default'].attr('string'),
    end: _emberData['default'].attr('string'),
    contact_name: _emberData['default'].attr('string'),
    contact_phone: _emberData['default'].attr('string')
  });
});
define('jobber-client/router', ['exports', 'ember', 'jobber-client/config/environment'], function (exports, _ember, _jobberClientConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _jobberClientConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('job', { path: '/job/:job_id' });
  });

  exports['default'] = Router;
});
define('jobber-client/routes/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.store.findAll('job');
    }
  });
});
define('jobber-client/routes/job', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model(params) {
      return this.store.findRecord('job', params.job_id);
    }
  });
});
define("jobber-client/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 0
          }
        },
        "moduleName": "jobber-client/templates/application.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h1");
        dom.setAttribute(el2, "id", "title");
        var el3 = dom.createTextNode("Jobber");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 3, 3);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [3, 2], [3, 12]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("jobber-client/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 2
            },
            "end": {
              "line": 5,
              "column": 2
            }
          },
          "moduleName": "jobber-client/templates/index.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          return morphs;
        },
        statements: [["inline", "link-to", [["get", "job.title", ["loc", [null, [4, 18], [4, 27]]]], "job", ["get", "job", ["loc", [null, [4, 34], [4, 37]]]]], [], ["loc", [null, [4, 8], [4, 39]]]]],
        locals: ["job"],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 0
          }
        },
        "moduleName": "jobber-client/templates/index.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h2");
        var el2 = dom.createTextNode("All Jobs");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("ul");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [2]), 1, 1);
        return morphs;
      },
      statements: [["block", "each", [["get", "model", ["loc", [null, [3, 10], [3, 15]]]]], [], 0, null, ["loc", [null, [3, 2], [5, 11]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("jobber-client/templates/job", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "jobber-client/templates/job.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h2");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createElement("a");
        var el3 = dom.createTextNode("Apply");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2, 0]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 0, 0);
        morphs[1] = dom.createAttrMorph(element0, 'href');
        morphs[2] = dom.createMorphAt(dom.childAt(fragment, [4]), 0, 0);
        return morphs;
      },
      statements: [["content", "model.title", ["loc", [null, [1, 4], [1, 19]]]], ["attribute", "href", ["concat", [["get", "model.link", ["loc", [null, [2, 14], [2, 24]]]]]]], ["inline", "link-to", ["Back", "index"], [], ["loc", [null, [3, 3], [3, 29]]]]],
      locals: [],
      templates: []
    };
  })());
});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('jobber-client/config/environment', ['ember'], function(Ember) {
  var prefix = 'jobber-client';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (!runningTests) {
  require("jobber-client/app")["default"].create({"name":"jobber-client","version":"0.1.0+ef63aaea"});
}

/* jshint ignore:end */
//# sourceMappingURL=jobber-client.map