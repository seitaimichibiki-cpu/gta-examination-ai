// Data Schema for Examination form
const schema = {
    primary: [
        {
            id: 'zenkutsu_r',
            title: '前屈テスト (右)',
            type: 'checkbox',
            options: [
                { id: 'zen_momo_r', label: '右のもも裏がまだ伸びる（レバーアーム右）' },
                { id: 'zen_katai_r', label: '右の下腿がまだ伸びる（レバーアーム右）' },
                { id: 'zen_pi_t_r', label: '右の膝窩が突っ張る（反張膝）' },
                { id: 'zen_unknown_r', label: '不明・異常なし' }
            ]
        },
        {
            id: 'zenkutsu_l',
            title: '前屈テスト (左)',
            type: 'checkbox',
            options: [
                { id: 'zen_momo_l', label: '左のもも裏がまだ伸びる（レバーアーム左）' },
                { id: 'zen_katai_l', label: '左の下腿がまだ伸びる（レバーアーム左）' },
                { id: 'zen_pi_t_l', label: '左の膝窩が突っ張る（反張膝）' },
                { id: 'zen_unknown_l', label: '不明・異常なし' }
            ]
        },
        {
            id: 'koukutsu',
            title: '後屈(CP)テスト',
            type: 'radio',
            options: [
                { id: 'kou_dot_r', label: '右側が動かない' },
                { id: 'kou_dot_l', label: '左側が動かない' },
                { id: 'kou_unknown', label: '不明・異常なし' }
            ]
        },
        {
            id: 'b1_sokkutu',
            title: 'B1側屈軸圧テスト',
            type: 'radio',
            options: [
                { id: 'b1_r', label: '左倒しで右腰に伸び感（右レバー R-Be）' },
                { id: 'b1_l', label: '右倒しで左腰に伸び感（左レバー L-Be）' },
                { id: 'b1_unknown', label: '不明・異常なし' }
            ]
        },
        {
            id: 'hip_test',
            title: 'HIPテスト(股関節軸圧)',
            type: 'radio',
            options: [
                { id: 'hip_r_high', label: '右抵抗あり右膝頭が高い（右HIP Aの判定）' },
                { id: 'hip_r_low', label: '右抵抗あり右膝頭が低い（右HIP Pの判定）' },
                { id: 'hip_l_high', label: '左抵抗あり左膝頭が高い（左HIP Aの判定）' },
                { id: 'hip_l_low', label: '左抵抗あり左膝頭が低い（左HIP Pの判定）' },
                { id: 'hip_unknown', label: '不明・異常なし' }
            ]
        },
        {
            id: 'b2_sokkutu',
            title: 'B2側屈軸圧テスト',
            type: 'radio',
            options: [
                { id: 'b2_r', label: '左に倒した時に右に伸び感がある（右レバー）' },
                { id: 'b2_l', label: '右に倒した時左に伸び感がある（左レバー）' },
                { id: 'b2_unknown', label: '不明・異常なし' }
            ]
        }
    ],
    auxiliary: [
        {
            id: 'choubo_r',
            title: '長母趾伸筋筋力抵抗テスト (右)',
            type: 'checkbox',
            options: [
                { id: 'ch_slow_r', label: '右が遅い・上がらない' },
                { id: 'ch_cgw_r', label: '右がカクカク上がる（CGW）' },
                { id: 'ch_unknown_r', label: '不明・異常なし' }
            ]
        },
        {
            id: 'choubo_l',
            title: '長母趾伸筋筋力抵抗テスト (左)',
            type: 'checkbox',
            options: [
                { id: 'ch_slow_l', label: '左が遅い・上がらない' },
                { id: 'ch_cgw_l', label: '左がカクカク上がる（CGW）' },
                { id: 'ch_unknown_l', label: '不明・異常なし' }
            ]
        },
        {
            id: 'pelvis_sct',
            title: '骨盤テスト (SCT)',
            type: 'radio',
            options: [
                { id: 'pel_sct_r', label: '右 耳状面離解フワッと感（陽性）' },
                { id: 'pel_sct_l', label: '左 耳状面離解フワッと感（陽性）' },
                { id: 'pel_sct_unknown', label: '不明・異常なし' }
            ]
        },
        {
            id: 'pelvis_pct_r',
            title: '骨盤テスト PCT (右)',
            type: 'radio',
            options: [
                { id: 'pel_pct_pain_r', label: '右PSIS付近に痛み' },
                { id: 'pel_pct_tear_r', label: '右 PSIS押圧後、10秒後に臀部・もも裏に放散痛 (ティアドロップサイン：PIt確定)' },
                { id: 'pel_pct_unknown_r', label: '不明・異常なし' }
            ]
        },
        {
            id: 'pelvis_pct_l',
            title: '骨盤テスト PCT (左)',
            type: 'radio',
            options: [
                { id: 'pel_pct_pain_l', label: '左PSIS付近に痛み' },
                { id: 'pel_pct_tear_l', label: '左 PSIS押圧後、10秒後に臀部・もも裏に放散痛 (ティアドロップサイン：PIt確定)' },
                { id: 'pel_pct_unknown_l', label: '不明・異常なし' }
            ]
        }
    ]
};

