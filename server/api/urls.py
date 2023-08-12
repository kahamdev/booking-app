from rest_framework.routers import DefaultRouter
from .views import AbcRouteSelectionViewSet,AbcRouteDetailViewSet,AbcPersonDetailViewSet
from django.urls import path,include


router=DefaultRouter()
router.register('abc-route-selection',AbcRouteSelectionViewSet,basename='abc-route-selection')
router.register('abc-route-detail',AbcRouteDetailViewSet,basename='abc-route-detail')
router.register('abc-person-detail',AbcPersonDetailViewSet,basename='abc-person-detail')
urlpatterns = [
    path('my-api/', include(router.urls))
]
