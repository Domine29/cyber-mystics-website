# import os.path
# import os
# import json

# dir_path = os.path.dirname(os.path.abspath(__file__))

# @api_view(["GET", "POST"]) This is to import all cards from the JSON included in fixtures
# def load_cards(request):
#     if request.method == 'GET':
#         with open(os.path.join(dir_path, 'fixtures/tarot-images.json')) as json_file:
#             json_data = json.load(json_file)
          
#         for card_data in json_data:
#             TarotCard.objects.create(
#                 name = card_data['name'],
#                 number = card_data['number'],
#                 arcana = card_data['arcana'],
#                 suit = card_data['suit'],
#                 img = card_data['img'],
#                 keywords = card_data['keywords'],
#                 meanings = card_data['meanings'],
#                 questions_to_ask = card_data['Questions to Ask'],
#             )
#     return JsonResponse({'success': 'True'})