import React, { useState } from 'react';
import Modal from '../common/modal';

import SelectStyle from './select-style';
import PasteSampleText from './paste-sample-text';
import AnalyzeSampleTexts from './analyze-sample-texts';
import AnalyzeResult from './analyze-result';


interface CommunicationStyleModalProps {
    isOpen: boolean;
    close: () => void;
    onOk?: () => void;
}

const CommunicationStyleModal: React.FC<CommunicationStyleModalProps> = ({ isOpen, close, onOk }) => {

    const [step, setStep] = useState('select-style');
    

    return (
        <Modal
            title="Select Communication Style"
            isOpen={isOpen}
            close={close}
            showTitle={false}
        >
            <div className="w-[960px] h-[720px]">
                {step === 'select-style' && <SelectStyle onUseStyle={() => { setStep('paste-sample-text'); }} />}
                {step === 'paste-sample-text' && <PasteSampleText close={close} onAnalyze={() => { 
                    setStep('analyze'); 
                }} />}
                {step === 'analyze' && <AnalyzeSampleTexts onFinish={() => { setStep('analyze-result'); }} close={close} />}
                {step === 'analyze-result' && <AnalyzeResult close={close} create={close} />}
            </div>
        </Modal>
    );
};

export default CommunicationStyleModal;