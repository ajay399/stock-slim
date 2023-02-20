$(document).ready(function () {

    const log = (vbl) => console.log(vbl);



    $(document).on("click", ".submitSettings", function () {
        $(".setting_btn_spin").show();
        $('.setting_btn_text').css('visibility', 'hidden');


        var settingForm = $('#settingForm')[0];
        var settingForm_data = new FormData(settingForm);
        settingForm_data.append('id', storeId);
        settingForm_data.append('is_enabled', $(this).attr("data-enable"));
        $.ajax({
            url: "../src/public/updateSettings",
            type: "POST",
            data: settingForm_data,
            contentType: false,
            cache: false,
            processData: false,
            success: function (response) {

                $(".setting_btn_spin").hide();
                $('.setting_btn_text').css('visibility', 'unset');


                $('.success-msgs').fadeIn(200);
                $(".success-msgs").html("<div class='alert alert-success Polaris-Frame-Toast'> App Settings has been updated!!</div>");
                setTimeout(function () {
                    $('.success-msgs').fadeOut(500);
                }, 4000);
            }
        });
    });

    $(document).on("click", ".install_btn", function () {
        $(".install_btn_spin").show();
        $('.install_btn_text').css('visibility', 'hidden');
        $.ajax({
            url: "../src/public/installCode",
            type: "POST",
            data: { id: storeId },
            success: function (response) {
                $(".install_btn_spin").hide();
                $('.install_btn_text').css('visibility', 'unset');


                $('.install_mgmt_success_msgs').fadeIn(200);
                $(".install_mgmt_success_msgs").html("<div class='alert alert-success Polaris-Frame-Toast'> App Is Installed!</div>");
                setTimeout(function () {
                    $('.install_mgmt_success_msgs').fadeOut(500);
                }, 4000);
            }
        });
    });

    $(document).on("click", ".uninstall_btn", function () {
        $(".uninstall_btn_spin").show();
        $('.uninstall_btn_text').css('visibility', 'hidden');
        $.ajax({
            url: "../src/public/uninstallCode",
            type: "POST",
            data: { id: storeId },
            success: function (response) {
                $(".uninstall_btn_spin").hide();
                $('.uninstall_btn_text').css('visibility', 'unset');

                $('.install_mgmt_success_msgs').fadeIn(200);
                $(".install_mgmt_success_msgs").html("<div class='alert alert-success Polaris-Frame-Toast'> App Is Uninstalled!</div>");
                setTimeout(function () {
                    $('.install_mgmt_success_msgs').fadeOut(500);
                }, 4000);
            }
        });
    });

    $(document).on("click", ".disable_setting", function () {
        $('.enabled-disabled .Polaris-TextStyle--variationStrong').html('Disabled');
        $('.enabled-disabled .Polaris-SettingAction__Action ').html('<button value="0" type="button" class="enable_setting Polaris-Button Polaris-Button--primary">Enable Icon</button>');
        $(".submitSettings").attr("data-enable", "0");
    });

    $(document).on("click", ".enable_setting", function () {
        $('.enabled-disabled .Polaris-TextStyle--variationStrong').html('Enabled');
        $('.enabled-disabled .Polaris-SettingAction__Action ').html('<button value="1" type="button" class="disable_setting Polaris-Button ">Disable Icon</button>');
        $(".submitSettings").attr("data-enable", "1");
    });





    var AppBridge = window['app-bridge'];
    var AppBridgeUtil = window['app-bridge-utils'];
    var actions = window['app-bridge'].actions;
    var createApp = AppBridge.default;
});