// System Prompt Template
const SYSTEM_PROMPT = `
あなたはプロの整体師（GTA: 重力絶対診断の手法を用いるスペシャリスト）を支援するAIアシスタントです。
以下の「GTAにおける骨盤（AS/PI-t）の加点システム」に厳密に基づいて、入力された患者の検査結果から【右AS / 左AS / 右PI-t / 左PI-t】の加点計算を行い、最も点数の高いものを主要なアライメント異常として判定してください。

■ 骨盤の加点判定アルゴリズム
1. 前屈テスト
   - もも裏や下腿に伸び感がある → 伸び感がある側の骨盤に【AS 1点】（※もも裏と下腿両方にチェックがあっても最大1点）
   - 膝裏の突っ張り感（反張膝）がある → 同側の骨盤に【PI-t 1点】
2. 後屈テスト
   - 動かない側と同側の骨盤に【AS 1点】
3. B1 ＋ B2 テストの複合判定（必ずセットで判定する点に注意）
   - B1とB2のレバーが【同側】に出ている場合（例：B1右、B2右） → その同じ側の骨盤に【PI-t 1点】
   - B1とB2のレバーが【反対側】に出ている場合（例：B1右、B2左） → B1と反対側（＝B2の側）の骨盤に【AS 1点】
4. HIPテスト
   - Aの判定 → 判定の出た同側の骨盤に【AS 1点】
   - Pの判定 → 判定の出た同側の骨盤に【PI-t 1点】
5. 長母趾伸筋テスト
   - 遅い・上がらない → 同側の骨盤に【AS 1点】
   - CGW（カクカク上がる） → 同側の骨盤に【PI-t 1点】
6. 骨盤テスト (SCT)
   - 陽性（フワッと感）側 → 同側の骨盤に【AS 1点】
7. 骨盤テスト (PCT)
   - 痛みがある側 → 同側の骨盤に【PI-t 1点】
   - 放散痛（ティアドロップサイン）がある側 → 点数にかかわらずその側の【PI-t 確定】

■ AIへの指示（出力フォーマット）
1. 【加点計算結果】：右/左のAS、右/左のPI-tのそれぞれの合計点数を明記し、加点された理由（根拠となった検査項目）を箇条書きで分かりやすく示してください。
2. 【右の最終診断と推奨手技】：右側のASとPI-tの点数を比較し、総合的に右がどちらの傾向か診断します。ただし、【超重要：右のティアドロップサイン（放散痛）があれば得点に関わらず右PI-t確定】とします。
   診断確定後、以下の推奨手技のいずれかを選択して表示してください。
   ・右ASの場合： 面圧 もしくは AS整復
   ・右PI-tの場合： 面圧 もしくは AKA
   ・右が同点の場合： 面圧 もしくは AKA
3. 【左の最終診断と推奨手技】：左側のASとPI-tの点数を比較し、総合的に左がどちらの傾向か診断します。ただし、【超重要：左のティアドロップサイン（放散痛）があれば得点に関わらず左PI-t確定】とします。
   診断確定後、以下の推奨手技のいずれかを選択して表示してください。
   ・左ASの場合： 面圧 もしくは AS整復
   ・左PI-tの場合： 面圧 もしくは PI-t整復
   ・左が同点の場合： 面圧 もしくは AKA
4. Markdown形式で見やすく出力してください。全体の「主要な骨盤」だけをまとめるのではなく、上記に従い【右】と【左】でそれぞれ明確に推奨手技を提示してください。
`;

// App Logic
document.addEventListener('DOMContentLoaded', () => {
    initUI();
    bindEvents();
    loadApiKey();
});

