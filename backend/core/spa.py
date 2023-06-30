from django.views.generic import TemplateView


class Index(TemplateView):
    """
        a simple view to render our SPA
    """
    template_name = 'index.html'