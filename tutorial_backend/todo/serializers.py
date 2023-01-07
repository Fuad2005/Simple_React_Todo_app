from rest_framework import serializers
from .models import Deadline, Todo

class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = '__all__'
        read_only_fields = ['created']

class DeadlineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Deadline
        fields = '__all__'
