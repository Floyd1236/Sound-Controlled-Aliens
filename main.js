// * Function startClassification() * //
function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/zXSF4rZ59/model.json', modelReady);
}

// * Function modelReady()  * //
function modelReady()
{
    classifier.classify(gotResults);
}

// * Function gotResults(error, results) * //
function gotResults(error, results)
{
    if (error)
    {
        console.error(error)
    }

    else
    {
        console.log(results);
        random_color_r = Math.floor(Math.random * 255) + 1;
        random_color_b = Math.floor(Math.random * 255) + 1;
        random_color_g = Math.floor(Math.random * 255) + 1;

        document.getElementById("result_label").innerHTML = "I can hear - " + results[0].label;
        document.getElementById("result_confidence").innerHTML = "Accuracy - " + (results[0].confidence*100).toFixed(2) + " %";
        document.getElementById("result_label").style.color = "rgb("+random_color_r+", "+random_color_g+", "+random_color_b+")";
        document.getElementById("result_cofidence").style.color = "rgb("+random_color_r+", "+random_color_g+", "+random_color_b+")";

        img = document.getElementById("alien1");
        img1 = document.getElementById("alien2");
        img2 = document.getElementById("alien3");
        img3 = document.getElementById("alien4");

        if (result[0] == "Clap")
        {
            img.src = 'aliens-01.gif';
            img1.src = 'aliens-02.png';
            img2.src = 'aliens-03.png';
            img3.src = 'aliens-04.png';
        }

        else if (results[0] == "Bell")
        {
            img.src = 'aliens-01.png';
            img1.src = 'aliens-02.gif';
            img2.src = 'aliens-03.png';
            img3.src = 'aliens-04.png';
        }

        else if (results[0] == "Snapping")
        {
            img.src = 'aliens-01.png';
            img1.src = 'aliens-02.png';
            img2.src = 'aliens-03.gif';
            img3.src = 'aliens-04.png';
        }

        else 
        {
            img.src = 'aliens-01.png';
            img1.src = 'aliens-02.png';
            img2.src = 'aliens-03.png';
            img3.src = 'aliens-04.gif';
        }
    }
}