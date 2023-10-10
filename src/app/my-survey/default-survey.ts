export const json = {
    "elements": [
        {
            "type": "radiogroup",
            "name": "age18",
            "title": "Are you 18 years old or older?",
            "isRequired": true,
            "choices": ["Yes", "No"],
            "colCount": 0
        },
        {
            "type": "panel",
            "name": "bigPanel",
            "elements": [
                {
                    "type": "expression",
                    "name": "price_n",
                    "minWidth": "220px",
                    "title": "Pizza Neapolitan",
                    "description": "tomato sauce, mozzarella, anchovies, bazil",
                    "descriptionLocation": "underTitle",
                    "expression": "5 + {size_n}",
                    "displayStyle": "currency"
                },
                {
                    "type": "image",
                    "name": "pic_n",
                    "width": "180px",
                    "minWidth": "180px",
                    "maxWidth": "180px",
                    "startWithNewLine": false,
                    "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=c5b0302a-d6c8-46b4-ac57-7d519d0df0d1",
                    "contentMode": "image",
                    "imageFit": "cover",
                    "imageHeight": 80,
                    "imageWidth": 180
                },
                {
                    "type": "dropdown",
                    "name": "size_n",
                    "minWidth": "220px",
                    "title": "Size",
                    "titleLocation": "left",
                    "defaultValue": 1,
                    "choices": [
                        {
                            "value": 0,
                            "text": "Small"
                        },
                        {
                            "value": 1,
                            "text": "Medium"
                        },
                        {
                            "value": 2,
                            "text": "Large"
                        }
                    ]
                }]
        }]
};
