// Import and register all your controllers from the importmap under controllers/*

import { application } from "controllers/application"

import Jumbotron from "controllers/jumbotron_controller";
import Counter from "controllers/counter_controller";
import GoUp from "controllers/goUp_controller";
import Photos from "controllers/photos_controller";
import Map  from "controllers/map_controller";

// Eager load all controllers defined in the import map under controllers/**/*_controller
import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading"
eagerLoadControllersFrom("controllers", application)

// Lazy load controllers as they appear in the DOM (remember not to preload controllers in import map!)
import { lazyLoadControllersFrom } from "@hotwired/stimulus-loading"
// lazyLoadControllersFrom("controllers", application)
lazyLoadControllersFrom("controllers", Jumbotron);
lazyLoadControllersFrom("controllers", Counter);
lazyLoadControllersFrom("controllers", GoUp);
lazyLoadControllersFrom("controllers", Photos);
lazyLoadControllersFrom("controllers", Map);