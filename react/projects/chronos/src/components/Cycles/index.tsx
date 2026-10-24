import { useAppContext } from '../../contexts/appContext'
import { getNextCycleName, getNextCycleNumber } from '../../utils/getNextCycle';
import styles from './styles.module.css'

export function Cycles() {
	const { appState } = useAppContext();
	const cycleArr = Array.from({ length: appState.currentCycle });

	return (
		<>
			{cycleArr.length > 0 ? 
			(
				<>
					<span className={styles.cycleMessage}>Ciclos:</span>
					<div className={styles.cycles}>
						{cycleArr.map((_, index) => {
							const cycleNumber = getNextCycleNumber(index);
							const cycleName = getNextCycleName(cycleNumber);

							return (
								<div key={index} className={`${styles.cycle} ${styles[cycleName]}`}/>
							);
						})}
					</div>
				</>
			)
			: 
			null}
		</>
	)
}