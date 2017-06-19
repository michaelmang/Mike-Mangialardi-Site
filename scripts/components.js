/**
 * Register Vue Components
 */

Vue.component('top', {
  template: '#header'
})

Vue.component('about-me', {
  template: '#about-me'
})

Vue.component('animated-slides', {
  template: '#animated-slides',
  data: function() {
    return {
      info1: "SVG and pure CSS image design with animation",
      info2: "UI/UX design and development with React and Vue"
    }
  },
  methods: {
    setScroll: function () {
      var controller = new ScrollMagic.Controller();

      // build scene
      var scene = new ScrollMagic.Scene({triggerElement: ".animated-slides"})
            .addTo(controller)
            //.addIndicators() // add indicators (requires plugin)
            .on("start", function (e) {
              var vectorGraphics= new TimelineMax({repeat: -1, repeatDelay: 2});
      				vectorGraphics.fromTo("#Crosshair", 2, {x: 0, y: 0}, {x: 335, y: 220})
      				vectorGraphics.fromTo("#Mat", 2, {scale: 0, transformOrigin: "top left"}, {scale: 1},"-=2")
            });
    }
	},
  mounted: function () {
    this.setScroll();
  }
})

Vue.component('info-section', {
  template: '#info-section',
  props: ['heading']
})

Vue.component('my-code', {
  template: '#my-code'
})

Vue.component('svg-section', {
  template: '#svg-section',
  props: ['svg']
})

Vue.component('cta', {
  template: '#cta',
  props: ['heading', 'message', 'icon', 'link']
})

Vue.component('bottom', {
  template: '#footer'
})