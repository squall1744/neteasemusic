{
  let view = {
    el: '#newSong',
    template: `新建歌曲`,
    addActive() {
      $(this.el).addClass('active')
    },
    render(data) {
      $(this.el).html(this.template)
    }
  }

  let model = {
    data: {}
  }

  let controller = {
    init(view, model) {
      this.view = view
      this.model = model
      this.view.render(this.model.data)
      this.bindEvent()
    },
    bindEvent() {
      window.eventHub.on('new', () => {
        this.view.addActive()
      })
      $(this.view.el).on('click', e => {
        window.eventHub.trigger('new', this.model.data)

      })
    }
  }
  controller.init(view, model)
}