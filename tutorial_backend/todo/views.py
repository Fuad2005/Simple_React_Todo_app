from django.shortcuts import render
from .serializers import TodoSerializer, DeadlineSerializer
from .models import Todo, Deadline
from rest_framework import generics
# Create your views here.

class TodoListAV(generics.ListCreateAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

class TodoDetailAV(generics.RetrieveUpdateDestroyAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer



class DeadlineListAV(generics.ListCreateAPIView):
    queryset = Deadline.objects.all()
    serializer_class = DeadlineSerializer

class DeadlineDetailAV(generics.RetrieveUpdateDestroyAPIView):
    queryset = Deadline.objects.all()
    serializer_class = DeadlineSerializer
