function joker() {
    // For Nationality

    var india = document.getElementById("india")
    var foregion = document.getElementById("foregion")


    // For age

    var _18_plus = document.getElementById("18_plus")
    var _5_18 = document.getElementById("5_18")
    var _0_5 = document.getElementById("0_5")

    // For work
    // check-boxs
    var bio = document.getElementById("bio")
    var name = document.getElementById("name")
    var dob = document.getElementById("dob")
    var adrs = document.getElementById("adrs")
    var co = document.getElementById("co")
    var mo_no = document.getElementById("mo-no")
    var gender = document.getElementById("gender")
    var mail = document.getElementById("mail")
    // tr
    // Bio
    var bio_18 = document.getElementById("bio_18")
    // Name
    var name_18 = document.getElementById("name_18")
    var name_5_18 = document.getElementById("name_5_18")
    // DOB
    var dob_18 = document.getElementById("dob_18")
    var dob_5_18 = document.getElementById("dob_5_18")
    var dob_0_5 = document.getElementById("dob_0_5")

    // Ards
    var adrs_18 = document.getElementById("adrs_18")
    var adrs_5_18 = document.getElementById("adrs_5_18")
    var adrs_0_5 = document.getElementById("adrs_0_5")


    // Co
    var co_18 = document.getElementById("co_18")
    var co_5_18 = document.getElementById("co_5_18")
    var co_0_5 = document.getElementById("co_0_5")

    // Mo.No
    var mo = document.getElementById("mo")

    // Gender
    var gen = document.getElementById("gen")

    // Mail
    var mail_18 = document.getElementById("mail_18")

    // ==========================================================

    if (india.checked && _18_plus.checked) {
        // which should be close
        name_5_18.style.display = "none"
        dob_5_18.style.display = "none"
        dob_0_5.style.display = "none"
        adrs_5_18.style.display = "none"
        adrs_0_5.style.display = "none"
        co_5_18.style.display = "none"
        co_0_5.style.display = "none"

        // INDIAN 18+ 

        if (india.checked && _18_plus.checked && bio.checked) {
            bio_18.style.display = ""
        }
        if (india.checked && _18_plus.checked && bio.checked == false) {
            bio_18.style.display = "none"
        }
        if (india.checked && _18_plus.checked && name.checked) {
            name_18.style.display = ""
        }
        if (india.checked && _18_plus.checked && name.checked == false) {
            name_18.style.display = "none"
        }
        if (india.checked && _18_plus.checked && dob.checked) {
            dob_18.style.display = ""
        }
        if (india.checked && _18_plus.checked && dob.checked == false) {
            dob_18.style.display = "none"
        }
        if (india.checked && _18_plus.checked && adrs.checked) {
            adrs_18.style.display = ""
        }
        if (india.checked && _18_plus.checked && adrs.checked == false) {
            adrs_18.style.display = "none"
        }
        if (india.checked && _18_plus.checked && co.checked) {
            co_18.style.display = ""
        }
        if (india.checked && _18_plus.checked && co.checked == false) {
            co_18.style.display = "none"
        }
        if (india.checked && _18_plus.checked && mo_no.checked) {
            mo.style.display = ""
        }
        if (india.checked && _18_plus.checked && mo_no.checked == false) {
            mo.style.display = "none"
        }
        if (india.checked && _18_plus.checked && gender.checked) {
            gen.style.display = ""
        }
        if (india.checked && _18_plus.checked && gender.checked == false) {
            gen.style.display = "none"
        }
        if (india.checked && _18_plus.checked && mail.checked) {
            mail_18.style.display = ""
        }
        if (india.checked && _18_plus.checked && mail.checked == false) {
            mail_18.style.display = "none"
        }
        else {
            console.log("Hii there")
        }

    }
    else if(foregion.checked && _18_plus.checked){
        bio_18.style.display = "none"
        name_18.style.display = "none"
        name_5_18.style.display = "none"
        dob_18.style.display = "none"
        dob_5_18.style.display = "none"
        dob_0_5.style.display = "none"
        adrs_18.style.display = "none"
        adrs_5_18.style.display = "none"
        adrs_0_5.style.display = "none"
        co_18.style.display = "none"
        co_5_18.style.display = "none"
        co_0_5.style.display = "none"
        mo.style.display = "none"
        gen.style.display = "none"
        mail_18.style.display = "none"
    }
    else if(foregion.checked && _5_18.checked){
        bio_18.style.display = "none"
        name_18.style.display = "none"
        name_5_18.style.display = "none"
        dob_18.style.display = "none"
        dob_5_18.style.display = "none"
        dob_0_5.style.display = "none"
        adrs_18.style.display = "none"
        adrs_5_18.style.display = "none"
        adrs_0_5.style.display = "none"
        co_18.style.display = "none"
        co_5_18.style.display = "none"
        co_0_5.style.display = "none"
        mo.style.display = "none"
        gen.style.display = "none"
        mail_18.style.display = "none"
    }
    else if(foregion.checked && _0_5.checked){
        bio_18.style.display = "none"
        name_18.style.display = "none"
        name_5_18.style.display = "none"
        dob_18.style.display = "none"
        dob_5_18.style.display = "none"
        dob_0_5.style.display = "none"
        adrs_18.style.display = "none"
        adrs_5_18.style.display = "none"
        adrs_0_5.style.display = "none"
        co_18.style.display = "none"
        co_5_18.style.display = "none"
        co_0_5.style.display = "none"
        mo.style.display = "none"
        gen.style.display = "none"
        mail_18.style.display = "none"
    }
    else if (india.checked && _5_18.checked) {
        // which should be close
        name_18.style.display = "none"
        dob_18.style.display = "none"
        dob_0_5.style.display = "none"
        adrs_18.style.display = "none"
        adrs_0_5.style.display = "none"
        co_18.style.display = "none"
        co_0_5.style.display = "none"

        // INDIAN 5-18

        if (india.checked && _5_18.checked && bio.checked) {
            bio_18.style.display = ""
        }
        if (india.checked && _5_18.checked && bio.checked == false) {
            bio_18.style.display = "none"
        }
        if (india.checked && _5_18.checked && name.checked) {
            name_5_18.style.display = ""
        }
        if (india.checked && _5_18.checked && name.checked == false) {
            name_5_18.style.display = "none"
        }
        if (india.checked && _5_18.checked && dob.checked) {
            dob_5_18.style.display = ""
        }
        if (india.checked && _5_18.checked && dob.checked == false) {
            dob_5_18.style.display = "none"
        }
        if (india.checked && _5_18.checked && adrs.checked) {
            adrs_5_18.style.display = ""
        }
        if (india.checked && _5_18.checked && adrs.checked == false) {
            adrs_5_18.style.display = "none"
        }
        if (india.checked && _5_18.checked && co.checked) {
            co_5_18.style.display = ""
        }
        if (india.checked && _5_18.checked && co.checked == false) {
            co_5_18.style.display = "none"
        }
        if (india.checked && _5_18.checked && mo_no.checked) {
            mo.style.display = ""
        }
        if (india.checked && _5_18.checked && mo_no.checked == false) {
            mo.style.display = "none"
        }
        if (india.checked && _5_18.checked && gender.checked) {
            gen.style.display = ""
        }
        if (india.checked && _5_18.checked && gender.checked == false) {
            gen.style.display = "none"
        }
        if (india.checked && _5_18.checked && mail.checked) {
            mail_18.style.display = ""
        }
        if (india.checked && _5_18.checked && mail.checked == false) {
            mail_18.style.display = "none"
        }
        else {
            alert("Hii there")
        }
    }
    else if (india.checked && _0_5.checked) {
        // which should be close

        name_18.style.display = "none"
        dob_18.style.display = "none"
        dob_5_18.style.display = "none"
        adrs_18.style.display = "none"
        adrs_5_18.style.display = "none"
        co_18.style.display = "none"
        co_5_18.style.display = "none"

        // INDIAN 0-5

        if (india.checked && _0_5.checked && bio.checked) {
            bio_18.style.display = ""
        }
        if (india.checked && _0_5.checked && bio.checked == false) {
            bio_18.style.display = "none"
        }
        if (india.checked && _0_5.checked && name.checked) {
            name_5_18.style.display = ""
        }
        if (india.checked && _0_5.checked && name.checked == false) {
            name_5_18.style.display = "none"
        }
        if (india.checked && _0_5.checked && dob.checked) {
            dob_0_5.style.display = ""
        }
        if (india.checked && _0_5.checked && dob.checked == false) {
            dob_0_5.style.display = "none"
        }
        if (india.checked && _0_5.checked && adrs.checked) {
            adrs_0_5.style.display = ""
        }
        if (india.checked && _0_5.checked && adrs.checked == false) {
            adrs_0_5.style.display = "none"
        }
        if (india.checked && _0_5.checked && co.checked) {
            co_0_5.style.display = ""
        }
        if (india.checked && _0_5.checked && co.checked == false) {
            co_0_5.style.display = "none"
        }
        if (india.checked && _0_5.checked && mo_no.checked) {
            mo.style.display = ""
        }
        if (india.checked && _0_5.checked && mo_no.checked == false) {
            mo.style.display = "none"
        }
        if (india.checked && _0_5.checked && gender.checked) {
            gen.style.display = ""
        }
        if (india.checked && _0_5.checked && gender.checked == false) {
            gen.style.display = "none"
        }
        if (india.checked && _0_5.checked && mail.checked) {
            mail_18.style.display = ""
        }
        if (india.checked && _0_5.checked && mail.checked == false) {
            mail_18.style.display = "none"
        }
        else {
            alert("done")
        }
    }
    else {
        alert("Pleases first select the required filed ")
    }

}



