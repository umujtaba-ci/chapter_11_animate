(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"chapter11_atlas_1", frames: [[920,883,632,149],[0,535,800,293],[0,830,443,289],[802,535,383,346],[1187,570,452,288],[0,0,1280,533],[445,883,473,212],[1554,988,386,56],[1282,0,536,568],[1641,570,294,416]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_1 = function() {
	this.initialize(ss["chapter11_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bottom_back = function() {
	this.initialize(ss["chapter11_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.carLeft = function() {
	this.initialize(ss["chapter11_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.carMiddle = function() {
	this.initialize(ss["chapter11_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.carRight = function() {
	this.initialize(ss["chapter11_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.cityBG = function() {
	this.initialize(ss["chapter11_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.double_identity = function() {
	this.initialize(ss["chapter11_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.footer = function() {
	this.initialize(ss["chapter11_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.George_2 = function() {
	this.initialize(ss["chapter11_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.rachel = function() {
	this.initialize(ss["chapter11_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.cityBG();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,1280,533), null);


(lib.movietitle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(78.5,0,0.5,0.5);

	this.instance_1 = new lib.double_identity();
	this.instance_1.setTransform(0,79.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.movietitle, new cjs.Rectangle(0,0,473,291.3), null);


(lib.leftCar_Base = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.carLeft();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,443,289);


(lib.Rachel = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.rachel();
	this.instance.setTransform(-147,-208);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rachel, new cjs.Rectangle(-147,-208,294,416), null);


(lib.George = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.George_2();
	this.instance.setTransform(-311,-280);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.George, new cjs.Rectangle(-311,-280,536,568), null);


(lib.Footer = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.footer();
	this.instance.setTransform(-192,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Footer, new cjs.Rectangle(-192,-29,386,56), null);


(lib.Head_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// rays
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(120,153,157,0)","rgba(120,153,157,0.2)"],[0.373,1],-484.7,0,462.8,0).s().p("EhLugRgMCUBAACQBfAHA9A3QA6A0AGBHQAGBKg1A8Qg6BChzAaMiSdAckg");
	this.shape.setTransform(10.9808,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(60));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-473.7,-112,969.4,224.1);


(lib.carRight_Base = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.carRight();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.carRight_Base, new cjs.Rectangle(0,0,452,288), null);


(lib.carMiddle_Base = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.carMiddle();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,383,346);


(lib.bottom_back_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bottom_back();
	this.instance.setTransform(0,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bottom_back_1, new cjs.Rectangle(0,-1,800,293), null);


(lib.carRight_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// lights
	this.instance = new lib.Head_1();
	this.instance.setTransform(960.4,63,0.8517,0.6895,0,2.5887,-177.4102);
	this.instance.filters = [new cjs.BlurFilter(10, 10, 1)];
	this.instance.cache(-476,-114,973,228);

	this.instance_1 = new lib.Head_1();
	this.instance_1.setTransform(789.5,68.95,0.8517,0.6895,0,2.5887,-177.4102,-0.1,-0.1);
	this.instance_1.filters = [new cjs.BlurFilter(10, 10, 1)];
	this.instance_1.cache(-476,-114,973,228);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{y:68.95}},{t:this.instance,p:{y:63}}]}).to({state:[{t:this.instance_1,p:{y:69.95}},{t:this.instance,p:{y:64}}]},3).to({state:[{t:this.instance_1,p:{y:67.95}},{t:this.instance,p:{y:62}}]},4).wait(1));

	// smallRumble
	this.instance_2 = new lib.carRight_Base();
	this.instance_2.setTransform(362,2,1,1,0,0,0,226,144);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({y:3},0).wait(4).to({y:1},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(136,-143,1239.2,316.7);


(lib.carMiddle_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_10
	this.instance = new lib.Head_1();
	this.instance.setTransform(192.15,479.95,0.9944,0.9944,-87.7512,0,0,11,0.1);
	this.instance.filters = [new cjs.BlurFilter(20, 20, 1)];
	this.instance.cache(-476,-114,973,228);

	this.instance_1 = new lib.Head_1();
	this.instance_1.setTransform(-476.9,343,0.9959,0.9959,-32.5802,0,0,11,-0.1);
	this.instance_1.filters = [new cjs.BlurFilter(20, 20, 1)];
	this.instance_1.cache(-476,-114,973,228);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{y:343}},{t:this.instance,p:{y:479.95}}]}).to({state:[{t:this.instance_1,p:{y:345}},{t:this.instance,p:{y:481.95}}]},3).wait(3));

	// smallRumble
	this.instance_2 = new lib.carMiddle_Base("synched",0);
	this.instance_2.setTransform(1.5,-7,1,1,0,0,0,191.5,173);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({y:-5},0).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-953.7,-180,1290.5,1160.1);


(lib.carLeft_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// lights
	this.instance = new lib.Head_1();
	this.instance.setTransform(-469.95,134.95,0.9997,0.9997,-5.7986,0,0,10.9,-0.1);
	this.instance.filters = [new cjs.BlurFilter(10, 10, 1)];
	this.instance.cache(-476,-114,973,228);

	this.instance_1 = new lib.Head_1();
	this.instance_1.setTransform(-654.85,82,1,1,0,0,0,11,0);
	this.instance_1.filters = [new cjs.BlurFilter(10, 10, 1)];
	this.instance_1.cache(-476,-114,973,228);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{y:82}},{t:this.instance,p:{y:134.95}}]}).to({state:[{t:this.instance_1,p:{y:84.15}},{t:this.instance,p:{y:137.1}}]},1).to({state:[{t:this.instance_1,p:{y:79.85}},{t:this.instance,p:{y:132.8}}]},2).wait(1));

	// smallRumble
	this.instance_2 = new lib.leftCar_Base("synched",0);
	this.instance_2.setTransform(1.5,0.5,1,1,0,0,0,221.5,144.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({y:2.65},0).wait(2).to({y:-1.65},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1144.6,-146.1,1367.6,451.9);


// stage content:
(lib.chapter11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// title
	this.instance = new lib.movietitle();
	this.instance.setTransform(416,235.05,1,1,0,0,0,236.5,145.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(119).to({_off:false},0).wait(72));

	// Middle_car
	this.carMiddle = new lib.carMiddle_1();
	this.carMiddle.name = "carMiddle";
	this.carMiddle.setTransform(827.45,486.45,0.3,0.3,0,0,0,57.5,51.9);
	this.carMiddle.alpha = 0;
	this.carMiddle._off = true;

	this.timeline.addTween(cjs.Tween.get(this.carMiddle).wait(69).to({_off:false},0).wait(1).to({regX:-312.8,regY:400.2,scaleX:0.3595,scaleY:0.3595,x:702.4,y:621.7,alpha:0.3912},0).wait(1).to({scaleX:0.4164,scaleY:0.4164,x:689.05,y:651.1,alpha:0.7652},0).wait(1).to({scaleX:0.4707,scaleY:0.4707,x:676.25,y:679.15,alpha:1},0).wait(1).to({scaleX:0.5223,scaleY:0.5223,x:664.2,y:705.8},0).wait(1).to({scaleX:0.5713,scaleY:0.5713,x:652.7,y:731.15},0).wait(1).to({scaleX:0.6176,scaleY:0.6176,x:641.85,y:755.1},0).wait(1).to({scaleX:0.6612,scaleY:0.6612,x:631.6,y:777.65},0).wait(1).to({scaleX:0.7023,scaleY:0.7023,x:622,y:798.9},0).wait(1).to({scaleX:0.7406,scaleY:0.7406,x:613,y:818.7},0).wait(1).to({scaleX:0.7764,scaleY:0.7764,x:604.6,y:837.2},0).wait(1).to({scaleX:0.8094,scaleY:0.8094,x:596.8,y:854.3},0).wait(1).to({scaleX:0.8399,scaleY:0.8399,x:589.7,y:870},0).wait(1).to({scaleX:0.8677,scaleY:0.8677,x:583.15,y:884.4},0).wait(1).to({scaleX:0.8928,scaleY:0.8928,x:577.3,y:897.35},0).wait(1).to({scaleX:0.9153,scaleY:0.9153,x:572,y:909},0).wait(1).to({scaleX:0.9351,scaleY:0.9351,x:567.35,y:919.25},0).wait(1).to({scaleX:0.9523,scaleY:0.9523,x:563.3,y:928.1},0).wait(1).to({scaleX:0.9669,scaleY:0.9669,x:559.9,y:935.65},0).wait(1).to({scaleX:0.9788,scaleY:0.9788,x:557.1,y:941.8},0).wait(1).to({scaleX:0.9881,scaleY:0.9881,x:554.95,y:946.6},0).wait(1).to({scaleX:0.9947,scaleY:0.9947,x:553.35,y:950},0).wait(1).to({scaleX:0.9987,scaleY:0.9987,x:552.4,y:952.05},0).wait(1).to({scaleX:1,scaleY:1,x:552.1,y:952.8},0).wait(1).to({regX:57.5,regY:51.8,x:922.45,y:604.45},0).wait(1).to({regX:-312.8,regY:400.2,x:552.15,y:952.85},0).wait(97));

	// Left_car
	this.instance_1 = new lib.carLeft_1();
	this.instance_1.setTransform(575.45,510.25,0.2936,0.2935,0,0,0,-458.4,75.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(74).to({_off:false},0).wait(1).to({regX:-461.3,regY:79,scaleX:0.35,scaleY:0.3499,x:540.45,y:520.1,alpha:0.0784},0).wait(1).to({scaleX:0.404,scaleY:0.4039,x:507.8,y:528.65,alpha:0.1536},0).wait(1).to({scaleX:0.4558,scaleY:0.4557,x:476.5,y:536.85,alpha:0.2256},0).wait(1).to({scaleX:0.5053,scaleY:0.5052,x:446.55,y:544.65,alpha:0.2944},0).wait(1).to({scaleX:0.5525,scaleY:0.5524,x:418.05,y:552.15,alpha:0.36},0).wait(1).to({scaleX:0.5974,scaleY:0.5973,x:390.9,y:559.25,alpha:0.4224},0).wait(1).to({scaleX:0.6399,scaleY:0.6398,x:365.15,y:566,alpha:0.4816},0).wait(1).to({scaleX:0.6802,scaleY:0.6801,x:340.8,y:572.4,alpha:0.5376},0).wait(1).to({scaleX:0.7182,scaleY:0.7181,x:317.85,y:578.4,alpha:0.5904},0).wait(1).to({scaleX:0.7539,scaleY:0.7537,x:296.3,y:584.05,alpha:0.64},0).wait(1).to({scaleX:0.7872,scaleY:0.7871,x:276.1,y:589.35,alpha:0.6864},0).wait(1).to({scaleX:0.8183,scaleY:0.8182,x:257.3,y:594.25,alpha:0.7296},0).wait(1).to({scaleX:0.8471,scaleY:0.8469,x:239.9,y:598.8,alpha:0.7696},0).wait(1).to({scaleX:0.8735,scaleY:0.8734,x:223.95,y:602.95,alpha:0.8064},0).wait(1).to({scaleX:0.8977,scaleY:0.8975,x:209.3,y:606.8,alpha:0.84},0).wait(1).to({scaleX:0.9196,scaleY:0.9194,x:196.1,y:610.3,alpha:0.8704},0).wait(1).to({scaleX:0.9391,scaleY:0.939,x:184.3,y:613.4,alpha:0.8976},0).wait(1).to({scaleX:0.9564,scaleY:0.9562,x:173.8,y:616.1,alpha:0.9216},0).wait(1).to({scaleX:0.9714,scaleY:0.9712,x:164.75,y:618.45,alpha:0.9424},0).wait(1).to({scaleX:0.984,scaleY:0.9838,x:157.15,y:620.45,alpha:0.96},0).wait(1).to({scaleX:0.9944,scaleY:0.9942,x:150.85,y:622.1,alpha:0.9744},0).wait(1).to({scaleX:1.0024,scaleY:1.0022,x:146,y:623.4,alpha:0.9856},0).wait(1).to({scaleX:1.0082,scaleY:1.008,x:142.55,y:624.3,alpha:0.9936},0).wait(1).to({scaleX:1.0116,scaleY:1.0114,x:140.45,y:624.85,alpha:0.9984},0).wait(1).to({scaleX:1.0128,scaleY:1.0126,x:139.75,y:625,alpha:1},0).wait(1).to({regX:-457.9,regY:76.1,x:142.8,y:621.8},0).wait(1).to({regX:-461.3,regY:79,x:139.35,y:624.7},0).wait(90));

	// Right_car
	this.carRight = new lib.carRight_1();
	this.carRight.name = "carRight";
	this.carRight.setTransform(740,478.5,0.3,0.3,0,0,0,-49.9,-57.9);
	this.carRight.alpha = 0;
	this.carRight._off = true;

	this.timeline.addTween(cjs.Tween.get(this.carRight).wait(77).to({_off:false},0).wait(1).to({regX:754.1,regY:13.4,scaleX:0.3491,scaleY:0.3491,x:1022.05,y:504.65,alpha:0.3928},0).wait(1).to({scaleX:0.3964,scaleY:0.3964,x:1061.45,y:509.2,alpha:0.7714},0).wait(1).to({scaleX:0.442,scaleY:0.442,x:1099.3,y:513.6,alpha:1},0).wait(1).to({scaleX:0.4857,scaleY:0.4857,x:1135.75,y:517.85},0).wait(1).to({scaleX:0.5277,scaleY:0.5277,x:1170.7,y:521.9},0).wait(1).to({scaleX:0.5679,scaleY:0.5679,x:1204.15,y:525.8},0).wait(1).to({scaleX:0.6063,scaleY:0.6063,x:1236.1,y:529.5},0).wait(1).to({scaleX:0.6429,scaleY:0.6429,x:1266.55,y:533.1},0).wait(1).to({scaleX:0.6777,scaleY:0.6777,x:1295.6,y:536.5},0).wait(1).to({scaleX:0.7107,scaleY:0.7107,x:1323.1,y:539.65},0).wait(1).to({scaleX:0.742,scaleY:0.742,x:1349.1,y:542.7},0).wait(1).to({scaleX:0.7714,scaleY:0.7714,x:1373.65,y:545.55},0).wait(1).to({scaleX:0.7991,scaleY:0.7991,x:1396.65,y:548.25},0).wait(1).to({scaleX:0.825,scaleY:0.825,x:1418.25,y:550.75},0).wait(1).to({scaleX:0.8491,scaleY:0.8491,x:1438.3,y:553.1},0).wait(1).to({scaleX:0.8714,scaleY:0.8714,x:1456.9,y:555.3},0).wait(1).to({scaleX:0.892,scaleY:0.892,x:1473.95,y:557.25},0).wait(1).to({scaleX:0.9107,scaleY:0.9107,x:1489.55,y:559.05},0).wait(1).to({scaleX:0.9277,scaleY:0.9277,x:1503.7,y:560.75},0).wait(1).to({scaleX:0.9429,scaleY:0.9429,x:1516.35,y:562.2},0).wait(1).to({scaleX:0.9563,scaleY:0.9563,x:1527.5,y:563.45},0).wait(1).to({scaleX:0.9679,scaleY:0.9679,x:1537.15,y:564.6},0).wait(1).to({scaleX:0.9777,scaleY:0.9777,x:1545.3,y:565.55},0).wait(1).to({scaleX:0.9857,scaleY:0.9857,x:1552,y:566.35},0).wait(1).to({scaleX:0.992,scaleY:0.992,x:1557.2,y:566.95},0).wait(1).to({scaleX:0.9964,scaleY:0.9964,x:1560.95,y:567.35},0).wait(1).to({scaleX:0.9991,scaleY:0.9991,x:1563.15,y:567.65},0).wait(1).to({scaleX:1,scaleY:1,x:1563.9,y:567.7},0).wait(1).to({regX:-50,regY:-58,x:760,y:496.5},0).wait(1).to({regX:754.1,regY:13.4,x:1564.1,y:567.9},0).wait(84));

	// man
	this.instance_2 = new lib.George();
	this.instance_2.setTransform(1029,172.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(22).to({_off:false},0).wait(1).to({regX:-43,regY:4,x:987.65,y:176.5,alpha:0.0399},0).wait(1).to({x:989.25,alpha:0.0795},0).wait(1).to({x:990.9,alpha:0.1189},0).wait(1).to({x:992.5,alpha:0.1581},0).wait(1).to({x:994.15,alpha:0.197},0).wait(1).to({x:995.75,alpha:0.2357},0).wait(1).to({x:997.35,alpha:0.2742},0).wait(1).to({x:998.9,alpha:0.3124},0).wait(1).to({x:1000.5,alpha:0.3503},0).wait(1).to({x:1002.05,alpha:0.3881},0).wait(1).to({x:1003.6,alpha:0.4256},0).wait(1).to({x:1005.15,alpha:0.4628},0).wait(1).to({x:1006.65,alpha:0.4999},0).wait(1).to({x:1008.2,alpha:0.5367},0).wait(1).to({x:1009.7,alpha:0.5732},0).wait(1).to({x:1011.2,alpha:0.6095},0).wait(1).to({x:1012.7,alpha:0.6456},0).wait(1).to({x:1014.2,alpha:0.6814},0).wait(1).to({x:1015.65,alpha:0.717},0).wait(1).to({x:1017.1,alpha:0.7524},0).wait(1).to({x:1018.6,alpha:0.7875},0).wait(1).to({x:1020,alpha:0.8224},0).wait(1).to({x:1021.45,alpha:0.857},0).wait(1).to({x:1022.9,alpha:0.8914},0).wait(1).to({x:1024.3,alpha:0.9256},0).wait(1).to({x:1025.7,alpha:0.9595},0).wait(1).to({x:1027.1,alpha:0.9932},0).wait(1).to({x:1027.4,alpha:1},0).wait(141));

	// woman
	this.instance_3 = new lib.Rachel();
	this.instance_3.setTransform(903.05,191.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;
	this.instance_3.filters = [new cjs.BlurFilter(20, 20, 1)];
	this.instance_3.cache(-149,-210,298,420);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(22).to({_off:false},0).wait(1).to({x:900.9371,alpha:0.0383},0).wait(1).to({x:898.837,alpha:0.0765},0).wait(1).to({x:896.7495,alpha:0.1143},0).wait(1).to({x:894.6748,alpha:0.152},0).wait(1).to({x:892.6117,alpha:0.1894},0).wait(1).to({x:890.5624,alpha:0.2266},0).wait(1).to({x:888.5248,alpha:0.2636},0).wait(1).to({x:886.4999,alpha:0.3004},0).wait(1).to({x:884.4887,alpha:0.3369},0).wait(1).to({x:882.4892,alpha:0.3732},0).wait(1).to({x:880.5024,alpha:0.4092},0).wait(1).to({x:878.5284,alpha:0.445},0).wait(1).to({x:876.566,alpha:0.4807},0).wait(1).to({x:874.6173,alpha:0.516},0).wait(1).to({x:872.6814,alpha:0.5512},0).wait(1).to({x:870.7572,alpha:0.5861},0).wait(1).to({x:868.8467,alpha:0.6208},0).wait(1).to({x:866.9478,alpha:0.6552},0).wait(1).to({x:865.0617,alpha:0.6894},0).wait(1).to({x:863.1883,alpha:0.7234},0).wait(1).to({x:861.3276,alpha:0.7572},0).wait(1).to({x:859.4797,alpha:0.7908},0).wait(1).to({x:857.6444,alpha:0.8241},0).wait(1).to({x:855.8219,alpha:0.8571},0).wait(1).to({x:854.0121,alpha:0.89},0).wait(1).to({x:852.2139,alpha:0.9226},0).wait(1).to({x:850.4295,alpha:0.955},0).wait(1).to({x:848.6568,alpha:0.9872},0).wait(1).to({x:847.95,alpha:1},0).wait(140));

	// city
	this.instance_4 = new lib.Symbol1();
	this.instance_4.setTransform(640,356.5,1,1,0,0,0,640,266.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).wait(1).to({y:353.5,alpha:0.0333},0).wait(1).to({y:350.5,alpha:0.0667},0).wait(1).to({y:347.5,alpha:0.1},0).wait(1).to({y:344.5,alpha:0.1333},0).wait(1).to({y:341.5,alpha:0.1667},0).wait(1).to({y:338.5,alpha:0.2},0).wait(1).to({y:335.5,alpha:0.2333},0).wait(1).to({y:332.5,alpha:0.2667},0).wait(1).to({y:329.5,alpha:0.3},0).wait(1).to({y:326.5,alpha:0.3333},0).wait(1).to({y:323.5,alpha:0.3667},0).wait(1).to({y:320.5,alpha:0.4},0).wait(1).to({y:317.5,alpha:0.4333},0).wait(1).to({y:314.5,alpha:0.4667},0).wait(1).to({y:311.5,alpha:0.5},0).wait(1).to({y:308.5,alpha:0.5333},0).wait(1).to({y:305.5,alpha:0.5667},0).wait(1).to({y:302.5,alpha:0.6},0).wait(1).to({y:299.5,alpha:0.6333},0).wait(1).to({y:296.5,alpha:0.6667},0).wait(1).to({y:293.5,alpha:0.7},0).wait(1).to({y:290.5,alpha:0.7333},0).wait(1).to({y:287.5,alpha:0.7667},0).wait(1).to({y:284.5,alpha:0.8},0).wait(1).to({y:281.5,alpha:0.8333},0).wait(1).to({y:278.5,alpha:0.8667},0).wait(1).to({y:275.5,alpha:0.9},0).wait(1).to({y:272.5,alpha:0.9333},0).wait(1).to({y:269.5,alpha:0.9667},0).wait(1).to({y:266.5,alpha:1},0).wait(152));

	// footer
	this.instance_5 = new lib.Footer();
	this.instance_5.setTransform(669,730.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(119).to({_off:false},0).wait(1).to({regX:1,regY:-1,x:670,y:729.5,alpha:0.0167},0).wait(1).to({alpha:0.0333},0).wait(1).to({alpha:0.05},0).wait(1).to({alpha:0.0667},0).wait(1).to({alpha:0.0833},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.1167},0).wait(1).to({alpha:0.1333},0).wait(1).to({alpha:0.15},0).wait(1).to({alpha:0.1667},0).wait(1).to({alpha:0.1833},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.2167},0).wait(1).to({alpha:0.2333},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.2667},0).wait(1).to({alpha:0.2833},0).wait(1).to({alpha:0.3},0).wait(54));

	// ground
	this.instance_6 = new lib.bottom_back_1();
	this.instance_6.setTransform(436,639.5,1,1,0,0,0,400,146.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(98).to({_off:false},0).wait(1).to({regY:145.5,y:638.5,alpha:0.019},0).wait(1).to({alpha:0.038},0).wait(1).to({alpha:0.057},0).wait(1).to({alpha:0.0759},0).wait(1).to({alpha:0.0948},0).wait(1).to({alpha:0.1137},0).wait(1).to({alpha:0.1326},0).wait(1).to({alpha:0.1514},0).wait(1).to({alpha:0.1702},0).wait(1).to({alpha:0.1891},0).wait(1).to({alpha:0.2078},0).wait(1).to({alpha:0.2266},0).wait(1).to({alpha:0.2453},0).wait(1).to({alpha:0.2641},0).wait(1).to({alpha:0.2827},0).wait(1).to({alpha:0.3014},0).wait(1).to({alpha:0.3201},0).wait(1).to({alpha:0.3387},0).wait(1).to({alpha:0.3573},0).wait(1).to({alpha:0.3759},0).wait(1).to({alpha:0.3944},0).wait(1).to({alpha:0.4129},0).wait(1).to({alpha:0.4314},0).wait(1).to({alpha:0.4499},0).wait(1).to({alpha:0.4683},0).wait(1).to({alpha:0.4867},0).wait(1).to({alpha:0.5051},0).wait(1).to({alpha:0.5235},0).wait(1).to({alpha:0.5418},0).wait(1).to({alpha:0.56},0).wait(1).to({alpha:0.5783},0).wait(1).to({alpha:0.5965},0).wait(1).to({alpha:0.6146},0).wait(1).to({alpha:0.6327},0).wait(1).to({alpha:0.6508},0).wait(1).to({alpha:0.6688},0).wait(1).to({alpha:0.6867},0).wait(1).to({alpha:0.7046},0).wait(1).to({alpha:0.7225},0).wait(1).to({alpha:0.7402},0).wait(1).to({alpha:0.7579},0).wait(1).to({alpha:0.7755},0).wait(1).to({alpha:0.793},0).wait(1).to({alpha:0.8104},0).wait(1).to({alpha:0.8278},0).wait(1).to({alpha:0.8449},0).wait(1).to({alpha:0.862},0).wait(1).to({alpha:0.8789},0).wait(1).to({alpha:0.8956},0).wait(1).to({alpha:0.9121},0).wait(1).to({alpha:0.9283},0).wait(1).to({alpha:0.9441},0).wait(1).to({alpha:0.9595},0).wait(1).to({alpha:0.9743},0).wait(1).to({alpha:0.988},0).wait(1).to({alpha:0.9999},0).wait(1).to({alpha:1},0).wait(36));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2185.5,1532.7);
// library properties:
lib.properties = {
	id: 'E03E5580D39C8641A5F735B4A696815E',
	width: 1280,
	height: 787,
	fps: 30,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/chapter11_atlas_1.png", id:"chapter11_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['E03E5580D39C8641A5F735B4A696815E'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;