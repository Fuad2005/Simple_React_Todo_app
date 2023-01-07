from django. urls import path
from . import views

urlpatterns = [
    path('todo-list/', views.TodoListAV.as_view(), name='todo-list'),
    path('todo-list/<int:pk>/', views.TodoDetailAV.as_view(), name='todo-detail'),
    path('deadline-list/', views.DeadlineListAV.as_view(), name='deadline-list'),
    path('deadline-list/<int:pk>/', views.DeadlineDetailAV.as_view(), name='deadline-detail'),
]
