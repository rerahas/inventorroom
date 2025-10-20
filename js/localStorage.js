$(document).ready(function() {
    // --- 1. ページ読み込み時に、保存された値があれば復元する ---
    var savedMaterialType = localStorage.getItem('selectedMaterialType');
    var savedMaterialValue = localStorage.getItem('selectedMaterialValue');

    if (savedMaterialType && savedMaterialValue) {
        if (savedMaterialType === 'radio') {
            var $radio = $('input[name="ch1"][value="' + savedMaterialValue + '"]');
            if ($radio.length) {
                $radio.prop('checked', true);
                if (typeof set_value === 'function') {
                    set_value($radio.get(0));
                }
                $('select#other_material_select').val('');
            }
        } else if (savedMaterialType === 'select') {
            var $select = $('select#other_material_select');
            $select.val(savedMaterialValue);
            if ($select.val() === savedMaterialValue) {
                $('input[name="ch1"]').prop('checked', false);
                if (typeof set_value === 'function') {
                    set_value($select.get(0));
                }
            }
        }
    } else {
        // ★改善点：localStorageに何も保存されていない場合、デフォルトの選択を保存する
        var $defaultRadio = $('input[name="ch1"]:checked');
        if ($defaultRadio.length) {
            localStorage.setItem('selectedMaterialType', 'radio');
            localStorage.setItem('selectedMaterialValue', $defaultRadio.val());
        }
    }

    // --- 2. ユーザーがラジオボタンの選択を変更したときに、その値を保存する ---
    $('input[name="ch1"]').on('change', function() {
        if ($(this).is(':checked')) {
            localStorage.setItem('selectedMaterialType', 'radio');
            localStorage.setItem('selectedMaterialValue', $(this).val());
            $('select#other_material_select').val('');
        }
    });

    // --- 3. ユーザーがドロップダウンの選択を変更したときに、その値を保存する ---
    $('select#other_material_select').on('change', function() {
        var selectedValue = $(this).val();
        if (selectedValue) {
            localStorage.setItem('selectedMaterialType', 'select');
            localStorage.setItem('selectedMaterialValue', selectedValue);
            $('input[name="ch1"]').prop('checked', false);
        } else {
            localStorage.removeItem('selectedMaterialType');
            localStorage.removeItem('selectedMaterialValue');
        }
    });
});