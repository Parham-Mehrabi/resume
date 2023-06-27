from django.views.generic import TemplateView


class Index(TemplateView):
    """
        a simple view to render our SPA
    """
    template_name = 'index.html'

def index(req):
    from django.shortcuts import render

    return render(req, 'index.html')
