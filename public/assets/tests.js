define('jobber-client/tests/acceptance/job-index-test', ['exports', 'qunit', 'jobber-client/tests/helpers/module-for-acceptance'], function (exports, _qunit, _jobberClientTestsHelpersModuleForAcceptance) {

  (0, _jobberClientTestsHelpersModuleForAcceptance['default'])('Acceptance | job index');

  (0, _qunit.test)('showing the index page', function (assert) {
    visit('/');

    andThen(function () {
      assert.equal(find('#all-jobs').length, 1, "job table is present");
      assert.equal(currentPath(), 'index', "showing the index page");
      assert.equal(currentURL(), '/', "URL is correct");
      assert.equal(find('#all-jobs tbody tr.job-fields').length, 138, "all jobs are shown");
    });
  });

  (0, _qunit.test)('sorting job list', function (assert) {
    visit('/');
    click('#all-jobs thead tr th:first');

    andThen(function () {
      assert.equal(find('#all-jobs tbody tr:first td:nth-child(1)').text(), 'Academic Advisor', "working title sorts ascending correctly");
    });

    click('#all-jobs thead tr th:first');

    andThen(function () {
      assert.equal(find('#all-jobs tbody tr:first td:nth-child(1)').text(), 'Water Quality Lab Research Aid', "working title sorts descending correctly");
    });

    click('#all-jobs thead tr th:nth-child(2)');

    andThen(function () {
      assert.equal(find('#all-jobs tbody tr:first td:nth-child(2)').text(), 'Academic Advisor', "title sorts ascending correctly");
    });

    click('#all-jobs thead tr th:nth-child(2)');

    andThen(function () {
      assert.equal(find('#all-jobs tbody tr:first td:nth-child(2)').text(), 'Vehicle Operator 2', "title sorts descending correctly");
    });

    click('#all-jobs thead tr th:nth-child(3)');

    andThen(function () {
      assert.equal(find('#all-jobs tbody tr:first td:nth-child(3)').text(), 'Ackerman Road', "department sorts ascending correctly");
    });

    click('#all-jobs thead tr th:nth-child(3)');

    andThen(function () {
      assert.equal(find('#all-jobs tbody tr:first td:nth-child(3)').text(), 'WCA-Ticket Services', "department sorts descending correctly");
    });

    click('#all-jobs thead tr th:nth-child(4)');

    andThen(function () {
      assert.equal(find('#all-jobs tbody tr:first td:nth-child(4)').text(), '12/15/2015', "end date sorts ascending correctly");
    });

    click('#all-jobs thead tr th:nth-child(4)');

    andThen(function () {
      assert.equal(find('#all-jobs tbody tr:first td:nth-child(4)').text(), '05/01/2016', "end date sorts descending correctly");
    });

    click('#all-jobs thead tr th:nth-child(5)');

    andThen(function () {
      assert.equal(find('#all-jobs tbody tr:first td:nth-child(5)').text(), '', "location sorts ascending correctly");
    });

    click('#all-jobs thead tr th:nth-child(5)');

    andThen(function () {
      assert.equal(find('#all-jobs tbody tr:first td:nth-child(5)').text(), 'Wooster', "location sorts descending correctly");
    });
  });

  (0, _qunit.test)('filtering job list', function (assert) {
    visit('/');
    click('#filters-heading a');
    fillIn('#text-filter', 'design');

    andThen(function () {
      assert.equal(find('#all-jobs tbody tr.job-fields').length, 4, "only text filtered jobs are shown");
    });

    fillIn('#text-filter', '');
    fillIn('#title-filter', 'Asst Director of Development');

    andThen(function () {
      assert.equal(find('#all-jobs tbody tr.job-fields').length, 3, "only title filtered jobs are shown");
    });

    fillIn('#title-filter', '');
    fillIn('#department-filter', 'OARnet');

    andThen(function () {
      assert.equal(find('#all-jobs tbody tr.job-fields').length, 2, "only department filtered jobs are shown");
    });

    fillIn('#department-filter', '');
    fillIn('#location-filter', 'Wooster');

    andThen(function () {
      assert.equal(find('#all-jobs tbody tr.job-fields').length, 4, "only location filtered jobs are shown");
    });

    fillIn('#department-filter', 'FAES IT');

    andThen(function () {
      assert.equal(find('#all-jobs tbody tr.job-fields').length, 1, "multiple filters are additive");
    });
  });

  (0, _qunit.test)('index after deep linking', function (assert) {
    visit('/job/67237');
    click('nav li a[href="/"]');

    andThen(function () {
      assert.equal(find('#all-jobs tbody tr.job-fields').length, 138, "all jobs loaded after deep linking");
    });
  });
});
define('jobber-client/tests/acceptance/job-index-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - acceptance');
  QUnit.test('acceptance/job-index-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/job-index-test.js should pass jshint.');
  });
});
define('jobber-client/tests/acceptance/job-show-test', ['exports', 'qunit', 'jobber-client/tests/helpers/module-for-acceptance'], function (exports, _qunit, _jobberClientTestsHelpersModuleForAcceptance) {

  (0, _jobberClientTestsHelpersModuleForAcceptance['default'])('Acceptance | job show');

  (0, _qunit.test)('showing the job posting page', function (assert) {
    visit('/job/67237');

    andThen(function () {
      assert.equal(currentPath(), 'job', "showing the job posting page");
      assert.equal(currentURL(), '/job/67237', "URL is correct");
      assert.equal(find('h1').text().replace(/\s/g, ''), 'Secretary-OMFSOfficeAssociate', "job page is rendered");
    });
  });

  (0, _qunit.test)('linking to job page from job index', function (assert) {
    visit('/');
    fillIn('#text-filter', 'OMFS');
    click('#all-jobs tbody tr:first td:first a');

    andThen(function () {
      assert.equal(currentPath(), 'job', "showing the job posting page");
      assert.equal(find('h1').text().replace(/\s/g, ''), 'Secretary-OMFSOfficeAssociate', "job page is rendered after link");
    });
  });
});
define('jobber-client/tests/acceptance/job-show-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - acceptance');
  QUnit.test('acceptance/job-show-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/job-show-test.js should pass jshint.');
  });
});
define('jobber-client/tests/acceptance/navigation-test', ['exports', 'qunit', 'jobber-client/tests/helpers/module-for-acceptance'], function (exports, _qunit, _jobberClientTestsHelpersModuleForAcceptance) {

  (0, _jobberClientTestsHelpersModuleForAcceptance['default'])('Acceptance | navigation');

  (0, _qunit.test)('navbar is present', function (assert) {
    visit('/');

    andThen(function () {
      assert.equal(find('.navbar .navbar-header').length, 1, "page nav is present");
    });
  });

  (0, _qunit.test)('linking to the salary page from the index page', function (assert) {
    visit('/');
    click('nav li a[href="/salary"]');

    andThen(function () {
      assert.equal(currentURL(), '/salary', "user navigates to the salary page");
    });
  });

  (0, _qunit.test)('linking to the index page from the salary page', function (assert) {
    visit('/salary');
    click('nav li a[href="/"]');

    andThen(function () {
      assert.equal(currentURL(), '/', "user navigates to the index page");
    });
  });
});
define('jobber-client/tests/acceptance/navigation-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - acceptance');
  QUnit.test('acceptance/navigation-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/navigation-test.js should pass jshint.');
  });
});
define('jobber-client/tests/acceptance/salary-vis-test', ['exports', 'ember', 'qunit', 'jobber-client/tests/helpers/module-for-acceptance'], function (exports, _ember, _qunit, _jobberClientTestsHelpersModuleForAcceptance) {

  (0, _jobberClientTestsHelpersModuleForAcceptance['default'])('Acceptance | salary visualization');

  (0, _qunit.test)('showing the salary visualization page', function (assert) {
    var promise = $.Deferred();
    visit('/salary');

    andThen(function () {
      assert.equal(currentPath(), 'salary', "showing the salary page");
      assert.equal(currentURL(), '/salary', "URL is correct");

      _ember['default'].run.later(function () {
        assert.equal(find('#vis svg').length, 1, "visualization has rendered");
        promise.resolve();
      }, 1000);
    });
  });

  (0, _qunit.test)('running the salary visualization', function (assert) {
    var promise = $.Deferred();
    visit('/salary');

    andThen(function () {
      _ember['default'].run.later(function () {
        assert.equal(find('#vis svg circle').length, 138, "visualization has correct number of nodes");
        promise.resolve();
      }, 1000);
    });
  });
});
define('jobber-client/tests/acceptance/salary-vis-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - acceptance');
  QUnit.test('acceptance/salary-vis-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/salary-vis-test.js should pass jshint.');
  });
});
define('jobber-client/tests/adapters/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - adapters');
  QUnit.test('adapters/application.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass jshint.');
  });
});
define('jobber-client/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('jobber-client/tests/components/jobs-table.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components');
  QUnit.test('components/jobs-table.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/jobs-table.js should pass jshint.');
  });
});
define('jobber-client/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('jobber-client/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/destroy-app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('jobber-client/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'jobber-client/tests/helpers/start-app', 'jobber-client/tests/helpers/destroy-app'], function (exports, _qunit, _jobberClientTestsHelpersStartApp, _jobberClientTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _jobberClientTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        (0, _jobberClientTestsHelpersDestroyApp['default'])(this.application);

        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }
      }
    });
  };
});
define('jobber-client/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/module-for-acceptance.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('jobber-client/tests/helpers/resolver', ['exports', 'ember/resolver', 'jobber-client/config/environment'], function (exports, _emberResolver, _jobberClientConfigEnvironment) {

  var resolver = _emberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _jobberClientConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _jobberClientConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('jobber-client/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/resolver.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('jobber-client/tests/helpers/start-app', ['exports', 'ember', 'jobber-client/app', 'jobber-client/config/environment'], function (exports, _ember, _jobberClientApp, _jobberClientConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _jobberClientConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _jobberClientApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('jobber-client/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/start-app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('jobber-client/tests/helpers/truncate.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/truncate.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/truncate.js should pass jshint.');
  });
});
define('jobber-client/tests/models/job.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/job.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/job.js should pass jshint.');
  });
});
define('jobber-client/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('router.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('jobber-client/tests/routes/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/index.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass jshint.');
  });
});
define('jobber-client/tests/routes/job.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/job.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/job.js should pass jshint.');
  });
});
define('jobber-client/tests/test-helper', ['exports', 'jobber-client/tests/helpers/resolver', 'ember-qunit'], function (exports, _jobberClientTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_jobberClientTestsHelpersResolver['default']);
});
define('jobber-client/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('test-helper.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('jobber-client/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map