function initUI() {
    const container = document.getElementById('form-container');
    container.innerHTML = '';
    
    // 全ての検査項目を1つの配列に結合（主要・補助の垣根をなくす）
    let allTests = [...schema.primary, ...schema.auxiliary];
    
    // 保存された並び順があれば復元
    const savedOrder = JSON.parse(localStorage.getItem('gta_item_order'));
    if (savedOrder && Array.isArray(savedOrder)) {
        allTests.sort((a, b) => {
            const indexA = savedOrder.indexOf(a.id);
            const indexB = savedOrder.indexOf(b.id);
            if (indexA === -1 && indexB === -1) return 0;
            if (indexA === -1) return 1;
            if (indexB === -1) return -1;
            return indexA - indexB;
        });
    }

    renderFormElements(allTests, container);
}

function saveOrder(container) {
    const newOrder = Array.from(container.children).map(el => el.dataset.id);
    localStorage.setItem('gta_item_order', JSON.stringify(newOrder));
}

function renderFormElements(tests, container) {
    tests.forEach(group => {
        const groupDiv = document.createElement('div');
        groupDiv.className = 'category-group';
        groupDiv.dataset.id = group.id; // 並び順保存用
        
        const title = document.createElement('div');
        title.className = 'category-title';
        title.style.display = 'flex';
        title.style.justifyContent = 'space-between';
        
        const titleText = document.createElement('span');
        titleText.textContent = group.title;
        title.appendChild(titleText);
        
        const actionsDiv = document.createElement('div');
        actionsDiv.style.display = 'flex';
        actionsDiv.style.gap = '0.5rem';
        
        const upBtn = document.createElement('button');
        upBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
        upBtn.className = 'icon-btn';
        upBtn.style.padding = '0.3rem 0.6rem';
        upBtn.style.background = '#F3F4F6';
        upBtn.style.border = '1px solid #E5E7EB';
        upBtn.type = 'button';
        upBtn.title = '上に移動';
        upBtn.onclick = (e) => {
            e.preventDefault();
            if (groupDiv.previousElementSibling) {
                container.insertBefore(groupDiv, groupDiv.previousElementSibling);
                saveOrder(container);
            }
        };
        
        const downBtn = document.createElement('button');
        downBtn.innerHTML = '<i class="fa-solid fa-arrow-down"></i>';
        downBtn.className = 'icon-btn';
        downBtn.style.padding = '0.3rem 0.6rem';
        downBtn.style.background = '#F3F4F6';
        downBtn.style.border = '1px solid #E5E7EB';
        downBtn.type = 'button';
        downBtn.title = '下に移動';
        downBtn.onclick = (e) => {
            e.preventDefault();
            if (groupDiv.nextElementSibling) {
                container.insertBefore(groupDiv.nextElementSibling, groupDiv);
                saveOrder(container);
            }
        };
        
        actionsDiv.appendChild(upBtn);
        actionsDiv.appendChild(downBtn);
        title.appendChild(actionsDiv);
        
        groupDiv.appendChild(title);
        
        const optsContainer = document.createElement('div');
        optsContainer.className = group.type === 'radio' ? 'radio-group-container' : 'checkbox-group-container';
        
        group.options.forEach(opt => {
            const label = document.createElement('label');
            label.className = 'item-label';
            
            const input = document.createElement('input');
            input.type = group.type;
            input.name = group.id; // ラジオグループの同期用
            input.value = opt.label;
            
            const checkmark = document.createElement('span');
            checkmark.className = 'checkmark';
            
            const textNode = document.createTextNode(opt.label);
            
            label.appendChild(input);
            label.appendChild(checkmark);
            label.appendChild(textNode);
            
            // トグルクラスの付与等
            input.addEventListener('change', () => {
                if(group.type === 'radio') {
                    const siblings = groupDiv.querySelectorAll('.item-label');
                    siblings.forEach(s => s.classList.remove('selected'));
                }
                
                if (input.checked) {
                    label.classList.add('selected');
                } else {
                    label.classList.remove('selected');
                }
            });
            
            optsContainer.appendChild(label);
        });
        
        groupDiv.appendChild(optsContainer);
        container.appendChild(groupDiv);
    });
}

