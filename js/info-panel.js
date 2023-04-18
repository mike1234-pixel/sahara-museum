AFRAME.registerComponent("info-panel", {
  init: function () {
    var buttonEls = document.querySelectorAll(".menu-button")
    var fadeBackgroundEl = (this.fadeBackgroundEl =
      document.querySelector("#fadeBackground"))
    this.movieImageEl
    this.infoTitleEl = document.querySelector("#infoTitle")
    this.infoDescriptionEl = document.querySelector("#infoDescription")
    this.movieInfo = {
      karigurashiButton: {
        title: "Frontend Developer\nPrototype Creative\n",
        //imgEl: document.querySelector("#karigurashiMovieImage"), // thumbnail
        description:
          "Overview:\nWorking on various projects for a web agency; a mix of corporate websites, online stores, and web applications.\n\nTechnologies and methodologies:\nHTML, CSS, Sass, BEM, JavaScript, React, Vue, jQuery, Bootstrap, Tailwind.\n\nResponsibilities:\nBuilding projects from designs, estimating tasks, writing stories, communication with project management team. Building new features and fixing bugs.\n\nAchievements:\nDeveloped and launched projects on time and within budget. Maintained consistent design patterns and code standards across all projects.",
      },
      kazetachinuButton: {
        title: "Software Engineer - React\nOri",
        //imgEl: document.querySelector("#kazetachinuMovieImage"),
        description:
          "Overview:\nDeveloping the frontend for Ori Global Cloud.\n\nTechnologies and methodologies:\nReact, TypeScript, CSS modules, Formik, React Query, React Table, Jest, Testing Library, Cypress, Storybook, Figma, Git / Version Control, CI / CD, Scrum, Jira.\n\nResponsibilities:\nAgile ceremonies, reviewing PRs, presentation / demo of new FE features to engineering team at the end of sprint. \n\nAchievements:\nProduction of robust, clean, peer reviewed code covered by automated tests. Timely delivery and presentation of features.",
      },
      ponyoButton: {
        title: "Software Engineer - React\nAvayler / Halfords",
        //imgEl: document.querySelector("#ponyoMovieImage"),
        description:
          "Overview:\nDeveloping the scheduling module for the Avayler platform.\n\nTechnologies and methodologies:\nReact, TypeScript, Styled Components, React Query, Material UI, Jest, Testing Library, Azure Devops, Scrumban. \n\nResponsibilities:\nAgile ceremonies, peer reviews, estimates, delivering robust features and fixing bugs.",
      },
    }
    this.onMenuButtonClick = this.onMenuButtonClick.bind(this)
    this.onBackgroundClick = this.onBackgroundClick.bind(this)
    this.backgroundEl = document.querySelector("#background")
    for (var i = 0; i < buttonEls.length; ++i) {
      buttonEls[i].addEventListener("click", this.onMenuButtonClick)
    }
    this.backgroundEl.addEventListener("click", this.onBackgroundClick)
    this.el.object3D.renderOrder = 9999999
    this.el.object3D.depthTest = false
    fadeBackgroundEl.object3D.renderOrder = 9
    fadeBackgroundEl.getObject3D("mesh").material.depthTest = false
  },
  onMenuButtonClick: function (evt) {
    var movieInfo = this.movieInfo[evt.currentTarget.id]
    this.backgroundEl.object3D.scale.set(1, 1, 1)
    this.el.object3D.scale.set(1, 1, 1)
    if (AFRAME.utils.device.isMobile()) {
      this.el.object3D.scale.set(1.4, 1.4, 1.4)
    }
    this.el.object3D.visible = true
    this.fadeBackgroundEl.object3D.visible = true
    // if (this.movieImageEl) {
    //   this.movieImageEl.object3D.visible = false
    // }
    // this.movieImageEl = movieInfo.imgEl
    // this.movieImageEl.object3D.visible = true
    this.infoTitleEl.setAttribute("text", "value", movieInfo.title)
    this.infoDescriptionEl.setAttribute("text", "value", movieInfo.description)
  },
  onBackgroundClick: function (evt) {
    this.backgroundEl.object3D.scale.set(0.001, 0.001, 0.001)
    this.el.object3D.scale.set(0.001, 0.001, 0.001)
    this.el.object3D.visible = false
    this.fadeBackgroundEl.object3D.visible = false
  },
})
