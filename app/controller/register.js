module.exports = function (app) {
    var User = app.models.User;

// add user method ============================
    app.post('/api/User', function (req, res) {
        var user = new User({
            email: req.body.email,
            name: req.body.name,
            mobileNo: req.body.mobileNo,
            image: req.body.image,
            bibNo: req.body.bibNo

        });
        user.save(function (err, user) {
            if (err) {
                res.json(err);
            }
            res.json(user);
        });
    });

    app.get('/api/User/:bibNo', function(req, res) {


        User.findOne({bibNo:req.params.bibNo},function(err, profile) {

            if (err)
                res.send(err)

            res.json(profile);

        });
    });

    /**
     * Created by rahul on 21-06-2016.
     */
}