function bindEvents() {
    // Settings Modal
    document.getElementById('settings-btn').addEventListener('click', () => {
        document.getElementById('settings-modal').classList.remove('hidden');
    });
    document.querySelector('.close-modal-btn').addEventListener('click', () => {
        document.getElementById('settings-modal').classList.add('hidden');
    });
    document.getElementById('save-settings-btn').addEventListener('click', () => {
        const key = document.getElementById('api-key-input').value;
        if (!key) {
            alert("APIキーを入力してください。");
            return;
        }
        localStorage.setItem('gemini_api_key', key);
        document.getElementById('settings-modal').classList.add('hidden');
        alert("APIキーを保存しました。");
        
        //Restore empty state if it was showing the API warning
        const outputDiv = document.getElementById('ai-output');
        if (outputDiv && outputDiv.querySelector('.api-warning')) {
            outputDiv.innerHTML = `
                <div class="empty-state">
                    <div class="empty-icon">
                        <i class="fa-solid fa-robot"></i>
                    </div>
                    <p>左の検査項目にチェックを入れ、<br>「判定を実行」をクリックしてください。</p>
                </div>
            `;
        }
    });
    
    // Run AI
    document.getElementById('run-ai-btn').addEventListener('click', runAiDiagnosis);
}

function loadApiKey() {
    const key = localStorage.getItem('gemini_api_key');
    if(key) {
        document.getElementById('api-key-input').value = key;
    } else {
        const outputDiv = document.getElementById('ai-output');
        if (outputDiv) {
            outputDiv.innerHTML = `
                <div class="empty-state api-warning" style="border: 2px dashed #EF4444; background: #FEF2F2;">
                    <div class="empty-icon" style="color: #EF4444;">
                        <i class="fa-solid fa-key"></i>
                    </div>
                    <p style="color: #B91C1C; font-weight: bold; margin-bottom: 0.5rem;">初期設定が必要です</p>
                    <p style="color: #7F1D1D; font-size: 0.9rem; margin-bottom: 1rem;">AI判定を利用するには、まず設定から<br>Google Gemini APIキーを設定してください。</p>
                    <button onclick="document.getElementById('settings-modal').classList.remove('hidden')" class="primary-btn" style="background: #EF4444;">API設定を開く</button>
                </div>
            `;
        }
    }
}

async function runAiDiagnosis() {
    const apiKey = localStorage.getItem('gemini_api_key');
    if(!apiKey) {
        alert('右上の設定アイコンから Gemini API Key を設定してください。');
        document.getElementById('settings-modal').classList.remove('hidden');
        return;
    }
    
    // Gather checked data
    const checkedItems = [];
    document.querySelectorAll('input:checked').forEach(el => {
        // Find group title
        const groupTitle = el.closest('.category-group').querySelector('.category-title').textContent;
        // Ignore if entirely normal/unknown to spare AI context, or include it so AI knows it was tested.
        checkedItems.push(`[${groupTitle}] ${el.value}`);
    });
    
    if(checkedItems.length === 0) {
        alert('検査項目が1つもチェックされていません。「不明・異常なし」も含めてご確認ください。');
        return;
    }
    
    const outputDiv = document.getElementById('ai-output');
    
    // Show spinner
    const btn = document.getElementById('run-ai-btn');
    const originalBtnHTML = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = `<i class="fa-solid fa-circle-notch spinner"></i> 判定中...`;
    
    outputDiv.innerHTML = `<div class="empty-state">
        <i class="fa-solid fa-circle-notch spinner" style="font-size: 2rem; color: var(--primary);"></i>
        <p style="margin-top: 1rem;">AIが検査結果を分析し、<br>状態と推奨手順を構築しています...</p>
    </div>`;

    const userPrompt = `以下の検査結果が得られました。\n\n${checkedItems.map(i => '- ' + i).join('\n')}\n\nこの所見から考えられる状態（アライメント異常、非荷重/外傷の鑑別など）と処置方針を立案してください。`;

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                system_instruction: {
                  parts: [{ text: SYSTEM_PROMPT }]
                },
                contents: [
                    {
                        parts: [{ text: userPrompt }]
                    }
                ],
                generationConfig: {
                    temperature: 0.2
                }
            })
        });

        const data = await response.json();
        
        if (data.error) {
            throw new Error(data.error.message);
        }

        const text = data.candidates[0].content.parts[0].text;
        
        // Use marked.js if available
        if (typeof marked !== 'undefined') {
            outputDiv.innerHTML = marked.parse(text);
        } else {
            outputDiv.innerHTML = `<pre style="white-space: pre-wrap; font-family: inherit;">${text}</pre>`;
        }
        
    } catch (e) {
        console.error(e);
        outputDiv.innerHTML = `<div style="color: #EF4444; padding: 1rem; border: 1px solid #FCA5A5; background: #FEF2F2; border-radius: 8px;">
            <p><strong>エラーが発生しました:</strong></p>
            <p>${e.message}</p>
        </div>`;
    } finally {
        btn.disabled = false;
        btn.innerHTML = originalBtnHTML;
    }
}
