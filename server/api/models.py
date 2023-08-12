from django.db import models

class AbcSelectionRoute(models.Model):
    source=models.CharField(max_length=100)
    destination=models.CharField(max_length=100)
    date=models.DateField(auto_now=False, auto_now_add=False)

    def __str__(self):
        return self.source + " " + self.destination
    
class AbcDetailRoute(models.Model):
    busType=models.CharField(max_length=100)
    busClass=models.CharField(max_length=100)
    arrival=models.CharField(max_length=100)
    departure=models.CharField(max_length=100)
    price=models.IntegerField()

    def __str__(self):
        return self.busType + "   " + self.busClass

class AbcPersonDetail(models.Model):
      firstname=models.CharField(max_length=100)
      lastname=models.CharField(max_length=100)
      phone=models.IntegerField()
      email=models.EmailField()
      gender=models.CharField(max_length=100)

      def __str__(self):
          return self.firstname + " " + self.lastname
      
    
    